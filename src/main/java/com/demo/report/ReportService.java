package com.demo.report;
import com.demo.report.db.Report;
import com.demo.report.db.ReportMapper;
import com.demo.report.dto.ReportSaveDto;
import com.demo.report.util.Header;
import com.demo.report.util.Pagination;
import com.demo.report.util.Search;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.List;

@RequiredArgsConstructor
@Service
public class ReportService {

    private final ReportMapper reportMapper;

        Header<List<Report>> getReportList(int page, int size, Search search) {
            HashMap<String, Object> paramMap = new HashMap<>();

            if (page <= 1) {    //페이지가 1 이하로 입력되면 0으로 고정,
                paramMap.put("page", 0);
            } else {            //페이지가 2 이상
                paramMap.put("page", (page - 1) * size);
            }
            paramMap.put("size", size);
            paramMap.put("sk", search.getSk());
            paramMap.put("sv", search.getSv());

            List<Report> reportList = reportMapper.getReportList(paramMap);
            Pagination pagination = new Pagination(
                    reportMapper.getReportTotalCount(paramMap),
                    page,
                    size,
                    10
            );

            return Header.OK(reportList, pagination);
        }

        Header<Report> getReportOne(Long idx) {
            return Header.OK(reportMapper.getReportOne(idx));
        }

        Header<Report> insertReport(ReportSaveDto reportSaveDto) {
            Report entity = reportSaveDto.toEntity();
            if (reportMapper.insertReport(entity) > 0) {
                return Header.OK(entity);
            } else {
                return Header.ERROR("ERROR");
            }
        }

        Header<Report> updateReport(ReportSaveDto reportSaveDto) {
            Report entity = reportSaveDto.toEntity();
            if (reportMapper.updateReport(entity) > 0) {
                return Header.OK(entity);
            } else {
                return Header.ERROR("ERROR");
            }
        }

        Header<String> deleteReport(Long idx) {
            if (reportMapper.deleteReport(idx) > 0) {
                return Header.OK();
            } else {
                return Header.ERROR("ERROR");
            }
        }
    }

