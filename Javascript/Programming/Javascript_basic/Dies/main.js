var $buuton;
var $tbody;
var frequency = [0, 0, 0, 0, 0, 0];
var sumFreq = 0;

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
        frequency[randomNum-1]++; // O(n)
        // O(1) -> Hashmap
        /*
            {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0
            }
        */

        let fileName = `./pic/dice/die${randomNum}.png`;
        die.setAttribute('src', fileName); //設定屬性(attribute), setAttribute(name, value);
    }

    sumFreq += 12; // O(1)
}

function setTable()
{
    for(let i=0; i<6; i++)
    {
        let tr_i = $tbody.children[i];
        let tdFreq = tr_i.children[1];
        tdFreq.innerText = frequency[i];

        // percentage
        // frequency[i] / sum(frequency)
        // let sumFreq = frequency.reduce((accumulator, currValue) => {
        //     return accumulator + currValue;
        // }, 0); // O(n)

        let percentage = frequency[i] /  sumFreq;      
        let tdPercent = tr_i.children[2];
        tdPercent.innerText = `${(percentage*100).toFixed(2)}%`;
    }
}

