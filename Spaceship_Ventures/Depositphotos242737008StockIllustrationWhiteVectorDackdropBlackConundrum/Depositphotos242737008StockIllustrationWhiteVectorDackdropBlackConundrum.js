/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Depositphotos242737008StockIllustrationWhiteVectorDackdropBlackConundrum extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "depositphotos_242737008-stock-illustration-white-vector-dackdrop-black-conundrum",
        "./Depositphotos242737008StockIllustrationWhiteVectorDackdropBlackConundrum/costumes/depositphotos_242737008-stock-illustration-white-vector-dackdrop-black-conundrum.svg",
        { x: 353.85592499999996, y: 190.47096391046594 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Next level" },
        this.whenIReceiveNextLevel
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Restart" },
        this.whenIReceiveRestart
      )
    ];
  }

  *whenIReceiveNextLevel() {
    this.visible = true;
  }

  *whenIReceiveRestart() {
    this.visible = false;
  }
}
