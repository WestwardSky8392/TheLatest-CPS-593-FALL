let form = document.getElementById("form2")
if ("form2") form.addEventListener('submit', submitStuff);

function submitStuff(e){
    e.preventDefault();
    const USERsignUp = {
        FName: document.getElementById("firstName").value,
        Lname: document.getElementById("lastName").value,
        Email: document.getElementById("Email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
        }
        console.log(USERsignUp)
}