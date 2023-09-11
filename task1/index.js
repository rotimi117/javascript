function validateForm() {
    const value = ""
    const firstname = document.querySelector('.firstname').value;
    const lastname = document.querySelector('.lastname').value;
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;
    const confirmPassword = document.querySelector('.confirm-password').value;

    if (firstname === "" || lastname === "" || email === "" || password === "" || confirmPassword ==="") {
        alert('Please fill in all fields.');
    } else {
        
            alert('Registration successful!');
        }
    }



