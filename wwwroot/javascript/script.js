
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('newsletterForm').addEventListener('submit', function (event) {
        window.scrollTo(0, 0); // Scroll to top on form submission
        event.preventDefault();
        const name = document.getElementById('fullName');
        const email = document.getElementById('emailAddress');
        let valid = true;

        // Name validation
        if (!name.value.trim()) {
            name.classList.add('is-invalid');
            valid = false;
        } else {
            name.classList.remove('is-invalid');
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailPattern.test(email.value)) {
            email.classList.add('is-invalid');
            valid = false;
        } else {
            email.classList.remove('is-invalid');
        }

        if (valid) {
            alert('Thank you for subscribing!');
            document.getElementById('newsletterForm').reset();
            const modal = bootstrap.Modal.getInstance(document.getElementById('newsletterModal'));
            modal.hide();
        }
    });
});

(function () {
    var forms = document.querySelectorAll('.needs-validation');

    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
})();

const formModal = document.getElementById('newsletterModal');
if (formModal) {
    formModal.addEventListener('hidden.bs.modal', function () {

    const form = document.getElementById('newsletterForm');

    // reset the validation
    if(form) {
        form.classList.remove('was-validated');
        form.reset();
    }
})};

function reorderBoxesForSmallScreens() {
    const container = document.querySelector('.grid-boxes');
    const boxes = Array.from(container.children);

    if (window.innerWidth <= 768) {
        // Sort in descending order using data-index
        boxes.sort((a, b) => {
            var result = a.getAttribute('small-index') - b.getAttribute('small-index');
            return result;
        });

        // Clear container and re-append in new order
        container.innerHTML = '';
        boxes.forEach((box, index) => {
            // Reset classes
            box.classList.remove('light-box', 'dark-box');

            // Alternate styles starting with white background
            switch (index) {
                case 0:
                    box.textContent = 'NUMERO UNO';
                    box.classList.add('light-box');
                    break;
                case 1:
                    box.textContent = 'NUMERO DOS';
                    box.classList.add('dark-box');
                    break;
                case 2:
                    box.textContent = 'NUMERO TRES';
                    box.classList.add('light-box');
                    break;
                case 3:
                    box.textContent = 'NUMERO QUATRO';
                    box.classList.add('dark-box');
                    break;
                case 4:
                    box.textContent = 'NUMERO CINCO';
                    box.classList.add('light-box');
                    break;
                case 5:
                    box.textContent = 'NUMERO SEIS';
                    box.classList.add('dark-box');
                    break;
            }

            container.appendChild(box);
        });

        // need to add two additional elements
        if (boxes.length < 8) {
            addAdditionalBoxes();
        }
    }
}

function addAdditionalBoxes() {
    const container = document.querySelector('.grid-boxes');
    const boxSiete = document.createElement('div');
    boxSiete.textContent = 'NUMERO SIETE';
    boxSiete.className = 'grid-box col-6 col-md-6 light-box';
    boxSiete.setAttribute('small-index', '7');
    boxSiete.setAttribute('large-index', '7');
    const boxOcho = document.createElement('div');
    boxOcho.textContent = 'NUMERO OCHO';
    boxOcho.className = 'grid-box col-6 col-md-6 dark-box';
    boxOcho.setAttribute('small-index', '8');
    boxOcho.setAttribute('large-index', '8');
    container.appendChild(boxSiete);
    container.appendChild(boxOcho);
}

window.addEventListener('DOMContentLoaded', reorderBoxesForSmallScreens);
window.addEventListener('resize', reorderBoxesForSmallScreens);

function reorderBoxesForLargeScreens() {
    const container = document.querySelector('.grid-boxes');
    const boxes = Array.from(container.children);

    if (window.innerWidth >= 768) {
        if (boxes.length > 6) {
            // If there are less than 6 boxes, add the missing ones
            boxes.splice(6, 2);
        }
        // Sort in descending order using data-index
        boxes.sort((a, b) => {
            var result = a.getAttribute('large-index') - b.getAttribute('large-index');
            return result;
        });

        // Clear container and re-append in new order
        container.innerHTML = '';
        boxes.forEach((box, index) => {
            // Reset classes
            box.classList.remove('light-box', 'dark-box');

            // Alternate styles and set correct text
            switch (index) {
                case 0:
                    box.textContent = 'NUMERO ONE';
                    box.classList.add('light-box');
                    break;
                case 1:
                    box.textContent = 'NUMERO FOUR';
                    box.classList.add('dark-box');
                    break;
                case 2:
                    box.textContent = 'NUMERO TWO';
                    box.classList.add('dark-box');
                    break;
                case 3:
                    box.textContent = 'NUMERO FIVE';
                    box.classList.add('light-box');
                    break;
                case 4:
                    box.textContent = 'NUMERO THREE';
                    box.classList.add('light-box');
                    break;
                case 5:
                    box.textContent = 'NUMERO SIX';
                    box.classList.add('dark-box');
                    break;
            }

            container.appendChild(box);
        });
    }
}

window.addEventListener('DOMContentLoaded', reorderBoxesForLargeScreens);
window.addEventListener('resize', reorderBoxesForLargeScreens);