package com.icbc.ofst.bank.apps.report.service.impl;

import org.springframework.stereotype.Service;

import com.icbc.ofst.bank.apps.report.action.ReportInfo;
import com.icbc.ofst.bank.apps.report.service.ReportGenerateService;
import com.icbc.ofst.base.BaseService;


@Service("generateReportService")
public class ReportGeneratorServiceImpl extends BaseService implements ReportGenerateService{
	
	@Override
	public String generateSQL(ReportInfo reportInfo) {
		StringBuffer sql = new StringBuffer();
		sql.append(" where update_date=to_date('" + reportInfo.getDate() + "','yyyy-mm-dd') "
				+ " and STATISTICS_FREQUENCY='" +  reportInfo.getFrequency() + "'");
		
		String templateNmae = reportInfo.getTemplateName();
		//报表为：商户信息汇总表 ,商户情况统计表时商户档案状态必填
		if (templateNmae.equals("store_info") || templateNmae.equals("store_situation")){
			if (!reportInfo.getMerStatus().equals("all")){
				sql.append(" and MERSTATUS='" +  reportInfo.getMerStatus() + "'");
			}
		}
		sql.append(" and  branch_code in (select b.branch_no from branch b where b.sup_branch='" + reportInfo.getBranchNo() + "')");
			
		return sql.toString();
	}

}
