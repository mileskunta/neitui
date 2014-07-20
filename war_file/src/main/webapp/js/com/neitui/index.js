isIE = false;
toArray = function() {
	return isIE ? function(a, i, j, res) {
		res = [];
		for (var x = 0, len = a.length; x < len; x++) {
			res.push(a[x]);
		}
		return res.slice(i || 0, j || res.length);
	} : function(a, i, j) {
		return Array.prototype.slice.call(a, i || 0, j || a.length);
	};
}(),

String.format = function(format) {
	var args = toArray(arguments, 1);
	return format.replace(/\{(\d+)\}/g, function(m, i) {
				return args[i];
			});
}

$(function() {
	var template = ['<li>',
                    '   <div class="jobDetail">',
                    '        <div class="positionBrief">',
                    '           <a class="position" href="#"><strong>{0}</strong></a>',
                    '            <a class="location" href="#">[{1}]</a>',
                    '            <span class="salary">薪水：{2}-{3}</span>',
                    '            <span class="degree">最低学历：{4}</span>',
                    '            <span class="releaseDate">{5}</span>',
                    '        </div>',
                    '        <div class="companyBrief">',
                    '            <span>公司：<a href="#"><strong>{6}</strong></a></span>',
                    '            <span>规模：{7}</span>',
                    '            <span>地址：{8}</span>',
                    '        </div>',
                    '        <div class="require">',
                    '            <div class="require-wording">要求：</div>',
                    '            <div class="require-cont">',
                    '               {9}',
                    '            </div>',
                    '            <div class="clear"></div>',
                    '        </div>',
                    '    </div>',
                    '</li>'].join('');
	var jobs = [ {
                        postTime : '2013-12-23',
                        position : '前端工程師',
                        salaryFrom:'12K',
                        salaryTo:'25K',
                        location : '上海',
                        scale:'2000人以上',
                        address:'上海市长宁区中山公园附近',
                        degree:'本科',
                        company:'大众点评',
                        requirement : [
                                '1、具有扎实的计算机基础知识；',
                                '2、熟悉W3C标准及规范，熟悉HTML、CSS、JavaScript等技术；',
                                '3、熟悉各类JavaScript框架，如jQuery、ExtJs、Yahoo UI、prototype、Moontools等;',
                                '4、能熟练高效手工编写HTML、CSS及JS代码，确保代码对各种浏览器的良好兼容性；',
                                '5、熟悉面向对象的软件设计方法、对设计模式有深入的理解及应用。',
                                '6、具备JavaScript框架开发经验者优先考虑。',
                                '7、具备游戏平台，游戏社区，游戏播放器开发经验者优先考虑。']
                    }, {
                        postTime : '2013-12-23',
                        position : '前端工程師',
                        salaryFrom:'12K',
                        salaryTo:'25K',
                        location : '上海',
                        scale:'2000人以上',
                        address:'上海市长宁区中山公园附近',
                        degree:'本科',
                        company:'大众点评',
                        requirement : [
                                '1、具有扎实的计算机基础知识；',
                                '2、熟悉W3C标准及规范，熟悉HTML、CSS、JavaScript等技术；',
                                '3、熟悉各类JavaScript框架，如jQuery、ExtJs、Yahoo UI、prototype、Moontools等;',
                                '4、能熟练高效手工编写HTML、CSS及JS代码，确保代码对各种浏览器的良好兼容性；',
                                '5、熟悉面向对象的软件设计方法、对设计模式有深入的理解及应用。',
                                '6、具备JavaScript框架开发经验者优先考虑。',
                                '7、具备游戏平台，游戏社区，游戏播放器开发经验者优先考虑。']
                    }, {
                        postTime : '2013-12-23',
                        position : '前端工程師',
                        salaryFrom:'12K',
                        salaryTo:'25K',
                        location : '上海',
                        scale:'2000人以上',
                        address:'上海市长宁区中山公园附近',
                        degree:'本科',
                        company:'大众点评',
                        requirement : [
                                '1、具有扎实的计算机基础知识；',
                                '2、熟悉W3C标准及规范，熟悉HTML、CSS、JavaScript等技术；',
                                '3、熟悉各类JavaScript框架，如jQuery、ExtJs、Yahoo UI、prototype、Moontools等;',
                                '4、能熟练高效手工编写HTML、CSS及JS代码，确保代码对各种浏览器的良好兼容性；',
                                '5、熟悉面向对象的软件设计方法、对设计模式有深入的理解及应用。',
                                '6、具备JavaScript框架开发经验者优先考虑。',
                                '7、具备游戏平台，游戏社区，游戏播放器开发经验者优先考虑。']
                    }, {
                    }, {
                        postTime : '2013-12-23',
                        position : '前端工程師',
                        salaryFrom:'12K',
                        salaryTo:'25K',
                        location : '上海',
                        scale:'2000人以上',
                        address:'上海市长宁区中山公园附近',
                        degree:'本科',
                        company:'大众点评',
                        requirement : [
                                '1、具有扎实的计算机基础知识；',
                                '2、熟悉W3C标准及规范，熟悉HTML、CSS、JavaScript等技术；',
                                '3、熟悉各类JavaScript框架，如jQuery、ExtJs、Yahoo UI、prototype、Moontools等;',
                                '4、能熟练高效手工编写HTML、CSS及JS代码，确保代码对各种浏览器的良好兼容性；',
                                '5、熟悉面向对象的软件设计方法、对设计模式有深入的理解及应用。',
                                '6、具备JavaScript框架开发经验者优先考虑。',
                                '7、具备游戏平台，游戏社区，游戏播放器开发经验者优先考虑。']
                    }, {
                        postTime : '2013-12-23',
                        position : '前端工程師',
                        salaryFrom:'12K',
                        salaryTo:'25K',
                        location : '上海',
                        scale:'2000人以上',
                        address:'上海市长宁区中山公园附近',
                        degree:'本科',
                        company:'大众点评',
                        requirement : [
                                '1、具有扎实的计算机基础知识；',
                                '2、熟悉W3C标准及规范，熟悉HTML、CSS、JavaScript等技术；',
                                '3、熟悉各类JavaScript框架，如jQuery、ExtJs、Yahoo UI、prototype、Moontools等;',
                                '4、能熟练高效手工编写HTML、CSS及JS代码，确保代码对各种浏览器的良好兼容性；',
                                '5、熟悉面向对象的软件设计方法、对设计模式有深入的理解及应用。',
                                '6、具备JavaScript框架开发经验者优先考虑。',
                                '7、具备游戏平台，游戏社区，游戏播放器开发经验者优先考虑。']
                                }];


	var jobs = ShellController.getJobs('',function(jobs){
		_.each(jobs, function(job) {
    				var dom = String.format(template,job.position,job.location,job.salaryFrom,
                    				job.salaryTo,job.degree,job.postTime,job.company,job.scale,job.address,job.requirement.join('<br>'));
                    				$('#jobList').append(dom);
    			})
	});

//	_.each(jobs, function(job) {
//				var dom = String.format(template,job.position,job.location,job.salaryFrom,
//				job.salaryTo,job.degree,job.postTime,job.company,job.scale,job.address,job.requirement.join('<br>'));
//				$('#jobList').append(dom);
//			})

})