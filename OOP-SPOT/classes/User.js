export default class User {
    constructor(username){
        this.username = username;
        this.playlist = [];
    }
    addPlaylist(playlist){
        this.playlist.push(playlist);
    }
}