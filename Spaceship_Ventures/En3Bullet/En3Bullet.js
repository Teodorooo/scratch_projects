/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class En3Bullet extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./En3Bullet/costumes/costume1.svg", {
        x: 13.737279598434071,
        y: 33.93795000000003
      }),
      new Costume("costume2", "./En3Bullet/costumes/costume2.svg", {
        x: 13.737279598433986,
        y: 33.93795
      }),
      new Costume("costume4", "./En3Bullet/costumes/costume4.svg", {
        x: 22.928239999999988,
        y: 25.583968827160504
      }),
      new Costume("costume3", "./En3Bullet/costumes/costume3.svg", {
        x: 20.0527984349215,
        y: 23.24979845679013
      }),
      new Costume("costume5", "./En3Bullet/costumes/costume5.svg", {
        x: 9.73162206464616,
        y: 25.583961913580225
      }),
      new Costume("costume6", "./En3Bullet/costumes/costume6.svg", {
        x: 7.181842744925859,
        y: 8.185114999999996
      })
    ];

    this.sounds = [new Sound("pop", "./En3Bullet/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "death message 3" },
        this.whenIReceiveDeathMessage3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Restart" },
        this.whenIReceiveRestart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "en. bul.3 death " },
        this.whenIReceiveEnBul3Death
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "enemy shoot 3" },
        this.whenIReceiveEnemyShoot3
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

  *whenIReceiveDeathMessage3() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveRestart() {
    this.goto(this.sprites["Enemy3"].x, this.sprites["Enemy3"].y);
    this.visible = false;
  }

  *whenIReceiveEnBul3Death() {
    this.createClone();
    this.visible = false;
  }

  *startAsClone() {
    this.costume = "costume2";
    for (let i = 0; i < 4; i++) {
      this.costumeNumber++;
      yield* this.wait(0.1);
      yield;
    }
    this.stage.vars.enBul3Death = 0;
    this.deleteThisClone();
  }

  *whenIReceiveEnemyShoot3() {
    this.stage.vars.enBul3Death = 0;
    this.goto(this.sprites["Enemy3"].x, this.sprites["Enemy3"].y);
    this.costume = "costume1";
    this.visible = true;
    while (!(this.toNumber(this.stage.vars.enBul3Death) === 1)) {
      yield* this.wait(1e-10);
      this.y -= 10;
      yield;
    }
    this.visible = false;
    this.goto(this.sprites["Enemy3"].x, this.sprites["Enemy3"].y);
  }

  *whenIReceiveRestart2() {
    while (true) {
      yield* this.wait(0.09);
      this.costume = "costume2";
      yield* this.wait(0.09);
      this.costume = "costume1";
      yield;
    }
  }

  *whenIReceiveRestart3() {
    while (true) {
      if (this.touching(this.sprites["Sprite3"].andClones())) {
        this.broadcast("shield hit");
        yield* this.broadcastAndWait("en. bul.3 death ");
        this.stage.vars.enBul3Death = 1;
      }
      if (this.touching(this.sprites["Sprite4"].andClones())) {
        this.broadcast("shield hit 2");
        yield* this.broadcastAndWait("en. bul.3 death ");
        this.stage.vars.enBul3Death = 1;
      }
      if (this.touching(this.sprites["Sprite2"].andClones())) {
        this.visible = false;
        this.stage.vars.bulletCommander = 2;
        yield* this.broadcastAndWait("en. bul.3 death ");
        this.stage.vars.enBul3Death = 1;
      }
      if (this.touching(this.sprites["Spaceship"].andClones())) {
        yield* this.broadcastAndWait("en. bul.3 death ");
        this.stage.vars.enBul3Death = 1;
        this.broadcast("spacehit");
      }
      if (this.touching(this.sprites["Sprite9"].andClones())) {
        yield* this.broadcastAndWait("en. bul.3 death ");
        this.stage.vars.enBul3Death = 1;
      }
      yield;
    }
  }
}
