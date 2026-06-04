function ageToDay(){

  let age = parseFloat(document.getElementById("age").value);
  let day = Math.floor(age * 365.25);

  document.getElementById("ageResultValue").innerHTML = day;
}




function convertHoursToSeconds(){
    let hour=parseFloat(document.getElementById("hours").value);
    let sec= Math.floor(hour * 3600);
    document.getElementById("hoursResultValue").innerHTML=sec;
}




function switchtab(tab) {

  let array = document.querySelector('.array-search');
  let single = document.querySelector('.single-search');

  let arraybutton = document.getElementById('array-button');
  let singlebutton = document.getElementById('single-button');

 
  arraybutton.classList.remove('active');
  singlebutton.classList.remove('active');


  array.style.display = 'none';
  single.style.display = 'none';

  if(tab === 'array'){
      array.style.display = 'block';
      arraybutton.classList.add('active');
  }
  else{
      single.style.display = 'block';
      singlebutton.classList.add('active');
  }

}


function findNextInArray() {

    let arrayInput = document.getElementById('arrayInput').value;
    let searchValue = Number(document.getElementById('searchValue').value);

   
    let numbers = arrayInput.split(',').map(num => Number(num.trim()));


    let index = numbers.indexOf(searchValue);

    let result = document.getElementById('arrayFindResultValue');

  
    if(index !== -1 && index < numbers.length - 1){
        result.innerText = numbers[index + 1];
    }
    else{
        result.innerText = 'No next number found';
    }
}




function calculateNext() {

    let value = Number(document.getElementById('singleInput').value);
    let condition = document.getElementById('nextCondition').value;
    let result = document.getElementById('singleFindResultValue');

    if(condition === 'increment'){
        result.innerText = value + 1;
    }

    else if(condition === 'decrement'){
        result.innerText = value -1;
    }

}


function capitalizeName() {

    let name = document.getElementById('nameInput').value;
    let resultName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    document.getElementById('nameResultValue').innerText = resultName;
}


function calculateBMI(){

  let weight = Number(document.getElementById('weightInput').value);
  let height = Number(document.getElementById('heightInput').value);
  let result = document.getElementById('bmiResultValue');

  let bmi = weight / (height * height);

  result.innerHTML = bmi.toFixed(2);
}


function generateRandomArray(){

  
    let numbers = [];
    
   
    
    for(let i = 0; i < 5; i++){

        let randomNumber = Math.floor(Math.random() * 10);
        numbers.push(randomNumber);
    }

    let first = numbers[0];
    let last = numbers[numbers.length - 1];


    document.getElementById('arrayResultValue').innerText =
          `{${numbers.join(',')}}`;

    document.getElementById('firstLastResultValue').innerText =
        ` ${first} , ${last}`;
}


let firstInput = document.getElementById('addFirst');
let secondInput = document.getElementById('addSecond');
let result = document.getElementById('addResult');

firstInput.addEventListener("input", sum);
secondInput.addEventListener("input", sum);

function sum(){

    let firstnumber = Number(firstInput.value);
    let secondnumber = Number(secondInput.value);

    if(firstInput.value === "" || secondInput.value === ""){
        result.value = "NaN";
    }
    else{
        result.value = firstnumber + secondnumber;
    }
}

