using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using GuitarTab;

namespace GuitarTab.Models
{
  public class Artist
  {
    private string _artistName;
    private int _id;

    public Artist(string name, int id = 0)
    {
      _artistName = name;
      _id = id;
    }
    public string GetName()
    {
      return _artistName;
    }
    public int GetId()
    {
      return _id;
    }
    public override bool Equals(System.Object otherArtist)
    {
      if (!(otherArtist is Artist))
      {
        return false;
      }
      else
      {
         Artist newArtist = (Artist) otherArtist;
         bool idEquality = this.GetId() == newArtist.GetId();
         bool nameEquality = this.GetName() == newArtist.GetName();
         return (idEquality && nameEquality);
       }
    }
    public override int GetHashCode()
    {
         return this.GetName().GetHashCode();
    }
    public static List<Artist> GetAll()
    {
      List<Artist> artistList = new List<Artist> {};
      MySqlConnection conn = DB.Connection();
      conn.Open();
      MySqlCommand cmd = conn.CreateCommand() as MySqlCommand;
      cmd.CommandText = @"SELECT * FROM artists;";
      MySqlDataReader rdr = cmd.ExecuteReader() as MySqlDataReader;
      while(rdr.Read())
      {
        int id = rdr.GetInt32(0);
        string name = rdr.GetString(1);
        Artist myArtist = new Artist(name, id);
        artistList.Add(myArtist);
      }
      conn.Close();
      if(conn != null)
      {
        conn.Dispose();
      }
      return artistList;
    }
    public void Save()
    {
      MySqlConnection conn = DB.Connection();
      conn.Open();

      var cmd = conn.CreateCommand() as MySqlCommand;
      cmd.CommandText = @"INSERT INTO artists (artist_name) VALUES (@artistName);";

      MySqlParameter name = new MySqlParameter();
      name.ParameterName = "@artistName";
      name.Value = this._artistName;
      cmd.Parameters.Add(name);

      cmd.ExecuteNonQuery();
      _id = (int) cmd.LastInsertedId;
      conn.Close();
      if (conn != null)
      {
          conn.Dispose();
      }
    }
    public static void DeleteAll()
    {
        MySqlConnection conn = DB.Connection();
        conn.Open();
        var cmd = conn.CreateCommand() as MySqlCommand;
        cmd.CommandText = @"DELETE FROM artists;";
        cmd.ExecuteNonQuery();
        conn.Close();
        if (conn != null)
        {
            conn.Dispose();
        }
    }
  }
}
