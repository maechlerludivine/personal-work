$(document).ready(function(){

	$('#niv2').hide();
	$('nav a:first-child').click(function(){
		$('#niv2').slideToggle(400);
		return false;
	});

	$.each($(".section:even"), function() { 
		$(this).children(":eq(1)").after($(this).children(":eq(0)"));
	});

  $('#slider').bxSlider();

	  var tabWrapper = $('.tab'),
	      tabMnu = tabWrapper.find('ul.tabs li'),
	      tabContent = tabWrapper.find('.tab_content > .tabs_item');
	  
	  tabContent.not(':first-child').hide();
	  
	  tabMnu.each(function(i){
	    $(this).attr('data-tab','tab'+i);
	  });
	  tabContent.each(function(i){
	    $(this).attr('data-tab','tab'+i);
	  });
	  
	  tabMnu.click(function(){
	    var tabData = $(this).data('tab');
	    tabWrapper.find(tabContent).hide();
	    tabWrapper.find(tabContent).filter('[data-tab='+tabData+']').show(); 
	  });
	  
	  $('ul.tabs > li').click(function(){
	    var before = $('ul.tabs li.active');
	    before.removeClass('active');
	    $(this).addClass('active');
	   });
});

