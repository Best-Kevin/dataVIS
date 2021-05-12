// $(function() {
// 	//连接Socket的URL地址
// 	var wsurl = "ws://47.75.11.151:8888/ws";
// 	var websocket; //用于存放客户端创建的Socket对象
// 	if (window.WebSocket) {

// 		websocket = new WebSocket(wsurl);
// 		websocket.onopen = function(event) {
// 			//onopen事件，连接成功
// 			console.log('--------------------')
// 			$('#log').append("<p>conneted success!</p>");
// 		}
// 		websocket.onmessage = function(event) {
// 			//onmessage事件，接收消息，显示在页面上
// 			var msg = JSON.parse(event.data);
// 			var type = msg.type;
// 			var namer = msg.namer;
// 			var content = msg.content;
// 			if (type == 'usermsg') {
// 				$('#showMessage').append("<p>" + namer + ":" + content + "</p>");
// 			} else {
// 				$('#showMessage').append("<p>system:" + content + "</p>");
// 			}
// 		}
// 		//数据发送
// 		function send() {
// 			var namer = $("[name='namer']").val();
// 			var content = $("[name='content']").val();
// 			if (namer == '') {
// 				alert('请输入名称');
// 				return false;
// 			}
// 			if (content == '') {
// 				alert('请输入内容');
// 				return false;
// 			}
// 			var msg = {
// 				namer: namer,
// 				content: content
// 			};
// 			websocket.send(JSON.stringify(msg));
// 		}
// 		$("#sendmessage").bind('click', send);
// 	}
// })


//控制全屏
function enterfullscreen() { //进入全屏
    // $("#fullscreen").html("退出全屏");
    var docElm = document.documentElement;
    //W3C
    if(docElm.requestFullscreen) {
        docElm.requestFullscreen();
    }
    //FireFox
    else if(docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
    }
    //Chrome等
    else if(docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
    }
    //IE11
    else if(elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
};

$('#js_full_screen').click(function(){
	enterfullscreen();
});

function exitfullscreen() { //退出全屏
    if(document.exitFullscreen) {
        document.exitFullscreen();
    } else if(document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if(document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    } else if(document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}
$('.weather').click(function(){
	exitfullscreen()
});
	
	
	
$(document).ready(function() {
	//定时器每秒调用一次fnDate()
	setInterval(function() {
		fnDate();
	}, 1000);
	// var time = '';
	//js 获取当前时间
	function fnDate() {
		var oDiv = document.getElementById("times_one");
		var weeks_one = document.getElementById("weeks_one");
		var date = new Date();
		var year = date.getFullYear(); //当前年份
		var month = date.getMonth(); //当前月份
		var data = date.getDate(); //天
		var hours = date.getHours(); //小时
		var minute = date.getMinutes(); //分
		var second = date.getSeconds(); //秒
		var time = year + "-" + fnW((month + 1)) + "-" + fnW(data) + " " + fnW(hours) + ":" + fnW(minute) + ":" + fnW(
			second);
		oDiv.innerHTML = time;

		var day = new Date(Date.parse(time)); //需要正则转换的则 此处为 ： var day = new Date(Date.parse(date.replace(/-/g, '/')));
		var today = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六');
		var week = today[day.getDay()];
		//最终结果为：
		// alert(week);
		weeks_one.innerHTML = week;
	}
	//补位 当某个字段不是两位数时补0
	function fnW(str) {
		var num;
		str > 10 ? num = str : num = "" + str;
		return num;
	}

	function test() {
		$(".iframe_page").attr("src", 'http://share.xiaoding.co/h5/#/');
	}
	setTimeout(test, 500);

	var websocket = null;
	if('WebSocket' in window) {
		console.log('浏览器支持WebSocket')
		websocket = new WebSocket('ws://47.75.11.151:8888/ws');
	} else {
		alert('该浏览器不支持');
	};
	websocket.onopen = function(event) {
		console.log('链接开始')
	}
	websocket.onclose = function(event) {
		console.log('链接关闭')
	}

	websocket.onmessage = function(event) {
		var result = $.parseJSON(event.data);
		console.log(result)
		console.log('----------消息来了----------:');
		
		
		
		if(result.data != ''){
			var phone_m = result.data.Phone.substring(0,3)+"****"+ result.data.Phone.substring(8,11);
			console.log(phone_m);
			$(".data_websocket").prepend('<tr> <td>'+ result.data.CreatedAt.substring(5) +'</td> <td>'+ phone_m +'</td> <td>'+ result.data.Profit+'</td> <td>'+ result.data.BuyPrice +'</td> <td>'+ result.data.OrderPrice +'</td> <td>'+ result.data.Symbol +'</td> <td>'+ result.data.CashAmount +'</td> <td>'+ result.data.Amount +'</td> <td>'+ result.data.BuyCashAmount +'</td></tr>');
		}else{
			// var result = $.parseJSON(event.data);
			var $phb_box = $('.data_websocket');
			$phb_box.children().remove();
			var fileList = '';
			$.each(result.firstData, function(i, items) {
				var phone_m = items.Phone.substring(0,3)+"****"+ items.Phone.substring(8,11);
				console.log(phone_m);
				
				var ii = i + 1;
				if (i > -1) {
					fileList += 
						'<tr>' +
							'<td>'+ items.CreatedAt.substring(5) +'</td>' +
							'<td>'+ phone_m +'</td>' +
							'<td>'+ items.Profit +'</td>' +
							'<td>'+ items.BuyPrice +'</td>' +
							'<td>'+ items.OrderPrice +'</td>' +
							'<td>'+ items.Symbol +'</td>' +
							'<td>'+ items.CashAmount +'</td>' +
							'<td>'+ items.Amount +'</td>' +
							'<td>'+ items.CashAmount +'</td>' +
						'</tr>'
				};
			});
			$phb_box.html(fileList);
		}
		console.log($.parseJSON(event.data))
		
	};
	websocket.onerror = function(event) {
		console.log('发生错误')
	}
	window.onbeforeunload = function() {
		websocket.onclose;
	}
	
	
	
	//总收益
	function coinhisrank() {
		$.ajax({
			type: "get",
			dataType: "json",
			contentType: "Accept-Language:zh-cn",
			url: "http://xiaoding.co/api/center/globalincome",
			data: {},
			success: function(data, status) {
				// console.log('--------------------');
				// console.log(data);
				
				
				var shouyi_rmbData = JSON.stringify(data.rmb);
				var shouyi_rmb = shouyi_rmbData.substring(1, shouyi_rmbData.length - 6);
				$('#shouyi_rmb').html(shouyi_rmb)
				
				
				var shouyi_usData = JSON.stringify(data.us);
				var shouyi_us = shouyi_usData.substring(1, shouyi_usData.length - 6);
				$('#shouyi_us').html(shouyi_us);
			},
			error: function(jqXHR2) {
				console.log(jqXHR2)
			}
		});
	};
	coinhisrank();

	// 顶部导航切换
	$('.tab_box li').click(function() {
		$(this).addClass("active").siblings().removeClass("active");
	});

	$('.tab1').click(function() {
		$('.main_box').removeClass("display");
		$('.main_box2').addClass("display");
		$('.main_box3').addClass("display");
	});

	$('.tab2').click(function() {
		$('.main_box').addClass("display");
		$('.main_box2').removeClass("display");
		$('.main_box3').addClass("display");
	});

	$('.tab3').click(function() {
		$('.main_box').addClass("display");
		$('.main_box2').addClass("display");
		$('.main_box3').removeClass("display");
	});


	//页面交互、数据
	var myChart1 = echarts.init(document.getElementById('echarts_data1'));

	function echart1() {
		myChart1.setOption(option1 = {
			color: ['#1FE8DF'],
			title: {
				default: false
			},
			//整个图表位置
			grid: {
				left: '1%',
				right: '2%',
				bottom: '6%',
				top: '10%',
				containLabel: true
			},
			tooltip: {
				trigger: 'axis'
			},
			toolbox: {
				show: false
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: xData,
				axisLabel: {
					interval: 1
				},
				axisLine: {
					lineStyle: {
						color: '#0345A2', // 颜色
						width: 1, // 粗细
						type: 'solid'
					}
				},
				axisLabel: {
					textStyle: {
						color: '#86BED3'
					}
				},
				//辅助线
				splitLine: {
					show: true,
					lineStyle: {
						// 使用深浅的间隔色
						color: '#143260',
						type: 'dashed'
					}
				}
			},
			yAxis: {
				type: 'value',
				axisLine: {
					lineStyle: {
						color: '#0345A2', // 颜色
						width: 1, // 粗细
						type: 'solid'
					}
				},
				axisLabel: {
					textStyle: {
						color: '#86BED3'
					}
				},
				//辅助线
				splitLine: {
					show: true,
					lineStyle: {
						// 使用深浅的间隔色
						color: '#143260',
						type: 'dashed'
					}
				}
			},
			series: [{
				name: '当日收益',
				type: 'line',
				smooth: true,
				data: [320, 590, 680, 790, 920, 820, 920],
				symbol: 'none',
				areaStyle: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: '#021519' // 0% 处的颜色
					}, {
						offset: 1,
						color: '#127573' // 100% 处的颜色
					}])
				},
				markLine: {
					show: false
				}
			}]
		});
	
		var xData = '';
		var data_end = [];
		var data_end2 = [];
		
		
		var yData = '';
		var yData_end = [];
		var yData_end2 = [];
		
		$.ajax({
			type: "get",
			dataType: "json",
			async: false,
			contentType: "Accept-Language:zh-cn",
			url: "http://xiaoding.co/api/globalincome",
			data: {},
			success: function(data, status) {
				console.log(data);
				// console.log(res);
				
				$.each(data, function(i, items) {
					xData += items.created_at.substring(5,10) + ',';
					data_end = xData.split(",");
					data_end2 = data_end.slice(0,-1);
					
					
					yData += items.income + ',';
					yData_end = yData.split(",");
					yData_end2 = yData_end.slice(0,-1)
				});
				
				// console.log(yData_end2)
				
				
				myChart1.setOption({
					xAxis:{
						data: data_end2
					},
					series:[{
						data: yData_end2
					}]
				});
			},
			error: function(jqXHR2) {
				console.log(jqXHR2)
			}
		});
		// console.log(xData);
	
	};
	echart1();

	// 排行榜默认加载
	function phb() {
		$.ajax({
			type: "GET",
			url: "http://xiaoding.co/api/center/ranking",
			data: {},
			//请求成功
			success: function(result) {
				// console.log('--------------------', result)
				// return false;
				var $phb_box = $('#phb_box');
				$phb_box.children().remove();

				var fileList = '';
				$.each(result, function(i, items) {
					// console.log(items.images[0])
					if (items.headimgurl == undefined) {
						// console.log(this)
						this.headimgurl = './img/logo.png'
					}

					var ii = i + 1;

					if (i > -1) {

						fileList += '<li>' +
							'<div class="phbNum"> <font class="font0" face="font01">' + ii + '</font> </div>' +
							'<img class="user_head" src="http://usdtimg.zhinengkeji.com/' + items.headimgurl + '">' +
							'<div class="phbName_box"> <div class="phbName">' + items.name + '</div>' +
							'<div class="phbNameData">今日 ' + items.today + ' | 总  ' + items.all + ' </div>' +
							'</div>' +
							'</li>'
					}
				});
				$phb_box.html(fileList);
			},
			error: function(e) {
				console.log(e);
			}
		});
	}
	phb();

	// 排行榜切换加载
	$('.tab_pm li').click(function() {
		$(this).addClass("active").siblings().removeClass("active");
	});
	$('.tab_pm_1').click(function() {
		$.ajax({
			type: "GET",
			url: "http://xiaoding.co/api/center/ranking",
			data: {
				time: 't'
			},
			//请求成功
			success: function(result) {
				// console.log('--------------------', result)
				// return false;
				var $phb_box = $('#phb_box');
				$phb_box.children().remove();

				var fileList = '';
				$.each(result, function(i, items) {
					// console.log(items.images[0])
					if (items.headimgurl == undefined) {
						// console.log(this)
						this.headimgurl = './img/logo.png'
					};
					var ii = i + 1;
					if (i > -1) {
						fileList += '<li>' +
							'<div class="phbNum"> <font class="font0" face="font01">' + ii + '</font> </div>' +
							'<img class="user_head" src="http://usdtimg.zhinengkeji.com/' + items.headimgurl + '">' +
							'<div class="phbName_box"> <div class="phbName">' + items.name + '</div>' +
							'<div class="phbNameData">今日 ' + items.today + ' | 总  ' + items.all + ' </div>' +
							'</div>' +
							'</li>'
					};
				});
				$phb_box.html(fileList);
			},
			error: function(e) {
				console.log(e);
			}
		});
	});
	$('.tab_pm_2').click(function() {
		$.ajax({
			type: "GET",
			url: "http://xiaoding.co/api/center/ranking",
			data: {
				time: 'm'
			},
			//请求成功
			success: function(result) {
				// console.log('--------------------', result)
				// return false;
				var $phb_box = $('#phb_box');
				$phb_box.children().remove();

				var fileList = '';
				$.each(result, function(i, items) {
					// console.log(items.images[0])
					if (items.headimgurl == undefined) {
						// console.log(this)
						this.headimgurl = './img/logo.png'
					};
					var ii = i + 1;
					if (i > -1) {
						fileList += '<li>' +
							'<div class="phbNum"> <font class="font0" face="font01">' + ii + '</font> </div>' +
							'<img class="user_head" src="http://usdtimg.zhinengkeji.com/' + items.headimgurl + '">' +
							'<div class="phbName_box"> <div class="phbName">' + items.name + '</div>' +
							'<div class="phbNameData">本月 ' + items.today + ' | 总  ' + items.all + ' </div>' +
							'</div>' +
							'</li>'
					};
				});
				$phb_box.html(fileList);
			},
			error: function(e) {
				console.log(e);
			}
		});
	});
	$('.tab_pm_3').click(function() {
		$.ajax({
			type: "GET",
			url: "http://xiaoding.co/api/center/ranking",
			data: {
				time: 'all'
			},
			//请求成功
			success: function(result) {
				// console.log('--------------------', result)
				// return false;
				var $phb_box = $('#phb_box');
				$phb_box.children().remove();

				var fileList = '';
				$.each(result, function(i, items) {
					// console.log(items.images[0])
					if (items.headimgurl == undefined) {
						// console.log(this)
						this.headimgurl = './img/logo.png'
					};
					var ii = i + 1;
					if (i > -1) {
						fileList += '<li>' +
							'<div class="phbNum"> <font class="font0" face="font01">' + ii + '</font> </div>' +
							'<img class="user_head" src="http://usdtimg.zhinengkeji.com/' + items.headimgurl + '">' +
							'<div class="phbName_box"> <div class="phbName">' + items.name + '</div>' +
							'<div class="phbNameData"> 总收益  ' + items.all + ' </div>' +
							'</div>' +
							'</li>'
					};
				});
				$phb_box.html(fileList);
			},
			error: function(e) {
				console.log(e);
			}
		});
	});


	$('#center_map .open_btn').click(function() {
		$('#center_map .open_btn').css("background", "#47EBEA");
		$('#center_map .off_btn').css("background", "transparent");
	});
	$('#center_map .off_btn').click(function() {
		$('#center_map .open_btn').css("background", "transparent");
		$('#center_map .off_btn').css("background", "#47EBEA");
	});

});
