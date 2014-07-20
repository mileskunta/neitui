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

Date.prototype.format = function(fmt)
{ //author: meizz
  var o = {
    "M+" : this.getMonth()+1,                 //月份
    "d+" : this.getDate(),                    //日
    "h+" : this.getHours(),                   //小时
    "m+" : this.getMinutes(),                 //分
    "s+" : this.getSeconds(),                 //秒
    "q+" : Math.floor((this.getMonth()+3)/3), //季度
    "S"  : this.getMilliseconds()             //毫秒
  };
  if(/(y+)/.test(fmt))
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  for(var k in o)
    if(new RegExp("("+ k +")").test(fmt))
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
  return fmt;
}