#!/usr/bin/env node
import game from '../games/brain-calc.js';
import play from '../src/index.js';
play.play(game.calcGame,game.rule);
