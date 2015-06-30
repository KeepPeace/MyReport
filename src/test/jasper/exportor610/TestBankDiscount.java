/*package jasper.exportor610;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import junit.framework.TestCase;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.export.ooxml.JRXlsxExporter;
import net.sf.jasperreports.export.SimpleExporterInput;
import net.sf.jasperreports.export.SimpleOutputStreamExporterOutput;
import net.sf.jasperreports.export.SimpleXlsxReportConfiguration;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.mchange.v2.c3p0.ComboPooledDataSource;


*//**
 * 本案例需jasperreports-6.1.0.jar
 * 不可使用jasperreports-5.2.0.jar
 * @author Administrator
 *
 *//*
public class TestBankDiscount extends TestCase {
	ApplicationContext ac =null;
	@Override
	protected void setUp() throws Exception{
		ac = new ClassPathXmlApplicationContext("spring/applicationContext.xml");
		super.setUp();
	}
	
	@SuppressWarnings("unchecked")
	@Test
	public void testJasper(){
		ComboPooledDataSource datasource = (ComboPooledDataSource)ac.getBean("dataSourceRead");
		try {
			Connection conn = datasource.getConnection();
			
			@SuppressWarnings("rawtypes")
			Map parameters = new HashMap();
			String whereClause = "where  branch_code in (select b.branch_no from branch b where b.sup_branch='0001')";
			parameters.put("whereClause", whereClause);
			String jasperPrint = JasperFillManager.fillReportToFile("E:/workspace_self/ireportmodel/bank_discount.jasper", parameters,conn); 
			
			JRXlsxExporter exporter = new JRXlsxExporter();
			exporter.setExporterInput(new SimpleExporterInput(jasperPrint));
			exporter.setExporterOutput(new SimpleOutputStreamExporterOutput("E:/workspace_self/ireportmodel/bank_discount.xlsx"));
			SimpleXlsxReportConfiguration configuration = new SimpleXlsxReportConfiguration();
			configuration.setOnePagePerSheet(true);
			configuration.setDetectCellType(true);
			configuration.setCollapseRowSpan(false);
			exporter.setConfiguration(configuration);
			exporter.exportReport();
	        
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (JRException e) {
			e.printStackTrace();
		}
	}
	
	@Override
	protected void tearDown() throws Exception {
		super.tearDown();
	}
}
*/