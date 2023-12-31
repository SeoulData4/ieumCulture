// let isToastShown = false;

// $(document).on('click', '#toastButton', function() {
//     if (isToastShown) return;   // 토스트 메시지가 띄어져 있다면 함수를 끝냄
//     isToastShown = true;
//     $('.toast').addClass('show');    // show라는 클래스를 추가해서 토스트 메시지를 띄우는 애니메이션을 발동시킴
//     setTimeout(function () {
//         // 2700ms 후에 show 클래스를 제거함
//         $('.toast').removeClass('show');
//         isToastShown = false;
//     }, 2700);
// })

function toast(isToastShown,msg){
    if(isToastShown) return;
    isToastShown = true;
    $("#toast").append(msg);
    $('#toast').addClass('show');
    setTimeout(function () {
        // 2700ms 후에 show 클래스를 제거함
        $('.toast').removeClass('show');
        isToastShown = false;
    }, 2700);
}