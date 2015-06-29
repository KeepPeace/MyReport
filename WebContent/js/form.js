/**
 * 使用前导入Jquery.js and JSON.js
 */
$.fn.serializeForm = function(){
     var obj = {};
     $.each( this.serializeArray(), function(i,o){
         var n = o.name, v = o.value;
         obj[n] = obj[n] === undefined ? v
         : $.isArray( obj[n] ) ? obj[n].concat( v )
         : [ obj[n], v ];
     });
     return JSON.stringify(obj);
 };
 
//删除左右两端的空格
function Trim(str){ 
	return str.replace(/(^\s*)|(\s*$)/g, "");
}
 
//删除左边的空格
function LTrim(str){ 
	return str.replace(/(^\s*)/g,"");
}
 
//删除右边的空格
function RTrim(str){ 
	return str.replace(/(\s*$)/g,"");
}

function selectUpdate() {
	$('select').trigger('chosen:updated');
} 