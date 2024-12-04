let form2 = document.getElementById("form2")
form2.addEventListener('submit', submitStuff2);

function submitStuff2(e){
    e.preventDefault();
    const USER = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
        }
        console.log(USER)
}

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
