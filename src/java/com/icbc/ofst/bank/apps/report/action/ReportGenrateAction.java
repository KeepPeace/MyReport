package com.icbc.ofst.bank.apps.report.action;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashMap;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.stereotype.Controller;

import com.icbc.ofst.bank.apps.report.service.ReportGenerateService;
import com.icbc.ofst.base.BaseAction;
import com.mchange.v2.c3p0.ComboPooledDataSource;

@SuppressWarnings("all")
@Controller
@ParentPackage("struts-base")
@Namespace("/report")
public class ReportGenrateAction extends BaseAction{
	
	@Resource
	private ReportGenerateService generateReportService;
	
	@Resource
	private ComboPooledDataSource dataSourceRead;
	
	private ReportInfo reportInfo;
	
	private Connection connection;
	
	private HashMap params = new HashMap();  
	
	@Action(value="goReport", results={@Result(name="success",location="/business/report/report.jsp")})
    public String goReport(){
    	return SUCCESS;
    }
	 
	
	//在线生成、下载excel
	public String genReport() {
		try {
			String sql = generateReportService.generateSQL(reportInfo);
			params.put("whereClause", sql);
			params.put("TOP_BRANCH_NAME", "总行");
			params.put("date", reportInfo.getDate());
			params.put("merStatus", reportInfo.getMerStatus());
			connection = dataSourceRead.getConnection();
			
			HttpServletResponse response = ServletActionContext.getResponse(); 
			response.setContentType("application/vnd.excel");  
	        response.setCharacterEncoding("UTF-8"); 
	        String fileName = reportInfo.getTemplateName() + "-" + reportInfo.getBranchNo()  + "-" + reportInfo.getDate();
	        response.setHeader("Content-Disposition", "attachment; filename=" + URLEncoder.encode(fileName, "UTF-8") + ".xls");
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return "gen_" + reportInfo.getTemplateName();
	}
	
	public ComboPooledDataSource getDataSourceRead() {
		return dataSourceRead;
	}

	public void setDataSourceRead(ComboPooledDataSource dataSourceRead) {
		this.dataSourceRead = dataSourceRead;
	}

	public ReportGenerateService getGenerateReportService() {
		return generateReportService;
	}

	public void setGenerateReportService(ReportGenerateService generateReportService) {
		this.generateReportService = generateReportService;
	}

	public HashMap getParams() {
		return params;
	}

	public void setParams(HashMap params) {
		this.params = params;
	}

	public Connection getConnection() {
		return connection;
	}

	public void setConnection(Connection connection) {
		this.connection = connection;
	}

	public ReportInfo getReportInfo() {
		return reportInfo;
	}

	public void setReportInfo(ReportInfo reportInfo) {
		this.reportInfo = reportInfo;
	}

}
