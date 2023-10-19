const $guessInput = document.getElementById("guess");
const $playBtn = document.getElementById("play-btn");
const $resultTableBody = document.querySelector("#result-table > tbody");

var rand = 0;
var guessCount = 0;
var currentMax = 100;
var currentMin = 1;

window.addEventListener("load", ()=>{
	console.log("window loaded");
	
	//Math library
	// Math.random(); // 0<= x <1 -> 0.xxx
	// Math.floor(Math.random()); // 0.xxx -> 0  // eg. 0.5, 0.4 -> 0
	// Math.random(); //0<= x < 1 | target: 1<= x <101 | 0<= 100*x < 100 | 1<= 100*x + 1 < 101 -> y=ax+b

	rand = Math.floor(Math.random()*100 + 1); // 1~100
});

function play() {
	// console.log("Play!");

	// 不防呆
	let inputNumber = parseInt($guessInput.value);

	if(inputNumber == rand)
	{
		alert("BOOM!");
	}else
	{
		guessCount++;
		updateTable(inputNumber);
	}
}

function updateTable(num) {
	//orginal: min: 1, max: 100
	if(num < rand)
	{
		currentMin = num; // min: num
	}else{
		currentMax = num; // max: num
	}

	// // create element
	// let range = `${currentMin}~${currentMax}`;
	// // let newTr = document.createElement("tr");
	// // let newTd = document.createElement("td");
	// // let newText = document.createTextNode(range);

	// // if(guessCount%2 != 0){
	// // 	newTr.classList.add("oddtr");
	// // }

	// // newTd.appendChild(newText);
	// // newTr.appendChild(newTd);
	// // $resultTableBody.appendChild(newTr);

	// $resultTableBody.insertAdjacentHTML('beforeend', `
	// 	<tr class="${guessCount%2!=0?'oddtr':''}">
	// 		<td>${range}</td>
	// 	</tr>
	// `);

	// // guessCount%2 !=0 ? 'oddtr' : ''
	// // condition ? success : else
	// // -> if(condition) success else fail (x)
}