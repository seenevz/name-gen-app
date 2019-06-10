const emojies = [
   "🎸",
   "❤️",
   "💩",
   "👪",
   "🕺",
   "🐒",
   "🥃",
   "🍻",
   "🍺",
   "🥂",
   "🎊",
   "🎉",
   "🍪",
   "🎂",
   "🍩",
   "🎆",
   "🤹‍♂️",
   "🤹‍♀️",
   "🏆",
   "🧀",
   "👰",
   "🤵",
   "💂‍♂️",
   "👶",
   "😎",
   "🧐",
   "🎁",
   "🐥",
   "✨",
   "🌟",
   "🥖",
   "🍷",
   "🎇",
   "🃏",
   "🤪",
   "🤩",
   "🤓",
   "😂",
   "💃",
];

const generateRepeatName = function(name, repeatCount) {
   let result = "";

   for (let i = 0; i < repeatCount; i++) {
      result = result.concat(name, " ");
   }

   return result;
};

const nameScrambler = function(name) {
   console.log("name", name);
};

const emojiSalt = function(repeatCount) {
   const result = [];

   for (let i = 0; repeatCount > 0 ? i < repeatCount * 1.3 : i < 1; i++) {
      const iRandom = Math.floor(Math.random() * emojies.length);
      console.log("emoji: ", emojies[iRandom]);
      result.push(emojies[iRandom]);
   }

   return result;
};

// String insert prototype
String.prototype.insert = function(index, string) {
   return index > 0
      ? this.slice(0, index) + string + this.slice(index, this.length)
      : string + this;
};

const nameGenerator = {
   repeat: generateRepeatName,
   scramble: nameScrambler,
   emoji: emojiSalt,
};

export default nameGenerator;
