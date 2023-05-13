A simple adventure game by {Jentsen Maniti} based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: Forest, BorterDHO, BorterDHI, PantryDoor (name at least 4 of the classes).
- **2+ scenes *not* based on `AdventureScene`**: Intro, Logo, GoodEnding, BadEnding (name the classes).
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: unsatisfied (name the method and explain the use of it).
    - Enhancement 2: unsatisfied (name the method and explain the use of it).

Experience requirements:
- **4+ locations in the game world**: Forest, BorterDHO, BorterDHI, PantryDoor (name at least 4 of the classes).
- **2+ interactive objects in most scenes**:  (describe two examples)
    - Forest: Squirrel, Gate, Coast Redwoods
    - BorterDHO: Go back, Chair, Table, Bagel, Door
- **Many objects have `pointerover` messages**: (describe two examples)
    - Squirrel: "You’re just a chunky little squirrel looking to fill your belly."
    - Tree:  "The trees are filled with pinecones and other squirrels"
- **Many objects have `pointerdown` effects**: (describe two examples)
    - Squirrel: 
            .on('pointerdown', () => {
                this.showMessage("Your belly is rumbling. You need to find something to eat.");
    - Tree:
            .on('pointerdown', () => {
                this.showMessage("The forest has plenty of trees and food, but you're looking for something to REALLY fill you up.");

- **Some objects are themselves animated**: (describe two examples)
    - BorterDHO Table:
        this.time.delayedCall(1000, () => {
        this.tweens.add({
            targets: table,
            scale: { from: 1, to: 1.1 },
            ease: 'Sine.inOut',
            loop: -1,
            yoyo: true,
            duration: 500
    - BadEnding Text:
            this.tweens.add({
            targets: tears,
            x: '+=3',
            yoyo: true,
            repeat: -1,
            duration: 50
        });

Asset sources:
- JEM Studios Logo: Created by Jentsen Maniti in Adobe Photoshop
- JEM Studios Loadup Sound: Created by Jentsen Maniti in FL Studio
- Images from Emojis

Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.