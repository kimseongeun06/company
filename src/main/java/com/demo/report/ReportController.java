package com.demo.report;

import com.demo.report.db.Report;
import com.demo.report.db.ReportMapper;
import com.demo.report.dto.ReportSaveDto;
import com.demo.report.util.Header;
import com.demo.report.util.Search;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class ReportController {

    private final ReportMapper reportMapper;

    //Http Get 방식으로 주소 가장 뒤 /board로 접근

    private final ReportService reportService;

    //Http Get 방식으로 주소 가장 뒤 /report로 접근
    @GetMapping("/report")
    Header<List<Report>> getReportList(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size, Search search) {
        return reportService.getReportList(page, size, search);
    }

    //idx의 데이터 1개를 조회한다.
    @GetMapping("/report/{idx}")
    Header<Report> getReportOne(@PathVariable Long idx) {
        return reportService.getReportOne(idx);
    }

    @PostMapping("/report")
    Header<Report> createReport(@RequestBody ReportSaveDto reportSaveDto) {
        return reportService.insertReport(reportSaveDto);
    }

    @PatchMapping("/report")
    Header<Report> updateReport(@RequestBody ReportSaveDto reportSaveDto) {
        return reportService.updateReport(reportSaveDto);
    }

    @DeleteMapping("/report/{idx}")
    Header<String> deleteReport(@PathVariable Long idx) {
        return reportService.deleteReport(idx);
    }
}