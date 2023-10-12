// <<啟動專案>>
// node app.js
//適當調整範例

// <<變數 Variable>>
// 宣告 declare
// [var/let/const] [variable name] (= [value]);
// var x = 2;
// var y = 3;
// console.log(x+y);

// <<data type>>
/*
    String -> 'hello', "hello world"
    Number -> 3, 3.2, 3e-2
    Boolean -> true, false
    undefined -> a data type whose variable is not initialized -> var a
    null -> var a = null
    Object -> {}, {key: value}
    Array -> [1, 2, 3]
*/
// str + any data types = str
// var str = "1";
// var x = 2;
// console.log(str+x);

// <<operator>>
//運算子 +, -, *, /, %
//比較運算子 <, >, <=, >=, ==, ===, !=
//邏輯運算子 &&, || (and, or)
// == -> 轉化為同一型別後的值
// === -> 先判斷型別是否一樣, 再判斷值是否一樣
// 比較與邏輯運算子 接回傳boolean
// console.log(2=="2");
// console.log(2==="2");

// <<if-else statement>>
// var x = 4;
// if(x < 10)
// {
//     console.log("Small!");
// }else{
//    console.log("Big!"); 
// }

// var x = 5;
// if(x==2){
//     console.log(2);
// }else if(x==3){
//     console.log(3);
// }else if(x==4){
//     console.log(4);
// }else{
//     console.log("else!");
// }

//nodejs user input (可以不用先知道原理)
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// <<Exercise1>>
//閏年判斷 -> 可以被4, 100, 400整除 才算是閏年

// <<Ans1>>
// readline.question("請輸入年份: ", year => {
//     if(year%4===0 && year%100===0 && year%400===0){
//         console.log("閏年！");
//     }else{
//         console.log("不是閏年!");
//     }
//     readline.close();
// });

// <<Loop -> for, while>>

// <<for loop>>
// (for-each loop)
// var let const
// for(init; condition; step)
// i++ = i+=1 = i=i+1
// for(var i=0; i<10; i++)
// {

// }
// console.log(i);

//var -> variable, 全域變數, 函數區塊內作為區域變數
//let, const -> scope區塊變數, 不會洩漏, const代表常數
//1~10總和
// var sum = 0;
// order: init => condition => execute => step => condition? => execute => ...
// for(let i=1; i<=10; i++)
// {
//     sum += i;
// }
// console.log(sum);

// 巢狀迴圈
/*
    print出以下圖形
    *
    **
    ***
    ****
    *****
*/
//因為console.log 預設會換行 所以我們透過一個string變數儲存起來後再print出來
//分解動作
// 看規律 nth層 n顆star
// var str = "";
// for(let i=1; i<=5; i++) // 控制層數
// {
//     for(let j=1; j<=i; j++) // 控制星星數
//     {
//         str+="*";
//     }
//     str+="\n";
// }
// console.log(str);
/*
    i = 1   i = 2   i = 3   ...
    j <= 1  j <= 2  j <= 3  ...
    *       **      ***     ...
*/

// for-each
// var nums = [1, 2, 3, 4, 5];
// for(let num of nums)
// {
//     console.log(num);
// }

// console.log(nums[2]);
// for(let i = 0; i < nums.length; i++)
// {
//     console.log(nums[i]);
// }


// <<while loop>>
//print 1~100
// while(condition)
// order: condition? => execute => ...
// var count = 1;
// var str = ""
// while(count<=100)
// {
//     str += count+" ";
//     count++;
// }
// console.log(str);
/*
    count = 1       count = 2       ...
    str += 1+" "    str += 2+" "    ...
    str = 1         str = 1 2       ...
*/

// <<Exercise2>>
/*
    print 出以下圖形 (4層)
        *
       * *
      * * *
     * * * *
*/

// <<Ans2>>
// var str = "";
// for(let i=1; i<=4; i++)
// {
    // or j=1; j < 4-i+1;
//     for(let j=i; j<4; j++)
//     {
//         str += " ";
//     }
//     for(let j=1; j<=i; j++)
//     {
//         str += "* ";
//     }
//     str += "\n";
// }
// console.log(str);

// <<Exercise3>>
//print出100以內的所有質數
// break; 可以跳出迴圈
// 使用flag來判斷使否是質數

// <<Ans3>>
// var str = "";
// var flag = true;
// for(let i=1; i<=100; i++)
// {
//     flag = true;
//     for(let j=2; j<i; j++)
//     {
//         if(i%j==0){
//             flag = false;
//             break;
//         }
//     }
//     if(flag){
//         str += i+" ";
//     }
// }
// console.log(str);

// <<function>>
//在前端網頁中會很常用到, 尤其是arrow function
// function [name](parameters) { // do something }
// function add(num1, num2)
// {
//     return num1 + num2;
// }
// console.log(add(8876,123));

// <<Exercise4>>
// 設計一個function, 讓使用者傳入層數, 印出相對應的聖誕樹
// eg. tree(4);
/*
       *
      * *
     * * *
    * * * *
       |
*/

// <<Ans4>>
// function tree(level)
// {
//     var str = "";
//     for(let i=1; i<=level; i++)
//     {
//         for(let j=i; j<level; j++)
//         {
//             str += " ";
//         }
//         for(let j=1; j<=i; j++)
//         {
//             str += "* ";
//         }
//         str += "\n";
//     }
//     for(let i=1; i<level; i++)
//     {
//         str += " ";
//     }
//     str+="|\n";
//     return str;
// }
// let myTree = tree(4);
// console.log(myTree);

// <<Object>>
// var student = {
//     age: 18,
//     gender: "male",
//     name: "Mao"
// }
// console.log(`My name is ${student.name} and I am ${student.age} years old.`);

// <<Array>>
// var arr = [1, 2, 3, "test", true];
// console.log(arr[1]);
// for(let i=0; i<arr.length; i++)
// {
//     console.log(arr[i]);
// }

// var students = [
//     { name: "Kevin", family: ["dad", "mom"] },
//     { name: "David", family: ["dad", "mom", "sis"] },
//     { name: "Mary", family: ["dad", "mom", "bro"] }
// ]

// <<Exercise5>>
//讓使用者輸入數字幾碼, 字母幾碼, 隨機生成英數組合的密碼, 使用Math.random(), Math.floor()
//0< <1
// console.log(Math.random());

// <<Ans5>>
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var words = [
"a", "b", "c", "d", "e", 
"f", "g", "h", "i", "j", 
"k", "l", "m", "n", "o",
"p", "q", "r", "s", "t", 
"u", "v", "w", "x", "y", 
"z"];

// 0<= <1
function password(n, w)
{
    var buffer = [];
    var result = "";

    for(let i=0; i<n; i++)
    {
        buffer.push(nums[Math.floor(Math.random()*nums.length)]);
    }
    for(let i=0; i<w; i++)
    {
        buffer.push(words[Math.floor(Math.random()*words.length)]);
    }

    var bufferLen = buffer.length;
    for(let i=0; i<bufferLen; i++)
    {
        let randIndex = Math.floor(Math.random()*buffer.length);
        let randElement = buffer[randIndex];
        result += randElement;
        buffer.splice(randIndex, 1);
    }
    return result;
}

console.log(password(5,8));


// Other topics
// decomposer (...)