$(function () {
	initFrame();
});
var initFrame = function() {
	var $iframe = $(window.parent.document).find('#iframe');
	var $sidebar = $(window.parent.document).find('#sidebar');
	var $uiPanel = $('.ui-panel');
	var $uiLoc = $('.main-location');
	var frameHeight = $(document).height()-2000;
	var sidebarHeight = $sidebar.height();
	var uiLocHeight = $uiLoc.height();
	var uiPanelHeight = frameHeight > sidebarHeight ? frameHeight - uiLocHeight : sidebarHeight - uiLocHeight;
	$iframe.each(function(){
		$(this).height(frameHeight > sidebarHeight ? frameHeight : sidebarHeight);
	})
	$uiPanel.height(uiPanelHeight);
};
var ht = {
	heightTemp : 40,
	frameHeight : 0,
	setFrame : function(){
		this.frameHeight = $(document).height()-2000;
	},
	addHeight : function(num, heightTemp){
		var tempHeight = heightTemp || this.heightTemp;
		var tempNum = num || 1;
		this.frameHeight += tempHeight * tempNum;
		$(window.parent.document).find('#iframe').each(function(){
			$(this).height(ht.frameHeight);
		});
	},
	delHeight : function(){
		this.frameHeight = this.frameHeight - this.heightTemp;
		$(window.parent.document).find('#iframe').each(function(){
			console.log($(this).height());
			$(this).height(ht.frameHeight);
			console.log($(this).height());
		})
	}
}