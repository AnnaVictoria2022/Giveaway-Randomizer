gsap.to('.container', {opacity:1, delay:0.5, duration:2});


const numberOfParticipants = document.querySelector('.numberOfParticipants');
const winner=document.querySelector('.winnerNumber');

numberOfParticipants.addEventListener('keyup', function(event){
    if (event.keyCode === 13){
        winningNumber()
    }
})

function winningNumber(){
        const numberEntered = numberOfParticipants.value;
        if (numberEntered < 1) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter a valid number!',
            })
            document.querySelector('.winnerNumber').style.display = "none";
        }
        const randomizer = Math.ceil(Math.random()*numberEntered);
        document.querySelector('.winnerNumber').textContent = randomizer;
        
}



