using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using GuitarTab.Models;

namespace GuitarTab.Tests
{
  [TestClass]
  public class ArtistTest :IDisposable
  {
    public ArtistTest()
    {
      DBConfiguration.ConnectionString = "server=localhost;user id=root;password=root;port=8889;database=guitar_tab_test;";
    }
    public void Dispose()
    {
      Artist.DeleteAll();
    }
    [TestMethod]
    public void GetAll_ChecksDbIsEmpty_0()
    {
      int result = Artist.GetAll().Count;
      Assert.AreEqual(0, result);
    }
    [TestMethod]
    public void Save_SavesArtistToDb_True()
    {
      //Arrange
      Artist testArtist = new Artist("Tame Impala");
      testArtist.Save();

      //Act
      List<Artist> artistResult = Artist.GetAll();
      List<Artist> artistList = new List<Artist>{testArtist};

      //Assert
      CollectionAssert.AreEqual(artistList, artistResult);
    }
  }
}
