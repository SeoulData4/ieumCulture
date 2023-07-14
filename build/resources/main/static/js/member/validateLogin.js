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
    const reg_id =/^[a-z]+[a-z0-9]{5,19}$/;
    if(!reg_id.test(''+strId)){
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

// 아이디 유효성 검사
document.querySelector('#mem_id').addEventListener('input', e=>{
    debounce(e, strId=>{
        let errorMsg='';
        if(!validateId(strId)){
            errorMsg='아이디는 6자이상 20자이하 영문으로 가능합니다.';
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


// 버튼활성화
document.querySelectorAll('#mem_id').forEach((item) => {
    item.addEventListener('input', e =>{
        let strId = e.target.value;
        if(validateId(strId)) {
            document.querySelectorAll('#mem_pw').forEach((item) => {
                item.addEventListener('input', e => {
                    let strPw = e.target.value;
                    if(validatePassword(strPw)) {
                        $("#login_btn").removeClass("active");
                        $(this).addClass("active");
                        $("#login_btn").removeClass("disabled")
                        $('#login_btn').attr('disabled', false);
                    }
                })
            })
        }
    })
});