//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
    const codes = document.querySelectorAll('.code');

    codes.forEach((code, index) => {
        code.addEventListener('input', function () {
            if (this.value.length >= 1) {
                // Move to the next input
                if (index < codes.length - 1) {
                    codes[index + 1].focus();
                }
            }
        });

        code.addEventListener('keydown', function (e) {
            if (e.key === 'Backspace') {
                // Move to the previous input
                if (this.value.length === 0 && index > 0) {
                    codes[index - 1].focus();
                }
            }
        });
    });
