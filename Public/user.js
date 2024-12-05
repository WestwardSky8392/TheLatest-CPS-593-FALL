let form2 = document.getElementById("form1")
form2.addEventListener('submit', submitStuff2);

function submitStuff2(e){
    e.preventDefault();
    const USER = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
        }

        console.log(USER)
        //some form of statement will check database is user exists with their password
        // and let them proceed to the post/media aspect of website.
        window.location.href = ('post.html')
    }