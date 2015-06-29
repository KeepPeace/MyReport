var path="/OFSTBANK";
var isFirst = true;

$(function(){
		loadCountry();
		$("#country").attr("onchange","loadProvince(this)");
		$("#province").attr("onchange","loadCity(this)");
		$("#city").attr("onchange","loadDistrict(this)");
});


//加载国家的方法
function loadCountry() {
	$.ajax({
		type : "post",
		url : path+"/country/listCountry.action",
		dataType : "json",
		success : function(data) {
			var html = [];
			html.push("<option value=''>全部</option>");
			for (var i = 0; i < data.length; i++) {
				html.push("<option value='" + data[i].countryCode + "'>"
						+ data[i].countryName + "</option>");
			}
			$("#country").html(html.join(""));
			$("#country option[value='"+$("#hideCountry").val()+"']").attr("selected","selected");
			loadProvince($("#country"));
			selectUpdate();
		}
	});
}

// 加载省份的方法
function loadProvince(sel) {
	var countryCode = $(sel).val();
	$.ajax({
		type : "post",
		url : path+"/province/listProvince.action",
		dataType : "json",
		data : {
			countryCode : countryCode
		},
		success : function(data) {
			var html = [];
			html.push("<option value=''>全部</option>");
			for (var i = 0; i < data.length; i++) {
				html.push("<option value='" + data[i].provinceCode + "'>"
						+ data[i].provinceName + "</option>");
			}
			$(sel).nextAll("select[id='province']").html(html.join(""));
			$("#province option[value='"+$("#hideProvince").val()+"']").attr("selected","selected");
			loadCity(sel);
			selectUpdate();
		}
	});
}
// 加载城市的方法
function loadCity(sel) {
	var countryCode;
	var provinceCode;
	if($(sel).attr("id")=="country"){
		countryCode = $(sel).val();
		provinceCode = $(sel).nextAll("select[id='province']").val();
	}else{
		countryCode = $(sel).prevAll("select[id='country']").val();
		provinceCode = $(sel).val();
	}
	$.ajax({
		type : "post",
		url : path+"/city/listCity.action",
		dataType : "json",
		data : {
			countryCode : countryCode,
			provinceCode : provinceCode
		},
		success : function(data) {
			var html = [];
			html.push("<option value=''>全部</option>");
			for (var i = 0; i < data.length; i++) {
				html.push("<option value='" + data[i].cityCode + "'>"
						+ data[i].cityName + "</option>");
			}
			$(sel).nextAll("select[id='city']").html(html.join(""));
			$("#city option[value='"+$("#hideCity").val()+"']").attr("selected","selected");
			loadDistrict(sel);
			selectUpdate();
		}
	});
}

//加载行政区
function loadDistrict(sel){
	var countryCode;
	var cityCode;
	if($(sel).attr("id")=="country"){
		countryCode = $(sel).val();
		cityCode = $(sel).nextAll("select[id='city']").val();
	}else{
		countryCode = $(sel).prevAll("select[id='country']").val();
		cityCode = $(sel).val();
	}
	$.ajax({
		type:"post",
		url:path+"/district/listDistrict.action",
		dataType:"json",
		data:{
				cityCode : cityCode,
				countryCode : countryCode
			},
		success:function(data){
			var html = [];
			html.push("<option value=''>全部</option>");
			for(var i = 0;i<data.length;i++){
				html.push("<option value='"+data[i].districtCode+"'>"+data[i].districtName+"</option>");
			}
			
			$(sel).nextAll("select[id='district']").html(html.join(""));
			$("#district option[value='"+$("#hideDistrict").val()+"']").attr("selected","selected");
			selectUpdate();
			try{
				jpage.getList(1);
			}catch(e){
			}
		}
	});
}