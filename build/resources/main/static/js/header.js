$(document).ready(function () {
    $('.small-nav').hide();

});

// 검색 버튼 이벤트
//닫기
$(document).on('click', '.cancel', function() {
    $('.shadow').addClass('none');
     $('.search').addClass('none');

});

//열기
$(document).on('click', '.search-btn', function() {
    $('.search').removeClass('none');
    $('.shadow').removeClass('none');
});


// 메뉴 버튼 이벤트
// 메뉴 열기
$(document).on('click', '.list-btn', function() {
    $('.small-nav').show(650);
    $('.list-btn').addClass('none');
    $('.list-cancel, .shadow').removeClass('none');
    $('.search-btn').attr('disabled', true);
})

// 메뉴 닫기
$(document).on('click', '.list-cancel', function() {
    $('.small-nav').hide(650);
    $('.list-btn').removeClass('none');
    $('.list-cancel, .shadow').addClass('none');
    $('.search-btn').attr('disabled', false);
})