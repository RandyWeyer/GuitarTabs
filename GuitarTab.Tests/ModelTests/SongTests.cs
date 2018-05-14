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
  }
}
