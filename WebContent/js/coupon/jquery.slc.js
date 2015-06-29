
/*————————————————————————————————————————————————————
 * jQuery slc Plugin
 *————————————————————————————————————————————————————
 * Author: nothing
 *————————————————————————————————————————————————————
 * QQ: 2219933746
 *——————————————————————————————————————————————————*/

var nice;

;(function (window,$) {
	
	function Selector() {}

	

	Selector.prototype = {
		constructor : Selector,
		// 配置项
		config : {
			optionsMaxHeight : 120,
			scrollBarWidth : 6,
			scrollBarColor : '#ccc'
		},
		// 初始化select
		init : function () {

			// 所有原生select
			var $select = $('select'),
				$selectedArr = [],
				_this = this,
				zInd = 100;

			$select.each(function (i) {

				// 如果尚未被包装
				if (!$select.eq(i).data('done')) {

					// 当前被选中的option
					var	$selected = {};
					// 被选中的元素(option)
						$selected.dom = $select.eq(i).find(':selected');
					// 被选中元素的下标
						$selected.ind = $selected.dom.index();
					// 被选中元素的值
						$selected.val = $selected.dom.val();
					// 被选中元素的内容(文本)
						$selected.text = $selected.dom.text();
					// 将对象推入数组
					$selectedArr.push($selected);

					// 包裹层
					var $kSelect = $('<div class="k-select"></div>'),
					// 模拟出来的select显示框
						$kSelected = $('<p class="k-selected">' + $selected.text + '</p>'),
					// 获取原来所有的option
						$options = $select.eq(i).find('option'),
					// 模拟option
						$kOptionsItem = '';

					// 设置宽度\设置zindex为递减，避免相邻的两个select出现层级问题。
					$kSelect.width($select.eq(i).innerWidth()).css('zIndex',zInd--);
					$select.eq(i).addClass('hidden');

					if ($select.eq(i).is(':disabled')) {
						$kSelect.data('die','1').addClass('k-select-disabled');
					} 
					$options.each(function (i) {
						// 模拟所有的option
						$kOptionsItem += '<li class="k-options-item">' + $options.eq(i).text() + '</li>';
					})

					$kOptions = $('<ul class="k-options">' + $kOptionsItem + '</ul>');
					$kSelectIcon = $('<i class="k-select-ico"></i>');
					$select.eq(i).wrap($kSelect).data('done',1);
					$select.eq(i).parent().append($kSelected).append($kOptions).append($kSelectIcon);

					$('.k-select').eq(i).on('click',function (event) {
						// 重置option状态
						_this.optionHide();
						// 如果是disabled 则 return false
						if ($(this).data('die') == '1') {
							return false;
						}
						var $kOpt = $(this).find('.k-options'),
							$kOptFlag = !$kOpt.data('show');

						// 如果状态是否 则显示
						if ($kOptFlag && $kOpt.css('display') == 'none') {
							// console.log(1);
							_this.optionShow($kOpt);
							event.stopPropagation();
						} else {
							// console.log(2);
							_this.optionHide();
						}
					});

					/* delegate */
					$('.k-select').eq(i).delegate('.k-options-item' , 'click' , function (event) {
						var $newVal = $(this).text(),
							$newValIndex = $(this).index();
						
						$(this).parent().siblings('.k-selected').text($newVal);

						// change --待优化
						$select.eq(i).find('option').removeAttr('selected').eq($newValIndex).attr('selected','selected').parent().change();
						
						// console.log($newValIndex + ',' + $newVal);
						// 重置option状态
						_this.optionHide();

						// 阻止冒泡
						event.stopPropagation();
					})
					// 高度限定
					var $itemCount = $kOptions.find('.k-options-item').size();
					$kOptions.css('height',$itemCount <= 6 ? 'auto' : _this.config.optionsMaxHeight+'px');

				} else {	// 如果已被包装过
					// console.log(1);
				}

			})

			$(document).on('click',function () {
				// 重置option状态
				_this.optionHide();
			})

		},
		// 插入select
		insert : function (targetEle , html) {
			$(targetEle).append(html);
			this.init();
		},
		optionShow : function ($option) {
			// 显示下拉选项
			$option.data('show',1).slideDown(200,function () {
				// $('.nicescroll-rails').css('visibility','visible');
				nice = $option.niceScroll({styler:"fb",cursorwidth:"4px",cursorcolor:"#338edb",autohidemode:"false"});
			});
		},
		optionHide : function () {
			// 隐藏下拉选项
			if (nice) {
				nice.remove();
				nice = null;
			}
			// $('.nicescroll-rails').css('visibility','hidden');
			$('.k-options').data('show',0).slideUp(200);
		}
	}

	// 外部接口
	window.Selector = new Selector();

	// // 为动态插入的select添加事件
	// $(document).on('pageChanged',function () {
	// 	window.Selector.init();
	// })

})(window,jQuery);