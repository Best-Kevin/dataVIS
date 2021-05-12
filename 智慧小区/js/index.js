$(document).ready(function() {
	function weather() {
		$.ajax({
			type: "get",
			async: false,
			dataType: "jsonp",
			url: "https://api.seniverse.com/v3/weather/now.json?key=rlaz3yugjaptxegr&location=beijing&language=zh-Hans&unit=c",
			data: {

			},
			success: function(data, status) {
				alert(1)
			},
			error: function(jqXHR2) {
				alert("天气接口错误，请稍后再试！")
			}
		});
	};
	//weather();

	$('.tab_box li').click(function() {
		$(this).addClass("active").siblings().removeClass("active")
	});

	$('.tab1').click(function() {
		$('.main_box').removeClass("display");
		$('.main_box2').addClass("display");
		$('.top_center').html('曲江新区平安大数据')
	});

	$('.tab2').click(function() {
		$('.main_box2').removeClass("display");
		$('.main_box').addClass("display");
		$('.top_center').html('裕昌·太阳城')
	});

	//页面交互、数据
	var myChart1 = echarts.init(document.getElementById('echarts_data1'));

	function echart1() {
		var option1 = {
			color: ['#0345A2'],
			title: {
				default: false
			},
			//整个图表位置
			grid: {
				left: '1%',
				right: '4%',
				bottom: '10%',
				top: '15%',
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
				data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
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
				name: '数据量',
				type: 'line',
				smooth: true,
				data: [320, 590, 680, 790, 920, 820, 920, 1020, 932, 901, 934, 236, 1330, 752, 365, 252, 932, 901, 934, 236, 1330, 752, 365, 252, 932, 901, 934, 236, 1330, 752],
				symbol: 'none',
				areaStyle: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: '#023D7D' // 0% 处的颜色
					}, {
						offset: 1,
						color: '#0B1842' // 100% 处的颜色
					}])
				},
				markLine: {
					show: false
				}
			}]
		};
		myChart1.setOption(option1);
	};
	echart1();

	function echart2() {
		var option2 = {
			color: ['#0345A2'],
			title: {
				default: false
			},
			//整个图表位置
			grid: {
				left: '1%',
				right: '4%',
				bottom: '10%',
				top: '15%',
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
				data: ['5-01', '5-02', '5-03', '5-04', '5-05', '5-06', '5-07', '5-08', '5-09', '5-10', '5-11', '5-12', '5-13', '5-14', '5-15', '5-16', '5-17', '5-18', '5-19', '5-20', '5-21', '5-22', '5-5-23', '5-24', '5-25', '5-26', '5-27', '5-28', '5-29', '5-30'],
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
				name: '数据量',
				type: 'line',
				smooth: true,
				data: [251, 635, 920, 664, 151, 681, 365, 151, 134, 290, 350, 251, 635, 920, 664, 151, 681, 365, 151, 134, 290, 350, 251, 635, 920, 664, 151, 681, 365, 151, 134, 290, 350],
				symbol: 'none',
				areaStyle: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: '#023D7D' // 0% 处的颜色
					}, {
						offset: 1,
						color: '#0B1842' // 100% 处的颜色
					}])
				},
				markLine: {
					symbol: 'none',
					itemStyle: {
						normal: {
							color: '#1e90ff',
							label: {
								show: true
							}
						}
					},
					data: [{
						type: 'average',
						name: '平均值'
					}]
				}
			}]
		};
		myChart1.setOption(option2);
	}

	$('.data_box1').click(function() {
		$('.j1_box1').removeClass("display");
		$('.j1_box2').addClass("display");
		echart1();
	});

	$('.data_box2').click(function() {
		$('.j1_box2').removeClass("display");
		$('.j1_box1').addClass("display");
		echart2();
	});

	//房屋概览 --------------------- echarts
	function echarts_1() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('Cake'));
		option = {
			tooltip: {
				trigger: 'item',
				formatter: "{b} : {c} ({d}%)"
			},
			calculable: true,
			series: [{
				name: ' ',
				color: ['#1179FE', '#3FD4EC', '#8613F6'],
				type: 'pie',
				radius: [0, 100],
				center: ['50%', '50%'],
				roseType: 'radius',
				label: {
					normal: {
						show: true
					},
					emphasis: {
						show: true
					}
				},

				lableLine: {
					normal: {
						show: true
					},
					emphasis: {
						show: true
					}
				},

				data: [{
						value: 456,
						name: '闲置'
					},
					{
						value: 663,
						name: '出租'
					},
					{
						value: 862,
						name: '自住'
					},

				]
			}, ]
		};

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}
	echarts_1();

	//amcharts1
	am4core.ready(function() {

		// Themes begin
		am4core.useTheme(am4themes_animated);
		// Themes end

		var chart = am4core.create("chartsdiv1", am4charts.PieChart3D);
		chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

		chart.data = [{
				country: "流动人口",
				litres: 501.9
			},
			{
				country: "流动人口2",
				litres: 201.1
			}
		];

		var series = chart.series.push(new am4charts.PieSeries3D());
		series.dataFields.value = "litres";
		series.dataFields.category = "country";
		series.colors.list = [
			am4core.color("#47EBEA"),
			am4core.color("#1E94FE"),
		];

	}); // end am4core.ready()

	//amcharts2
	am4core.ready(function() {

		// Themes begin
		am4core.useTheme(am4themes_animated);
		// Themes end

		var chart = am4core.create("chartsdiv2", am4charts.PieChart3D);
		chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

		chart.data = [{
				country: "特殊人群",
				litres: 141.9
			},
			{
				country: "特殊人群2",
				litres: 621.1
			}
		];

		var series = chart.series.push(new am4charts.PieSeries3D());
		series.dataFields.value = "litres";
		series.dataFields.category = "country";
		series.colors.list = [
			am4core.color("#B916DE"),
			am4core.color("#D4A031"),
		];

	}); // end am4core.ready()

	//进度条1
	var progress1chart = "";

	function progress1char() {
		var progress1chart = echarts.init(document.getElementById('progress1_chart'));
		var baifenbi = [0.111, 0.222, 0.333, 0.444, 0.555, 0.666, 0.777, 0.888, 0.920, 0.960];
		var grayBar = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		var paiming = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
		var xingm = ['字段名称10', '字段名称9', '字段名称8', '字段名称7', '字段名称6', '字段名称5', '字段名称4', '字段名称3', '字段名称2', '字段名称1'];
		option = {
			grid: {
				left: '5%', //如果离左边太远就用这个......
				right: '5%',
				bottom: '-2%',
				top: '5%',
				containLabel: true
			},
			xAxis: [{
					show: false,
				},
				{
					show: false,
				}
			],
			yAxis: {
				type: 'category',
				axisLabel: {
					show: true, //让Y轴数据不显示
				},

				axisTick: {
					show: false, //隐藏Y轴刻度
				},
				axisLine: {
					show: false, //隐藏Y轴线段
				},
			},
			series: [
				//背景色
				{
					show: true,
					type: 'bar',
					barGap: '-100%',
					barWidth: '15%', //统计条宽度 
					itemStyle: {
						normal: {
							barBorderRadius: 50,
							color: 'rgba(41, 55, 94)'
						},
					},
					z: 1,
					data: grayBar,
				},
				//蓝条
				{
					show: true,
					type: 'bar',
					barGap: '-100%',
					barWidth: '15%', //统计条宽度
					itemStyle: {
						normal: {
							barBorderRadius: 50, //统计条弧度
							color: {
								colorStops: [{
									offset: 0,
									color: '#5d29f7' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#5093fb' // 100% 处的颜色
								}],
								globalCoord: false, // 缺省为 false

							}
						},
					},
					max: 1,
					label: {
						normal: {
							show: true,
							textStyle: {
								color: '#ccc', //百分比颜色
								fontSize: 18
							},
							position: [0, '-20'],
							rich: { //富文本
								green: {
									color: '#70DDA7',
									fontSize: 18
								},
								yellow: {
									color: '#CCB877',
									fontSize: 18
								},
								red: {
									color: '#B916DE',
									fontSize: 18
								}
							},
							formatter: function(data) {
								//富文本固定格式{colorName|这里填你想要写的内容}
								//富文本固定格式{colorName|这里填你想要写的内容}
								if(paiming[data.dataIndex] == 1) {
									return '{start1|}{red|' + ' ' + paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] + '}';
								} else if(paiming[data.dataIndex] == 2) {
									return '{start1|}{yellow|' + ' ' + paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] + '}';
								} else if(paiming[data.dataIndex] == 3) {
									return '{start1|}{green|' + ' ' + paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] + '}';
								} else {
									return '{start2|}{white|' + ' ' + paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] + '}';
								}
								if(paiming[data.dataIndex] == 1 || paiming[data.dataIndex] == 2 || paiming[data.dataIndex] == 3) {
									return '{yellow|' + paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] + '}';
								} else {
									return paiming[data.dataIndex] + '  ' + xingm[data.dataIndex]
								}
							},

						}
					},
					data: baifenbi,
				},

			]
		};

		progress1chart.setOption(option)
	}
	progress1char();

	function jindu2() {
		var myChart2 = echarts.init(document.getElementById('jindu2'));
		option2 = {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			grid: {
				left: '3%',
				right: '3%',
				bottom: '0%',
				top: '2%',
				containLabel: true
			},
			xAxis: {
				type: 'value',
				show: false,
				boundaryGap: [0, 0.01]
			},
			yAxis: {
				type: 'category',
				data: ['违法事件库', '不安全事件库', '吸毒人员库', '特殊人员库', '案/事件库', '社区车辆库', '社区房屋库', '社区人员库'],
				axisLabel: {
					textStyle: {
						color: '#47EBEA',
						fontSize: 18
					}
				}
			},
			series: [{
					type: 'bar',
					data: [120, 330, 463, 563, 663, 763, 863, 963],
					color: {
						colorStops: [{
							offset: 0,
							color: '#1F3DE2' // 0% 处的颜色
						}, {
							offset: 1,
							color: '#2086FC' // 100% 处的颜色
						}],
						globalCoord: false, // 缺省为 false

					}
				},

			]
		};
		myChart2.setOption(option2);
	}
	jindu2();

	//第一页下面的ec
	function sqjr() {
		var myChart2 = echarts.init(document.getElementById('sq_right'));
		option2 = {
			tooltip: {},
			grid: {
				top: '14%',
				left: '1%',
				right: '1%',
				bottom: '2%',
				containLabel: true,
			},
			legend: {
				top: '-1%',
				itemGap: 50,
				data: ['社区总数量', '最新接入数'],
				textStyle: {
					color: '#1E94FE',
					borderColor: '#fff',
					fontSize:14,
				},
			},
			xAxis: [{
				type: 'category',
				boundaryGap: true,
				axisLine: { //坐标轴轴线相关设置。数学上的x轴
					show: true,
					lineStyle: {
						color: '#f9f9f9'
					},
				},
				axisLabel: { //坐标轴刻度标签的相关设置
					textStyle: {
						color: '#d1e6eb',
						margin: 15,
					},
					rotate: 60,
				},
				axisTick: {
					show: false,
				},
				data: ['5-1', '5-2', '5-3', '5-4', '5-5', '5-6', '5-7', '5-8', '5-9', '5-10', '5-11', '5-12', '5-13','5-14', '5-15','5-16', '5-17', '5-18', '5-19', '5-20', '5-21', '5-22', '5-23', '5-24', '5-25', '5-26', '5-27', '5-28','5-29', '5-30'],
				axisLabel: {
					interval: 1
				},
			}],
			yAxis: [{
				type: 'value',
				min: 0,
				// max: 140,
				splitNumber: 7,
				splitLine: {
					show: true,
					lineStyle: {
						color: '#0a3256'
					}
				},
				axisLine: {
					show: false,
				},
				axisLabel: {
					margin: 20,
					textStyle: {
						color: '#d1e6eb',
				
					},
				},
				axisTick: {
					show: false,
				},
			}],
			series: [{
				name: '社区总数量',
				type: 'line',
				 smooth: true, //是否平滑曲线显示
//				symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
				showAllSymbol: true,
				symbol: 'emptyCircle',
				symbolSize: 6,
				lineStyle: {
					normal: {
						color: "#28ffb3", // 线条颜色
					},
					borderColor: '#f0f'
				},
				label: {
					show: true,
					position: 'top',
					textStyle: {
						color: '#fff',
					}
				},
				itemStyle: {
					normal: {
						color: "#28ffb3",

					}
				},
				tooltip: {
					show: false
				},
				areaStyle: { //区域填充样式
					normal: {
						//线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: 'rgba(0,154,120,1)'
							},
							{
								offset: 1,
								color: 'rgba(0,0,0, 0)'
							}
						], false),
						shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
						shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
					}
				},
				data: [393, 438, 485, 631, 362,393, 438, 485, 631, 566,632, 438, 485, 631, 704,393, 438, 485, 631, 362,459, 438, 485, 631, 689,393, 438, 485, 631, 689]
			}, {
				name: '最新接入数',
				type: 'bar',
				barWidth:10,
				tooltip: {
					show: false
				},
				label: {
					show: true,
					position: 'top',
					textStyle: {
						color: '#fff',
					}
				},
				itemStyle: {
					normal: {
//						barBorderRadius: 5,
//						color: new echarts.graphic.LinearGradient(
//							0, 0, 0, 1, [{
//									offset: 0,
//									color: '#14c8d4'
//								},
//								{
//									offset: 1,
//									color: '#43eec6'
//								}
//							]
//						),
						color: function(params) {
							var colorList = ['#0ec1ff', '#10cdff', '#12daff', '#15ebff', '#17f8ff', '#1cfffb', '#1dfff1'];
							return colorList[params.dataIndex];
						}
					}
				},
				data: [200, 382, 102, 267, 186,200, 382, 250, 267, 186,200, 382, 335, 267, 462,200, 382, 102, 267, 186,200, 382, 102, 267, 199,200, 382, 102, 267, 262]
			}]
		};
		myChart2.setOption(option2);
	}
		sqjr();
		
		
	$('#center_map .open_btn').click(function() {
		$('#center_map .open_btn').css("background","#47EBEA");
		$('#center_map .off_btn').css("background","transparent");
	});
	$('#center_map .off_btn').click(function() {
		$('#center_map .open_btn').css("background","transparent");
		$('#center_map .off_btn').css("background","#47EBEA");
	});
		
});