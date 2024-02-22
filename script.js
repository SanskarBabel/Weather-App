console.log("Hello Jee");

const API_KEY = "36d6794b10c1b177688c5e42f7e39d4b";

function renderWeatherInfo(data) {

    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} C`
    
    document.body.appendChild(newPara);
}

async function fetchWeatherDetails() {
    try {
        let city = "goa";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        console.log("Weather Data => ", data);
        renderWeatherInfo(data);
    }

    catch (err) {
        // Handle The Error
    }

}

async function getCustomWeatherDetais() {
    try {
        let lat = 15.6333;
    let lon = 18.3333;

    let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    let data = await result.json();

    console.log(data);
    }

    catch(err) {
        console.log("Error Found" , err);
    }    

}

function switchTab(clickedTab) {
    apiErrorContainer.classList.remove("active");

    if(clickedTab != currentTab) {
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")) {
            //kya search form wala container is invisible, if yes then make it visible
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else {
            //main pehle search wale tab pr tha, ab your weather tab visible karna h 
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            //ab main your weather tab me aagya hu, toh weather bhi display karna poadega, so let's check local storage first
            //for coordinates, if we haved saved them there.
            getfromSessionStorage();
        }
    }
}

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } 
    else {
      console.log("No geolocation Support available");
    }
}


function showPosition(position) {
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;
  
    console.log(lat);
    console.log(longi);
}