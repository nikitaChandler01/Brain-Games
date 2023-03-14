import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!\n');
const userName = () => {
  const name = readlineSync.question('May I have your name? \n');
  console.log(`Hello, ${name}\n`);
  return name;
};

export default userName;
