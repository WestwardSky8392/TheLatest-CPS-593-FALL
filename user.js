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