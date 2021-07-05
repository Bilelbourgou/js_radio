class Player {
    constructor() {
        var heightMain = document.getElementById("player");
        heightMain.style.height = screen.height + "px";
        if (screen.width < 500) {
            heightMain.style.width = screen.width + "px";
        }
        var heightDiv = document.getElementById("content");
        heightDiv.style.height = screen.height - 300 + "px";
    }
}
onload = new Player();

class Audio_player {
    constructor() {
        this.audio_file = document.getElementById("audio_file");
        this.title_audio = document.getElementById("title_audio");
        this.play_pause_btn = document.getElementById("play_pause_btn");
        this.isPlayed;
        this.play_pause_btn.addEventListener("click", () => {
            this.play_pause()
        });
        this.radio_name = [];
        this.radio_name[0] = "MOSAIQUE FM";
        this.radio_name[1] = "ULYSSE FM";
        this.radio_name[2] = "EL bahdja FM";

        this.radio_src = [];
        this.radio_src[0] = "https://radio.mosaiquefm.net/mosalive";
        this.radio_src[1] = "http://188.165.125.102:2002/live?fbclid=IwAR35jgv1S5eFoq1DRgQsgRAIWjtORQKpOaOMBpHCDovYhdSijE5oGTRrC4A";
        this.radio_src[2] = "https://elbahdja.ice.infomaniak.ch/elbahdja-32.aac";
        this.server = 0;

        this.setSrc();

        document.getElementById("next").addEventListener("click", () => {
            if (this.server < this.radio_src.length - 1) {
                ++this.server
                this.isPlayed = false

            } else {
                this.server = 0;
            }
            localStorage.setItem("save_position", this.server);
            this.setSrc();
        });
        document.getElementById("back").addEventListener("click", () => {
            if (this.server > 0) {
                --this.server
                this.isPlayed = false
            } else {
                this.server = this.radio_src.length - 1;
            }
            localStorage.setItem("save_position", this.server);
            this.setSrc();
        });

    }
    setSrc() {
        if (localStorage.getItem("save_position") != null) {
            this.server = localStorage.getItem("save_position");

        }
        this.audio_file.src = this.radio_src[this.server];
        this.title_audio.innerHTML = this.radio_name[this.server];
        this.play_pause();
    }
    play_pause() {
        if (this.isPlayed == false) {
            this.audio_file.play();
            this.play_pause_btn.src = "img/pause-button.png";
            this.isPlayed = true;
        } else {
            this.audio_file.pause();
            this.play_pause_btn.src = "img/play.png";
            this.isPlayed = false;
        }
    }

}
onload = new Audio_player();