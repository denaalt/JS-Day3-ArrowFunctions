// task1
const greet = (name) => {
  return `hello,${name}`;
};

// task2

const sum = (a, b) => a + b;

//task3

const square = (num) => num * num;

// not a task

const numbers = [1, 2, 3 ,6 ,9 ,12 ,6]

let max= 0;

numbers.forEach((num)=> {

    if(max<num )
        max = num;
})
console.log(max)