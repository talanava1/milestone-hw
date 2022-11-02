let message = `The Fibonacci Of `
let x = 4
output=document.getElementById("first-output")


const fibonacci = n => {
    let a = 0, b = 1, c = n;
    
    for(let i = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
     
    return (output.innerText= message + x + ` is ` + c) 
  };
  fibonacci(4)


  



