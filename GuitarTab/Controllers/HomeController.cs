using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using GuitarTab.Models;
using System;

namespace GuitarTab.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet("/")]
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost("/store-tab")]
        public ActionResult StoreTab()
        {
          string songName = Request.Form["song-name"];
          string songTab = Request.Form["song-tab"];

          Song newSong = new Song(songName, songTab);
          newSong.Save();

          return View();
        }
        [HttpGet("/all-songs")]
        public ActionResult AllSongs()
        {
          List<Song> allSongs = Song.GetAll();
          return View(allSongs);
        }
        [HttpGet("/song-tab-details/{id}")]
        public ActionResult SongDetail(int id)
        {
          Song individualSong = Song.Find(id);
          return View(individualSong);
        }
    }
}
