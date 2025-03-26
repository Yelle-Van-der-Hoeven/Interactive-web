export default class Song {
    constructor(title,artist, audio) {
        this.title = title;
        this.artist = artist;
        this.audio = audio;
    }
    play() {
        console.log(`Playing ${this.title} by ${this.artist}`);
    }
}