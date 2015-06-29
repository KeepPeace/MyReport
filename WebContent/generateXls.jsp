<%@ page language="java" contentType="text/html; charset=UTF8"
    pageEncoding="UTF8"%>
    <%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF8">
<title>报表生成测试</title>
</head>
<body>
<center>
    <font color="red"><s:fielderror/></font>
        <s:form action="generateReport" method="post" namespace="/report" >
        	<select name="templateName">
        		<option value="platform">平台使用情况报表</option>
        		<option value="store_comment">商户情况统计表</option>
        		<option value="store_summary">商户信息汇总表</option>
        		<option value="store_discount">商户优惠信息汇总表</option>
        		<option value="bank_discount">银行优惠信息汇总表</option>
        		<option value="customer_info">客户信息汇总表</option>
        		
        	</select>
        	<br/>
           	<s:submit label="提交" />
        </s:form>    
</center>
</body>

</html>