window.onload = function (){
    const btn = document.getElementById('loginBtn');
    btn.addEventListener('click',sendit);
}
function sendit(){

    const memId = document.getElementById('memId');
    const memPw = document.getElementById('memPw');

    if(memId.value==''){
        alert('아이디를 입력하세요');
        prHp.focus()
        return false;
    }

    if(memPw.value==''){
        alert('비밀번호를 입력하세요');
        prUserpw.focus()
        return false;
    }
    document.getElementById('frm').submit(

    );
}