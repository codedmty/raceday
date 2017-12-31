function getFormData(){

let raceNumber = Math.floor(Math.random()*1000);
let runnerName = document.getElementById('name').value;
let registerEarly = false;
let runnerAge = document.getElementById('age').value;
    
if (document.getElementById('check').checked) {
    registerEarly = true;
} else {
    registerEarly = false;
}
    
if (!registerEarly) {
  raceNumber += 1000;
}

if (runnerName != '') {
if (runnerAge >= 18 && registerEarly) {
  document.getElementById('output').innerHTML = `${runnerName}, your number is ${raceNumber}.<br> Your race time is 9:30am`;
} else if (runnerAge >= 18 || registerEarly) {
  document.getElementById('output').innerHTML = `${runnerName}, your number is ${raceNumber}.<br> Your race time is 11:00am`;
} else if (runnerAge < 18 && !registerEarly) {
  document.getElementById('output').innerHTML = `${runnerName}, your number is ${raceNumber}.<br> Your race time is 12:30pm`;
} else {
  document.getElementById('output').innerHTML = `Please see the registration desk.`;
}
} else {
    document.getElementById('output').innerHTML = `Please enter your name.`;
}
return false;
}
