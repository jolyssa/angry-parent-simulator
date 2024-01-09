
// const synth = window.speechSynthesis;
// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value

//   const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`

//   document.querySelector('#placeToYell').innerText = yellText

//   let yellThis = new SpeechSynthesisUtterance(yellText);

//   synth.speak(yellThis);
// }

const synth = window.speechSynthesis;
document.querySelector('#yell').addEventListener('click', yell)

function yell(){
  const fName = document.querySelector('#firstName').value
  const fMiddleName = document.querySelector('#firstMiddle').value
  const lMiddleName = document.querySelector('#lastMiddle').value
  const lName = document.querySelector('#lastName').value

  let name = document.querySelector('#placeToYell')
  name.innerText = `${fName} ${fMiddleName} ${lMiddleName} ${lName}, you done messed up!!! `

  if (fName.toLowerCase().includes('j')) {
    name.innerText += ' GO CLEAN YOUR ROOM!!!'
  } else {
    name.innerText += ' GET DOWN HERE NOW!!!'
  }

  let yellThis = new SpeechSynthesisUtterance(name.innerText)

  synth.speak(yellThis);
}