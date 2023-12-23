/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 5.250000000000057,
        y: 19.8125
      }),
      new Costume("costume4", "./Sprite2/costumes/costume4.svg", {
        x: 23.10496176000686,
        y: 35.853765555555526
      }),
      new Costume("costume2", "./Sprite2/costumes/costume2.svg", {
        x: 40.709118079949235,
        y: 40.82899748215809
      }),
      new Costume("costume3", "./Sprite2/costumes/costume3.svg", {
        x: 23.104959971076596,
        y: 35.85376075849388
      }),
      new Costume("costume5", "./Sprite2/costumes/costume5.svg", {
        x: 5.2499999710765906,
        y: 19.812500758493883
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Restart" },
        this.whenIReceiveRestart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Restart" },
        this.whenIReceiveRestart2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Restart" },
        this.whenIReceiveRestart3
      )
    ];
  }

  *whenIReceiveRestart() {
    this.goto(this.sprites["Spaceship"].x, this.sprites["Spaceship"].y);
  }

  *whenIReceiveRestart2() {
    while (true) {
      if (this.toNumber(this.stage.vars.bulletCommander) === 2) {
        for (let i = 0; i < 5; i++) {
          yield* this.wait(0.045);
          this.effects.ghost += 30;
          this.costumeNumber++;
          yield;
        }
        this.visible = false;
        this.goto(this.sprites["Spaceship"].x, this.sprites["Spaceship"].y);
        yield* this.wait(0.001);
        this.stage.vars.bulletCommander = 1;
      }
      if (
        this.toNumber(this.stage.vars.bulletCommander) === 1 &&
        this.toNumber(this.stage.vars.bulletPermission) === 1
      ) {
        this.effects.clear();
        this.costume = "costume1";
        this.visible = true;
        yield* this.wait(1e-19);
        this.y += 20;
      } else {
        this.visible = false;
        this.goto(this.sprites["Spaceship"].x, this.sprites["Spaceship"].y);
      }
      yield;
    }
  }

  *whenIReceiveRestart3() {
    while (true) {
      if (this.toNumber(this.stage.vars.enemyDeaths) === 6) {
        this.visible = false;
        /* TODO: Implement stop other scripts in sprite */ null;
      }
      yield;
    }
  }
}
