package com.demo.report.db;

import org.apache.ibatis.annotations.Mapper;
import java.util.List;
import java.util.HashMap;

@Mapper
public interface ReportMapper {

        List<Report> getReportList(HashMap<String, Object> paramMap);

        int getReportTotalCount(HashMap<String, Object> paramMap);

        Report getReportOne(Long idx);

        int insertReport(Report entity);

        int updateReport(Report entity);

        int deleteReport(Long idx);

}
