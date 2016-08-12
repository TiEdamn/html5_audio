$( document ).ready(function() {

  	$('#menu').slicknav({
		prependTo:'.mobile-menu',
		label: '',
		closedSymbol: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
		openedSymbol: '<i class="fa fa-angle-down" aria-hidden="true"></i>'
	});
	
	$('.see-close a').click(function(){
		$(this).parents('.see-presentation').slideToggle(300);
		return false;
	})
  	$('.phone-btn li a').click(function(){
  		if(!$(this).hasClass('active')){
  			$('.phone-btn li.active').removeClass('active');
  			$('.phone li.active').removeClass('active');
  			$(this).parent('li').addClass('active');
  			$('.'+$(this).attr('data')).addClass('active');
  		}
  		return false;
  	});
  	$(window).scroll(function() {
		if($(window).scrollTop()>=300){
			$('header').addClass('fixed');
		}else{
			$('header').removeClass('fixed');
		}
	});
	$('.site-button li a').click(function(){
  		if(!$(this).hasClass('active')){
  			$('.site-button li a.active').removeClass('active');
  			$('.site-descr .active').removeClass('active');
  			$(this).addClass('active');
  			$($(this).attr('href')).addClass('active');
  		}
  		return false;
  	});
  	
  	if($('.wow').length>0){
  		new WOW().init();
  	}
  	
  	if($('#fullpage').length>0){
  		$('#fullpage').fullpage({
			//sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
			navigation: true,
			navigationPosition: 'right',
			responsiveWidth: 991
		});
  	}
  	
  	$('[contenteditable]').on('focus', function() {
	    var $this = $(this);
	    $this.data('before', $this.html());
	    return $this;
	}).on('blur keyup paste', function() {
	    var $this = $(this);
	    if ($this.data('before') !== $this.html()) {
	        $this.data('before', $this.html());
	        $this.trigger('change');
	    }
	    return $this;
	});
	$('[contenteditable]').change(function(){
		console.log($(this).text(), $(this).width());
		if($(this).width()>150){
			$(this).css("display","inline");
		}else{
			$(this).css("display","inline-block");
		}
	})

});