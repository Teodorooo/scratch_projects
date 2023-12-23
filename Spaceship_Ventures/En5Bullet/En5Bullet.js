/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class En5Bullet extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./En5Bullet/costumes/costume1.svg", {
        x: 13.737279598434071,
        y: 33.93795
      }),
      new Costume("costume2", "./En5Bullet/costumes/costume2.svg", {
        x: 13.737279598433986,
        y: 33.93795
      }),
      new Costume("costume3", "./En5Bullet/costumes/costume3.svg", {
        x: 22.928239999999988,
        y: 25.583961913580225
      }),
      new Costume("costume4", "./En5Bullet/costumes/costume4.svg", {
        x: 20.052795619834683,
        y: 23.249801913580228
      }),
      new Costume("costume5", "./En5Bullet/costumes/costume5.svg", {
        x: 9.731617064646116,
        y: 25.583956913580266
      }),
      new Costume("costume6", "./En5Bullet/costumes/costume6.svg", {
        x: 7.181842744925859,
        y: 8.18509499999999
      })
    ];

    this.sounds = [new Sound("pop", "./En5Bullet/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "death message 5" },
        this.whenIReceiveDeathMessage5
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Restart" },
        this.whenIReceiveRestart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "enemy shoot 5" },
        this.whenIReceiveEnemyShoot5
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "en. bul.5 death " },
        this.whenIReceiveEnBul5Death
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Restart" },
        this.whenIReceiveRestart2
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Restart" },
        this.whenIReceiveRestart3
      )
    ];
  }

  *whenIReceiveDeathMessage5() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveRestart() {
    this.goto(this.sprites["Enemy5"].x, this.sprites["Enemy5"].y);
    this.visible = false;
  }

  *whenIReceiveEnemyShoot5() {
    this.stage.vars.enBul5Death = 0;
    this.goto(this.sprites["Enemy5"].x, this.sprites["Enemy5"].y);
    this.costume = "costume1";
    this.visible = true;
    while (!(this.toNumber(this.stage.vars.enBul5Death) === 1)) {
      yield* this.wait(1e-10);
      this.y -= 10;
      yield;
    }
    this.visible = false;
    this.goto(this.sprites["Enemy5"].x, this.sprites["Enemy5"].y);
  }

  *whenIReceiveEnBul5Death() {
    this.createClone();
    this.visible = false;
  }

  *whenIReceiveRestart2() {
    while (true) {
      if (this.touching(this.sprites["Sprite3"].andClones())) {
        this.broadcast("shield hit");
        yield* this.broadcastAndWait("en. bul.5 death ");
        this.stage.vars.enBul5Death = 1;
      }
      if (this.touching(this.sprites["Sprite4"].andClones())) {
        this.broadcast("shield hit 2");
        yield* this.broadcastAndWait("death message 5");
        this.stage.vars.enBul5Death = 1;
      }
      if (this.touching(this.sprites["Sprite2"].andClones())) {
        this.visible = false;
        this.stage.vars.bulletCommander = 2;
        yield* this.broadcastAndWait("en. bul.5 death ");
        this.stage.vars.enBul5Death = 1;
      }
      if (this.touching(this.sprites["Spaceship"].andClones())) {
        yield* this.broadcastAndWait("en. bul.5 death ");
        this.stage.vars.enBul5Death = 1;
        this.broadcast("spacehit");
      }
      if (this.touching(this.sprites["Sprite9"].andClones())) {
        yield* this.broadcastAndWait("en. bul.5 death ");
        this.stage.vars.enBul5Death = 1;
      }
      yield;
    }
  }

  *startAsClone() {
    this.costume = "costume2";
    for (let i = 0; i < 4; i++) {
      this.costumeNumber++;
      yield* this.wait(0.1);
      yield;
    }
    this.stage.vars.enBul5Death = 0;
    this.deleteThisClone();
  }

  *whenIReceiveRestart3() {
    while (true) {
      yield* this.wait(0.09);
      this.costume = "costume2";
      yield* this.wait(0.09);
      this.costume = "costume1";
      yield;
    }
  }
}
