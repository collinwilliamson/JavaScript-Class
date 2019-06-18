function echo(arg) {
    const printArea = document.getElementById("main");
    const p = document.createElement("p");
    p.textContent = arg;
    printArea.appendChild(p);
  } 
  /*
  function futureTime(currentTime, userTime) {
    return currentTime + userTime; 
}*/
/*
  let userTime = prompt("How many hours?");

  const today = new Date();

  var time = new Date();
alert(
  time.toLocaleString('en-US', { hour + pars: 'numeric', hour12: true }) + parseInt(userTime)
);  
let result = (time.toLocaleString + userTime)


  alert("The time will be " + result);*/

  let userTime = parseInt(prompt("How many hours?"));
  var today = new Date();
today.setHours(today.getHours() + userTime);

alert("The time will be " + today);