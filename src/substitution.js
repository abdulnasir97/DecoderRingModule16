// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
 

  function substitution(input, alphabet, encode = true) {
   
    if (!alphabet || alphabet.length !== 26) return false;

    
    const mainAplhaArray = "abcdefghijklmnopqrstuvwxyz".split("");
    const inputArray = input.toLowerCase().split("");
    const subAlphaArray = alphabet.toLowerCase().split("");

    const onlyUniqueChars = subAlphaArray.filter(
      (item, index, self) => self.indexOf(item) === index
    );
    if (onlyUniqueChars.length !== alphabet.length) return false;

    const secretMessage = () => {
      let result = [];
      const encode = (character) => {
        const characterIndex = mainAplhaArray.indexOf(character);
        const encodedCharacter = subAlphaArray[characterIndex];
        result.push(encodedCharacter);
      };
      inputArray.forEach((character) => {
  
        character === " " ? result.push(" ") : encode(character);
      });
      return result.join("");
    };

    const revealedMessage = () => {
      let result = [];
      const decode = (character) => {
        const characterIndex = subAlphaArray.indexOf(character);
        const decodedCharacter = mainAplhaArray[characterIndex];
        result.push(decodedCharacter);
      };
      inputArray.forEach((character) => {
    
        character === " " ? result.push(" ") : decode(character);
      });
      return result.join("");
    };

  
    return encode ? secretMessage() : revealedMessage();
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };