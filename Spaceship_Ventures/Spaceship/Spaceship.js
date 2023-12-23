/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Spaceship extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Spaceship/costumes/costume1.svg", {
        x: 61.28280201282692,
        y: 59.22228
      }),
      new Costume("costume2", "./Spaceship/costumes/costume2.svg", {
        x: 61.28281201282678,
        y: 59.222300000000004
      }),
      new Costume("costume3", "./Spaceship/costumes/costume3.svg", {
        x: 61.282807012826964,
        y: 59.38715328058028
      }),
      new Costume("costume4", "./Spaceship/costumes/costume4.svg", {
        x: 61.28280051924037,
        y: 59.387125
      }),
      new Costume("costume5", "./Spaceship/costumes/costume5.svg", {
        x: 61.282805519240355,
        y: 59.22228
      }),
      new Costume("", "./Spaceship/costumes/.svg", {
        x: 61.28279850641346,
        y: 59.22228
      }),
      new Costume("costume7", "./Spaceship/costumes/costume7.svg", {
        x: 61.28279850641346,
        y: 59.22228
      }),
      new Costume("costume11", "./Spaceship/costumes/costume11.svg", {
        x: 91.52918821875491,
        y: 107.41597696097985
      }),
      new Costume("costume8", "./Spaceship/costumes/costume8.svg", {
        x: 175.5083998182221,
        y: 127.79345715031698
      }),
      new Costume("costume9", "./Spaceship/costumes/costume9.svg", {
        x: 171.00741013861324,
        y: 137.96498301766738
      }),
      new Costume("costume10", "./Spaceship/costumes/costume10.svg", {
        x: 205.41724144935336,
        y: 179.80654131777902
      }),
      new Costume("costume12", "./Spaceship/costumes/costume12.svg", {
        x: 126.54704021850245,
        y: 107.47221328663794
      })
    ];

    this.sounds = [new Sound("pop", "./Spaceship/sounds/pop.wav")];

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
        { name: "space. conf." },
        this.whenIReceiveSpaceConf
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
        { name: "Restart" },
        this.whenIReceiveRestart7
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Restart" },
        this.whenIReceiveRestart8
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Finale" },
        this.whenIReceiveFinale
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Restart" },
        this.whenIReceiveRestart9
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Restart" },
        this.whenIReceiveRestart10
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "spacehit" },
        this.whenIReceiveSpacehit
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Restart" },
        this.whenIReceiveRestart11
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spaceship anim." },
        this.whenIReceiveSpaceshipAnim
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Restart" },
        this.whenIReceiveRestart12
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Restart" },
        this.whenIReceiveRestart13
      )
    ];
  }

  *whenIReceiveRestart() {
    this.size = 80;
  }

  *whenIReceiveRestart2() {
    this.stage.vars.enemyDeaths = 0;
  }

  *whenIReceiveRestart3() {
    while (true) {
      if (this.touching(this.sprites["Sprite7"].andClones())) {
        this.broadcast("Next level");
        this.size = 20;
        this.goto(0, -145);
      }
      yield;
    }
  }

  *whenIReceiveSpaceConf() {
    if (this.toNumber(this.stage.vars.spaceLife) === 0) {
      this.broadcast("Spaceship anim.");
      return;
    }
  }

  *whenIReceiveRestart4() {
    while (true) {
      if (this.toNumber(this.stage.vars.enemyDeaths) === 6) {
        this.y += this.toNumber(this.stage.vars.yv);
        this.stage.vars.spaceMouvement = 0;
        this.stage.vars.yv = this.toNumber(this.stage.vars.yv) * 0.85;
        if (this.keyPressed("up arrow")) {
          this.stage.vars.yv++;
          this.stage.vars.spaceMouvement = 0;
        }
        if (this.keyPressed("down arrow")) {
          this.stage.vars.yv--;
          this.stage.vars.goingDown = 2;
        } else {
          this.stage.vars.goingDown = 1;
        }
      }
      yield;
    }
  }

  *whenIReceiveRestart5() {
    while (true) {
      this.x += this.toNumber(this.stage.vars.xv);
      this.stage.vars.spaceMouvement = 0;
      this.stage.vars.xv = this.toNumber(this.stage.vars.xv) * 0.85;
      if (this.keyPressed("right arrow")) {
        this.stage.vars.xv++;
        this.stage.vars.spaceMouvement = 1;
      }
      if (this.keyPressed("left arrow")) {
        this.stage.vars.xv--;
        this.stage.vars.spaceMouvement = 2;
      }
      yield;
    }
  }

  *whenIReceiveRestart6() {
    while (true) {
      if (this.toNumber(this.stage.vars.enemyDeaths) === 6) {
        if (this.touching(Color.rgb(0, 0, 0))) {
          this.stage.vars.spaceLife--;
          yield* this.wait(0.25);
        }
      }
      yield;
    }
  }

  *whenIReceiveRestart7() {
    while (true) {
      if (this.toNumber(this.stage.vars.spaceMouvement) === 0) {
        if (this.toNumber(this.stage.vars.goingDown) === 1) {
          this.costume = "";
          yield* this.wait(0.05);
          this.costume = "costume1";
          yield* this.wait(0.05);
        }
      }
      if (this.toNumber(this.stage.vars.spaceMouvement) === 1) {
        if (this.toNumber(this.stage.vars.goingDown) === 1) {
          this.costume = "costume4";
          yield* this.wait(0.05);
          this.costume = "costume3";
          yield* this.wait(0.05);
        }
      }
      if (this.toNumber(this.stage.vars.spaceMouvement) === 2) {
        if (this.toNumber(this.stage.vars.goingDown) === 1) {
          this.costume = "costume2";
          yield* this.wait(0.05);
          this.costume = "costume5";
          yield* this.wait(0.05);
        }
      }
      if (this.toNumber(this.stage.vars.goingDown) === 2) {
        this.costume = "costume7";
      }
      yield;
    }
  }

  *whenIReceiveRestart8() {
    while (true) {
      if (this.touching(Color.rgb(202, 194, 21))) {
        this.broadcast("Finale");
      }
      yield;
    }
  }

  *whenIReceiveFinale() {
    this.visible = false;
  }

  *whenIReceiveRestart9() {
    this.goto(120, -150);
  }

  *whenIReceiveRestart10() {
    while (true) {
      if (this.keyPressed("space")) {
        while (!(this.toNumber(this.stage.vars.bulletCommander) === 2)) {
          this.stage.vars.bulletPermission = 1;
          yield;
        }
      } else {
        this.stage.vars.bulletPermission = 0;
      }
      yield;
    }
  }

  *whenIReceiveSpacehit() {
    this.stage.vars.spaceLife--;
    this.broadcast("space. conf.");
  }

  *whenIReceiveRestart11() {
    while (true) {
      /* TODO: Implement motion_ifonedgebounce */ null;
      this.direction = 90;
      yield;
    }
  }

  *whenIReceiveSpaceshipAnim() {
    this.createClone();
    this.visible = false;
  }

  *startAsClone() {
    this.costume = "costume7";
    yield* this.wait(0.07);
    this.costume = "costume11";
    yield* this.wait(0.07);
    this.costume = "costume8";
    yield* this.wait(0.07);
    this.costume = "costume9";
    yield* this.wait(0.07);
    this.costume = "costume10";
    yield* this.wait(0.07);
    this.costume = "costume12";
    yield* this.wait(0.07);
    this.broadcast("spaceship death");
    this.deleteThisClone();
  }

  *whenIReceiveRestart12() {
    this.visible = true;
    this.stage.vars.spaceLife = 3;
  }

  *whenIReceiveRestart13() {
    while (true) {
      if (this.toNumber(this.stage.vars.spaceLife) === 0) {
        this.broadcast("Spaceship anim.");
      }
      yield;
    }
  }
}
