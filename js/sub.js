
    function online() {
      $('.popHeader li:first').slideUp(function () {
        $(this).appendTo($('.popHeader')).slideDown();
      });
    }

    setInterval(function () {
      online();
    }, 4000); //popHeader_function



    $(function () {
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
      //hamWeb_function



      const eleWidth = $('.frame ul li').innerWidth()
      let state = false
      let playOn = false
      let direction = 'left'
      let rankAuto

      function play(){
        if(!playOn){
          playOn = true
          rankAuto = setInterval(function(){
            if(direction === 'left'){
              $('.prev').click()
            } else{
              $('.next').click()
            }
          }, 1000)
        };

        if(playOn){
          $('.frame ul li').mouseover(function(){
            stop()
          });
        };
      };//play()

      function stop(){
        if(playOn){
          playOn = false
          clearInterval(rankAuto)
        }
        $('.frame ul li').mouseout(function(){
          play()
        });
      };//stop()

      function left(){
        stop()
        direction = 'left'
        $('.frame ul').animate({left: eleWidth * -1}, 1000, function(){
          $(this).children('li:first').insertAfter($(this).children('li:last'))
          $(this).css('left', 0)
          state = false
          play()
        });
      };//left()

      function right(){
        stop()
        direction = 'right'
        $('.frame ul li:last').insertBefore($('.frame ul li:first'))
        $('.frame ul').css('left', eleWidth * -1)
        $('.frame ul').animate({left: 0}, 1000, function(){
          state = false
          play()
        });
      };//right()

      $('.prev').click(function(){
        if(!state){
          state = true
          left()
        };
      });//prev_btn_click_events

      $('.next').click(function(){
        if(!state){
          state = true
          right()
        };
      });//next_btn_click_event

      $('.prev').click()
      //rankAuto_function

      

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

