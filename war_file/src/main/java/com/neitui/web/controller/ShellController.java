package com.neitui.web.controller;


import com.neitui.web.vo.JobDetailVo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class ShellController {
   public List<JobDetailVo> getJobs(String name) {
        return this.getMockData();
    }

    private List<JobDetailVo> getMockData(){
        List<JobDetailVo> jobs = new ArrayList<JobDetailVo>();
        for(int i=0;i<10;i++){
            JobDetailVo jobVo = new JobDetailVo();
            jobVo.setAddress("上海市长宁区中山公园附近");
            jobVo.setCompany("大众点评");
            jobVo.setDegree("本科");
            jobVo.setLocation("上海");
            jobVo.setPosition("前端工程師");
            jobVo.setPostTime(new Date());
            jobVo.setSalaryFrom("12K");
            jobVo.setSalaryTo("25K");
            jobVo.setScale("2000人以上");
            jobVo.getRequirement().add("1、具有扎实的计算机基础知识；");
            jobVo.getRequirement().add("2、熟悉W3C标准及规范，熟悉HTML、CSS、JavaScript等技术；");
            jobVo.getRequirement().add("3、熟悉各类JavaScript框架，如jQuery、ExtJs、Yahoo UI、prototype、Moontools等;");
            jobVo.getRequirement().add("4、能熟练高效手工编写HTML、CSS及JS代码，确保代码对各种浏览器的良好兼容性；");
            jobVo.getRequirement().add("5、熟悉面向对象的软件设计方法、对设计模式有深入的理解及应用。");
            jobVo.getRequirement().add("6、具备JavaScript框架开发经验者优先考虑。");
            jobVo.getRequirement().add("7、具备游戏平台，游戏社区，游戏播放器开发经验者优先考虑。");
            jobs.add(jobVo);
        }
       return jobs;

    }
}
