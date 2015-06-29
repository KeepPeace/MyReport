/*
{
	id: 1,
	storeNum : "",
	storeName : "",
	eStoreName : ""
}
*/

var data = {
	first : [],
	second : [],
	result : []
};

var control = {
	setData : function(first, second){
		data.first = first || [];
		data.second = second || [];
	},
	setHtml : function(){
		var tableHtml1 = '<tr>'+
						'<th>'+
							'<div class="ui-chk all-chk">'+
								'<i class="chk-ico"></i>'+
								'<input type="checkbox">'+
								'<span class="chk-label">全选</span>'+
							'</div>'+
						'</th>'+
						'<th>e生活商户编号</th>'+
						'<th>门店名称</th>'+
						'<th>特约商户编号</th>'+
					'</tr>';
		var tableHtml2 = '<tr>'+
						'<th>'+
							'<div class="ui-chk all-chk">'+
								'<i class="chk-ico"></i>'+
								'<input type="checkbox">'+
								'<span class="chk-label">全选</span>'+
							'</div>'+
						'</th>'+
						'<th>e生活商户编号</th>'+
						'<th>门店名称</th>'+
					'</tr>';
		for(var i=0; i<data.first.length; i++) {
			if(i%2 == 0) {
				tableHtml1 += '<tr>'; 
								
			} else {
				tableHtml1 += '<tr class="grey">'; 
			}		
			tableHtml1 += '<td>' +
							'<div class="ui-chk">' +
								'<i class="chk-ico"></i>' +
								'<input type="checkbox">' +
							'</div>' +
						'</td>' +
						'<td>'+data.first[i].storeNum+'</td>' +
						'<td>'+data.first[i].storeName+'</td>' +
						'<td>'+data.first[i].eStoreName+'</td>' +
					'</tr>';
		}
		for(var i=0; i<data.second.length; i++) {
			if(i%2 == 0) {
				tableHtml2 += '<tr>'; 
								
			} else {
				tableHtml2 += '<tr class="grey">'; 
			}	
			tableHtml2 += '<td>' +
							'<div class="ui-chk">' +
								'<i class="chk-ico"></i>' +
								'<input type="checkbox">' +
							'</div>' +
						'</td>' +
						'<td>'+data.second[i].storeNum+'</td>' +
						'<td>'+data.second[i].storeName+'</td>' +
					'</tr>';
		}
		$("#firstTable").html(tableHtml1);
		$("#secondTable").html(tableHtml2);
		checkbox.bindCheck();
	},
	ctrlData1 : function() {
		var data1 = data.first;
		var data2 = data.second;
		var checkArr = $("#firstTable").find("input[type='checkbox']");
		var index = 1;
		for (var i = 1; i < checkArr.length; i++) {
			if(checkArr.eq(i).is(':checked')) {
				var remove = data1.splice(i-index, 1);
				index++;
				data2.push(remove[0]);
			}
		}
		if(index<=1){
			alert("请选择适用商户");
			//$("#error1").html("请选择适用商户");
			// prompt.showbox('success1');
			return;
		}
		this.setHtml();
		data.first = data1;
		data.second = data2;
	},
	ctrlData2 : function() {
		var data1 = data.second;
		var data2 = data.first;
		var checkArr = $("#secondTable").find("input[type='checkbox']");
		var index = 1;
		for (var i = 1; i < checkArr.length; i++) {
			if(checkArr.eq(i).is(':checked')) {
				var remove = data1.splice(i-index, 1);
				index++;
				data2.push(remove[0]);
			}
		}
		if(index<=1){
			alert("请选择移除商户");
			//$("#error1").html("请选择移除商户"");
			// prompt.showbox('success1');
			return;
		}
		this.setHtml();
		data.first = data2;
		data.second = data1;
	}
};


