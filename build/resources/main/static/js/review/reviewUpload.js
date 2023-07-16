




document.querySelector('.smBtn').onclick = function (){reviewSend()};

function reviewSend(){
    const content = document.getElementById('review-content').value;
    console.log('test === '+content)

    fetch("http://localhost:9999/review_upload", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            "data":{
                "content": `${content}`
            }
        })
    })
}