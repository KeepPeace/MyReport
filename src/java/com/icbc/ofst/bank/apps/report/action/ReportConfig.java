package com.icbc.ofst.bank.apps.report.action;

public class ReportConfig {

	public static String templateDir;
	
	public static String exportDir;

	public String getTemplateDir() {
		return templateDir;
	}

	public void setTemplateDir(String templateDir) {
		ReportConfig.templateDir = templateDir;
	}

	public String getExportDir() {
		return exportDir;
	}

	public void setExportDir(String exportDir) {
		ReportConfig.exportDir = exportDir;
	}
	
	
}
