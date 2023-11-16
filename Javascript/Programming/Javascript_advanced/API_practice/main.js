

//window.addEventListener('load', ()=>{})
$(document).ready(()=>{
    //document.getElementById("first-btn");
    var firstBtn = $("#first-btn").get(0); // $() -> jquery function, $().get(index) -> DOM element
    $("#first-btn").on('click', ()=>console.log("clicked!"))

    console.log(firstBtn);
});

function jqueryAjax()
{
    // AJAX
    // call API -> Web API -> 一串網址去跟伺服器拿資料
    // HTTP Request
    
    // HTTP Method
    // GET, POST, PUT,      PATCH,      DELETE
    // 查詢, 新增, 更新（全）, 更新（部分）, 刪除
    
    // JSON -> Javascript object -> 資料格式 -> 網路傳輸資料的一種資料格式
    // example API: https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0
    $.ajax({
        url: "https://api.agify.io/?name=bella",
        type: "GET",
        success: function(res){
            console.log(res);
        }
    });    
}

async function fetchAPI()
{
    fetch("https://api.agify.io/?name=bella")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });

    // var res = await fetch("https://api.agify.io/?name=bella")
    // var data = await res.json();

    // fetch(apiUrl, {
    //     method: 'POST',  // or 'PUT', 'DELETE', etc.
    //     headers: {
    //       'Content-Type': 'application/json',
    //       // Other headers if needed
    //     },
    //     body: JSON.stringify({
    //       key1: 'value1',
    //       key2: 'value2',
    //       // ... other data ...
    //     })
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     console.log('Error:', error);
    // });
}

