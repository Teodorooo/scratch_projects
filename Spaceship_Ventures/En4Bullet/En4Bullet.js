/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class En4Bullet extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./En4Bullet/costumes/costume1.svg", {
        x: 13.737279598434014,
        y: 33.93795
      }),
      new Costume("costume2", "./En4Bullet/costumes/costume2.svg", {
        x: 13.737279598433986,
        y: 33.93794999999997
      }),
      new Costume("costume3", "./En4Bullet/costumes/costume3.svg", {
        x: 22.928239999999988,
        y: 25.583961913580225
      }),
      new Costume("costume5", "./En4Bullet/costumes/costume5.svg", {
        x: 20.052791239669403,
        y: 23.249793827160545
      }),
      new Costume("costume4", "./En4Bullet/costumes/costume4.svg", {
        x: 9.73162206464616,
        y: 25.583961913580225
      }),
      new Costume("costume6", "./En4Bullet/costumes/costume6.svg", {
        x: 7.181842744925859,
        y: 8.185104999999993
      })
    ];

    this.sounds = [new Sound("pop", "./En4Bullet/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "death message 4" },
        this.whenIReceiveDeathMessage4
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
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Restart" },
        this.whenIReceiveRestart3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "enemy shoot 4" },
        this.whenIReceiveEnemyShoot4
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "en. bul.4 death " },
        this.whenIReceiveEnBul4Death
      )
    ];
  }

  *whenIReceiveDeathMessage4() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveRestart() {
    this.goto(this.sprites["Enemy4"].x, this.sprites["Enemy4"].y);
    this.visible = false;
  }

  *whenIReceiveRestart2() {
    while (true) {
      if (this.touching(this.sprites["Sprite3"].andClones())) {
        this.broadcast("shield hit");
        yield* this.broadcastAndWait("en. bul.4 death ");
        this.stage.vars.enBul4Death = 1;
      }
      if (this.touching(this.sprites["Sprite4"].andClones())) {
        this.broadcast("shield hit 2");
        yield* this.broadcastAndWait("en. bul.4 death ");
        this.stage.vars.enBul4Death = 1;
      }
      if (this.touching(this.sprites["Sprite2"].andClones())) {
        this.visible = false;
        this.stage.vars.bulletCommander = 2;
        yield* this.broadcastAndWait("en. bul.4 death ");
        this.stage.vars.enBul4Death = 1;
      }
      if (this.touching(this.sprites["Spaceship"].andClones())) {
        yield* this.broadcastAndWait("en. bul.4 death ");
        this.stage.vars.enBul4Death = 1;
        this.broadcast("spacehit");
      }
      if (this.touching(this.sprites["Sprite9"].andClones())) {
        yield* this.broadcastAndWait("en. bul.4 death ");
        this.stage.vars.enBul4Death = 1;
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
    this.stage.vars.enBul4Death = 0;
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

  *whenIReceiveEnemyShoot4() {
    this.stage.vars.enBul4Death = 0;
    this.goto(this.sprites["Enemy4"].x, this.sprites["Enemy4"].y);
    this.costume = "costume1";
    this.visible = true;
    while (!(this.toNumber(this.stage.vars.enBul4Death) === 1)) {
      yield* this.wait(1e-10);
      this.y -= 10;
      yield;
    }
    this.visible = false;
    this.goto(this.sprites["Enemy4"].x, this.sprites["Enemy4"].y);
  }

  *whenIReceiveEnBul4Death() {
    this.createClone();
    this.visible = false;
  }
}
