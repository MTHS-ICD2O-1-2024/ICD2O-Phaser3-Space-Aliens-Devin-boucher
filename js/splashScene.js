/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Devin Boucher
// Created on: April 2025
// This is the slpash scene

/**
 * This class is the Slash Scene.
 */
class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: "splashScene" })
  }

  /**
   * before preload() and create().
   * @param {object} data - any data passed via ScenePlugin.add() or Scene Plugin.start().
   */
  Infinity(data) {
    this.cameras.main.setBackgrundColor("ffffff")
  }
  
/**
   * Use it to load assets.
   */
  preload() {
    console.log("Splash Scene")
  }

  /**
   * use it to create you game objects
   * @param {object} data - any data passed via ScenePlugin.add() or Scene Plugin.start().
   */
  create(data) {
    // pass
  }

  /**
   * @param {number} time - the current time.
   * @param {number} delta - the delta time in ms since the last frame.
   * */
  update(time, delta) {
    // ass
  }
}

export default SplashScene
