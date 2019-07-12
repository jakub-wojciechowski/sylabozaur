import {_} from 'vue-underscore';

const words = [
  ['TA', 'TA'],
  ['MA', 'MA'],
  ['TA', 'MA'],
  ['MA', 'TA'],
  ['DA', 'MA'],
  ['LA', 'LA'],
  ['KO', 'KO'],
  ['GA', 'MA'],
  ['LA', 'MA'],
  ['DA', 'TA'],
  ['GA', 'LA']
];

const availableSelectors = ['TA', 'MA', 'DA', 'KO', 'LA', 'GA'];



var play = function(word, index) {
    var audio = new Audio(require('./assets/' + word[index] + '.mp3'));
    audio.play();
    if (index < word.length-1) {
      setTimeout(function() {
        play(word, index+1);
      }, 400);
    }
};

export const game = {
  state: {
    activePart: 0,
    parts: ['', ''],
    selectors: [],
    word: [],
    score: 0,
    disabled: false
  },

  setPart(part) {
    console.log("Setting part: " + part);
    this.state.parts[this.state.activePart] = part;
    this.state.activePart++;
  },

  clear() {
    this.state.parts = ['', ''];
    this.state.activePart = 0;
  },

  playAgain() {
    play(this.state.word, 0);
  },

  reset() {
    console.log("RESET");
    this.state.activePart = 0;
    this.state.parts = ['', ''];
    this.state.selectors = _.shuffle(availableSelectors);
    this.state.word = _.sample(words);
    play(this.state.word, 0);
    this.state.image = require('./assets/images/' + this.state.word.join("").toLocaleLowerCase() + '.jpg');
    this.state.disabled = false;
  },

  next() {
    this.state.disabled = true;
    console.log("Next round");
    if (this.state.word.length == this.state.parts.length && _.isEqual(this.state.word, this.state.parts)) {
      new Audio(require('./assets/tada.wav')).play();
      this.state.score++;
    } else {
      new Audio(require('./assets/sad.wav')).play();
      if (this.state.score > 0) {
        this.state.score--;
      }
    }

    setTimeout(this.reset.bind(this), 2000);
  }
};

game.reset();
