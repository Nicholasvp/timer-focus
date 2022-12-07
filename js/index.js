import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import {
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop, 
    buttonSoundOff, 
    buttonSoundOn,
    minutesDisplay, 
    secondsDisplay
} from "./config.js"

const sound = Sound()

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff 
    })

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
}) 

buttonPlay.addEventListener('click', function(){
    controls.play()
    timer.countdown()
    sound.pressButton()
})
buttonPause.addEventListener('click', function(){
    controls.pause()
    timer.hold()
    sound.pressButton()
})
buttonStop.addEventListener('click', function(){
    controls.reset()
    timer.reset()
    sound.pressButton()
})
buttonSoundOn.addEventListener('click', function(){
    controls.soundOn()
    sound.bgAudio.play()
})
buttonSoundOff.addEventListener('click', function(){
   controls.soundOff()
   sound.bgAudio.pause()
})
buttonSet.addEventListener('click', function(){
    let newMinutes = controls.getMinutes()
        if (!newMinutes) {
        timer.reset()
        return 
    }
    
    
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
})












