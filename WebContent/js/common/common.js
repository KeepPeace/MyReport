/*
 * -----------公共常量目录--------------------------------------
 *| _undefined				--未定义							|
 *-----------------------------------------------------------
 *| _operateTypeArr  		--银行优惠->操作类型				|
 *-----------------------------------------------------------
 *| _promotionsSiteEnum 	--银行优惠->优惠活动状态				|
 *-----------------------------------------------------------
 *|															|
 *-----------------------------------------------------------
 */
var _undefined = 'undefined';

var _boolEnum = {
	 0:false,
	 1:true,
	'0':false,
	'1':true
};
var _operateTypeEnum = {
	'0':'新增',
	'1':'修改',
	'2':'活动终止',
	'3':'重新发布'
};
var _promotionsSiteEnum = {
	'0':'审批退回',
	'1':'审批中',
	'2':'审批通过',
	'3':'已生效',
	'4':'已失效',
	'5':'暂停'
};
var _approvalSiteEnum = {
	'0':'未通过',
	'1':'通过'
};

var _undefined = 'undefined';
var _string    = 'string';
var _number    = 'number';
var _boolean   = 'boolean';
var _object    = 'object';

/**
 * -----------公共方法目录-------------
 * 1.tableToJson() --表格转Json(参数:tableId,返回值:Json串)
 */

/*
 * table转json数组,id作为属性 html作为值
 * writer:才佳宁
 */
function tableToJson(tableId){
	var arr = new Array();
	$("#"+tableId).find("tr").each(function(i,tr){
		var json = new Object();
		$(tr).find("td").each(function(j,td){
			var property = $(td).attr("id");
			var value = $(td).html();
			json["'"+property+"'"] = value;
		});
		arr.push(json);
	})
	return arr;
}

/* 2.
 * 判断对象是否为空
 * Wirter:CJN
 */
function _isNull(obj){
	if (typeof(obj) == _undefined)return true;
	if (typeof(obj) == _string) {
		if(obj == ''){
			return true;
		}else{
			return false;
		}
	}else if (typeof(obj) == _object && obj instanceof Array ) {
		if (obj.length <= 0 || obj == null) {
			return true;
		}else{
			return false;
		}
	}else if (typeof(obj) == _object) {
		for(var o in obj){
			return false;
		}
		return true;
	}else{
		return true;
	}
}
//获取字符串字节长度
function getBytesLength(str) {
	///获得字符串实际长度，中文2，英文1
	///要获得长度的字符串
	var realLength = 0, len = str.length, charCode = -1;
	for (var i = 0; i < len; i++) {
		charCode = str.charCodeAt(i);
		if (charCode >= 0 && charCode <= 128)
			realLength += 1;
		else realLength += 2;
		}
		return realLength;
	};
