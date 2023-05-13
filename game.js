class Forest extends AdventureScene {
    constructor() {
        super("forest", "The forest of UC Banta Bruz is dark and full of trees.");
    }

    onEnter() {

        let tree = this.add.text(this.w * 0.3, this.h * 0.5, "🌲 Coast Redwoods")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("The trees are filled with pinecones and other squirrels."))
            .on('pointerdown', () => {
                this.showMessage("The forest has plenty of trees and food, but you're looking for something to REALLY fill you up.");
                this.tweens.add({
                    targets: tree,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        let squirrel = this.add.text(this.w * 0.1, this.w * 0.15, "🐿 Squirrel")
            .setFontSize(this.s * 3)
            .setInteractive()

            .on('pointerover', () => this.showMessage("You’re just a chunky little squirrel looking to fill your belly."))
            .on('pointerdown', () => {
                this.showMessage("Your belly is rumbling. You need to find something to eat.");
                this.tweens.add({
                    targets: squirrel,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            })

        this.add.text(this.w * 0.5, this.w * 0.1, "⛩ Gate")
            .setFontSize(this.s * 2)
            .setInteractive()

            .on('pointerover', () => {
                this.showMessage("There's a hole in the gate. You might be able to fit through.");
            })

            .on('pointerdown', () => {
                this.showMessage("You manage to squeeze through!")
                this.time.delayedCall(1000, () => {
                    this.gotoScene('borterdho');
                });
            });

    }
}

class BorterDHO extends AdventureScene {
    constructor() {
        super("borterdho", "Borter Dining Hall Outdoors");
    }
    onEnter() {
        this.showMessage("The sun is out and the outdoor area of the dining hall has plenty of people eating outside.")

        this.add.text(this.w * 0.3, this.w * 0.4, "🌲 Go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Return to the forest?");
            })
            .on('pointerdown', () => {
                this.gotoScene('forest');
            });

        let chair = this.add.text(this.w * 0.6, this.w * 0.2, "🪑 Chair")
            .setFontSize(this.s * 2)
            .setInteractive()

            .on('pointerover', () => {
                this.showMessage("The chair is made of metal. It looks like you might be able to hop up on it.");
            })

            .on('pointerdown', () => {
                this.showMessage("You hop up on the chair and look around.");
                this.tweens.add({
                    targets: chair,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });

                this.time.delayedCall(1000, () => {
                    let bagel = this.add.text(this.w * 0.6, this.w * 0.15, "🥯 Bagel")
                        .setFontSize(this.s * 2)
                        .setInteractive()
                        .on('pointerover', () => {
                            this.showMessage("You see a plate with a bagel on it. The person who was eating it left it behind.");
                        })
                        .on('pointerdown', () => {
                            this.gainItem('Bagel');
                            this.showMessage("You hop down from the chair and grab the bagel. You break it apart and stuff it in your mouth.");
                            this.tweens.add({
                                targets: bagel,
                                x: '+=' + this.s,
                                repeat: 2,
                                yoyo: true,
                                ease: 'Sine.inOut',
                                duration: 100,
                                onComplete: () => bagel.destroy()
                            });
                            this.add.text(this.w * 0.1, this.w * 0.15, "🚪 Door Opens")
                                .setFontSize(this.s * 2)
                                .setInteractive()
                                .on('pointerover', () => {
                                    this.showMessage("A person walks through the door. The door is slightly ajar.");
                                })
                                .on('pointerdown', () => {
                                    this.showMessage("You waltz through the door and enter the indoor dining hall!");
                                    this.time.delayedCall(1000, () => {
                                        this.gotoScene('borterdhi');
                                    });
                                });
                        });
                });
            });
    }
}

class BortherDHI extends AdventureScene {
    constructor() {
        super("borterdhi", "Borter Dining Hall Indoors");
    }

    onEnter() {
        this.showMessage("The indoor dining hall is filled with people eating and talking. There are tables and chairs everywhere.")

        // let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
        //     .setInteractive()
        //     .on('pointerover', () => {
        //         this.showMessage('*giggles*');
        //         this.tweens.add({
        //             targets: finish,
        //             x: this.s + (this.h - 2 * this.s) * Math.random(),
        //             y: this.s + (this.h - 2 * this.s) * Math.random(),
        //             ease: 'Sine.inOut',
        //             duration: 500
        //         });
        //     })
        //     .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50, 50, "A long time ago in a forest far, far away...").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0, 0, 0);
            this.time.delayedCall(1000, () => this.scene.start('logo'));
        });
    }
}


class Logo extends Phaser.Scene {
    constructor() {
        super('logo');
    }

    preload() {
        this.load.image('logo', 'assets/logo.png');
        this.load.audio('intro', 'assets/intro.mp3');
    }

    create() {

        const logo = this.add.image(this.scale.width / 2, this.scale.height / 2, 'logo');
        logo.setOrigin(0.5);
        // logo.setInteractive();
        logo.visible = false;

        this.time.delayedCall(1000, () => {
            this.sound.play('intro');
        });

        this.cameras.main.fadeIn(1500);

        this.time.delayedCall(1000, () => {
            logo.visible = true;
            this.tweens.add({
                targets: logo,
                scale: { from: 0, to: .5 },
                duration: 2750,
                ease: 'power2'
            });

            // logo pulses and shakes
            this.time.delayedCall(2750, () => {
                this.tweens.add({
                    targets: logo,
                    scale: { from: .5, to: .6 },
                    duration: 50,
                    easeOut: 'power2',
                    yoyo: true,
                })
                this.tweens.add({
                    targets: logo,
                    angle: { from: 0, to: 5 },
                    duration: 50,
                    easeIn: 'power2',
                    yoyo: true,
                })
            });

            this.tweens.add({
                targets: logo,
                alpha: { from: 0, to: 1 },
                duration: 1000,
                ease: 'Power2'
            });
        });

        // change scenes if 6 seconds pass
        this.time.delayedCall(6000, () => {
            this.cameras.main.fadeOut(1500);
            this.scene.start('forest');
        });


        // change scenes if clicked down
        this.input.on('pointerdown', () => {
            this.cameras.main.fadeOut(1500);
            this.scene.start('forest');
        });

    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Logo, Forest, BorterDHO, BortherDHI, Outro],
    title: "Adventure Game",
});
