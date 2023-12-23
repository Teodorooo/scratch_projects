/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite8/costumes/costume1.svg", {
        x: 61.5,
        y: 48
      }),
      new Costume("costume4", "./Sprite8/costumes/costume4.svg", {
        x: 62.01011163838626,
        y: 48
      }),
      new Costume("costume2", "./Sprite8/costumes/costume2.svg", {
        x: 61.5,
        y: 48
      }),
      new Costume("costume3", "./Sprite8/costumes/costume3.svg", {
        x: 110.4065772993981,
        y: 41.8037765644587
      }),
      new Costume("costume5", "./Sprite8/costumes/costume5.svg", {
        x: 100.1363,
        y: 31.899515000000008
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite8/sounds/pop.wav")];

    this.triggers = [
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

  *whenIReceiveRestart() {
    yield* this.wait(1);
    this.visible = true;
    this.costume = "costume1";
    while (true) {
      if (this.toNumber(this.stage.vars.spaceLife) === 2) {
        yield* this.wait(0.2);
        this.costumeNumber++;
        yield* this.wait(0.2);
        this.costumeNumber++;
        yield* this.wait(0.2);
        this.costumeNumber++;
        yield* this.wait(0.2);
        this.costumeNumber++;
        yield* this.wait(0.2);
        this.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveFinale() {
    this.visible = false;
  }
}
