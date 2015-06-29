/*
 * input placholder功能
 * @id input的id
 * @tip 默认显示的信息
 * @classValue1 正常字体样式
 * @classValue2 灰色字体样式
 */
function plachold(id, tip, classValue1, classValue2) {
	$('#'+id).focus(function(){
	    var idValue=$('#'+id).val();
	    if(idValue==tip){
	   	 	$(this).val('');
	   	 	$(this).attr("class",classValue1);
	    }
	})

	$('#'+id).blur(function(){
		var txt1_value=$('#'+id).val();
		if(txt1_value==""){
			$(this).val(tip);
			$(this).attr("class", classValue2);
		}
	})
}