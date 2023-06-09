package com.demo.report.dto;
import com.demo.report.db.Report;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReportSaveDto {

        private Long idx;
        private String title;
        private String content;
        private String lineuse;
        private String longlineuse;
        private String chooseuse;
        private String morechooseuse;
        private LocalDateTime retime;
        private LocalDateTime time;

        public Report toEntity() {
            return Report.builder()
                    .idx(idx)
                    .title(title)
                    .content(content)
                    .lineuse(lineuse)
                    .longlineuse(longlineuse)
                    .chooseuse(chooseuse)
                    .morechooseuse(morechooseuse)
                    .retime(retime)
                    .time(time)
                    .build();
        }
    }

