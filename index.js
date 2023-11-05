const reloadBtn=document.querySelector('#reload-btn');
const sendBtn=document.querySelector('#send');

sendBtn.addEventListener('click',shortenUrl);
function shortenUrl(){
    var realUrl=document.querySelector('#inputurl').value;
    var apiUrl="https://tinyurl.com/api-create.php?url=" + encodeURIComponent(realUrl);
    shortenedUrlTextarea= document.querySelector('#shortenedUrl');

    fetch(apiUrl).then(response => response.text()).then(data => {
        shortenedUrlTextarea.value = data;
    }).catch(error => {
        shortenedUrlTextarea.value = "Error : Unable to shorten URL!";
    });
}

reloadBtn.addEventListener('click', re);
function re(){
    location.reload();
}