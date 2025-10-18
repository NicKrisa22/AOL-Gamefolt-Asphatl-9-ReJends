var x = document.getElementById("login");
    var y = document.getElementById("register");
    var z = document.getElementById("loveee");

    function login() {
        x.style.left = "50px";
        y.style.left = "450px";
        z.style.left = "0px";
    }

    function register() {
        x.style.left = "-400px";
        y.style.left = "50px";
        z.style.left = "110px";
    }

    //validation
function validateregis() {
    var name = document.getElementById('reg-name').value;
    var email = document.getElementById('reg-email').value;
    var dob = document.getElementById('reg-dob').value;
    var terms = document.getElementById('reg-terms').checked;
    var genderMale = document.querySelector('input[name="gender"][value="male"]').checked;
    var genderFemale = document.querySelector('input[name="gender"][value="female"]').checked;

    if (name === '' || email === '' || dob === '' || (!genderMale && !genderFemale) || !terms) {
        alert('Please fill in all fields and accept the terms and conditions.');
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    var dobDate = new Date(dob);
    var currentDate = new Date();
    if (dobDate >= currentDate) {
        alert('Please enter a valid date of birth.');
        return false;
    }

    return true; 
}

function validatelogin() {
    var name = document.getElementById('login-name').value;
    var email = document.getElementById('login-email').value;

    if (name === '' || email === '') {
        alert('Please fill in all fields.');
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    var userFound = registeredUsers.some(function(user) {
        return user.name === name && user.email === email;
    });

    if (!userFound) {
        alert('Username or email is incorrect.');
        return false;
    }

    alert('Login successful!');
    window.location.href = 'mainpage.html';
    return true;
}