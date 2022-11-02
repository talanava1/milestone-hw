const input = document.getElementById('fib');
function showResult()
{
  var buddy = "null"
  const output = document.getElementById('input')

 fetch(`http://localhost:5050/fibonacci/${input.value}`)
.then((res) =>{
  if(res.ok) {
    return res.json()
  }
  return res.text()
  
})
.then(data => {
  if(typeof data === 'string') {
    output.textContent = data
    return
  }

  buddy = data
  console.log(buddy)
  output.textContent = buddy.result
})

console.log(buddy)




}
















