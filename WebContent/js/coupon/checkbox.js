var $ipts;

$(function () {

	$ipts = $('input[type="checkbox"],input[type="radio"]');
	
	checkbox.initAll();

	checkbox.bindCheck();

	$('.all-chk').click(function () {

		var $range = $(this).parents('table');

		var $ipt = $(this).find($ipts).eq(0);

		var ischked = check($ipt);

		var $iptAll = $range.find('.ui-chk').find($ipts);


		if (ischked) {

			$iptAll.siblings('.chk-ico').addClass('chked-ico');

		} else {

			$iptAll.siblings('.chk-ico').removeClass('chked-ico');

		}
		
		check($iptAll,ischked);

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


var checkbox = {

	initAll : function() {

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
	},

	bindCheck : function () {

		$('.ui-chk').unbind("click");

		$('.ui-chk').click(function () {

			var $ipt = $(this).find($ipts).eq(0);

			var $range = $(this).parents('table');
			
			if ($ipt) {

				var ischked = check($ipt);

				if (ischked) {

					$range.find('.all-chk').find('.chk-ico').removeClass('chked-ico');

					check($range.find('.all-chk').find($ipts).eq(0),false);

				}

				$ipt.siblings('.chk-ico').toggleClass('chked-ico');

				check($ipt,!ischked);

			}

			checkbox.initAll();

		})
	}
}
