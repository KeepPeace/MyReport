var curPg;
var isChangeCurPg=false;
var page={
		curPage:0,		//当前页
		pageSize:0,		//每页记录数
		total:0,		//总记录数
		pages:0,		//总页数
		
		init:function(args){	//初始化方法
			this.curPage = args.curPage;
			this.pageSize = args.pageSize;
			this.total = args.total;
			this.pages = Math.floor(this.total / this.pageSize);
			if (this.total % this.pageSize != 0) {
				this.pages++;
			}
		},
		firstPage:function(){	//首页
			return 1;
		},
		prevPage:function(){ 	//翻上一页
			if(this.curPage>2)
				return this.curPage-1;
			else
				return 1;
		},
		nextPage:function(){ 	//翻下一页
			if(this.curPage<this.pages)
				return this.curPage+1;
			else
				return this.pages;
		},
		lastPage:function(){	//末页
			return this.pages;
		},
		gotoPage:function(){	//去某页
			return this.curPage;
		},
		createPageFooter:function(mthod){
			var footerHtml = "";
			/**/
			footerHtml += '<span>一共有<strong>'+this.total+'</strong>条记录</span>';
			footerHtml += '<span>共<strong>'+this.pages+'</strong>页</span>';
			footerHtml += '<span>当前是第<strong>'+this.curPage+'</strong>页</span>';
			footerHtml += '<a href="javascript:'+mthod+'('+this.firstPage()+')">首页</a>';
			footerHtml += '<a href="javascript:'+mthod+'('+this.prevPage()+')">上一页</a>';
			footerHtml += '<a href="javascript:'+mthod+'('+this.nextPage()+')">下一页</a>';
			footerHtml += '<a href="javascript:'+mthod+'('+this.lastPage()+')">尾页</a>';
			return footerHtml;
		},
		getInitJsonObj:function(result){
			//result = JSON.parse(result);
			var currentPage = result.currentPage;
			var totalCount = result.totalCount;
			var totalPage = result.totalPage;
			var pageSize = result.pageSize;
			return {"curPage":currentPage,"total":totalCount,"pageSize":pageSize};
		},
		
		setPageFooter:function(mthod){
			$("#frontPart").empty();
			$("#frontPart").append(page.createPageFooter(mthod));
			$("#pageInput").val(this.curPage);
			//分页页脚结束
			changeCurPg = false;
		}
		
};
$(document).ready(function(){
	//分页页脚脚本开始
	$("#pageInput").change(function(){
		curPg = $(this).val();
		var type = /^[0-9]*[1-9][0-9]*$/;
		var re = new RegExp(type);
		if (curPg.match(re) == null) {
			$(this).val(curPg);
	     	alert("请输入大于零的整数!");
	        return;
	    } 
		changeCurPg = true;
	});
	$("#pageSbmt").click(function(){
		if(changeCurPg){
			queryList(curPg);
		}
	});
	//分页页脚脚本结束
});
