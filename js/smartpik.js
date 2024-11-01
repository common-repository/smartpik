jQuery(document).ready( function($) {
	
	var asset_host = "http://smartpik.com";
	var sourceUrl = window.location.href;
	var cursorImage = asset_host + "/public/images/cursor-zoom.png";
	var cursorImageIE = asset_host + "/public/images/cursor-zoom-in.cur";
	
    $(".entry img").each(function() {    	
    	
    	var img = $(this);
    	
    	// Important: get absolute url from img DOM element, not from img jquery object!
		var imgSrc = this.src;
		
		// Checks if o.callback is valid url - see http://stackoverflow.com/questions/2723140/validating-url-with-jquery-without-the-validate-plugin
    	if(/^(http|https):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(imgSrc)) {
		  // All good
		} else {
		  jQuery.error("Invalid url [" + imgSrc + "], please use a valid img url");
		  return;
		}
		
		if ((/^(http|https):\/\/localhost/).test(imgSrc) ||
			(/^(http|https):\/\/127.0.0.1/).test(imgSrc)) {
		  jQuery.error("Invalid url [" + imgSrc + "], local urls are not supported, please use a valid img url");
		  return;
		}
    	
    	var postLink = img.parents("div.post").children("h2:first-child").children("a:first-child").attr("href");
    	if (!postLink) {
    		postLink = sourceUrl;
    	}
    	
    	// Checks if o.callback is valid url - see http://stackoverflow.com/questions/2723140/validating-url-with-jquery-without-the-validate-plugin
    	if(/^(http|https):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(postLink)) {
		  // All good
		} else {
		  jQuery.error("Invalid url [" + postLink + "], smartpik requires a valid source url");
		  return;
		}
		
		if ((/^(http|https):\/\/localhost/).test(postLink) ||
			(/^(http|https):\/\/127.0.0.1/).test(postLink)) {
		  jQuery.error("Invalid url [" + postLink + "], local urls are not supported, smartpik requires a valid source url");
		  return;
		}
    	
    	var imgClass = img.attr("class");
    	
    	var picWidth = img.attr("width");    	
		var picHeight = img.attr("height");
		
		var ratio = picWidth/picHeight;
    	
    	// Checks if imgClass starts with wp-, see bottom comment on http://stackoverflow.com/questions/646628/javascript-startswith
    	if ((/^wp-/).test(imgClass)) {
    		
    		// ignore wordpress images like wp-smiley
    		
    	} else if (picWidth < 190 || ratio < 0.4 || ratio > 2.5) {
    		
    		// ignore small images or images with aspect ratio less than 0.4 or more than 2.5
    		
    	} else {
    	
	    	var title = img.attr("alt");
	    	if ("" == title) {
	    		var title = img.attr("title");
		    	if ("" == title) {
	    			title = "No Title";
		    	}
	    	}
	    	
	    	var portrait = false;
			if ( ratio < 1 ) {
				portrait = true;
			}
			var iframeHeight = "33";
			if (picWidth < 350) { // Set iframe height for small width sharebar
				iframeHeight = "66";
			}
			var iframeWidth = picWidth;		
	    	if (iframeWidth < 190) { // Minimum iframe width is 190
	    		iframeWidth = 190;
	    	}
			
	    	$.getJSON(
	    		asset_host + "/pic.json?picSourceUrl=" + imgSrc + "&sourceUrl=" + postLink + "&title=" + title + "&portrait=" + portrait + "&callback=?",
	    		function(data) {    					
	    			var iframeSrc = asset_host + '/sharebar/' + data.picId + '?width=' + picWidth;
	    			var iframeId = "smartpik-" + data.picId;
	    			
	    			var divStyle = "width:" + iframeWidth + "px; clear:both;";
	    			if (img.hasClass("aligncenter")) {
	    				divStyle = divStyle + " margin:auto;";
	    			} else {
	    				divStyle = divStyle + " margin:0;";
	    			}
	    			
	    			img.after('<div style="' + divStyle + '"><iframe id="' + iframeId + '" scrolling="no" width="' + iframeWidth + '" height="' + iframeHeight + '" frameborder="0" allowtransparency="true"></iframe></div>');
	    			
	    			img.hover(function() {
	                    $(this).css("cursor", "url('" + cursorImage + "'), url('" + cursorImageIE + "'), -moz-zoom-in");
		            },function() {
		                $(this).css("cursor", "default");
		            });
	    			
	    			img.click(function() {
	    				window.location.href = asset_host + "/lightbox/" + data.picId;
			    	});
			    	
			    	// force reload otherwise firefox doesn't load iframe properly
			    	$('#' + iframeId).attr('src', iframeSrc);
	    		});
	    		
    	}
    	    	
  	});
  	
});