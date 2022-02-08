
export default class GameplayState extends Phaser.State {
    init() {

    }

    preload() {

    }

    create() {
        this.group_name = this.game.add.group();
        // this.bg = this.game.add.sprite(0, 0, 'bg');
        // this.bg.scale.set(0.5, 0.5);

        this.yes = this.game.add.sprite(300, 300, 'yes');
        this.yes.anchor.set(0.5, 0.5);
        this.yes.scale.set(0.2, 0.2);

        this.txt = this.game.add.text(300, 300, 'text', {
            font: 'arial',
            fontSize: 50,
            fill: '#ffffff',
            align: 'center'
        });
        this.txt.anchor.set(0.5, 0.5);

        this.yes.inputEnabled = true;
        this.yes.events.onInputDown.add(() => {
            console.log('yes clicked');
        });
    }

    update() {

    }
}