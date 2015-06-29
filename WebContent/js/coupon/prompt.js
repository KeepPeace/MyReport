var bg = {
	/**
	 * 显示背景
	 */
	show : function(){
		var width = $(window).width();
		var height = $(window).height();
		var bgObj;
		if($("[data-bg='bg']").length <= 0){
			bgObj=document.createElement("div");
			bgObj.setAttribute("data-bg", "bg");
		} else {
			bgObj = $("[data-bg='bg']")[0];
		}
		document.body.appendChild(bgObj);
		var style = "display:block; position:absolute;top:0;left:0;z-index:400; width:"+width+"px;height:2000px; background:black; filter:Alpha(Opacity=30);opacity:0.3;";
		$("[data-bg='bg']").attr("style",style);
	},
	
	/**
	 * 隐藏背景
	 */
	hide : function(){
		var bgEle = $("[data-bg='bg']")[0];
		bgEle.parentNode.removeChild(bgEle);
	}
}
var prompt = {
	/**
	 * 显示弹框
	 */
	showbox : function(divId){
		bg.show();
		var showDiv = $("#"+divId);
		var width = $(window).width();
		var height = $(window).height();
		var top = height/2 - showDiv.height()/2;
		var left = width/2 - showDiv.width()/2;
		var style = "display:block; position:fixed; top:"+top+"px;left:"+left+"px;z-index:500;";
		showDiv.attr("style",style)
	},

	/**
	 * 隐藏弹框
	 */
	hidebox : function(divId){
		bg.hide();
		var showDiv = $("#"+divId);
		showDiv.hide();
	}
};
