    $(document).ready(function () {
      $('.main_slide').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
      });//main_slide


      
      $('.brand_slide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
      });//brand_slide
    });



    function online() {
      $('.popHeader li:first').slideUp(function () {
        $(this).appendTo($('.popHeader')).slideDown();
      });
    }

    setInterval(function () {
      online();
    }, 4000); //popHeader_function


      const popHeaderBg = $('.popup_box_bg')
      const popHeader = $('.popup_box')
      const popHeaderClose = $('.popup_box .close_btn')

      popHeaderClose.click(function () {
      popHeaderBg.css('display', 'none')
      popHeader.css('display', 'none');
      }); //hamClose_click_event
    


    $(function () {
      $('.close_btn').on('click', function () {
        $('.popup_box').css('display', 'none');
      });//popup_box_click_event

      

      const hamOpen = $('.ham_mobile .ham_icon .ham_open')
      const hamClose = $('.ham_mobile .ham_icon .ham_close')
      const hamMenuBg = $('.ham_mobile .hamMenu')
      const hamMenu = $('.ham_mobile .hamMenu .lnb')

      hamOpen.click(function () {
        hamMenuBg.css('display', 'block')

        hamMenu.stop().animate({
          right: 0
        }, 100);

        hamOpen.css('display', 'none')
        hamClose.delay(300).fadeIn(300)
      }); //hamOpen_click_event

      hamClose.click(function () {
        hamMenuBg.css('display', 'none')

        hamMenu.stop().animate({
          right: '-300px'
        }, 100);

        hamClose.css('display', 'none')
        hamOpen.css('display', 'block')
      }); //hamClose_click_event

      $('.que').click(function () {
        $(this).next('.anw').stop().slideToggle(300);
        $(this).toggleClass('on').siblings().removeClass('on');
        $(this).next('.anw').siblings('.anw').slideUp(300);
      }); //ham_mobile_event
      //hamMenu_function
      


      $('#search_open').on('click', function () {
        $('.search .search_box').slideDown(300).removeClass('on');
      });

      $('#search_close').on('click', function () {
        $('.search .search_box').slideUp(300);
      });//search_click_event



      const btnOpen = $('.hamWeb_icon .web_open')
      const btnClose = $('.hamWeb_icon .web_close')
      const listMenu = $('.ham_web_box')

      btnOpen.click(function () {
        listMenu.stop().animate({
          height: 360
        }, 300);

        btnOpen.css('display', 'none')
        btnClose.css('display', 'block')
      }); //btnOpen_click_event

      btnClose.click(function () {
        listMenu.stop().animate({
          height: 0
        }, 300);

        btnClose.css('display', 'none')
        btnOpen.css('display', 'block')
      }); //btnClose_click_event
      ////hamWeb_function



      $(window).scroll(function () {
        if ($(this).scrollTop() >= 350) {
          $('.promotion .pro_left').fadeIn(500)
          $('.promotion .pro_right').delay(500).fadeIn(500)
        };
      });//promotion_scroll_event



      const tabLi = $('.recipe .recipe_label li')
      const sheetLi = $('.recipe .recipe_sheet li')
      let index = 0

      tabLi.click(function () {
        tabLi.removeClass('on')
        $(this).addClass('on')

        index = $(this).index()

        sheetLi.removeClass('sheet_on')
        sheetLi.eq(index).addClass('sheet_on')
      });//tabRecipe_function



      $('#busi_open').on('click', function () {
        $('.business .business_info').slideDown(300)
        $(this).hide()
        $('#busi_close').show()
      });

      $('#busi_close').on('click', function () {
        $('.business .business_info').slideUp(300)
        $(this).hide()
        $('#busi_open').show()
      });//business_click_event



      $('.btn_top').click(function (e) {
        e.preventDefault()
        $('html, body').stop().animate({
          scrollTop: 0
        }, 500)
      });//btn_top_click_event
    }); 




