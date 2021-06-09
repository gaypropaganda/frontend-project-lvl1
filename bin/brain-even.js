#!/usr/bin/env node
import game from '../games/brain-even.js';
import play from '../src/index.js';
play.play(game.IsEvenGame,game.rule);