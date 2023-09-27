const inputElement = document.querySelector('#capslockDetector')
const capsWarning = document.querySelector('.caps')
const numWarning = document.querySelector('.num')

inputElement.addEventListener('keyup', (e) => {
    let isCapsActive = e.getModifierState('CapsLock')

    if(isCapsActive){
        capsWarning.style.display = 'block'
    }
    else{
        capsWarning.style.display = 'none'
    }
    
})