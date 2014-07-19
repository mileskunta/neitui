
<!doctype html>
<%@pagepageEncoding="UTF-8"%>
<html lang="cn-ZH" ng-app>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<title>Opportunities</title>
<script
	src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.6/angular.js"></script>
<script src="js/com/neitui/jobDetail.js?v=1"></script>
<link rel="stylesheet" media="screen" href="css/bootstrap.css">
<link rel="stylesheet" media="screen" href="css/css.css">
</head>

<body>
	<div id="navbar" class="navbar navbar-inverse navbar-fixed-top"
		role="navigation">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse"
					data-target=".navbar-collapse">
					<span class="sr-only">Toggle navigation</span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">好员工去哪儿</a>
			</div>
			<div class="collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<li class="active"><a href="./index.jsp">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div id="main" class="container">
		<div class="col-xs-12 col-sm-9">
			<div ng-controller="JobDetailCtrl">
				<div class="row">
					<div class="col-md-1">
						<img src=./{{job.profile}}></img>
					</div>
					<div class="col-md-11">
						<div class="row">
							<div class="col-md-12">
								<a herf="http://baidu.com" target="_blank" class="user-name">{{job.poster}}</a>
								<span>(Posted this job at:</span> <span>{{job.postTime}})</span>
							</div>
							<div class="col-md-12">
								<span>Title:</span> <span><strong>{{job.title}}</strong>
								</span> <span>City:</span> <span>{{job.city}}</span> <span>Position:</span>
								<span>{{job.position}}</span>
							</div>

							<div class="col-md-12">
								<span>Brief:</span> <span>{{job.brief}}</span>
							</div>
							<div class="col-md-12 job-description">
								<p>
									Description:<br>{{job.description}}
								</p>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
		<div class="col-xs-6 col-sm-3" id="sidebar" role="navigation">
			<div class="list-group">
				<a href="#" class="list-group-item active">Link</a> <a href="#"
					class="list-group-item">Link</a> <a href="#"
					class="list-group-item">Link</a> <a href="#"
					class="list-group-item">Link</a> <a href="#"
					class="list-group-item">Link</a> <a href="#"
					class="list-group-item">Link</a> <a href="#"
					class="list-group-item">Link</a> <a href="#"
					class="list-group-item">Link</a> <a href="#"
					class="list-group-item">Link</a> <a href="#"
					class="list-group-item">Link</a>
			</div>
		</div>


	</div>
</body>
</html>