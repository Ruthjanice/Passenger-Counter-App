let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(countEl)

function increment()
{
  count = count + 1
  countEl.innerText = count
  console.log (count)
}
function decrement ()
{
	count -= 1
	countEl.innerText = count
	console.log(count)
}

function save ()  
{
   let countStr = count + "-" 
   saveEl.innerText += countStr
   countEl.innerText = 0
   count = 0

}