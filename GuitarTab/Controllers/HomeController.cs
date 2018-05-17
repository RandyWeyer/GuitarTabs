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
          string songArtist = Request.Form["song-artist"];
          Console.WriteLine("test" + songArtist);

          Artist newArtist = new Artist(songArtist);
          Console.WriteLine(newArtist.GetName());
          newArtist.Save();
          Song newSong = new Song(songName, songTab, newArtist.GetId());
          newSong.Save();
          List<Song> allSongs = Song.GetAll();
          return View("AllSongs", allSongs);
        }
        [HttpGet("/all-songs")]
        public ActionResult AllSongs()
        {
          List<Song> allSongs = Song.GetAll();
          return View(allSongs);
        }
        [HttpGet("/all-artists")]
        public ActionResult AllArtists()
        {
          List<Artist> allArtists = Artist.GetAll();
          return View(allArtists);
        }
        [HttpGet("/song-tab-details/{id}")]
        public ActionResult SongDetail(int id)
        {
          Song individualSong = Song.Find(id);
          return View(individualSong);
        }
        [HttpGet("/artist-details/{id}")]
        public ActionResult ArtistDetail(int id)
        {
          Dictionary<string, object> model = new Dictionary<string, object> {};
          Artist individualArtist = Artist.Find(id);
          List<Song> theSongs = individualArtist.GetSongs();
          model.Add("individualArtist", individualArtist);
          model.Add("individualSong", theSongs);
          return View("ArtistDetail", model);
        }
        [HttpGet("/search")]
        public ActionResult SearchResult()
        {
          string searchedName = Request.Query["searched"];

          Dictionary<string, object> model = new Dictionary<string, object> {};
          List<Song> searchedSong = Song.Search(searchedName);
          List<Artist> searchedArtist = Artist.Search(searchedName);
          model.Add("searchedSong", searchedSong);
          model.Add("searchedArtist", searchedArtist);
          return View("SearchResult", model);
        }
    }
}
