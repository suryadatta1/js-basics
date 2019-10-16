// const myFunction = () => {
//     const message = 'this is my message';
//     const printMessage = ()=>{
//         console.log(message)
//     }
//    return printMessage;
// };
// const myPrintMessage = myFunction()

// myPrintMessage()

const createCounter = () => {
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get() {
      return count;
    }
  };
};

const counter = createCounter();

counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.get());

const createAdder = a => {
  return b => {
    return a + b;
  };
};
const add10 = createAdder(100);
console.log(add10(30));

const tipper = baseTip => {
  return amount => {
    return baseTip * amount;
  };
};


const tip30 = tipper(0.3);

console.log(tip30(100));
