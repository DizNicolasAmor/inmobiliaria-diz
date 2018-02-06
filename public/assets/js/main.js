$(document).ready( () => {
  let navItems = [
            'nav-inicio', 
  					'nav-institucional', 
  					'nav-propiedades', 
  					'nav-preguntas', 
  					'nav-contacto'];


  /* I want <navbar> to collapse when I click, but if the <navbar> 
is displayed along on a large screen, simply do nothing. */
  $(".navbar-collapse").collapse('hide');

  $('.nav-li').click( () => {
    $(".navbar-collapse").collapse('hide');
  });

  //style active nav-item
  navItems.forEach( (item) => {
	  $('#' + item).click( () => {
  		$('.nav-li').removeClass('nav-li-active');
	    $('#' + item).addClass('nav-li-active');
	  });  	
  });

});