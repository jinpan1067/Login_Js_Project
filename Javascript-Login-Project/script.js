
// showtime function to make the real time implemented on the web page.
function showtime(){
var d = new Date();
let dateC = document.getElementById("date1");
dateC.innerHTML = `Today's message: \"<font color=green>in init</font>\"<br>Today's date: ${d.toDateString()}<br>Time now: ${d.toLocaleTimeString()}` ;

setTimeout("showtime()",1000)
}

// click function to call ajax

function loginInfo(){
    
    const emailEl = document.getElementById("address")
    const email = emailEl.value;

    const passwordEl = document.getElementById("password")
    const password = passwordEl.value;

    let warningEl = document.getElementById("warning")
    warningEl.innerHTML ="";

    // ajax part to diplay the weather
    if(email==="admin@yopmail.com" && password==="adminyopmail"){
    var url= "http://dataservice.accuweather.com/forecasts/v1/daily/5day/56186?apikey=dAK35HhWkBQjwuMxnXZ8vftEuOffmyUF&metric=true";
    $.ajax(url).done(respHandler);

    function respHandler(resp){
     const containerDivEl = document.getElementById("weather")
     containerDivEl.innerHTML="Weather in montreal for the next 5 days!<br>"
     
     // using foreach loop to get the object array from api rest.
     resp.DailyForecasts.forEach(element => {
        const newLinkDiv = document.createElement("a");
        newLinkDiv.innerHTML = `${element.Date} <br>`;
        newLinkDiv.href= element.Link ;
        containerDivEl.appendChild(newLinkDiv);

        const newContainerDiv = document.createElement("div");
        newContainerDiv.innerHTML =` Max: ${element.Temperature.Maximum.Value}C  Min:${element.Temperature.Minimum.Value}C <br> Day:${element.Day.IconPhrase} Night:${element.Night.IconPhrase}`;
        containerDivEl.appendChild(newContainerDiv);
     })
    }
    }

    //warning message if the entered value is wrong

    if(email === ""||password.length < 6){
      
        warningEl.innerHTML = "<font color=red> Error! Please complete the form!<br> *Email address must be filled in! <br> *Password length must be at least 6 characters!</font>"
     
     
    }
 // clear the input.
    emailEl.value = "";
    passwordEl.value = "";
   
}


