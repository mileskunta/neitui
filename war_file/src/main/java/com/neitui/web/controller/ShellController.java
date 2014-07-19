package com.neitui.web.controller;


import com.neitui.web.vo.JobDetailVo;

import java.util.ArrayList;
import java.util.List;

public class ShellController {


    public List<JobDetailVo> testDwr(String name) {

        List<JobDetailVo> jobs = new ArrayList<JobDetailVo>();
        for(int i=0;i<10;i++){
            JobDetailVo jobVo = new JobDetailVo();
            jobVo.setBriefIntro("this is the resylt");
            jobs.add(jobVo);
        }
        return jobs;
    }
}
