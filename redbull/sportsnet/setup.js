
 /**
 * Red Bull - Sportsnet Setup - All Pages
 * @version: 3
 * @position: Before </BODY>
 * @rules: All pages
 */
 
jQuery(document).ready(function() {
setTimeout(function() {

    
jQuery(document)

/************************ PHASE 2 ****************************************************************/

    //header menu---
    .off('tracking', 'ul.nav.navbar-nav.nav-tabs.navbar-menu, #sidebar.sidebar-offcanvas')
	.on('tracking', 'ul.nav.navbar-nav.nav-tabs.navbar-menu, #sidebar.sidebar-offcanvas', function(event, data) {
		if (!data.ck || !data.ck[1]) {
	     data = jQuery.extend(true, data, {ck: {1:'menu'}} ); 
	  	}
	     
	})	

    // Sportsnet logo---
    .off('tracking', 'a.sn-logo')
	.on('tracking', 'a.sn-logo', function(event, data) {
	data = jQuery.extend(true, data, {ck: {1:'logo'}} );
	    	
	})
    
	//Teamroom Manual download button---
	.off('tracking', 'ul.nav-sidebar li:eq(4)')
	.on('tracking', 'ul.nav-sidebar li:eq(4)', function(event, data) {
	data = jQuery.extend(true, data, {ck: {1:'download'}} );
	
    })
    
    .off('tracking', 'ul.nav-sidebar li:eq(0)')
	.on('tracking', 'ul.nav-sidebar li:eq(0)', function(event, data) {
	 	var temp = window.wt.contentId;
	    var str = temp.replace('index.news.list', 'sports-news');
	    data = jQuery.extend(true, data, {ct: str});
	
    })

     //show all---
	.off('tracking', 'a.pull-right')
	.on('tracking', 'a.pull-right', function(event, data) {
		if (!data.ck || !data.ck[1]) {
	    	data = jQuery.extend(true, data, {ct: window.wt.contentId+'.news.show.all', ck: {1:'enhanced-options', 2:'headline'}} );
		}
  	})

 //  //Athletes-Athlete news button---
 //   .off('tracking', '.sn-mar5-n')
	// .on('tracking', '.sn-mar5-n', function(event, data) {
	// 	if (!data.ck || !data.ck[1]) {
	//     	data = jQuery.extend(true, data, {ct: window.wt.contentId+'.create.new.athlete.news', ck: {1:'button', 2:'headline', 6:'create'}} );
	// 	}
 // 	})
 
    .off('tracking', '.sub-header, .sn-add-content-btn')
   	.on('tracking', '.sub-header, .sn-add-content-btn', function(event, data) {
	    	data = jQuery.extend(true, data, {ct: window.wt.contentId+'.create.new.athlete.news', ck: {1:'button', 2:'headline', 6:'create'}} );
  	})
 
   	
  	//show more for Athlete upcoming activites---
    .off('tracking', '.eventsTableHorizontalWrapper')
	.on('tracking', '.eventsTableHorizontalWrapper', function(event, data) {
			var $this = jQuery(this),
			$item = jQuery(event.target);
		    data = jQuery.extend(true, data, {ct: window.wt.contentId+'.upcoming_athletes_activities.'+$item.text(), ck:{1: 'enhanced-options', 2:'content'} } );
	})

	//New Athlete/team (problem, exclude class)
	.off('tracking', '#athletes:not(.list-group-item)')
	.on('tracking', '#athletes:not(.list-group-item)', function(event, data) {
		data = jQuery.extend(true, data, {ct: window.wt.contentId+'.create.new.athletes.and.teams', ck: {1:'button', 6:'create'}} ); 
  	})
   	
  	//New Athlete upcoming activities---
	.off('tracking', '.sn-add-content-btn')
	.on('tracking', '.sn-add-content-btn', function(event, data) {
		//if (!data.ck || !data.ck[1]) {
	    	data = jQuery.extend(true, data, {ct: window.wt.contentId+'.create.new.athletes.upcoming.activities', ck: {1:'button', 6:'create'}} );
	//	}
  	})
  	
  	//Button side-bar right 
	.off('tracking', '.sn-mar5-n')
	.on('tracking', '.sn-mar5-n', function(event, data) {
		if (!data.ck || !data.ck[1]) {
	    	data = jQuery.extend(true, data, {ck: {1:'button', 2:'sidebar-right', 6:'create'}} );
		}
  	})

	 /////////////////////////////////
	 // event views edit, share etc.//
	 /////////////////////////////////
	 
	//  //event view edit---
	// .off('tracking', 'ul.nav.nav-pills.pull-right.snEventActions li:eq(0)')
	// .on('tracking', 'ul.nav.nav-pills.pull-right.snEventActions li:eq(0)', function(event, data) {
	// 	if (!data.ck || !data.ck[1]) {
 //   	data = jQuery.extend(true, data, {ck: {1:'edit', 2:'headline'}} );
	// 	}
	//  })	
	 
	//  //event view download---
	// .off('tracking', 'ul.nav.nav-pills.pull-right.snEventActions li:eq(1)')
	// .on('tracking', 'ul.nav.nav-pills.pull-right.snEventActions li:eq(1)', function(event, data) {
	// 	if (!data.ck || !data.ck[1]) {
 //   	data = jQuery.extend(true, data, {ck: {1:'download', 2:'headline'}} );
	// 	}
		
	//  })	
	 
	//  //event view external factsheet---
	// .off('tracking', 'ul.nav.nav-pills.pull-right.snEventActions li:eq(2)')
	// .on('tracking', 'ul.nav.nav-pills.pull-right.snEventActions li:eq(2)', function(event, data) {
	// 	if (!data.ck || !data.ck[1]) {
 //   	data = jQuery.extend(true, data, {ck: {1:'external factsheet', 2:'headline'}} );
	// 	}
	//  })	 
	 
	// // event view print---
	// .off('tracking', 'ul.nav.nav-pills.pull-right.snEventActions li:eq(3)')
	// .on('tracking', 'ul.nav.nav-pills.pull-right.snEventActions li:eq(3)', function(event, data) {
	// 	if (!data.ck || !data.ck[1]) {
 //   	data = jQuery.extend(true, data, {ck: {1:'print', 2:'headline'}} );
	// 	}
	//  })
	
	// //Edit click---------------------------------------------- sarfaraz
	// .off('tracking', '#eventView ul.nav.nav-pills.pull-right li:eq(0)')
	// .on('tracking',  '#eventView ul.nav.nav-pills.pull-right li:eq(0)', function(event, data) {
	// 	if (!data.ck || !data.ck[1]) {
	// 	data = jQuery.extend(true, data, {ck: {1:'edit', 2:'headline'}} );
   
	// 	}
	// 	})
   
 //  	//Download click---
	// .off('tracking', '#eventView ul.nav.nav-pills.pull-right li:eq(1)')
	// .on('tracking',  '#eventView ul.nav.nav-pills.pull-right li:eq(1)', function(event, data) {
	// 	data = jQuery.extend(true, data, {ck: {1:'download', 2:'headline'}} );
 //  })
   
 //   //External Factsheet click---
	// .off('tracking', '#eventView ul.nav.nav-pills.pull-right li:eq(2)')
	// .on('tracking',  '#eventView ul.nav.nav-pills.pull-right li:eq(2)', function(event, data) {
	// 	data = jQuery.extend(true, data, {ck: {1:'external factsheet', 2:'headline'}} );
 //  })
   
 //   //Print click---
	// .off('tracking', '#eventView ul.nav.nav-pills.pull-right li:eq(3)')
	// .on('tracking',  '#eventView ul.nav.nav-pills.pull-right li:eq(3)', function(event, data) {
	// 	data = jQuery.extend(true, data, {ck: {1:'print', 2:'headline'}} );
 //  })
   //*************************************************************************************************************************************************************
	// .off('tracking', '#eventBasic ul.nav.nav-pills.pull-right li:eq(0)')
	// .on('tracking', '#eventBasic ul.nav.nav-pills.pull-right li:eq(0)', function(event, data) {
 //   	data = jQuery.extend(true, data, {ck: {1:'edit', 2:'headline'}} ); 
	// })
	
	// .off('tracking', '#eventBasic ul.nav.nav-pills.pull-right li:eq(1)')
	// .on('tracking', '#eventBasic ul.nav.nav-pills.pull-right li:eq(1)', function(event, data) {
 //   	data = jQuery.extend(true, data, {ck: {1:'download', 2:'headline'}} ); 
	// })
	
	// .off('tracking', '#eventBasic ul.nav.nav-pills.pull-right li:eq(2)')
	// .on('tracking', '#eventBasic ul.nav.nav-pills.pull-right li:eq(2)', function(event, data) {
 //   	data = jQuery.extend(true, data, {ck: {1:'external factsheet', 2:'headline'}} ); 
	// })
	
		
	// .off('tracking', '#eventBasic ul.nav.nav-pills.pull-right li:eq(3)')
	// .on('tracking', '#eventBasic ul.nav.nav-pills.pull-right li:eq(3)', function(event, data) {
	// 	if(window.wt.contentId.indexOf('athletes.activities') != null){
 //   	data = jQuery.extend(true, data, {ck: {1:'print', 2:'headline'}} ); 
	// 	}
	// 	else if((window.wt.contentId.indexOf('motorsports.events') != null))  {
	// 	  	data = jQuery.extend(true, data, {ck: {1:'download', 2:'headline'}} ); 	
	// 	}
	// })
	
	// .off('tracking', '#eventBasic ul.nav.nav-pills.pull-right li:eq(4)')
	// .on('tracking', '#eventBasic ul.nav.nav-pills.pull-right li:eq(4)', function(event, data) {
	// 	if(window.wt.contentId.indexOf('athletes.activities') != null){
 //   	  data = jQuery.extend(true, data, {ck: {1:'download', 2:'headline'}} ); 
	// 	}
	// 	else if(window.wt.contentId.indexOf('events.event') != null) {
	// 	  	data = jQuery.extend(true, data, {ck: {1:'external factsheet', 2:'headline'}} ); 	
	// 	}
	// })
	
	// .off('tracking', '#eventBasic ul.nav.nav-pills.pull-right li:eq(5)')
	// .on('tracking', '#eventBasic ul.nav.nav-pills.pull-right li:eq(5)', function(event, data) {
 //   	if(window.wt.contentId.indexOf('athletes.activities') != null){
 //   	  data = jQuery.extend(true, data, {ck: {1:'external factsheet', 2:'headline'}} ); 
	// 	}
 //    	else if(window.wt.contentId.indexOf('events.event') != null) {
	// 	  	data = jQuery.extend(true, data, {ck: {1:'print', 2:'headline'}} ); 	
	// 	}
	// })
	
	// .off('tracking', '#eventBasic ul.nav.nav-pills.pull-right li:eq(6)')
	// .on('tracking', '#eventBasic ul.nav.nav-pills.pull-right li:eq(6)', function(event, data) {
 //   	data = jQuery.extend(true, data, {ck: {1:'print', 2:'headline'}} ); 
	// })
	
	 /////////////////////////////////////
	 // news item views edit, share etc.//
	 /////////////////////////////////////
	 
	 //Edit News Item click---
	.off('tracking', '#newsTop.page-header ul li:eq(0)')
	.on('tracking',  '#newsTop.page-header ul li:eq(0)', function(event, data) {
		if (!data.ck || !data.ck[1]) {
		data = jQuery.extend(true, data, {ck: {1:'edit', 2:'headline'}} );
		}
   })
	 
	 //Download item click---
	.off('tracking', '#newsTop.page-header ul li:eq(1)')
	.on('tracking',  '#newsTop.page-header ul li:eq(1)', function(event, data) {
		if (!data.ck || !data.ck[1]) {
		data = jQuery.extend(true, data, {ck: {1:'download', 2:'headline'}} );
		}
   })
   
   	 //Print item click---
	.off('tracking', '#newsTop.page-header ul li:eq(2)')
	.on('tracking',  '#newsTop.page-header ul li:eq(2)', function(event, data) {
		if (!data.ck || !data.ck[1]) {
		data = jQuery.extend(true, data, {ck: {1:'print', 2:'headline'}} );
		}
   })
   
    //Share item click---
	.off('tracking', '#newsTop.page-header ul li:eq(3)')
	.on('tracking',  '#newsTop.page-header ul li:eq(3)', function(event, data) {
		if (!data.ck || !data.ck[1]) {
		data = jQuery.extend(true, data, {ck: {1:'share', 2:'headline'}} );
		}
   })
	 
	  ///////////////////////////////////////////
	 //athlete&team homepage edit, share etc.///
	 ///////////////////////////////////////////
	 
	 //download athletes and teams FIRST STAGE--- 
	.off('tracking', '#gridButtons.nav.nav-pills li:eq(1)')
	.on('tracking', '#gridButtons.nav.nav-pills li:eq(1)', function(event, data) {
    	data = jQuery.extend(true, data, {ck: {2:'content'}} ); 
	})
	
	//download athletes and teams SECOND STAGE--- 
	.off('tracking', '.modal-footer')
	.on('tracking', '.modal-footer', function(event, data) {
    	data = jQuery.extend(true, data, {ck: {1:'download'}} ); 
	})
	
	//print athletes and teams ---
	.off('tracking', '#gridButtons.nav.nav-pills li:eq(2)')
	.on('tracking', '#gridButtons.nav.nav-pills li:eq(2)', function(event, data) {
		if (!data.ck || !data.ck[2]) {
    	data = jQuery.extend(true, data, {ck: {1:'print', 2:'content'}} ); 
	    }
	})
	 
	  ///////////////////////////////////////
	 //athlete/team views edit, share etc.///
	 ////////////////////////////////////////
	 
	  //Edit Item click---comms  external factsheet--cultures
	.off('tracking', '#athleteTop ul.nav.nav-pills.pull-right li:eq(0)')
	.on('tracking',  '#athleteTop ul.nav.nav-pills.pull-right li:eq(0)', function(event, data) {
		var temp = window.wt.contentId;
		var reg = temp.indexOf('opinionleaders');
		 if(reg > -1) {
		 	if (!data.ck || !data.ck[1]) {
	     	 data = jQuery.extend(true, data, {ck: {1:'', 2:'headline'}} );
		 	}
		}
		
	     else  {
	     	if (!data.ck || !data.ck[1]) {
                data = jQuery.extend(true, data, {ck: {1:'edit', 2:'headline'}} );	     	   
	          }
	     }
    })
	 
	 	 
   //Edit Communication Info click---comms print--cultures
	.off('tracking', '#athleteTop ul.nav.nav-pills.pull-right li:eq(1)')
	.on('tracking',  '#athleteTop ul.nav.nav-pills.pull-right li:eq(1)', function(event, data) {
		var temp = window.wt.contentId;
		var reg = temp.indexOf('opinionleaders');
		 if(reg > -1) {
		 	if (!data.ck || !data.ck[1]) {
	     	 data = jQuery.extend(true, data, {ck: {1:'print', 2:'headline'}} );
		 	}
	     }
	     else {
	     	    if (!data.ck || !data.ck[1]) {
	     		data = jQuery.extend(true, data, {ck: {1:'edit communication info', 2:'headline'}} );
	     	    }
	     	  }
   })
   
   	 	 
   //Download click 1st stage
	.off('tracking', '#athleteTop ul.nav.nav-pills.pull-right li:eq(2)')
	.on('tracking',  '#athleteTop ul.nav.nav-pills.pull-right li:eq(2)', function(event, data) {
		data = jQuery.extend(true, data, {ck: {2:'headline'}} );
   })
   
    //External Factsheet click
	.off('tracking', '#athleteTop ul.nav.nav-pills.pull-right li:eq(3)')
	.on('tracking',  '#athleteTop ul.nav.nav-pills.pull-right li:eq(3)', function(event, data) {
		data = jQuery.extend(true, data, {ck: {1:'external factsheet', 2:'headline'}} );
   })
   
    //Print click
	.off('tracking', '#athleteTop ul.nav.nav-pills.pull-right li:eq(4)')
	.on('tracking',  '#athleteTop ul.nav.nav-pills.pull-right li:eq(4)', function(event, data) {
		data = jQuery.extend(true, data, {ck: {1:'print', 2:'headline'}} );
   })
	 
	 
	 //car page
	 
	.off('tracking', '#eventcarTop.page-header ul li:eq(0)')
	.on('tracking', '#eventcarTop.page-header ul li:eq(0)', function(event, data) {
    	data = jQuery.extend(true, data, {ck: {1:'edit', 2:'headline'}} ); 
	})
	 
	.off('tracking', '#eventcarTop.page-header ul li:eq(1)')
	.on('tracking', '#eventcarTop.page-header ul li:eq(1)', function(event, data) {
    	data = jQuery.extend(true, data, {ck: {1:'print', 2:'headline'}} ); 
	})
	
		 
	  ////////////////////////////////////////
	 //tools views edit, share etc.//////////
	 ////////////////////////////////////////
	 
   //Edit click---
	.off('tracking', '#toolView ul.nav.nav-pills.pull-right li:eq(0)')
	.on('tracking',  '#toolView ul.nav.nav-pills.pull-right li:eq(0)', function(event, data) {
		data = jQuery.extend(true, data, {ck: {1:'edit', 2:'headline'}} );
   })

   //Download click---
	.off('tracking', '#toolView ul.nav.nav-pills.pull-right li:eq(1)')
	.on('tracking',  '#toolView ul.nav.nav-pills.pull-right li:eq(1)', function(event, data) {
		data = jQuery.extend(true, data, {ck: {1:'download', 2:'headline'}} );
   })
   
   //Print click---
	.off('tracking', '#toolView ul.nav.nav-pills.pull-right li:eq(2)')
	.on('tracking',  '#toolView ul.nav.nav-pills.pull-right li:eq(2)', function(event, data) {
		data = jQuery.extend(true, data, {ck: {1:'print', 2:'headline'}} );
   })

  //Edit Topic Motorsports->topics-> view click---
	.off('tracking', '#topicTop ul.nav.nav-pills.pull-right li:eq(0)')
	.on('tracking', '#topicTop ul.nav.nav-pills.pull-right li:eq(0)', function(event, data) {
		data = jQuery.extend(true, data, {ck: {1:'edit', 2:'headline'}} );
   })


    //header---
    .off('tracking', '.navbar-collapse')
	.on('tracking', '.navbar-collapse', function(event, data) {
	  data = jQuery.extend(true, data, {ck: {2:'header'}} ); 
	 })
	
    //sidebar menu---
    .off('tracking', '.nav-sidebar')
	.on('tracking', '.nav-sidebar', function(event, data) {
	  data = jQuery.extend(true, data, {ck: {2:'sidebar'}} ); 
	})
	
	//Athelete-Athlete news-new news button
	.off('tracking', '.pull-left, .sn-add-content-btn')
	.on('tracking', '.pull-left, .sn-add-content-btn', function(event, data) {
    	data = jQuery.extend(true, data, {ck: {2:'headline'}} );
	 })
	 
	 //Athlete profile flyout button---
	.off('tracking', 'ul.dropdown-menu.dropdown-menu-left')
	.on('tracking', 'ul.dropdown-menu.dropdown-menu-left', function(event, data) {
    	data = jQuery.extend(true, data, {ck: {1:'flyout', 6:'create'}} );
	 })
	 
	 .off('tracking', '#athleteView, .dropdown-menu.dropdown-menu-right')
	.on('tracking', '#athleteView, .dropdown-menu.dropdown-menu-right', function(event, data) {
		if (!data.ck || !data.ck[6]) {
    	data = jQuery.extend(true, data, {ck: {1:'flout', 2:'headline', 6:'create'}} );
		}
	 })


	 ////////// PROFILE related tasks here btn btn-default btn-sm dropdown-toggle
	 
	//profile click
	.off('tracking', '.sn-notification-badge')
	.on('tracking', '.sn-notification-badge', function(event, data) {
		if (!data.ck || !data.ck[1]) {
    	 	data = jQuery.extend(true, data, {ct:'sportsnet_redbull_com.profile', ck: {1:'flyout', 2:'header'}} );
	   }
	 })
	 
	 //Athletes click
	.off('tracking', 'ul#dropdownProfile > li > a:eq(0)')
	.on('tracking', 'ul#dropdownProfile > li > a:eq(0)', function(event, data) {
		if (!data.ck || !data.ck[1]) {
    	 	data = jQuery.extend(true, data, {ck: {1:'flyout', 2:'header', 6:'my-athletes'}} );
		}
	 })
	 // for all second-level items click
	.off('tracking', 'ul.nav.nav-second-level.collapse.in')
	.on('tracking', 'ul.nav.nav-second-level.collapse.in', function(event, data) {
		if (!data.ck || !data.ck[1]) {
    	 	data = jQuery.extend(true, data, {ck: {1:'flyout', 2:'header', 6:'pending-approvals'}} );
		}
	 })
	 
	 //Event/Athletes Activities click
	.off('tracking', 'ul#dropdownProfile > li > a:eq(1)')
	.on('tracking', 'ul#dropdownProfile > li > a:eq(1)', function(event, data) {
		if (!data.ck || !data.ck[1]) {
    	 	data = jQuery.extend(true, data, {ck: {1:'flyout', 2:'header', 6:'activities'}} );
		}
	 })
	
	 //Event Vehicles click
	.off('tracking', 'ul#dropdownProfile > li > a:eq(2)')
	.on('tracking', 'ul#dropdownProfile > li > a:eq(2)', function(event, data) {
		if (!data.ck || !data.ck[1]) {
    	 	data = jQuery.extend(true, data, {ck: {1:'flyout', 2:'header', 6:'event-vehicles'}} );
		}
	 })
	
	 
	 //Shopping cart
	.off('tracking', '#dropdownProfile a')
	.on('tracking', '#dropdownProfile a', function(event, data) {
	    	var $this = jQuery(this),
			href = $this.attr('href') || '';
			if(href == '#/cart/list')
			{
				data = jQuery.extend(true, data, {ct: 'sportsnet.redbull.com.profile.cart.list', ck: {1:'flyout', 2:'header', 6:'my_orders'}} );
			}
	})
	
	 //view profile click		
	.off('tracking', 'ul.dropdown-menu.dropdown-alerts.dropdown-menu-right li:eq(1)')
	.on('tracking', 'ul.dropdown-menu.dropdown-alerts.dropdown-menu-right li:eq(1)', function(event, data) {
	//	if (!data.ck || !data.ck[1]) {
    	 	data = jQuery.extend(true, data, {ck: {1:'flyout', 2:'header', 6:'profile-view'}} );
	//	}
	 })
	 
	 //notification click
	.off('tracking', 'ul.dropdown-menu.dropdown-alerts.dropdown-menu-right li.sn-list-item')
	.on('tracking', 'ul.dropdown-menu.dropdown-alerts.dropdown-menu-right li.sn-list-item', function(event, data) {
		if (!data.ck || !data.ck[1]) {
    	 	data = jQuery.extend(true, data, {ck: {1:'flyout', 2:'header', 6:'notification'}} );
		}
	 })

	 //tools 
	.off('tracking', 'ul#dropdownProfile > li > a:eq(3)')
	.on('tracking', 'ul#dropdownProfile > li > a:eq(3)', function(event, data) {
		if (!data.ck || !data.ck[1]) {
    	 	data = jQuery.extend(true, data, {ck: {1:'flyout', 2:'header', 6:'my-lists'}} );
		}
	})
	 
 
 //PHASE-3
	
	// Athlete profile view select year
  .linkTrackInit('mousedown', 'a')
	.off('tracking', 'a.select2-choice')
	.on('tracking', 'a.select2-choice', function(event, data) {
		if (!data.ck || !data.ck[1]) {
    	 	data = jQuery.extend(true, data, {ck: {1:'kutta', 2:'kamina', 6:'haramkhor'}} );
		}
	 })
	 
	 
	// SEARCH
	
	// // Know-how search
	.linkTrackInit('mousedown', 'span.input-group-btn')
    .off('tracking', 'span.input-group-btn')
	.on('tracking', 'span.input-group-btn', function(event, data) {
		data = jQuery.extend(true, data, {ct: window.wt.contentId+'.search.start', ck:{1:'search_start', 2:'content', 6:'know-how-search'}} );
		
	})

    // Reset search ALL PAGES
    .linkTrackInit('click', 'button[type="reset"]')
   	.off('tracking', '#sidebar, button[type="reset"]')
	.on('tracking', '#sidebar, button[type="reset"]', function(event, data) {
		var foo = window.wt.contentId;
		var reg = foo.indexOf('athletes.athlete');
		var reg1 = foo.indexOf('events.home');
		 if(reg > -1)
		    {
	    	  data = jQuery.extend(true, data, {ct: window.wt.contentId+'.delete', ck:{1:'search_delete', 2:'sidebar-right', 6:'athletes-qsearch'}} );
		    }
		 
		 if(reg1 > -1)
         	{
		      data = jQuery.extend(true, data, {ct: window.wt.contentId+'.delete', ck:{1:'search_delete', 2:'sidebar-right', 6:'events-qsearch'}} );
        	}
	})
	
	//main search
    .linkTrackInit('mousedown', 'button[type="submit"]')
    .off('tracking', '#search-form.input-group-btn, button[type="submit"]')
	.on('tracking', '#search-form.input-group-btn, button[type="submit"]', function(event, data) {
		data = jQuery.extend(true, data, {ct: window.wt.contentId, ck:{1:'search_start', 2:'header', 6:'mainsearch'}} );
	})


  //Calendar search  NO Button type 
    .linkTrackInit('mousedown', 'input[type=button]')
  	.off('tracking', '#sidebar, input[type=button]')
	.on('tracking', '#sidebar, input[type=button]', function(event, data) {
		 var textButton = jQuery('input[type=button]').text();
		 if(textButton == 'Search') {
		 data = jQuery.extend(true, data, {ck: {1:'kutta', 2:'kamina', 6:'haramkhor'}} );
		 }
		 else if (textButton == 'Reset Filter') {
		 	data = jQuery.extend(true, data, {ck: {1:'eeea', 2:'kamna', 6:'hhor'}} );
		 }
	})
	
	// Event and Series search
	
	

  }, 400);  
    
     
 });