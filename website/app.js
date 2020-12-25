/* Global Variables */

// Create a new date instance dynamically with JS
let d = newDate();
//Take care that getMonth() counts month from 0 to 11 so you need to add 1 to its response 
let newDate = d.getMonth()+ 1 + "."+ d.getDate()+'.'+ d.getFullYear();
const getData = async () => {
  //code to fetch data from api (await the fetch)
  const request = await fetch(
    baseUrl + `?zip=${zipInput.value}&apiid=${appKey}&units=metric`
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
  }
};
