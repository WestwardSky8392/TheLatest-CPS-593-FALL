let post = document.getElementById("postForm")
if (post) post.addEventListener('submit', submitStuff);

function submitStuff(){
    const USERpost = {
        content: document.getElementById("content").value,
        caption: document.getElementById("caption").value,

        }
    fetchData('/post', {USERpost}, 'post');
}