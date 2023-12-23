/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Enemy2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Enemy2/costumes/costume1.svg", {
        x: 543.5,
        y: 25.286925159406678
      }),
      new Costume("costume2", "./Enemy2/costumes/costume2.svg", {
        x: 25.19502185066915,
        y: 25.30933422992547
      }),
      new Costume("costume3", "./Enemy2/costumes/costume3.svg", {
        x: 32.429084999999986,
        y: 26.38399665371543
      }),
      new Costume("costume4", "./Enemy2/costumes/costume4.svg", {
        x: 33.13193418145755,
        y: 28.417599999999993
      }),
      new Costume("costume5", "./Enemy2/costumes/costume5.svg", {
        x: 41.03296,
        y: 32.43482
      }),
      new Costume("costume6", "./Enemy2/costumes/costume6.svg", {
        x: 41.07627500000001,
        y: 37.30084500000001
      })
    ];

    this.sounds = [new Sound("pop", "./Enemy2/sounds/pop.wav")];

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
        { name: "death message 2" },
        this.whenIReceiveDeathMessage2
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];
  }

  *whenIReceiveRestart() {
    this.goto(
      this.toNumber(this.stage.vars.bDotXPosition) + 50,
      this.toNumber(this.stage.vars.bDotYPosition) + 50
    );
  }

  *whenIReceiveRestart2() {
    this.visible = true;
  }

  *whenIReceiveRestart3() {
    this.costume = "costume2";
    while (true) {
      if (this.random(1, 4) === 2) {
        this.costume = "costume1";
        yield* this.wait(0.25);
        this.costume = "costume2";
        yield* this.broadcastAndWait("enemy shoot 2");
      } else {
        yield* this.wait(1);
      }
      yield;
    }
  }

  *whenIReceiveRestart4() {
    while (true) {
      yield* this.wait(1);
      yield* this.glide(
        1.5,
        this.toNumber(this.stage.vars.bDotXPosition) + 50,
        this.toNumber(this.stage.vars.bDotYPosition) + 50
      );
      yield;
    }
  }

  *whenIReceiveRestart5() {
    this.direction = 90;
  }

  *whenIReceiveRestart6() {
    while (true) {
      if (this.touching(this.sprites["Sprite2"].andClones())) {
        this.stage.vars.bulletCommander = 2;
        /* TODO: Implement stop other scripts in sprite */ null;
        this.broadcast("death message 2");
        this.stage.vars.enemyDeaths++;
      }
      yield;
    }
  }

  *whenIReceiveDeathMessage2() {
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
