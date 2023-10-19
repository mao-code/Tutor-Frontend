const $guessInput= document.getElementById("guess");
const $playBtn=document.getElementById("paly-btn");
const $resultTableBody= document.querySelector("#result-table > tbody"); // -> DOM element
var rand=0;
var guessCount=0;
var currentMax=100;
var currentMin=1;

// array, dictionary(obj)

window.addEventListener("load", ()=>{
    console.log("window loaded");
    rand = Math.floor(Math.random()*100 +1);
});

function play(){
    let inputNumber = parseInt($guessInput.value);
    if (inputNumber==rand)
    {
        alert ("Boom!");
    }else
    {   
        guessCount++;
        updateTable(inputNumber);
    }
}

function updateTable(num){
    if (num<rand)
    {
        currentMin =num;
    }else{
        currentMax =num;
    }


    let range=`${currentMin}~${currentMax}`;

    $resultTableBody.insertAdjacentHTML ('beforeend', `
        <tr class="${guessCount%2!=0?'oddtr':''}">
            <td>${range}</td>
        </tr>
    `);
}


