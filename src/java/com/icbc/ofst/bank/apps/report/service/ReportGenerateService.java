package com.icbc.ofst.bank.apps.report.service;

import com.icbc.ofst.bank.apps.report.action.ReportInfo;


public interface ReportGenerateService {
	
	String generateSQL(ReportInfo info);
}
