using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using GuitarTab.Models;

namespace GuitarTab.Tests
{
  [TestClass]
  public class SongTest :IDisposable
  {
    public SongTest()
    {
      DBConfiguration.ConnectionString = "server=localhost;user id=root;password=root;port=8889;database=guitar_tab_test;";
    }
    public void Dispose()
    {
      Song.DeleteAll();
    }
    [TestMethod]
    public void GetAll_ChecksDbIsEmpty_0()
    {
      int result = Song.GetAll().Count;
      Assert.AreEqual(0, result);
    }
    [TestMethod]
    public void Save_SavesSongToDb_True()
    {
      //Arrange
      Song testSong = new Song("Happy Birthday", 1, "tab");
      testSong.Save();

      //Act
      List<Song> songResult = Song.GetAll();
      List<Song> songList = new List<Song>{testSong};

      //Assert
      CollectionAssert.AreEqual(songList, songResult);
    }
    [TestMethod]
    public void UpdateSong_SongObjectShouldUpdate_True()
    {
      Song newSong = new Song("This Is A Song", 1, "XYZ");
      newSong.Save();

      newSong.UpdateSong("This Is Also A Song", "ZZZZ");
      Song foundSong = Song.Find(newSong.GetId());

      Assert.AreEqual("This Is Also A Song", foundSong.GetName());
    }
    [TestMethod]
    public void Delete_DeletesSongInDataBase_Songss()
    {
      Song testSong = new Song("This Is A Song", 1, "XYZ");
      testSong.Save();
      Song otherSong = new Song("This Is Also A Song", 2, "ZZZZ");
      otherSong.Save();

      testSong.Delete();
      List<Song> result = Song.GetAll();
      List<Song> expected = new List<Song>{otherSong};

      CollectionAssert.AreEqual(expected, result);
    }
  }
}
