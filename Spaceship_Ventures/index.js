import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Spaceship from "./Spaceship/Spaceship.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Enemy1 from "./Enemy1/Enemy1.js";
import En1Bullet from "./En1Bullet/En1Bullet.js";
import Enemy2 from "./Enemy2/Enemy2.js";
import En2Bullet from "./En2Bullet/En2Bullet.js";
import Enemy3 from "./Enemy3/Enemy3.js";
import En3Bullet from "./En3Bullet/En3Bullet.js";
import Enemy4 from "./Enemy4/Enemy4.js";
import En4Bullet from "./En4Bullet/En4Bullet.js";
import Enemy5 from "./Enemy5/Enemy5.js";
import En5Bullet from "./En5Bullet/En5Bullet.js";
import Enemy6 from "./Enemy6/Enemy6.js";
import En6Bullet from "./En6Bullet/En6Bullet.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import BlackDot from "./BlackDot/BlackDot.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Sprite6 from "./Sprite6/Sprite6.js";
import Sprite9 from "./Sprite9/Sprite9.js";
import Sprite7 from "./Sprite7/Sprite7.js";
import Sprite8 from "./Sprite8/Sprite8.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite11 from "./Sprite11/Sprite11.js";
import Depositphotos242737008StockIllustrationWhiteVectorDackdropBlackConundrum from "./Depositphotos242737008StockIllustrationWhiteVectorDackdropBlackConundrum/Depositphotos242737008StockIllustrationWhiteVectorDackdropBlackConundrum.js";
import Sprite12 from "./Sprite12/Sprite12.js";
import Sprite13 from "./Sprite13/Sprite13.js";
import _240F503188436Ex7voqh4q3nkeo70udaoqjdaqdi3nji2 from "./_240F503188436Ex7voqh4q3nkeo70udaoqjdaqdi3nji2/_240F503188436Ex7voqh4q3nkeo70udaoqjdaqdi3nji2.js";
import Sprite10 from "./Sprite10/Sprite10.js";
import Sprite14 from "./Sprite14/Sprite14.js";

const stage = new Stage({ costumeNumber: 5 });

const sprites = {
  Spaceship: new Spaceship({
    x: -227.34520993314243,
    y: -89.94660877366572,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 6,
    size: 20,
    visible: false,
    layerOrder: 25
  }),
  Sprite2: new Sprite2({
    x: 133.33333171714582,
    y: 85.6685905456543,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  Enemy1: new Enemy1({
    x: 111,
    y: -14,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 75,
    visible: false,
    layerOrder: 26
  }),
  En1Bullet: new En1Bullet({
    x: 111,
    y: -14,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 70,
    visible: false,
    layerOrder: 12
  }),
  Enemy2: new Enemy2({
    x: 161,
    y: 36,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 75,
    visible: false,
    layerOrder: 6
  }),
  En2Bullet: new En2Bullet({
    x: 161,
    y: -34,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 70,
    visible: false,
    layerOrder: 3
  }),
  Enemy3: new Enemy3({
    x: 111,
    y: 86,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 75,
    visible: false,
    layerOrder: 21
  }),
  En3Bullet: new En3Bullet({
    x: 111,
    y: 36,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 70,
    visible: false,
    layerOrder: 10
  }),
  Enemy4: new Enemy4({
    x: 64,
    y: 104,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 75,
    visible: false,
    layerOrder: 22
  }),
  En4Bullet: new En4Bullet({
    x: 64,
    y: 84,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 70,
    visible: false,
    layerOrder: 20
  }),
  Enemy5: new Enemy5({
    x: 12.546,
    y: 121.04266666666666,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 75,
    visible: false,
    layerOrder: 7
  }),
  En5Bullet: new En5Bullet({
    x: 14,
    y: 154,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 70,
    visible: false,
    layerOrder: 9
  }),
  Enemy6: new Enemy6({
    x: 118.5,
    y: 114.75,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 75,
    visible: false,
    layerOrder: 8
  }),
  En6Bullet: new En6Bullet({
    x: 177.108,
    y: 36.534000000000006,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 70,
    visible: false,
    layerOrder: 2
  }),
  Sprite5: new Sprite5({
    x: -172.4119109399979,
    y: 153.26658879458023,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 5,
    size: 30,
    visible: false,
    layerOrder: 16
  }),
  BlackDot: new BlackDot({
    x: -80,
    y: -5,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 18
  }),
  Sprite3: new Sprite3({
    x: -120,
    y: -60,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 11
  }),
  Sprite4: new Sprite4({
    x: 113,
    y: -63,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 80,
    visible: false,
    layerOrder: 27
  }),
  Sprite6: new Sprite6({
    x: -210.44491268715973,
    y: 154.82438470903168,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 5,
    size: 30,
    visible: false,
    layerOrder: 19
  }),
  Sprite9: new Sprite9({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 147.16073119041212,
    visible: true,
    layerOrder: 5
  }),
  Sprite7: new Sprite7({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  Sprite8: new Sprite8({
    x: -138.40994890487062,
    y: 153.62347222172446,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 4,
    size: 30,
    visible: false,
    layerOrder: 15
  }),
  Sprite1: new Sprite1({
    x: 36,
    y: 28,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 13
  }),
  Sprite11: new Sprite11({
    x: 0,
    y: -133,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 23
  }),
  Depositphotos242737008StockIllustrationWhiteVectorDackdropBlackConundrum: new Depositphotos242737008StockIllustrationWhiteVectorDackdropBlackConundrum(
    {
      x: 0,
      y: 6,
      direction: 90,
      rotationStyle: Sprite.RotationStyle.ALL_AROUND,
      costumeNumber: 1,
      size: 100,
      visible: true,
      layerOrder: 14
    }
  ),
  Sprite12: new Sprite12({
    x: 5,
    y: -7,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 28
  }),
  Sprite13: new Sprite13({
    x: 23,
    y: -13,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 29
  }),
  _240F503188436Ex7voqh4q3nkeo70udaoqjdaqdi3nji2: new _240F503188436Ex7voqh4q3nkeo70udaoqjdaqdi3nji2(
    {
      x: -2,
      y: 0,
      direction: 90,
      rotationStyle: Sprite.RotationStyle.ALL_AROUND,
      costumeNumber: 1,
      size: 100,
      visible: true,
      layerOrder: 30
    }
  ),
  Sprite10: new Sprite10({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 17
  }),
  Sprite14: new Sprite14({
    x: 36,
    y: 28,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 24
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
