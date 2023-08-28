function reviewSend(){
     const content = document.getElementById('review-content').value;
     const temp_id = document.getElementById('temp_id').value;
     const temp_pw = document.getElementById('temp_pw').value;
     const star = document.getElementById('star').offsetWidth*1;
     const target_idx = document.getElementById('target_idx').value;

     var radioButtons = document.getElementsByName('is_event');

     // 선택된 라디오 버튼의 value 가져오기
     var is_event;
     for (var i = 0; i < radioButtons.length; i++) {
         if (radioButtons[i].checked) {
             is_event = Boolean(radioButtons[i].value);
             break;
         }
     }

     fetch("http://localhost:9999/api/review_upload", {
         method: "POST",
         headers:{"Content-Type": "application/json"},
         body: JSON.stringify({
            "transaction_time": `${new Date()}`,
            "resultCode": "ok",
            "description": "정상",
            "data":{
                 "content":`${content}`,
                 "temp_id":`${temp_id}`,
                 "temp_pw":`${temp_pw}`,
                 "star":`${star}`,
                 "is_event":`${is_event}`,
                 "target_idx":`${target_idx}`
             }
         })
     }).then((res) => {
               alert("리뷰 등록 성공!")
               location.href="http://localhost:9999/reviews";
               return;
            })

 }