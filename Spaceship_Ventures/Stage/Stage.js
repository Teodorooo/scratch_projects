/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: 0,
        y: 0
      }),
      new Costume(
        "240_F_76567808_cjgFslEjQWjq7c0M2vUgTYFvPtMTsNqL",
        "./Stage/costumes/240_F_76567808_cjgFslEjQWjq7c0M2vUgTYFvPtMTsNqL.png",
        { x: 0, y: 0 }
      ),
      new Costume("Stars", "./Stage/costumes/Stars.png", { x: 0, y: 0 }),
      new Costume(
        "240_F_503188436_eX7VOQh4Q3nKEO70udAoQJDaQdI3nJI2",
        "./Stage/costumes/240_F_503188436_eX7VOQh4Q3nKEO70udAoQJDaQdI3nJI2.png",
        { x: 0, y: 0 }
      ),
      new Costume(
        "240_F_503188436_eX7VOQh4Q3nKEO70udAoQJDaQdI3nJI3",
        "./Stage/costumes/240_F_503188436_eX7VOQh4Q3nKEO70udAoQJDaQdI3nJI3.png",
        { x: 474, y: 356 }
      )
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.xv = -1.5e-323;
    this.vars.random = 1;
    this.vars.yv = 1.5e-323;
    this.vars.bDotYPosition = -5;
    this.vars.bDotXPosition = -80;
    this.vars.leftShieldLife = 3;
    this.vars.spaceLife = -49;
    this.vars.spaceMouvement = 0;
    this.vars.rightShieldLife = 0;
    this.vars.enemyDeaths = 6;
    this.vars.goingDown = 1;
    this.vars.bulletCommander = 2;
    this.vars.bulletPermission = 0;
    this.vars.enBu1Death = 0;
    this.vars.enBul2Death = 0;
    this.vars.enBul3Death = 0;
    this.vars.enBul4Death = 0;
    this.vars.enBul5Death = 0;
    this.vars.enBul6Death = 0;
  }
}
