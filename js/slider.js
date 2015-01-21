$(function(){
	var leftArrow = $('.slider>a.left');
	var rightArrow = $('.slider>a.right');

	function slidePosition(dirrection){
		var active = $('ul.position li.active');
		var nextActive ;
		if (dirrection=='left') nextActive = active.prev();
		else nextActive = active.next();
		
		if (nextActive.length){
			active.removeClass('active');
			nextActive.addClass('active');
		} else{
			if (dirrection=='left') nextActive = $('ul.position li:last-child');
			else nextActive = $('ul.position li:first-child');
			
			active.removeClass('active');
			nextActive.addClass('active');
		}
	}

	function slide(item, dirrection){
		var slider = $('.'+item);
		var prev ;
		if (dirrection=='left') prev = slider.prev();
		else prev = slider.next();

		if (prev.length){
			prev.removeClass('hidden-slide');
			prev.addClass(item);
			slider.addClass('hidden-slide');
			slider.removeClass(item);
		} else{
			if (dirrection=='left')	prev = $('.slidecontent div:last-child');
			else prev = $('.slidecontent div:first-child');

			prev.removeClass('hidden-slide');
			prev.addClass(item);
			slider.addClass('hidden-slide');
			slider.removeClass(item);
		}

			
	}

	

	leftArrow.on('click', function(){
		slide('slide1','left');
		slide('slide2','left');
		slide('slide3','left');

		slidePosition('left')
	})

	rightArrow.on('click', function(){
		slide('slide3','right');
		slide('slide2','right');
		slide('slide1','right');

		slidePosition('right')
	})
	
});
