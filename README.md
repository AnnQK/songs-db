# 10 Songs json-server

"Backend" for my [Retro audio player](https://github.com/AnnQK/audio-player) built with json-server and ChatGPT for creating songs and artists names.

### [Demo](https://songs-db.vercel.app/)

### [GET https://songs-db.vercel.app/songs](https://songs-db.vercel.app/songs)

### Response song example:

```json
{
"id": 1,
"song_url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
"title": "Binary Dreams",
"artist": "Cybertronix"
}

```

## Song schema:

| Key      | Type   | Description           |
| -------- | ------ | --------------------- |
| id       | int    | The id of the song.   |
| song_url | string | Link to the song      |
| title    | string | The title of the song |
| artist   | string | The artist's name     |
