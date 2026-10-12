let calculation = localStorage.getItem('calculation') || '';

    displayCalculation()


    function addToCalculation(value) {
        calculation += value;
        localStorage.setItem('calculation',(calculation));
        displayCalculation();
    }

    function displayCalculation(){
        document.querySelector('.js-display').innerHTML = `${calculation}`
    }