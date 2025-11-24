document.querySelectorAll('.code').forEach((input, index) => {
    input.addEventListener('input', function() {
        // Move to the next input field
        if (this.value.length === 1 && index < 5) {
            document.querySelectorAll('.code')[index + 1].focus();
        }
    });

    input.addEventListener('keydown', function(event) {
        // Handle backspace
        if (event.key === 'Backspace' && this.value === '') {
            if (index > 0) {
                document.querySelectorAll('.code')[index - 1].focus();
            }
        }
    });
});