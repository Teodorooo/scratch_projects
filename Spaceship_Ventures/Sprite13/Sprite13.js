/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite13 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite13/costumes/costume1.svg", {
        x: 73.5,
        y: -69
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite13/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "spaceship death" },
        this.whenIReceiveSpaceshipDeath
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Restart" },
        this.whenIReceiveRestart
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Finale" },
        this.whenIReceiveFinale
      )
    ];
  }

  *whenIReceiveSpaceshipDeath() {
    this.goto(23, -13);
    this.visible = true;
  }

  *whenIReceiveRestart() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.visible = false;
    this.broadcast("Restart");
  }

  *whenIReceiveFinale() {
    this.goto(160, 225);
    this.visible = true;
  }
}
