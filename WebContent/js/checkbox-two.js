$(function () {

	var $ipts = $('input[type="checkbox"],input[type="radio"]');
	
	$ipts.each(function (i) {

		var $ipt = $ipts.eq(i);

		if (check($ipt)) {

			$ipt.siblings('.chk-ico').addClass('chked-ico');

			check($ipt,true);

		} else {

			$ipt.siblings('.chk-ico').removeClass('chked-ico');

			check($ipt,false);

		}

	})
	
	$('.stat-table .ui-chk:not(.all-chk)').click(function () {

		var $ipt = $(this).find($ipts).eq(0);

		var $range = $('.stat-table');

		if ($ipt) {

			var ischked = check($ipt);

			if (ischked) {

				$range.find('.all-chk').find('.chk-ico').removeClass('chked-ico');

				check($range.find('.all-chk').find($ipts).eq(0),false);

			}

			$ipt.siblings('.chk-ico').toggleClass('chked-ico');

			check($ipt,!ischked);

		}
		var isAllChecked = false;
		$('.stat-table .ui-chk:not(.all-chk)').each(function () {

			if (check($(this).find($ipts).eq(0))) {
				isAllChecked = true;
			} else {
				isAllChecked = false;
				return false;
			}

		});

		if (isAllChecked) {

			$range.find('.all-chk').find('.chk-ico').addClass('chked-ico');

			check($range.find('.all-chk').find($ipts).eq(0),true);

		}


	})


	$('.all-chk').click(function () {

		var $range = $('.stat-table');

		var $ipt = $(this).find($ipts).eq(0);

		var ischked = check($ipt);
		var $iptAll = $range.find('.ui-chk').find($ipts);
		// console.log(ischked);

		if (ischked) {
			check($ipt,false);
			$iptAll.siblings('.chk-ico').removeClass('chked-ico');
			check($iptAll,false);

		} else {
			check($ipt,true);
			$iptAll.siblings('.chk-ico').addClass('chked-ico');
			check($iptAll,true);

		}

	})
})

/*———————————————————————————————————————————————————————————
 *| 函数功能：获取、设置 checkbox或者radio的值
 *———————————————————————————————————————————————————————————
 *| 参数说明：
 *———————————————————————————————————————————————————————————
 *| $input：type为checkbox或者radio的input
 *———————————————————————————————————————————————————————————
 *| value：布尔型(true或false)
 *—————————————————————————————————————————————————————————*/

function check($input,value) {

	if (value === undefined) return $input.is(':checked');

	$input.prop('checked',value);

}
