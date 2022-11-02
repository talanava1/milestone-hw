
function fibonacci(n) {
  let a = 0,
  b = 1,
  c = n;
  
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  
  return c
  
  
}

function showResult()  {
  const input=document.getElementById(`fib`).value;
  const output = document.getElementById("input");
  output.innerText = fibonacci(input);
}


