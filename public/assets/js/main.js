$(document).ready(function() {
	//Your code goes here.

	//The line below hides all the html elements 
	$('html').hide();

	//The line below slowly reveals the html elements after that guy up there hides them
	$('html').fadeIn(2200);

	//From this line below you'll see many failed attempts at adjusting my scrolling speed
	//But i'll get it eventually

	$('[href]').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if (target.length) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
	//And we finally got it without having to write some bulky shit that loops

	/*This section handles the auto typing animation popularly known as typed*/
	var TxtRotate = function(el, toRotate, period)
	{
  		this.toRotate = toRotate;
  		this.el = el;
  		this.loopNum = 0;
  		this.period = parseInt(period, 10) || 2000;
  		this.txt = '';
  		this.tick();
  		this.isDeleting = false;
	};

	TxtRotate.prototype.tick = function()
	{
  		var i = this.loopNum % this.toRotate.length;
  		var fullTxt = this.toRotate[i];

  		if (this.isDeleting)
  		{
    		this.txt = fullTxt.substring(0, this.txt.length - 1);
  		}
  		else
  		{
    		this.txt = fullTxt.substring(0, this.txt.length + 1);
  		}

  		this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  		var that = this;
  		var delta = 200 - Math.random() * 100; //This affect the speed of writing just edit the first integer/number/digit

  		if (this.isDeleting) { delta /= 2; }

  		if (!this.isDeleting && this.txt === fullTxt)
  		{
    		delta = this.period;
    		this.isDeleting = true;
  		}
  		else if
  			(this.isDeleting && this.txt === '')
  				{
    				this.isDeleting = false;
    				this.loopNum++;
    				delta = 50;//This affects the speed of deleting or backspacing
				}

  		setTimeout(function()
  		{
    		that.tick();
  		}, delta);
	};

		window.onload = function()
		{
  			var elements = document.getElementsByClassName('txt-rotate');
  			for (var i=0; i<elements.length; i++)
  			{
    			var toRotate = elements[i].getAttribute('data-rotate');
    			var period = elements[i].getAttribute('data-period');
    			if (toRotate)
    			{
      				new TxtRotate(elements[i], JSON.parse(toRotate), period);
    			}
  			}
  		// INJECT CSS
  		var css = document.createElement("style");
  		css.type = "text/css";
  		css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  		document.body.appendChild(css);
};

//This section handles the lightbox effect


});



































