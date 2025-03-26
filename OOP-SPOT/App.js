import Song from "/classes/Song.js";
import Playlist from "./classes/Playlist.js";
import User from "./classes/User.js";

let song1 = new Song("Baby Shark", "Pink Fong", "Audio1.mp3");
let song2 = new Song("Honey Pie", "Stef Hermans", "Audio2.mp3");
let song3 = new Song("Crazy Frog", "Ryan Reynolds", "Audio3.mp3");

let playlist1 = new Playlist("Songs that remind me of Stef😍");
playlist1.addSong(song2);
playlist1.addSong(song3);

playlist1.render();

let user1 = new User("PapaYelle");

user1.addPlaylist(playlist1);