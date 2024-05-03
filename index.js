const imageElement = document.getElementById('image-js-test');
const redImg = 'imgRed.png';
const blueImg = 'imgBlue.png';
const yellowImg = 'imgYellow.png';

// const selectElement = document.querySelector('#select-color');
// const selectedValue = selectElement.value;
// console.log(selectedValue);

// this is how to change img src from select+value update
addEventListener("change", (event) =>{
  console.log(event.target.value);
  if(event.target.value == 'red'){
    console.log('I am red')
    imageElement.src = redImg;
  } else if(event.target.value == 'blue'){
    console.log('I am blue')
    imageElement.src = blueImg;
  } else if(event.target.value == 'yellow'){
    console.log('I am yellow')
    imageElement.src = yellowImg;
  } else {
    console.log('Error')
  };
});