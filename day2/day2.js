const readline = require('readline');

const readInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let pos = 0;
let depth = 0;
let aim = 0;
const processLine = line => {
  const [direction, units] = line.split(' ');
  const x = parseInt(units);
  switch(direction) {
    case 'forward':
      pos += x;
      depth += aim * x; break;
    case 'down':
      aim += x; break;
    case 'up':
      aim -= x; break;
  }
}

readInterface.on('line', processLine);
readInterface.on('close', () => {
  console.log(depth * pos);
});
