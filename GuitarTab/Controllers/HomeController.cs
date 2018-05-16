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

    }
}
