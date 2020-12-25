/* Global Variables */

// Create a new date instance dynamically with JS
let d = newDate();
let baseUrl = https://api.openweathermap.org/data/2.5/weather
//Take care that getMonth() counts month from 0 to 11 so you need to add 1 to its response 
let newDate = d.getMonth()+ 1 + "."+ d.getDate()+'.'+ d.getFullYear();
const getData = async () => {
  //code to fetch data from api (await the fetch)
  const request = await fetch(
    baseUrl + `?zip=${zipInput.value}&apid=${4d685eb2ad2a8bd0a5b5707bf019b92c}&units=metric`
  );
  try {
    //code to convert json data and return result (await conversion)
    const response = await request.json()
    return response
  } catch (error) {
    //code to log error
    console.log(error)
  }
};

const postData = async (url = "", data {}) => {
  //code to fetch route url and write request method, credentials, headers and body
  const request = await fetch(url, {
    "method": "POST"
    "credentials": "same-origin",
    "headers": {content.Type":"application/json"},
    "body": JSON.stringify{data}
    }}:
  try {
    return;
  } catch (error) {
    //code to log error
    console.log(error)
  }
app.post('url', (req, res) => {
  //replace url with a string of the post route url
  //code to add data to endpoint object
  projectData.temp = req.body.temp
})
const updateUI = async () => {
    //code to fetch data from server. Use url from GET route (await the fetch)
    await fetch("/getData")
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
   postData('/comment', {content:feeling.value});

       if (feeling.value != '') {
        var btn = document.createElement("div");
        var text = document.createTextNode(feeling.value);
        btn.appendChild(text);
        btn.className = "comment";
        comment_cont.appendChild(btn);
       }
	let url = "http://api.openweathermap.org/data/2.5/weather?zip=" + user_zip.value + "&appid=db6608063a9d72758e29ea323da07bd1";
	if (user_zip.value != "") {
		fetch(url, settings)
			.then(res => res.json())
  } else {
		alert('You Must Add ZIP Code');
	}
};

.then(() => updateUI())
