// Whirlpool-Resizer plugin
// Created by Michael

(function ($) {
	$.fn.extend({
		wResizer: function (settings) {
			var defaultoptions = {
				image: '.zoom-image', 
				slider: '.zoom-slider', 
				pan: '.zoom-pan', 
				reset: '.zoom-reset', 
				jmove: false, 
				jdrag: true, 
				jslider: true, 
				jstep:0.10, 
				defaultvalue:0.40, 
				minvalue:0.40, 
				maxvalue:1.0,
				initialized: false
			};

			var options = jQuery.extend(defaultoptions, settings || {});

			return this.each(function (i) {

				var image = $(this).find(options.image);

				var container = $(this);
				var jslider;
				var jslidervalue = options.defaultvalue;

				// original width
				var dW = container.width();
				var dH = container.height();
				var oW = image.width();
				var oH = image.height();

				// fix for Chrome
				if(oW == 0)
				{
					$('<img />').attr("src", image.attr("src")).load(function(){
						oW = this.width;
						oH = this.height;
						image.width(oW * options.defaultvalue);
						image.trigger('resize');
					});
				}
				// fix for Chrome end

				for(var item in options)
					image.attr(item, options[item]);

				var oX = 0;
				var oY = 0;
				//
				var offsetX = oX, offsetY = oY;
				//

				if(options.initialized)
				{
					oW = image.attr('jwidth');
					oH = image.attr('jheight');
					oX = image.attr('jX');
					oY = image.attr('jY');
					offsetX = oX;
					offsetY = oY;
				}
				else
				{
					offsetX = oX = image.offset().left;
					offsetY = oY;
					//
					image.attr('jwidth', oW);
					image.attr('jheight', oH);
					image.attr('jX', oX);
					image.attr('jY', oY);
					image.width(oW * options.defaultvalue);
				}

				image.fadeIn();
				image.bind('resize', onresize);

				image.draggable({
					disabled: !options.jdrag, 

					drag: function(e){
						offsetX = image.offset().left-container.offset().left - (container.width()/2 - image.width()/2);
						offsetY = image.offset().top - container.offset().top - (container.height()/2 - image.height()/2);
					}
				});

				function onresize(e){
					var __rX = container.width()/2 - image.width()/2;
					var __rY = container.height()/2 - image.height()/2;
					image.css('left', __rX + offsetX);
					image.css('top', __rY + offsetY);
				}
				var onjmove = function(){
					image.mousemove(function(e){
						var iW = image.width();
						var iH = image.height();
						//
						var offset = container.offset();
						var leftPan = (e.pageX - offset.left + offsetX) * (dW - iW) / (dW);
						var topPan = (e.pageY - offset.top + offsetY) * (dH - iH) / (dH);

						image.css({left: leftPan, top: topPan});
					});
				};
				var setimagecursor = function(style){ image.css('cursor', style); };
				var setcursor = function(style){ container.css('cursor', style); };

				// disable move function for now
				if(options.jmove) 
					onjmove();
				else
					image.mousemove(function(){ });

				if(options.jslider)
				{
					jslider = $(options.slider).slider({
						orientation: 'vertical',
						range: 'min',
						step: options.jstep,
						min: options.minvalue,
						max: options.maxvalue,
						value: options.defaultvalue,
						animate: false,
						slide: function( event, ui ) {
							image.width(oW*ui.value);
							jslidervalue = ui.value;
							image.trigger('resize');
						}
					});
				}
				var jvalidrange = function(val){
					if(val < options.minvalue) val = options.minvalue;
					if(val > options.maxvalue) val = options.maxvalue;
					return val;
				};
				var jwheel = function(e){
					e = $.event.fix(e || window.event);
					e.preventDefault();

					var delta = 0;
					if(e.detail) delta = -e.detail;
					if(e.wheelDelta) delta = e.wheelDelta/40;

					if(delta > 0) 
						delta = options.jstep*delta;
					else
						delta = options.jstep*delta;
					//

					if(options.jslider)
					{
						var current = jslider.slider('value')+delta;
						current = jvalidrange(current);

						image.width(oW*current);
						
						jslider.slider({ value: current });
						jslider.trigger('slider');
						image.trigger('resize');
					}
					else
					{
						jslidervalue += delta;
						var current = jslidervalue;
						current = jvalidrange(current);
						image.width(oW*current);
						image.trigger('resize');
					}
				};

				// Changed the event source from image to image container.
				var types = ['DOMMouseScroll', 'mousewheel'];
				if (window.addEventListener) 
					for ( var i=types.length; i; )
						this.addEventListener( types[--i], jwheel, false );
				else 
					this.onmousewheel = jwheel;

				var __timer = 10;
				var __timeout = 100;
				var __offset = 10;
				var clearTimeInterval = function(){
					clearInterval(__timer);
				};
				
				clearTimeInterval();
				
				$(options.pan).find('div').unbind();
				$(options.pan).find('td').unbind();
				$(options.pan).find('.btn-top').unbind();
				$(options.pan).find('.btn-bottom').unbind();
				$(options.pan).find('.btn-left').unbind();
				$(options.pan).find('.btn-right').unbind();
				$(options.pan).find('.btn-zoom-in').unbind();
				$(options.pan).find('.btn-zoom-out').unbind();
				$(options.pan).find('.btn-reset').unbind();

				$(options.pan).find('div').bind('mouseout', clearTimeInterval);
				$(options.pan).find('div').bind('mouseup', clearTimeInterval);
				$(options.pan).find('td').bind('mouseup', clearTimeInterval);
				$(options.pan).bind('mouseup', clearTimeInterval);

				$(options.pan).find('.btn-top').bind('mousedown', function(){
					__timer = setInterval(function() {
						offsetY-=__offset;
						image.trigger('resize');
					}, __timeout);
				});
				$(options.pan).find('.btn-bottom').bind('mousedown', function(){
					__timer = setInterval(function() {
						offsetY+=__offset;
						image.trigger('resize');
					}, __timeout);
				});
				$(options.pan).find('.btn-left').bind('mousedown', function(){
					__timer = setInterval(function() {
						offsetX-=__offset;
						image.trigger('resize');
					}, __timeout);
				});
				$(options.pan).find('.btn-right').bind('mousedown', function(){
					__timer = setInterval(function() {
						offsetX+=__offset;
						image.trigger('resize');
					}, __timeout);
				});
				
				$(options.pan).find('.btn-zoom-in').bind('mousedown', function(){
					__timer = setInterval(function() {
						var iW = image.width();
						jslidervalue += options.jstep;
						jslidervalue = jvalidrange(jslidervalue)
						image.width(oW*jslidervalue);
						image.trigger('resize');
					}, __timeout);
				});
				$(options.pan).find('.btn-zoom-out').bind('mousedown', function(){
					__timer = setInterval(function() {
						var iW = image.width();
						jslidervalue -= options.jstep;
						jslidervalue = jvalidrange(jslidervalue)
						image.width(oW*jslidervalue);
						image.trigger('resize');
					}, __timeout);
				});
				$(options.pan).find('.btn-reset').bind('click', function(){

					offsetX = oX;
					offsetY = oY;
					
					jslidervalue = options.defaultvalue;
					image.width(oW*jslidervalue);
					if(options.jslider)
						jslider.slider({ value:options.defaultvalue });
					image.trigger('resize');
					//
				});
				$(options.pan).find('.btn-pan').click(function(){
					options.jdrag = !options.jdrag;
					if(options.jdrag)
					{
						image.draggable('enable');
						setimagecursor('move');
						setcursor('pointer');
					}
					else
					{
						image.draggable('disable');
						setimagecursor('default');
						setcursor('default');
					}
				});
				image.trigger('resize');
			});
		}
	});
})(jQuery);

$(function(){
	var $zoomImage = $(".zoom-product .placeholder_product_image img#main_product_image")
	var $seeitwork = $(".zoom-product .product-tooltip-seeitwork");
	
	var oldWidth = $zoomImage.width() / 2;
	setInterval(function(){
		var newWidth = $zoomImage.width();
		if(newWidth > oldWidth + 1){
			$seeitwork.css({"display":"none"});
		}else{
			$seeitwork.css({"display":"block"});
		}
	},100);
});