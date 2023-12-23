/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite4/costumes/costume1.svg", {
        x: 49.905121133802254,
        y: 22.26557424484966
      }),
      new Costume("costume2", "./Sprite4/costumes/costume2.svg", {
        x: 49.905121133802226,
        y: 22.4996369200052
      }),
      new Costume("costume3", "./Sprite4/costumes/costume3.svg", {
        x: 49.905126677426836,
        y: 22.265555000000006
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite4/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "shield hit 2" },
        this.whenIReceiveShieldHit2
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

  *whenIReceiveShieldHit2() {
    this.stage.vars.rightShieldLife--;
  }

  *whenIReceiveNextLevel() {
    this.visible = false;
  }

  *whenIReceiveRestart() {
    this.visible = true;
    this.costume = "costume1";
    this.stage.vars.rightShieldLife = 3;
    while (true) {
      if (this.toNumber(this.stage.vars.rightShieldLife) === 2) {
        this.costume = "costume2";
      }
      if (this.toNumber(this.stage.vars.rightShieldLife) === 1) {
        this.costume = "costume3";
      }
      if (this.toNumber(this.stage.vars.rightShieldLife) === 0) {
        this.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveRestart2() {
    while (true) {
      if (this.touching(this.sprites["Sprite2"].andClones())) {
        this.stage.vars.bulletCommander = 2;
        this.broadcast("shield hit 2");
      }
      yield;
    }
  }
}
