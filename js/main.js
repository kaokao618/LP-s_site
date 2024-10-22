let accordionDetails = '.js-details';
let accordionSummary = '.js-details-summary';
let accordionContent = '.js-details-content';
let speed = 300

$(accordionSummary).each(function() {
  $(this).on("click", function(event) {
  	// デフォルトの挙動を無効化
    event.preventDefault();
    // summaryにis-activeクラスを切り替え
    $(this).toggleClass("is-active");

    if ($(this).parent($(accordionDetails)).attr("open")) {
      // アコーディオンを閉じるときの処理
      $(this).nextAll($(accordionContent)).slideUp(speed, function() {
        // アニメーションの完了後にopen属性を取り除く
        $(this).parent($(accordionDetails)).removeAttr("open");
      });
    } else {
      // アコーディオンを開くときの処理
      // open属性を付ける
      $(this).parent($(accordionDetails)).attr("open", "true");
      // いったんdisplay:none;してからslideDownで開く
      $(this).nextAll($(accordionContent)).hide().slideDown(speed);
    }
  })
})

$('a[href^="#"]').click(function () {

      let href = $(this).attr("href");
      
      let target = $(href == "#" || href == "" ? "html" : href);
      
      let position = target.offset().top;
      
      $("html, body").animate({ scrollTop: position }, 600, "swing");

      return false; 
    });

    $('.hamburger').on('click', function() {
        
        if ($('header').hasClass('open')) {
          
          $('header').removeClass('open');
    
        } else {
          
          $('header').addClass('open');
        }
      });
    
      $(".mask").on("click", function() {
        $("header").removeClass("open");
      });
    
      $("nav a").on("click", function() {
        $("header").removeClass("open")
      });

      $(".to-contact").on("click", function() {
        $("header").removeClass("open")
      });