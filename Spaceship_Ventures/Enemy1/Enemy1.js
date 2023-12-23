/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Enemy1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Enemy1/costumes/costume1.svg", {
        x: 543.5,
        y: 25.286925159406678
      }),
      new Costume("costume2", "./Enemy1/costumes/costume2.svg", {
        x: 25.195023549892937,
        y: 25.309333872002696
      }),
      new Costume("costume3", "./Enemy1/costumes/costume3.svg", {
        x: 32.429084999999986,
        y: 26.38399665371543
      }),
      new Costume("costume4", "./Enemy1/costumes/costume4.svg", {
        x: 33.13192429998077,
        y: 28.417598022808164
      }),
      new Costume("costume5", "./Enemy1/costumes/costume5.svg", {
        x: 41.03296114462492,
        y: 32.43481997891698
      }),
      new Costume("costume6", "./Enemy1/costumes/costume6.svg", {
        x: 41.076285228863185,
        y: 37.30085619992789
      })
    ];

    this.sounds = [new Sound("pop", "./Enemy1/sounds/pop.wav")];

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
        { name: "death message" },
        this.whenIReceiveDeathMessage
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];
  }

  *whenIReceiveRestart() {
    this.goto(
      this.toNumber(this.stage.vars.bDotXPosition) + 0,
      this.toNumber(this.stage.vars.bDotYPosition) + 0
    );
  }

  *whenIReceiveRestart2() {
    while (true) {
      if (this.touching(this.sprites["Sprite2"].andClones())) {
        this.stage.vars.bulletCommander = 2;
        /* TODO: Implement stop other scripts in sprite */ null;
        this.broadcast("death message");
        this.stage.vars.enemyDeaths++;
      }
      yield;
    }
  }

  *whenIReceiveRestart3() {
    while (true) {
      yield* this.wait(1);
      yield* this.glide(
        1.5,
        this.toNumber(this.stage.vars.bDotXPosition) + 0,
        this.toNumber(this.stage.vars.bDotYPosition) + 0
      );
      yield;
    }
  }

  *whenIReceiveRestart4() {
    this.visible = true;
  }

  *whenIReceiveRestart5() {
    this.direction = 90;
  }

  *whenIReceiveRestart6() {
    this.costume = "costume2";
    while (true) {
      if (this.random(1, 4) === 2) {
        this.costume = "costume1";
        yield* this.wait(0.25);
        this.costume = "costume2";
        yield* this.broadcastAndWait("enemy shoot");
      } else {
        yield* this.wait(1);
      }
      yield;
    }
  }

  *whenIReceiveDeathMessage() {
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
