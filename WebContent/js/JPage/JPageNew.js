//需要显示数据的table id
//getList从后台取值的方法
//行政区划商区专用JPage分页
function JPageNew(getList){
	this.totalCount;//数据总条数
	this.totalPage;//总页数
	this.currentPage = 1;//当前页
	
	this.getList = function(pageNo){
		getList(pageNo);//查询分页数据的ajax方法
		this.navChange();
	}
	
	//分页导航栏改变颜色
	this.navChange = function navigatorChange(){
		if (this.currentPage == 1 && this.totalPage ==1) {
			$("a[href='javascript:jpage.firstPage()']").removeAttr("class");
			$("a[href='javascript:jpage.prePage()']").removeAttr("class");
			$("a[href='javascript:jpage.maxPage()']").removeAttr("class");
			$("a[href='javascript:jpage.nextPage()']").removeAttr("class");
		}else if(this.currentPage==1 && this.totalPage > 1){
			$("a[href='javascript:jpage.firstPage()']").removeAttr("class");
			$("a[href='javascript:jpage.prePage()']").removeAttr("class");
			$("a[href='javascript:jpage.maxPage()']").attr("class","ui-link");
			$("a[href='javascript:jpage.nextPage()']").attr("class","ui-link");
		}else if (this.currentPage == this.totalPage && this,totalPage > 1) {
			$("a[href='javascript:jpage.maxPage()']").removeAttr("class");
			$("a[href='javascript:jpage.nextPage()']").removeAttr("class");
			$("a[href='javascript:jpage.firstPage()']").attr("class","ui-link");
			$("a[href='javascript:jpage.prePage()']").attr("class","ui-link");
		}else{
			$("a[href='javascript:jpage.firstPage()']").attr("class","ui-link");
			$("a[href='javascript:jpage.prePage()']").attr("class","ui-link");
			$("a[href='javascript:jpage.maxPage()']").attr("class","ui-link");
			$("a[href='javascript:jpage.nextPage()']").attr("class","ui-link");
		}
	}
	
	//上一页
	this.prePage = function prePage(){
		if(this.currentPage > 1){
			this.currentPage--;
		}else{
			return;
		}
		this.getList(this.currentPage);
	}
	//下一页
	this.nextPage = function nextPage(){
		if(this.currentPage < this.totalPage){
			this.currentPage++;
		}else{
			return;
		}
		this.getList(this.currentPage);
	}
	//去到第几页
	this.stepPage = function stepPage(stepId){
		var step = $("#"+stepId).val();
		if(this.currentPage == step ||  step > this.totalPage || step<=0)return;
		this.currentPage = step;
		this.getList(this.currentPage);
	}
	//首页
	this.firstPage = function firstPage(){
		if(this.currentPage==1)return;
		this.currentPage = 1;
		this.getList(this.currentPage);
	}
	//尾页
	this.maxPage = function maxPage(){
		if(this.currentPage==this.totalPage)return;
		this.currentPage = this.totalPage;
		this.getList(this.currentPage);
	}
	//查询
	this.queryPage = function queryPage(){
		this.currentPage = 1;
		this.getList(this.currentPage);
	}
}