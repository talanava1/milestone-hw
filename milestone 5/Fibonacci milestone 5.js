const input = document.getElementById('fib');
const loading = document.getElementById("loading-container")
const errImg = document.getElementById("err-img")
const output = document.getElementById('input')


let is42 = false

function showLoading(){
// removing class atribute making it visible
loading.removeAttribute("class", "visually-hidden");
}
  
function hideLoading(){
  // setting the class attribute to hidden 
  loading.setAttribute("class", "visually-hidden");
}

//  declaring the handlers 
function is42Handler(){ 
  hideLoading();
  if (input.value= 42) {
  output.setAttribute('class', 'text-danger')}
  is42 = true;
 
}

// if input.value is > 50 show error
function greaterThan50(){
  hideLoading();
  console.log('greater ran')
  input.setAttribute('class', 'text-danger border border-danger')
  errImg.removeAttribute('class', 'visually-hidden')
  errImg.setAttribute('class', 'ms-5 ps-5')
}

function resetForm(){
  // set value to empty string
  output.textContent = ''
  input.removeAttribute('class', 'text-dark border border-danger')
  output.removeAttribute(`class`, `text-danger`)
  output.setAttribute(`class`, `text-decoration-underline`)
  errImg.setAttribute('class', 'visually-hidden')
  is42 = false;
}



function showResult(){
  resetForm();
  var buddy = "null"
  

  // if value in input field is greater than 50
  if(input.value === 42){
    is42Handler();
  }
  if(input.value > 50){
    greaterThan50();
  }

  showLoading();


  fetch(`http://localhost:5050/fibonacci/${input.value}`)
  .then((res) =>{
    if(res.ok) { 
      return res.json()
    } else {
      res.text().then((err) =>{
        if(input.value == 42){
          output.textContent = `Server Error: ${err}` //setting the error message in the right place
          is42Handler(); // Only reutrns syling affects
        } else if(input.value > 50){
          greaterThan50();
          return
        }
      })
    }
  })
  .then(data => {
    if(data === undefined) return
    hideLoading();
    if(typeof data === 'string' ) {
      
      output.textContent = data
      return
    }

    buddy = data

    console.log(buddy)
    output.textContent = buddy.result
  })

console.log(buddy)

}

// if(input.value == 42){
//   is42Handler();
// } else if(input.value > 50){
//   greaterThan50();
// }

async function runFetch(){
  spinnerHandler();
  showResult();
  spinnerHandler();
}













