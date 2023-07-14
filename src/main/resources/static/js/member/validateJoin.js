
// 디바운스
let timer=false;//최초 false
const debounce=(e, callback)=> {
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        callback('' + e.target.value);
    }, 100); //200ms 이후 반응(디바운스)
}

// 아이디 정규 표현식
function validateId(strId){
    const reg_Id =/^[a-z]+[a-z0-9]{5,19}$/;
    if(!reg_Id.test(''+strId)){
        return false;
    }
    return true;
}

//비밀번호 정규 표현식
function validatePassword(strPassword){
    const reg_password = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    if(!reg_password.test(''+strPassword)){
        return false;
    }
    return true;
}

// 이름 정규 표현식
function validateName(strName){
    // const reg_name =  /^[가-힣a-zA-Z]+$/;
    const reg_name = /^[가-힣]{2,6}$/;
    if(!reg_name.test(''+strName)){
        return false;
    }
    return true;
}

// 휴대폰 번호 정규 표현식
function validateHp(strHp){
    const reg_hp = /^01(?:0|1|6|7|8|9)(?:\d{3}|\d{4})\d{4}$/;
    if(!reg_hp.test(''+strHp)){
        return false;
    }
    return true;
}

// 이메일 정규 표현식
function validateEmail(strEmail){
    const reg_email = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if(!reg_email.test(''+strEmail)){
        return false;
    }
    return true;
}

// // 닉네임 정규 표현식
function validateNickName(strNickname){
    const reg_nickname =  /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,10}$/;
    if(!reg_nickname.test(''+strNickname)){
        return false;
    }
    return true;
}


// 아이디 유효성 검사
document.querySelector('#mem_id').addEventListener('input', e=>{
    debounce(e, strId=>{
        let errorMsg='';
        if(!validateId(strId)){
            errorMsg='아이디는 6자이상 20자이하 영문으로 가능합니다.';
            document.querySelector('#id_input_box').className='input_box has_error';
            document.querySelector('#mem_id').setAttribute('validateresult', false);
        } else if(checkId(strId)) {
            errorMsg='이미 사용중인 아이디 입니다.';
            document.querySelector('#id_input_box').className='input_box has_error';
            document.querySelector('#mem_id').setAttribute('validateresult', false);
        } else {
            document.querySelector('#id_input_box').className='input_box fill';
            document.querySelector('#mem_id').setAttribute('validateresult', true);
        }
        document.querySelector('#id_input_error').innerHTML=errorMsg;
    })
});

// 비밀번호 유효성 검사
document.querySelector('#mem_pw').addEventListener('input', e=>{
    let strPassword=e.target.value;
    let errorMsg='';
    if(!validatePassword(strPassword)){
        errorMsg='영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)';
        document.querySelector('#password_input_box').className='has_button input_box has_error';
        document.querySelector('#mem_pw').setAttribute('validateresult',false);
    } else {
        document.querySelector('#password_input_box').className='has_button input_box fill';
        document.querySelector('#mem_pw').setAttribute('validateresult',true);
    }
    document.querySelector('#password_input_error').innerHTML=errorMsg;
});

// 이름 유효성 검사
document.querySelector('#mem_name').addEventListener('input', e=>{
    let strName=e.target.value;
    let errorMsg='';
    if(!validateName(strName)){
        errorMsg='이름을 정확히 입력해주세요.';
        document.querySelector('#name_input_box').className='has_button input_box has_error';
        document.querySelector('#mem_name').setAttribute('validateresult',false);
    } else {
        document.querySelector('#name_input_box').className='has_button input_box fill';
        document.querySelector('#mem_name').setAttribute('validateresult',true);
    }
    document.querySelector('#name_input_error').innerHTML=errorMsg;
});

// 휴대폰 번호 유효성 검사
document.querySelector('#mem_hp').addEventListener('input', e=>{
    debounce(e, strHp=>{
        let errorMsg='';
        if(!validateHp(strHp)){
            errorMsg='휴대폰 번호를 정확히 입력해주세요.';
            document.querySelector('#hp_input_box').className='input_box has_error';
            document.querySelector('#mem_hp').setAttribute('validateresult',false);
        } else {
            document.querySelector('#hp_input_box').className='input_box fill';
            document.querySelector('#mem_hp').setAttribute('validateresult',true);
        }
        document.querySelector('#hp_input_error').innerHTML=errorMsg;
    })
});

// 이메일 유효성 검사
document.querySelector('#mem_email').addEventListener('input', e=>{
    debounce(e, strEmail=>{
        let errorMsg='';
        if(!validateEmail(strEmail)){
            errorMsg='이메일을 정확히 입력해주세요.';
            document.querySelector('#email_input_box').className='input_box has_error';
            document.querySelector('#mem_email').setAttribute('validateresult',false);
        } else {
            document.querySelector('#email_input_box').className='input_box fill';
            document.querySelector('#mem_email').setAttribute('validateresult',true);
        }
        document.querySelector('#email_input_error').innerHTML=errorMsg;
    })
});

// 닉네임 유효성, 중복확인
document.querySelector('#mem_nickname').addEventListener('input', e=>{
    debounce(e, strNickname=>{
        let errorMsg='';
        if(!validateNickName(strNickname)){
            errorMsg='닉네임은 특수문자 제외 2-10자로 입력해주세요.';
            document.querySelector('#nickname_input_box').className='input_box has_error';
            document.querySelector('#mem_nickname').setAttribute('validateresult',false);
        } 
        else if(checkNickName(strNickname)) {
            errorMsg='이미 사용중인 닉네임 입니다.';
            document.querySelector('#nickname_input_box').className='input_box has_error';
            document.querySelector('#mem_nickname').setAttribute('validateresult',false);
        }
         else {
            document.querySelector('#nickname_input_box').className='input_box fill';
            document.querySelector('#mem_nickname').setAttribute('validateresult',true);
        }
        document.querySelector('#nickname_input_error').innerHTML=errorMsg;
    })
});




// 버튼 활성화
document.querySelectorAll('#mem_id').forEach((item) =>{
    item.addEventListener('input', e=>{
    let strId=e.target.value;
    if(validateId(strId)){
        document.querySelectorAll('#mem_pw').forEach((item) =>{
            item.addEventListener('input', e=>{
            let strPassword=e.target.value;
        if(validatePassword(strPassword)){
            document.querySelectorAll('#mem_name').forEach((item) =>{
                item.addEventListener('input', e=>{
                let strName=e.target.value;
            if(validateName(strName)){
                document.querySelectorAll('#mem_hp').forEach((item) =>{
                    item.addEventListener('input', e=>{
                    let strHp=e.target.value;
                if(validateHp(strHp)){
                    document.querySelectorAll('#mem_email').forEach((item) =>{
                        item.addEventListener('input', e=>{
                        let strEmail=e.target.value;
                    if(validateEmail(strEmail)){
                        $("#btn_submitSignIn").removeClass("active");
                        $(this).addClass("active");
                        $("#btn_submitSignIn").removeClass("disabled")
                        $('#btn_submitSignIn').attr('disabled', false);
                    }
                })})
            }
         })})
        }
    })})}
})})}
})
});
    
// 아이디 중복확인
function checkId(memId) {
    $.ajax({
        type : 'POST',
        url : '/member/check_id',
        contentType: "application/json",
        data : JSON.stringify({
            "memId" : memId
        }),
        success : function(data) {
            return data;
        },
        error : function(e) {
            return false;
        }
    });
}

//닉네임 중복확인
function checkNickName(memNickName) {
    $.ajax({
        type : 'POST',
        url : '/member/check_nickname',
        contentType: "application/json",
        data : JSON.stringify({
            "memNickName" : memNickName
        }),
        success : function(data) {
            return data;
        },
        error : function(e) {
            return false;
        }
    });
}