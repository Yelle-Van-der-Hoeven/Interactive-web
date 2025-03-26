export default class Playlist {
    constructor(title){
        this.title = title;
        this.songs = [];
    }

    addSong(song){
        this.songs.push(song);
    }

    render() {
        this.songs.forEach((song) => {
            let songDiv = document.createElement("div");
            songDiv.dataset.audio = song.audio;
            songDiv.classList.add("song");

            songDiv.addEventListener("click", (e) => {
                let audio = e.target.parentNode.dataset.audio;
                let player = document.querySelector("#player");
                player.setAttribute("src", "audio/"+audio);
                player.play();
            })

            let artistDiv = document.createElement("div");
            artistDiv.innerText = song.artist;
            songDiv.appendChild(artistDiv);

            let titleDiv = document.createElement("div");
            titleDiv.innerText = song.title;
            songDiv.appendChild(titleDiv);

            let playDiv = document.createElement("div");
            playDiv.innerText = "Play";
            songDiv.appendChild(playDiv);

            document.querySelector("#songs").appendChild(songDiv);
        });
    }
}
