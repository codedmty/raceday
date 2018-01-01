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

if (runnerName != '' && runnerAge != '') {
if (runnerAge >= 18 && registerEarly) {
  document.getElementById('alert').innerHTML = '';
  document.getElementById('output').innerHTML = `${runnerName}, your number is ${raceNumber}.<br> Your race time is 9:30am`;
} else if (runnerAge >= 18 || registerEarly) {
  document.getElementById('alert').innerHTML = '';
  document.getElementById('output').innerHTML = `${runnerName}, your number is ${raceNumber}.<br> Your race time is 11:00am`;
} else if (runnerAge < 18 && !registerEarly) {
  document.getElementById('alert').innerHTML = '';
  document.getElementById('output').innerHTML = `${runnerName}, your number is ${raceNumber}.<br> Your race time is 12:30pm`;
} else {
  document.getElementById('alert').innerHTML = '';
  document.getElementById('output').innerHTML = `Please see the registration desk.`;
}
} else if (runnerName === '' && runnerAge === '') {
    document.getElementById('alert').innerHTML = `Enter your name, and age.`;
    document.getElementById('output').innerHTML = '';
} else if  (runnerName === '' && runnerAge != '') {
    document.getElementById('alert').innerHTML = `Enter your name.`;
    document.getElementById('output').innerHTML = '';
} else if  (runnerName != '' && runnerAge === '') {
    document.getElementById('alert').innerHTML = `Enter your age.`;
    document.getElementById('output').innerHTML = '';
} else {
    document.getElementById('alert').innerHTML = `Please see the registration desk.`;
    document.getElementById('output').innerHTML = '';
}
    
return false;
}
