const readline = require('readline');

const readInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let gamma = 0;
let ones = null;
let zeros = null;
const processLine = line => {
  if (!ones) {
    ones = new Array(line.length).fill(0);
    zeros = new Array(line.length).fill(0);
  }
  for(let i = 0; i < line.length; i++) {
    if(line[i] === '1') ones[i]++;
    else zeros[i]++;
  }
}

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

readInterface.on('line', processLine);
readInterface.on('close', () => {
  for(let i = 0; i < ones.length; i++) {
    if(ones[i] > zeros[i]) {
      gamma |= 1 << (ones.length - i - 1);
    } else {
    }
  }
  console.log(gamma);
  console.log(  dec2bin(gamma));
  const eps = ~gamma & ((1 << ones.length) - 1);
  console.log(eps);
  console.log(gamma * eps);
});
