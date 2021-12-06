const readline = require('readline');

const readInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const n = [];
const processLine = line => {
  n.push(parseInt(line));
}

const countIncWindow = () => {
  let currentSum = 0;
  let prevSum = null;
  let incs = 0;
  let j = 0;
  for(let i = 0; i < n.length;) {
    if (j < 3 && (i+j) < n.length) {
      currentSum += n[i + j];
      j++;
      continue;
    } else {
      j = 0;
      i++;
    }
    if(prevSum) {
      console.log(prevSum + ' ' + currentSum);
      if(currentSum > prevSum) {
        incs++;
      }
    }
    prevSum = currentSum;
    currentSum = 0;
  }
  console.log(incs);
}

readInterface.on('line', processLine);
readInterface.on('close', () => {
  countIncWindow();
});
