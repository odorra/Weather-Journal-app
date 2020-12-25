/* Global Variables */
const btn = document.getElementById("generate");
const feeling = document.getElementById("feelings");
// Create a new date instance dynamically with JS
let d = function newDate() {
  newDate = d.getMonth()+ 1 + "."+ d.getDate()+'.'+ d.getFullYear()};
let baseUrl = "https://api.openweathermap.org/data/2.5/weather";
//Take care that getMonth() counts month from 0 to 11 so you need to add 1 to its response 
const getData = async () => {
  //code to fetch data from api (await the fetch)
  const request = await fetch(
    baseUrl + `?zip=${zipInput.value}&appid=$4d685eb2ad2a8bd0a5b5707bf019b92c&units=metric`
    );

  try {
    //code to convert json data and return result (await conversion)
    const call = async () => {
      const response = await request.json()
      return response}
  } catch (error) {
    //code to log error
    console.log(error)
  }
};

const postData = async function (url =" ", data = { }) {
  //code to fetch route url and write request method, credentials, headers and body
  const request = await fetch(url, {
    "method": "POST",
    "credentials": "same-origin",
    "headers": { "content.Type": "application/json" },
    "body": JSON.stringify
  }, { data });
};
  try {
    const call = async () => {
      const response = await request.json()
      return response}
  } catch (error) {
    //code to log error
    console.log(error)
  }

const updateUI = async () => {
    //code to fetch data from server. Use url from GET route (await the fetch)
    await fetch("/postData")
  try {
    //code to convert json data. (await conversion)
    //code to update the UI with fetched data
    temp.Div.innerHTML = response.temp
  } catch (error) {
    //code to log error
    console.log(error)
  }
};
btn.addEventListener('click', performAction) 
//Don't use parentheses for function inside event listener or it will not wait for event  
function performAction() {
  postData('/postData', {content:feeling.value});
};

function result() {
  fetch('/comment', settings)
    .then(res => res.json())
    .then((json) => {
               entery.innerText = json.content;
    });
}  
