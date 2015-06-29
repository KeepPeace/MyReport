$(function () {

	var $sidebar = $('#sidebar');
	var $sidebarNavs = $('.nav-lv1 , .nav-lv2,.nav-lv3');
	var $allItems = $sidebar.find('.nav-lv2,.nav-lv3,.nav-lv4');

	$sidebarNavs.click(function () {

		var ind = $(this).index();

		// 子项
		$(this).siblings('.sidecon').toggleClass('ui-show');

		// +/-
		var $sidebarBtn = $(this).find('.sidebar-btn');

		if ($sidebarBtn.text() == '+') {
			$sidebarBtn.text('-');
		} else {
			$sidebarBtn.text('+');
		}

		// 父元素边框显示
		if ($(this).hasClass('nav-lv1')) {
			$(this).parents('.sidebar-nav-name').toggleClass('sidebar-nav-cur');
		} else {
			$allItems.removeClass('sub-nav-cur');
			$(this).addClass('sub-nav-cur');
		}

	})
})