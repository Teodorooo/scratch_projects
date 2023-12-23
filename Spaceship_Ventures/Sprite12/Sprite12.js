/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite12 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite12/costumes/costume1.svg", {
        x: 281.00346612675975,
        y: 214.8040394575579
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite12/sounds/pop.wav")];

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
      new Trigger(
        Trigger.BROADCAST,
        { name: "Finale" },
        this.whenIReceiveFinale
      )
    ];
  }

  *whenIReceiveSpaceshipDeath() {
    this.visible = true;
  }

  *whenIReceiveRestart() {
    this.visible = false;
  }

  *whenIReceiveFinale() {
    this.visible = false;
  }
}
