/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BlackDot extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./BlackDot/costumes/costume1.svg", {
        x: 3.987329689440969,
        y: 9.425106801242265
      })
    ];

    this.sounds = [new Sound("pop", "./BlackDot/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Restart" },
        this.whenIReceiveRestart
      )
    ];
  }

  *whenIReceiveRestart() {
    while (true) {
      this.stage.vars.bDotXPosition = this.x;
      this.stage.vars.bDotYPosition = this.y;
      this.stage.vars.random = this.random(1, 7);
      if (this.toNumber(this.stage.vars.random) === 1) {
        yield* this.wait(1.5);
        this.goto(111, -14);
      }
      if (this.toNumber(this.stage.vars.random) === 2) {
        yield* this.wait(1.5);
        this.goto(114, 54);
      }
      if (this.toNumber(this.stage.vars.random) === 4) {
        yield* this.wait(1.5);
        this.goto(15, 50);
      }
      if (this.toNumber(this.stage.vars.random) === 5) {
        yield* this.wait(1.5);
        this.goto(-111, 55);
      }
      if (this.toNumber(this.stage.vars.random) === 7) {
        yield* this.wait(1.5);
        this.goto(-80, -5);
      }
      yield;
    }
  }
}
