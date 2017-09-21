exports.getArtistAlbums = (id) => {
  const artistAlbums = albums.filter((album) => {
    return album.artistId == id
  });

  return new Promise((resolve, reject) => {
    return artistAlbums.length > 0
      ? resolve(artistAlbums)
      : reject({error: "Albums not found"});
  })
};

exports.getAlbumSongs = (albumId) => {
  const albumSongs = songs.filter((song) => {
    return song.albumId == albumId
  });

  return new Promise((resolve, reject)=> {
    return albumSongs.length > 0
      ? resolve(albumSongs)
      : reject({error: "Songs not found"})
  });
};

exports.getArtists = () => {
  return new Promise((resolve, reject) => {
    resolve(artists)
    //reject({error: "Artists not found."})
  })
};

exports.getAlbum = (albumId) => {
  const album = albums.filger((albumObject) => {
    return albumObject.albumId == albumId
  });

  return new Promise((resolve, reject) => {
    return album.length == 1
      ? resolve(album[0])
      : reject({error: "Album not found."})
  })
};

exports.getSong = (songId) => {
  const song = songs.finter((songObject) => {
    return songObject.songId == songId
  });

  return new Promise((resolve, reject)=> {
    return song.length == 1
      ? resolve(song[0])
      : reject({error: "Song not found."})
  })
}

const artists = [
  {
    "id": 1,
    "name": "Radiohead"
  },
  {
    "id": 2,
    "name": "Portishead",
  }
];

const albums = [
  {
    "id": 1,
    "artistId": 1,
    "title": "The King of Limbs",
    "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/61feDXeBAdL.jpg",
    "description": "\n\tThe King of Limbs is the eighth studio album by English rock band Radiohead, produced by Nigel Godrich. It was self-released on 18 February 2011 as a download in MP3 and WAV formats, followed by physical CD and 12\" vinyl releases on 28 March, a wider digital release via AWAL, and a special \"newspaper\" edition on 9 May 2011. The physical editions were released through the band's Ticker Tape imprint on XL in the United Kingdom, TBD in the United States, and Hostess Entertainment in Japan.\n      "
  },
  {
    "id": 2,
    "artistId": 1,
    "title": "OK Computer",
    "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/51APT67z2lL.jpg",
    "description": "\n\tOK Computer is the third studio album by the English alternative rock band Radiohead, released on 16 June 1997 on Parlophone in the United Kingdom and 1 July 1997 by Capitol Records in the United States. It marks a deliberate attempt by the band to move away from the introspective guitar-oriented sound of their previous album The Bends. Its layered sound and wide range of influences set it apart from many of the Britpop and alternative rock bands popular at the time and laid the groundwork for Radiohead's later, more experimental work.\n      "
  },
  {
    "id": 3,
    "artistId": 2,
    "title": "Dummy",
    "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/514M0XzAe-L.jpg",
    "description": "\n\tDummy is the debut album of the Bristol-based group Portishead. Released in August 22, 1994 on Go! Discs, the album earned critical acclaim, winning the 1995 Mercury Music Prize. It is often credited with popularizing the trip-hop genre and is frequently cited in lists of the best albums of the 1990s. Although it achieved modest chart success overseas, it peaked at #2 on the UK Album Chart and saw two of its three singles reach #13. The album was certified gold in 1997 and has sold two million copies in Europe. As of September 2011, the album was certified double-platinum in the United Kingdom and has sold as of September 2011 825,000 copies.\n      "
  },
  {
    "id": 4,
    "artistId": 2,
    "title": "Third",
    "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/31KVNP43AfL.jpg",
    "description": "\n\tThird is the third studio album by English musical group Portishead, released on 27 April 2008, on Island Records in the United Kingdom, two days after on Mercury Records in the United States, and on 30 April 2008 on Universal Music Japan in Japan. It is their first release in 10 years, and their first studio album in eleven years. Third entered the UK Album Chart at #2, and became the band's first-ever American Top 10 album on the Billboard 200, reaching #7 in its entry week.\n      "
  }
];

const songs = [
  {
    "id": 1,
    "albumId": 1,
    "title": "Bloom",
    "length": "5:15"
  },
  {
    "id": 2,
    "albumId": 1,
    "title": "Morning Mr Magpie",
    "length": "4:41"
  },
  {
    "id": 3,
    "albumId": 1,
    "title": "Little by Little",
    "length": "4:27"
  },
  {
    "id": 4,
    "albumId": 1,
    "title": "Feral",
    "length": "3:13"
  },
  {
    "id": 5,
    "albumId": 1,
    "title": "Lotus Flower",
    "length": "5:01"
  },
  {
    "id": 6,
    "albumId": 1,
    "title": "Codex",
    "length": "4:47"
  },
  {
    "id": 7,
    "albumId": 1,
    "title": "Give Up the Ghost",
    "length": "4:50"
  },
  {
    "id": 8,
    "albumId": 1,
    "title": "Separator",
    "length": "5:20"
  },
  {
    "id": 9,
    "albumId": 2,
    "title": "Airbag",
    "length": "4:44"
  },
  {
    "id": 10,
    "albumId": 2,
    "title": "Paranoid Android",
    "length": "6:23"
  },
  {
    "id": 11,
    "albumId": 2,
    "title": "Subterranean Homesick Alien",
    "length": "4:27"
  },
  {
    "id": 12,
    "albumId": 2,
    "title": "Exit Music (For a Film)",
    "length": "4:24"
  },
  {
    "id": 13,
    "albumId": 2,
    "title": "Let Down",
    "length": "4:59"
  },
  {
    "id": 14,
    "albumId": 2,
    "title": "Karma Police",
    "length": "4:21"
  },
  {
    "id": 15,
    "albumId": 2,
    "title": "Fitter Happier",
    "length": "1:57"
  },
  {
    "id": 16,
    "albumId": 2,
    "title": "Electioneering",
    "length": "3:50"
  },
  {
    "id": 17,
    "albumId": 2,
    "title": "Climbing Up the Walls",
    "length": "4:45"
  },
  {
    "id": 18,
    "albumId": 2,
    "title": "No Surprises",
    "length": "3:48"
  },
  {
    "id": 19,
    "albumId": 2,
    "title": "Lucky",
    "length": "4:19"
  },
  {
    "id": 20,
    "albumId": 2,
    "title": "The Tourist",
    "length": "5:24"
  },
  {
    "id": 21,
    "albumId": 3,
    "title": "Mysterons",
    "length": "5:02"
  },
  {
    "id": 22,
    "albumId": 3,
    "title": "Sour Times",
    "length": "4:11"
  },
  {
    "id": 23,
    "albumId": 3,
    "title": "Strangers",
    "length": "3:55"
  },
  {
    "id": 24,
    "albumId": 3,
    "title": "It Could Be Sweet",
    "length": "4:16"
  },
  {
    "id": 25,
    "albumId": 3,
    "title": "Wandering Star",
    "length": "4:51"
  },
  {
    "id": 26,
    "albumId": 3,
    "title": "It's a Fire",
    "length": "3:49"
  },
  {
    "id": 27,
    "albumId": 3,
    "title": "Numb",
    "length": "3:54"
  },
  {
    "id": 28,
    "albumId": 3,
    "title": "Roads",
    "length": "5:02"
  },
  {
    "id": 29,
    "albumId": 3,
    "title": "Pedestal",
    "length": "3:39"
  },
  {
    "id": 30,
    "albumId": 3,
    "title": "Biscuit",
    "length": "5:01"
  },
  {
    "id": 31,
    "albumId": 3,
    "title": "Glory Box",
    "length": "5:06"
  },
  {
    "id": 32,
    "albumId": 4,
    "title": "Silence",
    "length": "4:58"
  },
  {
    "id": 33,
    "albumId": 4,
    "title": "Hunter",
    "length": "3:57"
  },
  {
    "id": 34,
    "albumId": 4,
    "title": "Nylon Smile",
    "length": "3:16"
  },
  {
    "id": 35,
    "albumId": 4,
    "title": "The Rip",
    "length": "4:29"
  },
  {
    "id": 36,
    "albumId": 4,
    "title": "Plastic",
    "length": "3:27"
  },
  {
    "id": 37,
    "albumId": 4,
    "title": "We Carry On",
    "length": "6:27"
  },
  {
    "id": 38,
    "albumId": 4,
    "title": "Deep Water",
    "length": "1:31"
  },
  {
    "id": 39,
    "albumId": 4,
    "title": "Machine Gun",
    "length": "4:43"
  },
  {
    "id": 40,
    "albumId": 4,
    "title": "Small",
    "length": "6:45"
  },
  {
    "id": 41,
    "albumId": 4,
    "title": "Magic Doors",
    "length": "3:32"
  },
  {
    "id": 42,
    "albumId": 4,
    "title": "Threads",
    "length": "5:45"
  }
];


exports.artists = artists;
exports.albums = albums;
exports.songs = songs;
