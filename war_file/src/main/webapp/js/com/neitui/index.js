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
	var template = [
			'<div class="row job-detail">',
			'	<div class="col-md-1">',
			'		<img src=./{0}></img>',
			'	</div>',
			'	<div class="col-md-11">',
			'		<div class="row">',
			'			<div class="col-md-12">',
			'				<a herf="http://baidu.com" target="_blank" class="user-name">{1}</a>',
			'				<span>(Posted this job at:</span> <span>{3})</span>',
			'			</div>',
			'			<div class="col-md-12">',
			'				<span><strong>{4}</strong>',
			'				</span> <span class="note">•</span> <span>{5}</span> <span',
			'					class="note">•</span> <span>{6}</span>',
			'			</div>',
			'			<div class="col-md-12">',
			'				<span>Brief:</span> <span>{7}</span>',
			'			</div>',
			'			<div class="col-md-12">',
			'				<span>Description:</span> <a href="jobDetail.jsp">',
			'					<p class="job-description">',
			'						<span ng-repeat="des in job.description"> {8}<br>',
			'						</span>',
			'					</p> </a>',
			'			</div>',
			'			<div class="top-right">',
			'				<span>12 visits</span><span class="icons like-{9}">like</span>',
			'			</div>', '		</div>', '	</div>', '</div>'].join('');
	var jobs = [{
				poster : 'Miles Zhong',
				like : 'yes',
				postTime : '2013-12-23',
				title : 'Senior Software Engineer',
				city : 'ShangHai',
				position : 'PuDong Distrect',
				brief : 'job brief description',
				description : 'job descrition1 <br> job description2',
				profile : '/image/2.jpg'
			}, {
				poster : 'Justin Liu',
				like : 'no',
				postTime : '2013-12-23',
				title : 'Senior Software Engineer',
				city : 'ShangHai',
				position : 'PuDong Distrect',
				brief : 'job brief description',
				description : [
						'1、具有扎实的计算机基础知识；',
						'2、熟悉W3C标准及规范，熟悉HTML、CSS、JavaScript等技术；',
						'3、熟悉各类JavaScript框架，如jQuery、ExtJs、Yahoo UI、prototype、Moontools等;',
						'4、能熟练高效手工编写HTML、CSS及JS代码，确保代码对各种浏览器的良好兼容性；',
						'5、熟悉面向对象的软件设计方法、对设计模式有深入的理解及应用。',
						'6、具备JavaScript框架开发经验者优先考虑。',
						'7、具备游戏平台，游戏社区，游戏播放器开发经验者优先考虑。'],
				profile : '/image/1.jpg'
			}, {
				poster : 'Justin Liu',
				like : 'no',
				postTime : '2013-12-23',
				title : 'Senior Software Engineer',
				city : 'ShangHai',
				position : 'PuDong Distrect',
				brief : 'job brief description',
				description : [
						'1、具有扎实的计算机基础知识；',
						'2、熟悉W3C标准及规范，熟悉HTML、CSS、JavaScript等技术；',
						'3、熟悉各类JavaScript框架，如jQuery、ExtJs、Yahoo UI、prototype、Moontools等;',
						'4、能熟练高效手工编写HTML、CSS及JS代码，确保代码对各种浏览器的良好兼容性；',
						'5、熟悉面向对象的软件设计方法、对设计模式有深入的理解及应用。',
						'6、具备JavaScript框架开发经验者优先考虑。',
						'7、具备游戏平台，游戏社区，游戏播放器开发经验者优先考虑。'],
				profile : '/image/1.jpg'
			}, {
				poster : 'Justin Liu',
				like : 'no',
				postTime : '2013-12-23',
				title : 'Senior Software Engineer',
				city : 'ShangHai',
				position : 'PuDong Distrect',
				brief : 'job brief description',
				description : [
						'1、具有扎实的计算机基础知识；',
						'2、熟悉W3C标准及规范，熟悉HTML、CSS、JavaScript等技术；',
						'3、熟悉各类JavaScript框架，如jQuery、ExtJs、Yahoo UI、prototype、Moontools等;',
						'4、能熟练高效手工编写HTML、CSS及JS代码，确保代码对各种浏览器的良好兼容性；',
						'5、熟悉面向对象的软件设计方法、对设计模式有深入的理解及应用。',
						'6、具备JavaScript框架开发经验者优先考虑。',
						'7、具备游戏平台，游戏社区，游戏播放器开发经验者优先考虑。'],
				profile : '/image/1.jpg'
			}, {
				poster : 'Justin Liu',
				like : 'no',
				postTime : '2013-12-23',
				title : 'Senior Software Engineer',
				city : 'ShangHai',
				position : 'PuDong Distrect',
				brief : 'job brief description',
				description : [
						'1、具有扎实的计算机基础知识；',
						'2、熟悉W3C标准及规范，熟悉HTML、CSS、JavaScript等技术；',
						'3、熟悉各类JavaScript框架，如jQuery、ExtJs、Yahoo UI、prototype、Moontools等;',
						'4、能熟练高效手工编写HTML、CSS及JS代码，确保代码对各种浏览器的良好兼容性；',
						'5、熟悉面向对象的软件设计方法、对设计模式有深入的理解及应用。',
						'6、具备JavaScript框架开发经验者优先考虑。',
						'7、具备游戏平台，游戏社区，游戏播放器开发经验者优先考虑。'],
				profile : '/image/1.jpg'
			}, {
				poster : 'Justin Liu',
				like : 'no',
				postTime : '2013-12-23',
				title : 'Senior Software Engineer',
				city : 'ShangHai',
				position : 'PuDong Distrect',
				brief : 'job brief description',
				description : [
						'1、具有扎实的计算机基础知识；',
						'2、熟悉W3C标准及规范，熟悉HTML、CSS、JavaScript等技术；',
						'3、熟悉各类JavaScript框架，如jQuery、ExtJs、Yahoo UI、prototype、Moontools等;',
						'4、能熟练高效手工编写HTML、CSS及JS代码，确保代码对各种浏览器的良好兼容性；',
						'5、熟悉面向对象的软件设计方法、对设计模式有深入的理解及应用。',
						'6、具备JavaScript框架开发经验者优先考虑。',
						'7、具备游戏平台，游戏社区，游戏播放器开发经验者优先考虑。'],
				profile : '/image/1.jpg'
			}, {
				poster : 'Justin Liu',
				like : 'no',
				postTime : '2013-12-23',
				title : 'Senior Software Engineer',
				city : 'ShangHai',
				position : 'PuDong Distrect',
				brief : 'job brief description',
				description : [
						'1、具有扎实的计算机基础知识；',
						'2、熟悉W3C标准及规范，熟悉HTML、CSS、JavaScript等技术；',
						'3、熟悉各类JavaScript框架，如jQuery、ExtJs、Yahoo UI、prototype、Moontools等;',
						'4、能熟练高效手工编写HTML、CSS及JS代码，确保代码对各种浏览器的良好兼容性；',
						'5、熟悉面向对象的软件设计方法、对设计模式有深入的理解及应用。',
						'6、具备JavaScript框架开发经验者优先考虑。',
						'7、具备游戏平台，游戏社区，游戏播放器开发经验者优先考虑。'],
				profile : '/image/1.jpg'
			}];


//	var jobs = SellController.testDwr('',function(jobs){
//		_.each(jobs, function(job) {
//    				var dom = String.format(template, job.poster, job.postTime,
//    						job.title, job.city, job.position);
//    				$('#jobList').insert(dom);
//    			})
//	});

	_.each(jobs, function(job) {
				var dom = String.format(template, job.poster, job.postTime,
						job.title, job.city, job.position);
				$('#jobList').append(dom);
			})

})