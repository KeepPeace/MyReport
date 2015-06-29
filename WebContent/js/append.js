var ae = {
	modelName : "",
	modelNameArr : [],
	addBtn : "",
	maxEle : 0,
	/*
	 * 找到data-add属性标记的元素，绑定相应事件
	 */
	bindEle : function(){
		$("[data-add]").unbind("click");
		$("[data-add]").click(function() {
			var addValue = $(this).attr("data-add");
			ae.modelName = addValue.split("-")[0];
			ae.modelNameArr = addValue.split("-")[0].split(",");
			ae.addBtn = addValue.split("-")[1];
			ae.maxEle = addValue.split("-")[2];
			if(ae.addBtn == "in") {
				ae.dealEle(this);
			} else if (ae.addBtn == "out") {
				ae.appendEle(this);
			} else {
				alert("please set true value of 'data-add'.");
			}
		});
	},
	/* 
	 * 当添加按钮在模板元素内部时
	 * @param thisEle 当前点击的元素
	 */
	dealEle : function(thisEle) {
		if (thisEle.className == "add-btn") {
			if(this.getEleLength() >= this.maxEle) {
				alert("已达到添加上限")
				return;
			}
			this.addEle(thisEle);
		} else {
			this.delEle(thisEle);
		}
	},
	getEleLength : function() {
		var elem = $("[data-container='" + this.modelName + "']")[0];
		var childArr = elem.childNodes;
		for(var i=0; i<childArr.length; i++) {
			if(childArr[i].nodeName == "#text" && !/\s/.test(childArr.nodeValue)) {
				elem.removeChild(childArr[i]);
			}
		}
		return elem.childNodes.length;
	},
	addEle : function(thisEle){
		thisEle.className = "del-btn";
		var thisDiv = $("[data-model='" + ae.modelName + "']")[0];
		var newDiv = thisDiv.cloneNode(true);
		thisEle.className = "add-btn";
		thisDiv.parentNode.appendChild(newDiv);
//		this.setName(newDiv);
		this.bindEle();
		try{
			var selects = newDiv.getElementsByTagName('select');
			$(selects).chosen('destroy').show().data('chosen',null);
			$(selects).siblings('.chosen-container').remove();
			if ($.fn.chosen !== undefined) {
				$('.chosen-select').chosen();
			}			
		} catch(e){}
	},
	delEle : function(thisEle){
		var removeObj = thisEle.parentNode;
		removeObj.parentNode.removeChild(removeObj);
//		this.setName();
	},
	appendEle : function(thisEle) {
		if(this.getEleLength() >= this.maxEle) {
			alert("已达到添加上限")
			return;
		}
		var model = $("[data-model='"+this.modelName+"']")[0];
		var newModel = model.cloneNode(true);
		if($(newModel).find("a")){
			var delEle = document.createElement('a');
			$(delEle).html("×");
			$(delEle).attr("class","name-close ui-fl");
			newModel.appendChild(delEle);
		}
		$(newModel).find("input").each(function(){
			$(this).val("");
		})
		
		$(thisEle).before(newModel);
//		this.setName(newModel);
		$(delEle).bind("click", function(){
			ae.delEle(this);
		});
		try{
			var selects = newModel.getElementsByTagName('select');
			$(selects).chosen('destroy').show().data('chosen',null);
			$(selects).siblings('.chosen-container').remove();
			if ($.fn.chosen !== undefined) {
				$('.chosen-select').chosen();
			}
		} catch(e){}
		
	},
	setName : function() {
		var modelArr = $("[data-model='"+ae.modelName+"']");
		for(var i=0; i<modelArr.length; i++){
			var childArr = modelArr.eq(i).find("*");
			childArr.each(function(k){
				var childName = childArr.eq(k).attr("name");
				if(childName) {
					var arr=childName.split('');
					var nameNum = arr[arr.length-1];
					arr[arr.length-1] = "";
					var nameModel = arr.join('');
					childArr.eq(k).prop("name", nameModel+(i+1));
				}
			});
		}
	}
};

$(function(){
	ae.bindEle();
})