
        document.addEventListener('DOMContentLoaded', function () {
            const codes = document.querySelectorAll('.code');

            codes.forEach((code, index) => {
                code.addEventListener('input', function () {
                    if (this.value.length >= 1) {
                        if (index < codes.length - 1) {
                            codes[index + 1].focus(); // Move to the next input
                        }
                    }
                });

                code.addEventListener('keydown', function (e) {
                    if (e.key === 'Backspace') {
                        if (this.value.length === 0 && index > 0) {
                            codes[index - 1].focus(); // Move to the previous input
                        }
                    }
                });
            });
        });
