const input = document.getElementById('fib');
const loading = document.getElementById("loading-container")
const errImg = document.getElementById("err-img")

let is42 = false


function is42Handler(){
  console.log('42 ran')
  input.setAttribute('class', 'text-danger')
  is42 = true;
}

// if input.value is > 50 show error
function greaterThan50(){
  console.log('greater ran')
  input.setAttribute('class', 'text-danger border border-danger')
  errImg.removeAttribute('class', 'visually-hidden')
  errImg.setAttribute('class', 'ms-5 ps-5')
}

function resetInput(){
  input.removeAttribute('class', 'text-dark border border-danger')
  errImg.setAttribute('class', 'visually-hidden')
  is42 = false;
}




function showResult(){
  resetInput();
  var buddy = "null"
  const output = document.getElementById('input')

  // if value in input field is greater than 50
  if(input.value === 42){
    is42Handler();
  }
  if(input.value > 50){
    greaterThan50();
  }

  // set value to empty string
  output.textContent = ''

  // removing class atribute making it visible
  loading.removeAttribute("class", "visually-hidden");

  fetch(`http://localhost:5050/fibonacci/${input.value}`)
  .then((res) =>{
    if(res.ok) { return res.json()}
    return ''
  })
  .then(data => {
    
    // setting the class attribute to hidden 
    loading.setAttribute("class", "visually-hidden");
    if(typeof data === 'string') {
      
      output.textContent = data
      return
    }

    buddy = data
    if(is42){
      output.textContent = `server error ${buddy.result}`
    }

    console.log(buddy)
    output.textContent = buddy.result
  })

console.log(buddy)

}


async function runFetch(){
  spinnerHandler();
  showResult();
  spinnerHandler();
}













