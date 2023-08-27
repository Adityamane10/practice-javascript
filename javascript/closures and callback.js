const executeDelayedFunctions = (array, delay) => {
  array.forEach((func, num) => {
    setTimeout(func, delay * num);
  });
}
const one = () => {
  console.log('one')
}
const two = () => {
  console.log('two')
}
const three = () => {
  console.log('three')
}

executeDelayedFunctions([one, two, three], 1000);

