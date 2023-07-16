function login() {
    let memId = $('#mem_id');
    let memPw = $('#mem_pw');

    let loginData = {
        "mem_id" : memId,
        "mem_pw" : memPw
    };
    toast(false,'들어오나')
    // $.ajax({
    //     type : 'POST',
    //     url : '/member/login' ,
    //     contentType: "application/json",
    //     data :  loginData,
    //     success : function (data) {
    //         toast(false, '로그인 성공')
    //         callback(data);
    //     },
    //     error : function (e) {
    //         callback(false);
    //     },
    //     complete : function (data) {
    //     }
    // });

}