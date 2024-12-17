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
    fetchData('/register', {USERregister}, 'post');
}

let form1 = document.getElementById("form1")
if (form1) form1.addEventListener('submit', submitStuff2);
    function submitStuff2(e){
        e.preventDefault();
        const USERlogin = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
            }
            console.log(USERlogin)
    fetchData('/login', {USERlogin}, 'post');
    }
//function from final exam
    async function fetchData(route = '', data = {}, methodType) {
        const response = await fetch(`http://localhost:6000${route}`, {
          method: methodType, // *POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        if (response.ok) {
          return await response.json(); // parses JSON response into native JavaScript objects
        } else {
          throw await response.json();
        }
    }