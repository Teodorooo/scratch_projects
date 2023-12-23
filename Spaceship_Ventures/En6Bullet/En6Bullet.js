/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class En6Bullet extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./En6Bullet/costumes/costume1.svg", {
        x: 13.737279598434014,
        y: 33.93795
      }),
      new Costume("costume2", "./En6Bullet/costumes/costume2.svg", {
        x: 13.737279598433958,
        y: 33.93795
      }),
      new Costume("costume3", "./En6Bullet/costumes/costume3.svg", {
        x: 22.928239999999988,
        y: 25.583956913580266
      }),
      new Costume("costume4", "./En6Bullet/costumes/costume4.svg", {
        x: 20.052790619834695,
        y: 23.24979691358027
      }),
      new Costume("costume5", "./En6Bullet/costumes/costume5.svg", {
        x: 9.731612064646157,
        y: 25.583951913580222
      }),
      new Costume("costume6", "./En6Bullet/costumes/costume6.svg", {
        x: 7.181842744925859,
        y: 8.185084999999987
      })
    ];

    this.sounds = [new Sound("pop", "./En6Bullet/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "death message 6" },
        this.whenIReceiveDeathMessage6
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
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Restart" },
        this.whenIReceiveRestart3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "enemy shoot 6" },
        this.whenIReceiveEnemyShoot6
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "en. bul.6 death " },
        this.whenIReceiveEnBul6Death
      )
    ];
  }

  *whenIReceiveDeathMessage6() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveRestart() {
    while (true) {
      yield* this.wait(0.09);
      this.costume = "costume2";
      yield* this.wait(0.09);
      this.costume = "costume1";
      yield;
    }
  }

  *whenIReceiveRestart2() {
    this.goto(this.sprites["Enemy6"].x, this.sprites["Enemy6"].y);
    this.visible = false;
  }

  *whenIReceiveRestart3() {
    while (true) {
      if (this.touching(this.sprites["Sprite3"].andClones())) {
        this.broadcast("shield hit");
        yield* this.broadcastAndWait("en. bul.6 death ");
        this.stage.vars.enBul6Death = 1;
      }
      if (this.touching(this.sprites["Sprite4"].andClones())) {
        this.broadcast("shield hit 2");
        yield* this.broadcastAndWait("en. bul.6 death ");
        this.stage.vars.enBul6Death = 1;
      }
      if (this.touching(this.sprites["Sprite2"].andClones())) {
        this.visible = false;
        this.stage.vars.bulletCommander = 2;
        yield* this.broadcastAndWait("en. bul.6 death ");
        this.stage.vars.enBul6Death = 1;
      }
      if (this.touching(this.sprites["Spaceship"].andClones())) {
        this.broadcast("spacehit");
        yield* this.broadcastAndWait("en. bul.6 death ");
        this.stage.vars.enBul6Death = 1;
      }
      if (this.touching(this.sprites["Sprite9"].andClones())) {
        yield* this.broadcastAndWait("en. bul.6 death ");
        this.stage.vars.enBul6Death = 1;
      }
      yield;
    }
  }

  *whenIReceiveEnemyShoot6() {
    this.stage.vars.enBul6Death = 0;
    this.goto(this.sprites["Enemy6"].x, this.sprites["Enemy6"].y);
    this.costume = "costume1";
    this.visible = true;
    while (!(this.toNumber(this.stage.vars.enBul6Death) === 1)) {
      yield* this.wait(1e-10);
      this.y -= 10;
      yield;
    }
    this.visible = false;
    this.goto(this.sprites["Enemy6"].x, this.sprites["Enemy6"].y);
  }

  *startAsClone() {
    this.costume = "costume2";
    for (let i = 0; i < 4; i++) {
      this.costumeNumber++;
      yield* this.wait(0.1);
      yield;
    }
    this.stage.vars.enBul6Death = 0;
    this.deleteThisClone();
  }

  *whenIReceiveEnBul6Death() {
    this.createClone();
    this.visible = false;
  }
}
