let form = document.getElementById("form2")
if (form) form.addEventListener('submit', submitStuff);

function submitStuff(){
    const USERregister = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        email: document.getElementById("Email").value,
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        }
    fetchData('/register', {USERregister}, 'POST');
}