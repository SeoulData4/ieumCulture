function sendit() {
    let memId = $('#mem_id').val();
    let memPw = $('#mem_pw').val();
    let memName = $('#mem_name').val();
    let memHp = $('#mem_hp').val();
    let memEmail = $('#mem_email').val();
    let memNickname = $('#mem_nickname').val();
    let memGender = $('#mem_gender').val();
    let memBirth = $('#mem_birth').val();

    let sendData = {
            "memId" : memId,
            "memPw" : memPw,
            "memName" : memName,
            "memHp" : memHp,
            "memEmail" : memEmail,
            "memBirth" : memBirth,
            "memGender" : memGender,
            "memNickname" : memNickname
        }

        $.ajax({
            type : 'POST',
            url : '/member/join',
            contentType: "application/json",
            data : JSON.stringify(sendData),
            success : function(data) {
               if(data != null) {
                    location.href="/login"
               }
            },
            error : function(e) {
                
            }
        });
    }


