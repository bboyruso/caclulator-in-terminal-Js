const calculator = (...numbers) => {
  const sum = (...numbers) => {
    let total = 0;
    for (const numbersList of numbers) {
      total += numbersList;
    }
    console.log(total);
    return total;
  };

  const subtract = (accumulator, ...numbers) => {
    accumulator - numbers;
    console.log(numbers.reduce(subtract));
  };
  const multi = (accumulator, ...numbers) => {
    console.log(numbers.reduce(multi));
  };

  //   const subs = (...numbers) => {
  //     let total = 0;
  //     for (const numbersList of numbers) {
  //       total -= numbersList;
  //     }
  //     console.log(total);
  //     return total;
  //   };
  if (numbers.length === 1) {
    let total = Math.sqrt(numbers[0]);
    console.log(total);
    return total;
  } else {
    sum(...numbers);
    subtract(...numbers);
    multi(...numbers);
  }
};

calculator(2, 3);
