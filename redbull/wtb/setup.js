jQuery(document).ready(function() {
	
	var startTrigger = startTrigger || function(sendinfoInformations, pixel, triggerFunction) {
	if (!triggerFunction(sendinfoInformations, pixel))
	    window.setTimeout(function() {
	        startTrigger(sendinfoInformations, pixel, triggerFunction)
	    }, 200)
};


setTimeout(function() {
	
		var getLinkIdFromURL = function() {
		return window.location.href.replace(RegExp("http.*//", 'ig'), '').split('/').join('.');
	};
	
	// init custom ajax tracking stack
	window.wt_framework = window.wt_framework || {};
	if (!window.wt_framework.customPageUpdate) {
		var pagechangetimer = null;
		// injector for hash change listener 
		window.wt_framework.customPageUpdate = function(e) {
			clearTimeout(pagechangetimer);
			pagechangetimer = setTimeout(function() {
			    // execute functions
			    wts.push(['send', 'pageupdate']);
			}, 800);
		};
	}

    
jQuery(document)

	.off('tracking', '#navBarWeb, .navbar-header')
	.on('tracking', '#navBarWeb, .navbar-header', function(event, data) {
	data = jQuery.extend(true, data, {ck: {1:'logo', 2:'header'}} );
	    	
	})
	
	.off('tracking', 'a#btnNew.btn.btn-default')
	.on('tracking', 'a#btnNew.btn.btn-default', function(event, data) {
	data = jQuery.extend(true, data, {ck: {1:'logo', 2:'header'}} );

    })
  
	
	
}, 400);  
    
     
 });