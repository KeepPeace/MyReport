<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ include file="/common/common.jsp" %>
<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>访问资源异常</title>
	<link rel="stylesheet" href="${ctx}/css/all.min.css">
</head>
<body class="error-page">
	<div class="error-con">
		<img src="${ctx}/images/404-ico.png" alt="对不起，您访问的页面不存在！">
		<p class="error-war error-word">对不起，您访问的页面不存在！</p>
		<p class="error-notice error-word">刷新试试！<br>服务器可能病了，正在医院打点滴呢，没有生命危险的。</p>
		<div class="error-action cf">
			<a class="go-back" href="javascript:;"></a>
			<a class="go-home" href="${ctx}/首页/index.html"></a>
		</div>
	</div>
</body>
</html>