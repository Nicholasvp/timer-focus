export default function Controls({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff
    }) 
{

    function play(){
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        buttonSet.classList.add('hide')
        buttonStop.classList.remove('hide')
    }

    function pause(){
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }

    
    function soundOn(){
        buttonSoundOn.classList.add('hide')
        buttonSoundOff.classList.remove('hide')
    }
    
    function soundOff(){
        buttonSoundOff.classList.add('hide')
        buttonSoundO.classList.remove('hide')
    }

//Função de resetar
    function reset(){
        buttonStop.classList.add('hide')
        buttonSet.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
}

    function getMinutes(){
     let newMinutes = prompt("Quantos minutos?")
     if (!newMinutes) {
        timer.reset()
        return false
    }
    
        return newMinutes
    }

    return {
        play,
        pause,
        reset,
        getMinutes,
        soundOn,
        soundOff
    }
}