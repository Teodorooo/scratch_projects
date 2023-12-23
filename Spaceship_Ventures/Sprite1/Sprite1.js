/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: -21.104419777803287,
        y: 52.25118102473749
      }),
      new Costume("costume2", "./Sprite1/costumes/costume2.svg", {
        x: -21.10441860324414,
        y: 18.290856577640284
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Next level" },
        this.whenIReceiveNextLevel
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Restart" },
        this.whenIReceiveRestart
      )
    ];
  }

  *whenIReceiveNextLevel() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveRestart() {
    while (true) {
      if (this.toNumber(this.stage.vars.enemyDeaths) === 6) {
        this.visible = true;
        this.costumeNumber++;
        yield* this.wait(1);
      } else {
        this.visible = false;
      }
      yield;
    }
  }
}
