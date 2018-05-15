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
    public void UpdateArtist(string artistName)
    {
      MySqlConnection conn = DB.Connection();
      conn.Open();
      var cmd = conn.CreateCommand() as MySqlCommand;
      cmd.CommandText = @"UPDATE artists SET artist_name = @artistName WHERE id = @searchId;";

      MySqlParameter searchId = new MySqlParameter();
      searchId.ParameterName = "@searchId";
      searchId.Value = _id;
      cmd.Parameters.Add(searchId);

      MySqlParameter name = new MySqlParameter();
      name.ParameterName = "@artistName";
      name.Value = artistName;
      cmd.Parameters.Add(name);

      cmd.ExecuteNonQuery();
      _artistName = artistName;

      if(conn != null)
      {
        conn.Dispose();
      }
    }
    public static Artist Find(int artist_id)
    {
        MySqlConnection conn = DB.Connection();
        conn.Open();
        var cmd = conn.CreateCommand() as MySqlCommand;
        cmd.CommandText = @"SELECT * FROM artists WHERE id = (@searchId);";

        MySqlParameter searchId = new MySqlParameter();
        searchId.ParameterName = "@searchId";
        searchId.Value = artist_id;
        cmd.Parameters.Add(searchId);

        var rdr = cmd.ExecuteReader() as MySqlDataReader;
        int id = 0;
        string artistName = "";

        while(rdr.Read())
        {
          id = rdr.GetInt32(0);
          artistName = rdr.GetString(1);
        }

        Artist newArtist = new Artist(artistName, id);
        conn.Close();
        if (conn != null)
        {
            conn.Dispose();
        }

        return newArtist;
    }
    public static List<Artist> Search(string artist_name)
    {
        List<Artist> allFoundArtists = new List<Artist> {};
        MySqlConnection conn = DB.Connection();
        conn.Open();
        var cmd = conn.CreateCommand() as MySqlCommand;
        cmd.CommandText = @"SELECT * FROM artists WHERE artist_name LIKE @searchName;";

        MySqlParameter searchName = new MySqlParameter();
        searchName.ParameterName = "@searchName";
        searchName.Value = "%"+artist_name+"%";
        cmd.Parameters.Add(searchName);

        var rdr = cmd.ExecuteReader() as MySqlDataReader;
        int id = 0;
        string artistName = "";

        while(rdr.Read())
        {
          id = rdr.GetInt32(0);
          artistName = rdr.GetString(1);
          Artist newArtist = new Artist(artistName, id);
          allFoundArtists.Add(newArtist);
        }

        conn.Close();
        if (conn != null)
        {
            conn.Dispose();
        }

        return allFoundArtists;
    }
    public void Delete()
    {
      MySqlConnection conn = DB.Connection();
      conn.Open();
      var cmd = conn.CreateCommand() as MySqlCommand;
      cmd.CommandText = @"DELETE FROM artists WHERE id = @artistId;";

      MySqlParameter artistIdParameter = new MySqlParameter();
      artistIdParameter.ParameterName = "@artistId";
      artistIdParameter.Value = this.GetId();
      cmd.Parameters.Add(artistIdParameter);

      cmd.ExecuteNonQuery();
      if (conn != null)
      {
        conn.Close();
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
