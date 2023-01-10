// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  function caesar(input, shift, encode = true) {
 if (!shift || shift == 0 || shift>=alpha.length || shift<=(alpha.length)*-1)
      {
        return false;
      }
    if (encode === false) 
    { 
      shift = shift * (-1); 
    };

    input = input.toLowerCase();
    let messageEncoded = ""; 
     for (let i = 0; i < input.length; i++)
      {
        const char = input[i]; 
        if (!alpha.includes(input[i]))
          {
            messageEncoded += input[i];
          }
        for(let i = 0; i < alpha.length; i++)
          {
            if (char == alpha[i])
            {
              if(i+shift>=alpha.length)
                {

                  messageEncoded += alpha[(i+shift)-alpha.length];
                }
              else if(i+shift<0)
                {
             
                  messageEncoded += alpha[26+(i+shift)]
                }
              else
                {
                  messageEncoded += alpha[i+shift];
                }
            }
          }
      } 
    return messageEncoded;
    
  }

  return {
    caesar,
  };
})();

 
module.exports = { caesar: caesarModule.caesar };