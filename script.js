const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.value) {
            // Move focus to the next input
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }
    });

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace') {
            if (input.value === '') {
                // Move focus to the previous input
                if (index > 0) {
                    inputs[index - 1].focus();
                }
            }
        }
    });
});

// Automatically focus the first input on page load
inputs[0].focus();