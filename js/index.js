$(document).ready(function(){
  // alert('ddd')
  $('.modal_button button').click(function(){
  $('.modal_button .modal').toggle()
  $('.bg').fadeToggle()
  })

  


  $(window).scroll(function() {
    if($(this).scrollTop() >= 300) {
    $('.gotop').fadeIn();
    } else {
    $('.gotop').fadeOut();
    }
    })
    $('.gotop').click(function(e) {
    e.preventDefault();
    $('html, body').stop().animate({
    scrollTop: 0
    }, 500);
    })


});

  







  





// $(document).ready(function(){
//   $('header nav > ul').mouseenter(function(){
//     $('header').stop().animate({
//       height : '300px'
//     }, 300)
//     $('header nav > ul').mouseleave(function(){
//       $('header').stop().animate({
//         height :'50px'
//       }, 300)
//     })
//   })
// })

// $(function(){
  // popupbtn a를 클릭했을 때 할일 ㄱ
  //$('.popup-btn a').click(function(e){
    // a 동작을 막고 ㄱ
    // e.preventDefault();
    // popupbtn a에 active 클래스가 토글되도록 ㄱ
    // $('.popup-btn a').toggleClass('active')
  // })
  // popupbtn i 클래스를 업/다운 되도록 바꾸기 ㄱ
  // $('.popup-btn i').toggleClass('fa-angles-up fa-angles-down')


  // popupbtn 클릭했을 때 할일 ㄱ
  // $('popup-btn').click(function(){
    // popuptext가 내려갔다 올라갔다 번갈아가도록 ㄱ
    // $('popup-text').slideToggle()
  //})

//   $('.popup-btn > a').click(function(e){
//     e.preventDefault()
//     $('.popup-btn a').toggleClass('active')
//     $('.popup-btn i').toggleClass('fa-angles-up fa-angles-down')
//   })
 
//   $('.popup-btn').click(function(){
//     $('.popup-text').slideToggle();
//   })
// })
