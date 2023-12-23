/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Enemy6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Enemy6/costumes/costume1.svg", {
        x: 543.5,
        y: 25.286930159406694
      }),
      new Costume("costume2", "./Enemy6/costumes/costume2.svg", {
        x: 25.19502342533457,
        y: 25.30933211496273
      }),
      new Costume("costume3", "./Enemy6/costumes/costume3.svg", {
        x: 32.429084999999986,
        y: 26.38399665371543
      }),
      new Costume("costume4", "./Enemy6/costumes/costume4.svg", {
        x: 33.13193418145755,
        y: 28.417599999999993
      }),
      new Costume("costume5", "./Enemy6/costumes/costume5.svg", {
        x: 41.03296,
        y: 32.43482
      }),
      new Costume("costume6", "./Enemy6/costumes/costume6.svg", {
        x: 41.07627500000001,
        y: 37.30084500000001
      })
    ];

    this.sounds = [new Sound("pop", "./Enemy6/sounds/pop.wav")];

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
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Restart" },
        this.whenIReceiveRestart4
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Restart" },
        this.whenIReceiveRestart5
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Restart" },
        this.whenIReceiveRestart6
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "death message 6" },
        this.whenIReceiveDeathMessage6
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];
  }

  *whenIReceiveRestart() {
    this.visible = true;
  }

  *whenIReceiveRestart2() {
    this.goto(
      this.toNumber(this.stage.vars.bDotXPosition) + 100,
      this.toNumber(this.stage.vars.bDotYPosition) + 100
    );
  }

  *whenIReceiveRestart3() {
    while (true) {
      yield* this.wait(1);
      yield* this.glide(
        1.5,
        this.toNumber(this.stage.vars.bDotXPosition) + 100,
        this.toNumber(this.stage.vars.bDotYPosition) + 100
      );
      yield;
    }
  }

  *whenIReceiveRestart4() {
    this.direction = 90;
  }

  *whenIReceiveRestart5() {
    this.costume = "costume2";
    while (true) {
      if (this.random(1, 4) === 2) {
        this.costume = "costume1";
        yield* this.wait(0.25);
        this.costume = "costume2";
        yield* this.broadcastAndWait("enemy shoot 6");
      } else {
        yield* this.wait(1);
      }
      yield;
    }
  }

  *whenIReceiveRestart6() {
    while (true) {
      if (this.touching(this.sprites["Sprite2"].andClones())) {
        this.stage.vars.bulletCommander = 2;
        /* TODO: Implement stop other scripts in sprite */ null;
        this.broadcast("death message 6");
        this.stage.vars.enemyDeaths++;
      }
      yield;
    }
  }

  *whenIReceiveDeathMessage6() {
    this.createClone();
    this.visible = false;
  }

  *startAsClone() {
    this.costume = "costume2";
    for (let i = 0; i < 4; i++) {
      this.costumeNumber++;
      yield* this.wait(0.07);
      yield;
    }
    this.deleteThisClone();
  }
}
