const sum = (a, b) =>
  new Promise(resolve => {
    setTimeout(() => resolve(a + b), 1000);
  });

const difference = (a, b) =>
  new Promise(resolve => {
    setTimeout(() => resolve(a - b), 1500);
  });

const multiplying = (a, b) =>
  new Promise(resolve => {
    setTimeout(() => resolve(a * b), 2000);
  });

const dividing = (a, b) =>
  new Promise(resolve => {
    setTimeout(() => resolve(a / b), 2500);
  });

const operands = {
  '+': sum,
  '-': difference,
  '*': multiplying,
  '/': dividing
};


const calculation = async (expression) => {
  const args = [];
  const stack = expression.split(' ').reverse();

  if (stack.length === 1) {
    return stack.pop();
  }

  while (args.length < 2) {
    args.push(stack.pop());
  }

  if (operands[stack[stack.length - 1]]) {
    const res = await operands[stack.pop()](+args[0], +args[1]);
    stack.push(res);
    expression = stack.reverse().join(' ')
    return calculation(expression);
  }
}

const prom = calculation('1 2 + 3 * 4 +');
prom.then((val) => { console.log(val) });
