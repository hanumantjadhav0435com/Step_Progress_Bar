let steps = document.querySelectorAll('.step');
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');

let currentStep = 1; // start from step 1

function showSteps() {
    for (let i = 0; i < steps.length; i++) {
        if (i < currentStep) {
            steps[i].classList.add('active');
            steps[i].innerHTML = '✔️'; // show tick
        } else {
            steps[i].classList.remove('active');
            steps[i].innerHTML = '❌'; // show cross
        }
    }

    // Disable buttons when at start or end
    prevBtn.disabled = (currentStep === 1);
    nextBtn.disabled = (currentStep === steps.length);
}

// When Next button is clicked
nextBtn.onclick = function() {
    if (currentStep < steps.length) {
        currentStep++;
        showSteps();
    }
}

// When Previous button is clicked
prevBtn.onclick = function() {
    if (currentStep > 1) {
        currentStep--;
        showSteps();
    }
}

// Initial display
showSteps();