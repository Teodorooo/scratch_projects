/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite3/costumes/costume1.svg", {
        x: 49.90512226760447,
        y: 22.26557424484966
      }),
      new Costume("costume2", "./Sprite3/costumes/costume2.svg", {
        x: 49.90512226760444,
        y: 22.499634965005527
      }),
      new Costume("costume3", "./Sprite3/costumes/costume3.svg", {
        x: 49.90512448865593,
        y: 22.265554999999978
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "shield hit" },
        this.whenIReceiveShieldHit
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Next level" },
        this.whenIReceiveNextLevel
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Restart" },
        this.whenIReceiveRestart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Restart" },
        this.whenIReceiveRestart2
      )
    ];
  }

  *whenIReceiveShieldHit() {
    this.stage.vars.leftShieldLife--;
  }

  *whenIReceiveNextLevel() {
    this.visible = false;
  }

  *whenIReceiveRestart() {
    this.visible = true;
    this.costume = "costume1";
    this.stage.vars.leftShieldLife = 3;
    while (true) {
      if (this.toNumber(this.stage.vars.leftShieldLife) === 2) {
        this.costume = "costume2";
      }
      if (this.toNumber(this.stage.vars.leftShieldLife) === 1) {
        this.costume = "costume3";
      }
      if (this.toNumber(this.stage.vars.leftShieldLife) === 0) {
        this.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveRestart2() {
    while (true) {
      if (this.touching(this.sprites["Sprite2"].andClones())) {
        this.broadcast("shield hit");
        this.stage.vars.bulletCommander = 2;
      }
      yield;
    }
  }
}
