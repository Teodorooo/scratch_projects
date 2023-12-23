/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _240F503188436Ex7voqh4q3nkeo70udaoqjdaqdi3nji2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "costume1",
        "./_240F503188436Ex7voqh4q3nkeo70udaoqjdaqdi3nji2/costumes/costume1.svg",
        { x: 248.47971798175513, y: 186.11605629138631 }
      ),
      new Costume(
        "costume2",
        "./_240F503188436Ex7voqh4q3nkeo70udaoqjdaqdi3nji2/costumes/costume2.svg",
        { x: 248.47971798175513, y: 186.11605629138631 }
      ),
      new Costume(
        "costume3",
        "./_240F503188436Ex7voqh4q3nkeo70udaoqjdaqdi3nji2/costumes/costume3.svg",
        { x: 248.47971798175513, y: 186.11605629138631 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.costume = "costume1";
    yield* this.wait(1);
    this.costume = "costume2";
    yield* this.wait(1);
    this.costume = "costume3";
    yield* this.wait(1);
    this.visible = false;
    this.broadcast("Restart");
  }
}
