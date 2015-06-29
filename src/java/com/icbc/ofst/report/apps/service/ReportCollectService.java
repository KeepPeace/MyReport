package com.icbc.ofst.report.apps.service;

public interface ReportCollectService {

	boolean collectDayData();
	
	boolean extractMonthData();
	
	boolean extractSeasonData();
	
	boolean extractYearData();
}
