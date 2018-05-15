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
    [TestMethod]
    public void UpdateArtist_ArtistObjectShouldUpdate_True()
    {
      Artist newArtist = new Artist("Band Name");
      newArtist.Save();

      newArtist.UpdateArtist("Not the same name");
      Artist foundArtist = Artist.Find(newArtist.GetId());

      Assert.AreEqual(newArtist.GetName(), foundArtist.GetName());
    }
    [TestMethod]
    public void Delete_DeletesArtistInDataBase_Artistss()
    {
      Artist testArtist = new Artist("Tame Impala");
      testArtist.Save();
      Artist otherArtist = new Artist("Kanye West");
      otherArtist.Save();

      testArtist.Delete();
      List<Artist> result = Artist.GetAll();
      List<Artist> expected = new List<Artist>{otherArtist};

      CollectionAssert.AreEqual(expected, result);
    }
    [TestMethod]
    public void Search_SearchArtistInDatabase_Works()
    {
      Artist testArtist = new Artist("Rezz");
      testArtist.Save();
      Artist otherArtist = new Artist("Rezzer");
      otherArtist.Save();

      List<Artist> result = Artist.Search("Rez");
      List<Artist> expected = new List<Artist>{testArtist, otherArtist};
      
      CollectionAssert.AreEqual(result, expected);
    }
  }
}
