/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class En1Bullet extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./En1Bullet/costumes/costume1.svg", {
        x: 13.737279598434071,
        y: 33.93795
      }),
      new Costume("costume2", "./En1Bullet/costumes/costume2.svg", {
        x: 13.737279598433986,
        y: 33.93795
      }),
      new Costume("costume3", "./En1Bullet/costumes/costume3.svg", {
        x: 22.92824062500418,
        y: 21.582538456790132
      }),
      new Costume("costume4", "./En1Bullet/costumes/costume4.svg", {
        x: 22.498104862616515,
        y: 22.24945331796866
      }),
      new Costume("costume5", "./En1Bullet/costumes/costume5.svg", {
        x: 9.731622466514807,
        y: 25.58396805595993
      }),
      new Costume("costume6", "./En1Bullet/costumes/costume6.svg", {
        x: 7.181845447562381,
        y: 8.185133960642958
      })
    ];

    this.sounds = [new Sound("pop", "./En1Bullet/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "enemy shoot" },
        this.whenIReceiveEnemyShoot
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "death message" },
        this.whenIReceiveDeathMessage
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
        { name: "en. bu.1 death" },
        this.whenIReceiveEnBu1Death
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Restart" },
        this.whenIReceiveRestart3
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];
  }

  *whenIReceiveEnemyShoot() {
    this.stage.vars.enBu1Death = 0;
    this.goto(this.sprites["Enemy1"].x, this.sprites["Enemy1"].y);
    this.costume = "costume1";
    this.visible = true;
    while (!(this.toNumber(this.stage.vars.enBu1Death) === 1)) {
      yield* this.wait(1e-10);
      this.y -= 10;
      yield;
    }
    this.visible = false;
    this.goto(this.sprites["Enemy1"].x, this.sprites["Enemy1"].y);
  }

  *whenIReceiveDeathMessage() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveRestart() {
    this.goto(this.sprites["Enemy1"].x, this.sprites["Enemy1"].y);
    this.visible = false;
  }

  *whenIReceiveRestart2() {
    while (true) {
      if (this.touching(this.sprites["Sprite3"].andClones())) {
        this.broadcast("shield hit");
        yield* this.broadcastAndWait("en. bu.1 death");
        this.stage.vars.enBu1Death = 1;
      }
      if (this.touching(this.sprites["Sprite4"].andClones())) {
        this.broadcast("shield hit 2");
        yield* this.broadcastAndWait("en. bu.1 death");
        this.stage.vars.enBu1Death = 1;
      }
      if (this.touching(this.sprites["Sprite2"].andClones())) {
        this.visible = false;
        this.stage.vars.bulletCommander = 2;
        yield* this.broadcastAndWait("en. bu.1 death");
        this.stage.vars.enBu1Death = 1;
      }
      if (this.touching(this.sprites["Spaceship"].andClones())) {
        yield* this.broadcastAndWait("en. bu.1 death");
        this.stage.vars.enBu1Death = 1;
        this.broadcast("spacehit");
      }
      if (this.touching(this.sprites["Sprite9"].andClones())) {
        yield* this.broadcastAndWait("en. bu.1 death");
        this.stage.vars.enBu1Death = 1;
      }
      yield;
    }
  }

  *whenIReceiveEnBu1Death() {
    this.createClone();
    this.visible = false;
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

  *startAsClone() {
    this.costume = "costume2";
    for (let i = 0; i < 4; i++) {
      this.costumeNumber++;
      yield* this.wait(0.1);
      yield;
    }
    this.stage.vars.enBu1Death = 0;
    this.deleteThisClone();
  }
}
