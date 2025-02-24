document.addEventListener('DOMContentLoaded', () => {
    const ratingButton = document.querySelectorAll('.rating-btn');
    const submitButton = document.querySelector('.submit-btn');
    const ratingState = document.querySelector('.rating-state');
    const thankState = document.querySelector('.thanks-state');
    let selectedRate = null;

    ratingButton.forEach(button => {
        button.addEventListener('click', () => {
            ratingButton.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            selectedRate = button.innerText;
        })
    })

    submitButton.addEventListener('click', () => {
        if(selectedRate){
            ratingState.style.display = 'none';
            thankState.style.display = 'block';

            const thankMsg = document.createElement('p');
            thankMsg.innerText = `You selected ${selectedRate} out of 5`;
            thankMsg.classList.add('selected-rate');
            thankState.appendChild(thankMsg);
            
            const imgElement = thankState.querySelector('img');
            imgElement.insertAdjacentElement('afterend', thankMsg);


        }else{
            alert('Please select a rating button before submit.')
        }
    })
    
})