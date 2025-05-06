/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Devin Boucher
// Created on: April 2025
// This is the Phaser3 game configuration file

/**
 * This class is the Menu Scene.
 */
class MenuScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor() {
    super({ key: "menuScene" })

    this.menuSceneBackgroundImage = null
    this.startButton = null
  }

  /**
   * Initializes the scene with optional data.
   * @param {any} data - Optional data passed to the scene.
   */
  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  /**
   * Preloads assets for the menu scene.
   */
  preload() {
    console.log("Menu Scene")
    this.load.image("menuSceneBackground", "./assets/aliens_screen_image2.jpg")
    this.load.image("startButton", "./assets/start.png")
  }

  /**
   * Creates game objects for the menu scene.
   * @param {any} data - Optional data passed to the scene.
   */
  create(data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, "menuSceneBackground")
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2

    this.startButton = this.add.sprite(1920 / 2, 1080 / 2 + 100, "startButton")
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on("pointerdown", () => this.clickButton())
  }

  /**
   * Called once per frame. Not used in this scene.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time since last frame.
   */
  update(time, delta) {
    // pass
  }

  /**
   * Handle start button click event to switch to game scene.
   */
  clickButton() {
    this.scene.start("gameScene")
  }
}

export default MenuScene
