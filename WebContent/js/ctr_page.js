var page;//当前是第几页
	var maxPage;//一共多少页
	$(document).ready(function(){
		pageStr=$("#page").val();
		page=parseInt(pageStr);
		maxPageStr=$("#maxPage").val();
		maxPage=parseInt(maxPageStr);
	});
	//下一页
	function fun_next(){
		if(page==maxPage){
		//	jAlert("已经是最后一页了");
			return;
		}
		page++;
		$("#page").val(page);
		$("#listForm").submit();
	}
	//上一页
	function fun_pre(){
		if(page==1){
//			jAlert("已经是第一页了");
			return;
		}
		page--;
		$("#page").val(page);
		$("#listForm").submit();
		
	}
	//首页
	function fun_first(){
		if(page==1){
//			jAlert("已经是第一页了");
			return;
		}
		$("#page").val(1);
		$("#listForm").submit();
		
	}
	//末页
	function fun_last(){
		if(page==maxPage){
//			jAlert("已经是最后一页了");
			return;
		}
		$("#page").val(maxPage);
		$("#listForm").submit();
		
	}
	//go页
	function fun_go(){
	    var goPage=$("#goPage").val();
		if(goPage>maxPage){
//			jAlert("已经是最后一页了");
			return;
		}
		$("#page").val(goPage);
		
		$("#listForm").submit();
		
	}