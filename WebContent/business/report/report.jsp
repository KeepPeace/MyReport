<%@page language="java" pageEncoding="UTF-8"%>
<%@ include file="/common/common.jsp"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>新增电子券活动</title>
<link rel="stylesheet" href="${ctx}/css/base.css">
<link rel="stylesheet" href="${ctx}/css/discount.css">
<link rel="stylesheet" href="${ctx}/css/datepicker.css">
<link rel="stylesheet" href="${ctx}/css/chosen.css">
<script type="text/javascript" src="${ctx}/js/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="${ctx}/js/jquery.nicescroll.min.js"></script>
<script type="text/javascript" src="${ctx}/js/jquery.slc.js"></script>
<script type="text/javascript"
	src="${ctx}/js/My97DatePicker/WdatePicker.js"></script>
<script type="text/javascript" src="${ctx}/js/prompt.js"></script>
<script type="text/javascript" src="${ctx}/js/checkbox.js"></script>
<script type="text/javascript" src="${ctx}/js/datacontrol.js"></script>
<script type="text/javascript" src="${ctx}/js/chosen.jquery.js"></script>
<script type="text/javascript" src="${ctx}/js/regex.js"></script>
<script type="text/javascript" src="${ctx}/js/common/common.js"></script>
<script type="text/javascript" src="${ctx}/js/json2.js"></script>
<script type="text/javascript" src="${ctx}/js/ajaxfileupload.js"></script>
<script type="text/javascript" src="${ctx}/js/form.js"></script>
<script>
	    $(function () {
			$(".chosen-select").chosen({
				disable_search : true
			});
		})
	</script>
</head>
<body>
	<!-- header -->
	<!-- content -->
	<font color="red"><s:fielderror/></font>
	<form id="genReport" action="${ctx}/report/genReport.action"
		method="post">
		<div class="com-width discount-examine eDiscount-add">
			<!-- 面板 -->
			<div class="ui-panel">
				<h2 class="ui-header">
					<a class="header-root" href="#"> <i class="root-ico"></i>银行端
					</a> <span>&gt;</span> <a href="#">平台管理</a> <span>&gt;</span> <a
						href="javascript:;">报表</a>
				</h2>
			</div> 

			<div class="discount-list">
				<table>
					<tr>
						<td class="td-name">报表&nbsp;:</td>
						<td class="td-avalue">
							<select class="chosen-select" name="reportInfo.templateName" >
									<option value="cust_info" selected="selected">客户信息汇总表</option>
									<option value="store_info">商户信息汇总表</option>
	        						<option value="store_situation">商户情况统计表</option>
	        						<option value="store_discount">商户优惠信息汇总表</option>
	        						<option value="bank_discount">银行优惠信息汇总表</option>
	        						<option value="platform_usage">平台使用情况报表</option>
							</select>
						</td>
						<td class="td-name">商户归档状态&nbsp;:</td>
						<td class="td-value">
							<select class="chosen-select" name="reportInfo.merStatus">
					        		<option value="all" selected="selected">全部</option>
					        		<option value="1">正常</option>
					        		<option value="2">停用</option>
					        		<option value="3">作废</option>
							</select>
						</td>
					</tr>
					<tr>
						<td class="td-name">统计机构&nbsp;:</td>
						<td class="td-value">
							<div class="ui-ipt">
								<input name="reportInfo.branchNo" class="i-txt "
									type="text" placeholder="" value="0001">
							</div>
						</td>
					</tr>
					<tr>
						<td class="td-name">统计频率&nbsp;:</td>
						<td class="td-value">
							<select class="chosen-select" name="reportInfo.frequency">
					        		<option value="D" selected="selected">日</option>
					        		<option value="M">月</option>
					        		<option value="S">季</option>
					        		<option value="Y">年</option>
							</select>
						</td>
						<td class="td-name">日期&nbsp;:</td>
						<td class="td-value">
							<div class="ui-ipt stream-text">
								<input name="reportInfo.date" class="Wdate i-txt" type="text" value="2015-06-26">
							</div>
						</td>
					</tr>
				</table>
			</div>
			<div class="discount-operate cf">
				<div style="cursor: pointer" onclick="$('#genReport').submit()"
					class="ui-btn ui-btn-base ui-btn-word ui-btn-red ui-fl">导出
				</div>
			</div>
		</div>
	</form>
</body>
</html>