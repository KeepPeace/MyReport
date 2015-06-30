package com.icbc.ofst.bank.apps.report.action;

public class ReportInfo {

	private String templateName;
	
	private String frequency;
	
	private String branchNo;
	
	private String date;
	
	private String branchName;
	
	//商户档案状态
	private String merStatus;

	public String getTemplateName() {
		return templateName;
	}

	public void setTemplateName(String templateName) {
		this.templateName = templateName;
	}

	public String getFrequency() {
		return frequency;
	}

	public void setFrequency(String frequency) {
		this.frequency = frequency;
	}

	public String getBranchNo() {
		return branchNo;
	}

	public void setBranchNo(String branchNo) {
		this.branchNo = branchNo;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getBranchName() {
		return branchName;
	}

	public void setBranchName(String branchName) {
		this.branchName = branchName;
	}

	public String getMerStatus() {
		return merStatus;
	}

	public void setMerStatus(String merStatus) {
		this.merStatus = merStatus;
	}
	
}
