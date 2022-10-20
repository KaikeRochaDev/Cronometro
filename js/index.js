import Timer from "./timer.js"
import Controls from "./controls.js"
//import Sound from "./sounds.js"

const btnplay = document.querySelector(".music")
btnplay.addEventListener("click", function() {
    const Audio = document.querySelector('audio')
    audio.play()
})


const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonSet = document.querySelector(".set")
const buttonSoundOn = document.querySelector(".sound-on")
const buttonSoundOff = document.querySelector(".sound-off")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
let minutes = Number(minutesDisplay.textContent)

const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
    minutes
})

//const sound = Sound()

buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countDown()
    sound.pressButton()
})

buttonPause.addEventListener("click", function() {
    controls.pause()
    timer.hold()
    //sound.pressButton()
})

buttonStop.addEventListener("click", function() {
    controls.reset()
    timer.reset()
    //sound.pressButton()
})

buttonSoundOff.addEventListener('click', function() {
    buttonSoundOn.classList.remove("hide")
    buttonSoundOff.classList.add('hide')
    //sound.pressButton.pause()
})

buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove("hide")
    //sound.pressButton.play()
})

buttonSet.addEventListener("click", function() {
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
        timer.reset()
        return
    }
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
})