const allResults = [];
let counterOperations = 0;

const sayBye = () => {
  alert(`Thanks for Visiting!`);
  window.open("https://github.com/bboyruso");
};

const startAgain = () => {
  const getData = prompt("New numbers? yes/no");
  if (getData === "yes") {
    start();
    return;
  } else if (getData === "no") {
    sayBye();
  } else if (getData === null) {
    sayBye();
  } else startAgain();
};

const showResults = () => {
  alert(`${allResults}`);
};

const start = () => {
  const getData = prompt("Introduce numbers to calculate");

  if (getData === null) {
    sayBye();
    return;
  }

  const numbers = getData.split(",").map(Number);

  for (let i = 0; i < numbers.length; i++) {
    const reg = new RegExp("^[0-9]+$");
    if (!reg.test(numbers[i])) {
      alert(`Is not a number!`);
      start();
      return;
    }
  }

  const calculator = (numbers) => {
    const add = (a, b) => {
      return a + b;
    };

    const multiply = (a, b) => {
      return a * b;
    };

    const subtract = (a, b) => {
      return a - b;
    };
    const divide = (a, b) => {
      return a / b;
    };

    if (numbers.length === 1) {
      let total = Math.sqrt(numbers[0]);

      if (!Number.isInteger(total)) {
        total = total.toFixed(3);
      }

      alert(`${total} is a square root of ${numbers[0]}`);
    } else {
      counterOperations++;
      const sum = numbers.reduce(add);
      allResults.push("\nSUM " + counterOperations + " = " + sum + " ");

      const multi = numbers.reduce(multiply);
      allResults.push(" MULT " + counterOperations + " = " + multi + " ");

      const subst = numbers.reduce(subtract);
      allResults.push(" SUBST " + counterOperations + " = " + subst + " ");

      const div = numbers.reduce(divide);
      allResults.push(" DIV " + counterOperations + " = " + div.toFixed(3));

      ///////////////////

      showResults();
    }
  };

  calculator(numbers);
  startAgain();
};

start();
