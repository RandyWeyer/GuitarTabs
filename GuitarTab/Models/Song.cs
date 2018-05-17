using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using GuitarTab;

namespace GuitarTab.Models
{
  public class Song
  {
    private string _songName;
    private string _tab;
    private int _id;

    public Song(string name, string tab, int id = 0)
    {
      _songName = name;
      _tab = tab;
      _id = id;
    }
    public string GetName()
    {
      return _songName;
    }
    public int GetId()
    {
      return _id;
    }
    public string GetTab()
    {
      return _tab;
    }
    public override bool Equals(System.Object otherSong)
    {
      if (!(otherSong is Song))
      {
        return false;
      }
      else
      {
         Song newSong = (Song) otherSong;
         bool idEquality = this.GetId() == newSong.GetId();
         bool nameEquality = this.GetName() == newSong.GetName();
         bool tabEquality = this.GetTab() == newSong.GetTab();
         return (idEquality && nameEquality && tabEquality);
       }
    }
    public override int GetHashCode()
    {
         return this.GetName().GetHashCode();
    }
    public static List<Song> GetAll()
    {
      List<Song> songList = new List<Song> {};
      MySqlConnection conn = DB.Connection();
      conn.Open();
      MySqlCommand cmd = conn.CreateCommand() as MySqlCommand;
      cmd.CommandText = @"SELECT * FROM songs;";
      MySqlDataReader rdr = cmd.ExecuteReader() as MySqlDataReader;
      while(rdr.Read())
      {
        int id = rdr.GetInt32(0);
        string name = rdr.GetString(1);
        string tab = rdr.GetString(2);
        Song mySong = new Song(name, tab, id);
        songList.Add(mySong);
      }
      conn.Close();
      if(conn != null)
      {
        conn.Dispose();
      }
      return songList;
    }
    public void Save()
    {
      MySqlConnection conn = DB.Connection();
      conn.Open();

      var cmd = conn.CreateCommand() as MySqlCommand;
      cmd.CommandText = @"INSERT INTO songs (song_name, tab) VALUES (@songName, @tab);";

      MySqlParameter name = new MySqlParameter();
      name.ParameterName = "@songName";
      name.Value = this._songName;
      cmd.Parameters.Add(name);

      MySqlParameter tab = new MySqlParameter();
      tab.ParameterName = "@tab";
      tab.Value = this._tab;
      cmd.Parameters.Add(tab);

      cmd.ExecuteNonQuery();
      _id = (int) cmd.LastInsertedId;
      conn.Close();
      if (conn != null)
      {
          conn.Dispose();
      }
    }
    public void AddArtist(Artist newArtist)
    {
        MySqlConnection conn = DB.Connection();
        conn.Open();
        var cmd = conn.CreateCommand() as MySqlCommand;
        cmd.CommandText = @"INSERT INTO tab_info (song_id, artist_id) VALUES (@songId, @ArtistId);";

        MySqlParameter song_id = new MySqlParameter();
        song_id.ParameterName = "@SongId";
        song_id.Value = _id;
        cmd.Parameters.Add(song_id);

        MySqlParameter artist_id = new MySqlParameter();
        artist_id.ParameterName = "@ArtistId";
        artist_id.Value = newArtist.GetId();
        cmd.Parameters.Add(artist_id);

        cmd.ExecuteNonQuery();
        conn.Close();
        if (conn != null)
        {
            conn.Dispose();
        }
    }
    public List<Artist> GetArtists()
    {
        MySqlConnection conn = DB.Connection();
        conn.Open();
        var cmd = conn.CreateCommand() as MySqlCommand;
        cmd.CommandText = @"SELECT artists.* FROM songs
        JOIN tab_info ON (songs.id = tab_info.song_id)
        JOIN artists ON(tab_info.artist_id = artists.id)
        WHERE songs.id = @SongId";

        MySqlParameter songIdParameter = new MySqlParameter();
        songIdParameter.ParameterName = "@songId";
        songIdParameter.Value = _id;
        cmd.Parameters.Add(songIdParameter);

        var rdr = cmd.ExecuteReader() as MySqlDataReader;

        List<int> artistIds = new List<int> {};
        while(rdr.Read())
        {
            int artistId = rdr.GetInt32(0);
            artistIds.Add(artistId);
        }
        rdr.Dispose();

        List<Artist> artists = new List<Artist> {};
        foreach (int artistId in artistIds)
        {
            var artistQuery = conn.CreateCommand() as MySqlCommand;
            artistQuery.CommandText = @"SELECT * FROM artists WHERE id = @ArtistId;";

            MySqlParameter artistIdParameter = new MySqlParameter();
            artistIdParameter.ParameterName = "@ArtistId";
            artistIdParameter.Value = artistId;
            artistQuery.Parameters.Add(artistIdParameter);

            var artistQueryRdr = artistQuery.ExecuteReader() as MySqlDataReader;
            while(artistQueryRdr.Read())
            {
                int thisArtistId = artistQueryRdr.GetInt32(0);
                string artistName = artistQueryRdr.GetString(1);
                Artist foundArtist = new Artist(artistName, thisArtistId);
                artists.Add(foundArtist);
            }
            artistQueryRdr.Dispose();
        }
        conn.Close();
        if (conn != null)
        {
            conn.Dispose();
        }
        return artists;
    }
    public void UpdateSong(string songName, string songTab)
    {
      MySqlConnection conn = DB.Connection();
      conn.Open();
      var cmd = conn.CreateCommand() as MySqlCommand;
      cmd.CommandText = @"UPDATE songs SET song_name = @songName, tab = @songTab WHERE id = @searchId;";

      MySqlParameter searchId = new MySqlParameter();
      searchId.ParameterName = "@searchId";
      searchId.Value = _id;
      cmd.Parameters.Add(searchId);

      MySqlParameter name = new MySqlParameter();
      name.ParameterName = "@songName";
      name.Value = songName;
      cmd.Parameters.Add(name);

      MySqlParameter tab = new MySqlParameter();
      tab.ParameterName = "@songTab";
      tab.Value = songTab;
      cmd.Parameters.Add(tab);

      cmd.ExecuteNonQuery();
      _songName = songName;
      _tab = songTab;

      if(conn != null)
      {
        conn.Dispose();
      }
    }
    public static Song Find(int song_id)
    {
        MySqlConnection conn = DB.Connection();
        conn.Open();
        var cmd = conn.CreateCommand() as MySqlCommand;
        cmd.CommandText = @"SELECT * FROM songs WHERE id = (@searchId);";

        MySqlParameter searchId = new MySqlParameter();
        searchId.ParameterName = "@searchId";
        searchId.Value = song_id;
        cmd.Parameters.Add(searchId);

        var rdr = cmd.ExecuteReader() as MySqlDataReader;
        int songId = 0;
        string songName = "";
        string songTab = "";

        while(rdr.Read())
        {
          songId = rdr.GetInt32(0);
          songName = rdr.GetString(1);
          songTab = rdr.GetString(2);
        }
        Song newSong = new Song(songName, songTab, songId);
        conn.Close();
        if (conn != null)
        {
            conn.Dispose();
        }

        return newSong;
    }
    public static List<Song> Search(string song_name)
    {
        List<Song> allFoundSongs = new List<Song> {};
        MySqlConnection conn = DB.Connection();
        conn.Open();
        var cmd = conn.CreateCommand() as MySqlCommand;
        cmd.CommandText = @"SELECT * FROM songs WHERE song_name LIKE @searchName;";

        MySqlParameter searchName = new MySqlParameter();
        searchName.ParameterName = "@searchName";
        searchName.Value = "%"+song_name+"%";
        cmd.Parameters.Add(searchName);

        var rdr = cmd.ExecuteReader() as MySqlDataReader;
        int id = 0;
        string songTab = "";
        string songName = "";

        while(rdr.Read())
        {
          id = rdr.GetInt32(0);
          songName = rdr.GetString(1);
          songTab = rdr.GetString(2);
          Song newSong = new Song(songName, songTab, id);
          allFoundSongs.Add(newSong);
        }

        conn.Close();
        if (conn != null)
        {
            conn.Dispose();
        }

        return allFoundSongs;
    }
    public void Delete()
    {
      MySqlConnection conn = DB.Connection();
      conn.Open();
      var cmd = conn.CreateCommand() as MySqlCommand;
      cmd.CommandText = @"DELETE FROM songs WHERE id = @songId;";

      MySqlParameter songIdParameter = new MySqlParameter();
      songIdParameter.ParameterName = "@songId";
      songIdParameter.Value = this.GetId();
      cmd.Parameters.Add(songIdParameter);

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
        cmd.CommandText = @"DELETE FROM songs;";
        cmd.ExecuteNonQuery();
        conn.Close();
        if (conn != null)
        {
            conn.Dispose();
        }
    }
  }
}
