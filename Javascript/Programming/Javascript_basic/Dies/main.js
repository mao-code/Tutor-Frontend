var $buuton;
var $tbody;
var frequency = [0, 0, 0, 0, 0, 0];

window.addEventListener('load', ()=>{
    $buuton = document.getElementById("roll");
    $tbody = document.querySelector("#result-table > tbody");
});

function rollDice()
{
    // 1. setImages
    setImagesAndCalculateFrequency();

    //3. setTable (update table)
    setTable();
}

function setImagesAndCalculateFrequency()
{
    for(let i=1; i<=12; i++)
    {
        let die = document.getElementById(`die${i}`);
        let randomNum = Math.floor(Math.random()*6+1); //0<= <1 -> 1<= <7

        //2. calculate frequency
        // randomNum = 1 -> frequency[0]++
        frequency[randomNum-1]++;

        let fileName = `./pic/dice/die${randomNum}.png`;
        die.setAttribute('src', fileName); //設定屬性(attribute), setAttribute(name, value);
    }
}

function setTable()
{
    for(let i=0; i<6; i++)
    {
        let tr_i = $tbody.children[i];
        let tdFreq = tr_i.children[1];
        tdFreq.innerText = frequency[i];

        // percentage
        
    }
}

