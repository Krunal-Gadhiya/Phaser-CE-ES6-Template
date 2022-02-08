
export default class PreloadState extends Phaser.State {
    preload() {
        this.load.baseURL = "./assets/";

        this.load.image('bg', 'ocean.jpg');
        this.load.image('yes', 'face_on_green_tick.png');
        this.load.image('no', 'face_on_cross.png');
    }

    create() {
        this.game.state.start("Gameplay");
    }
}