import BootState from "./states/boot.js";
import PreloadState from "./states/preload.js";
import GameplayState from "./states/gameplay.js";

class Game extends Phaser.Game {
    constructor() {
        super(
            1080,
            1920,
            Phaser.CANVAS,
            ""
        );

        this.state.add("Boot", BootState, false);
        this.state.add("Preload", PreloadState, false);
        this.state.add("Gameplay", GameplayState, false);
        this.state.start("Boot");
    }
}

window.game = new Game();