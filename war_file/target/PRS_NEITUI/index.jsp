
<!doctype html>
<html lang="cn-ZH" ng-app>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<title>Opportunities</title>
<script src="js/jQuery/jquery-1.8.3.min.js"></script>
<script charset="UTF-8" src="js/com/neitui/OpportunityController.js?v=3"></script>
<script src="js/com/neitui/index.js"></script>
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
				<a class="navbar-brand" href="#"></a>
			</div>
			<div class="collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<li class="active"><a href="#">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div id="main" class="container" ng-controller="OpportunityCtrl">
		<div class="col-xs-12 col-sm-9 panel panel-default ">
			<div id="geo-selection">
				<ul class="nav nav-pills">
					<li><a>上海</a>
					</li>
					<li><a>北京</a>
					</li>
					<li><a>南京</a>
					</li>
					<li><a>苏州</a>
					</li>
					<li><a>杭州</a>
					</li>
					<li><a>武汉</a>
					</li>
				</ul>
			</div>
			<div id="search" class="row">
				<div class="col-md-10">
					<input type="text" id="searchCriteria" class="form-control"
						placeholder="Search Criteria">
				</div>
				<div class="col-md-2">
					<button type="button" class="btn btn-primary">Search</button>
				</div>
			</div>
			<div id="quickReference">
				<ul class="nav nav-pills">
					<li><a>产品经理</a>
					</li>
					<li><a>运营</a>
					</li>
					<li><a>Java</a>
					</li>
					<li><a>前端</a>
					</li>
					<li><a>php</a>
					</li>
					<li><a>C++</a>
					</li>
					<li><a>Android</a>
					</li>
					<li><a>iOS</a>
					</li>
					<li><a>Python</a>
					</li>
					<li><a>Ruby</a>
					</li>
				</ul>
			</div>
			<div id='jobList'></div>
		</div>
		<div class="col-xs-6 col-sm-3" id="sidebar" role="navigation">
			<div class="panel panel-primary">
				<div class="panel-heading">
					<h3 class="panel-title">推荐职位</h3>
				</div>
				<div class="col-xs-12" ng-repeat="job in goodJobs">
					<span>{{job.name}}</span>
				</div>
			</div>
		</div>
	</div>
	<div class="backToTop">
		<img src="../neitui/image/backToTop.png">
	</div>
</body>
</html>