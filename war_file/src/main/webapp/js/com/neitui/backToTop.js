$(function() {
	var $backToTopTxt = '<img src="/images/gotop.png"/>';
	var $backToTopEle = $('<div class="backToTop"></div>').appendTo($("body")).html(
			$backToTopTxt).attr("title", "返回顶部").click(function() {
		     $("html, body").animate( {
			     scrollTop : 0
		      }, 120);
	     });
	
	var $backToTopFun = function() {
		var st = $(document).scrollTop();
		var winh = $(window).height();
		var doch=parseInt($(document).height());
		//alert(doch);
		
		if($(".sider .plate").size()==0){
			return;
		}
		var spo = $(".sider .plate").last().offset();
		var spp = $(".sider").position();
		var pp = (st - spo.top + winh);
		
		//look((st - spo.top + winh) + "|" + st + "|" + spo.top + "|" + winh +"|" +doch );
		
		if (pp > 300 && (doch-winh-st)>100) {
			$backToTopEle.css("left",spp.left+"px");
			$backToTopEle.fadeIn();			
		} else {
			$backToTopEle.fadeOut('fast');
		}
		// IE6下的定位
		if (!window.XMLHttpRequest) {
			$backToTopEle.css("top", st + winh - 166);
		}
	};

	
	
	$(window).bind("scroll resize", $backToTopFun);
	$(function() {
		$backToTopEle.hide();
		$backToTopFun();
	});
});