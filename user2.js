let form1 = document.getElementById("form1")
form1.addEventListener('submit', submitStuff);

function submitStuff(e){
    e.preventDefault();
    const USERsignUp = {
        username: document.getElementById("firstName").value,
        password: document.getElementById("lastName").value,
        username: document.getElementById("Email").value,
        password: document.getElementById("username").value,
        username: document.getElementById("password").value
        }
        console.log(USERsignUp)
}
