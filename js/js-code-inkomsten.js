/*///// INKOMSTEN PAGINA /////*/
var main = function () {
  	"use strict";
  	$("a").on("click", function(){
		$("li").removeClass("selected");
		$(this).closest("li").addClass("selected");

		$(".uitleg div").addClass("onzichtbaar");
		var tetonenparagraaf = $(this).closest("li").data("par");
		console.log(tetonenparagraaf);
		$(tetonenparagraaf).removeClass("onzichtbaar");
	});
}

$(document).ready(main);




/*///// OPBRENGSTEN /////*/
var barChartDataOpbrengst2015 = {
	labels: ["Opbrengst in miljoen"],
	datasets: [{
		label: 'Kabeltelevisie',
		backgroundColor: "rgba(255,220,115, 1)",
		data: [
			552
		]
	}, {
		label: 'Breedbandinternet',
		backgroundColor: "rgba(255,207,64, 1)",
		data: [
			546
		]
	}, {
		label: 'Vaste Telefonie',
		backgroundColor: "rgba(255,191,0, 1)",
		data: [
			227
		]
	}, {
		label: 'Mobiele Telefonie',
		backgroundColor: "rgba(255,231,0, 1)",
		data: [
			203
		]
	}, {
		label: 'Bedrijfsdiensten',
		backgroundColor: "rgba(191,155,48, 1)",
		data: [
			118
		]
	}, {
		label: 'Overige',
		backgroundColor: "rgba(166,124,0, 1)",
		data: [
			162
		]
	}]
};
Chart.defaults.global.animation.duration = 8000;
var ctx = document.getElementById("opbrengst2015").getContext("2d");
window.myBar = new Chart(ctx, {
	responsive:true,
	type: 'horizontalBar',
	data: barChartDataOpbrengst2015,
	options: {
		title: {
			display: true,
			position: 'bottom',
			text: 'Opbrengst in miljoen €',
			fontSize:13,
			fontFamily:'Omnes ExtraLight',
			fontColor:'dimgrey',
			padding:0
		},
		legend: {
			display: false,
			position: 'bottom',
			labels: {
				boxWidth: 40,
				fontSize: 12,
				padding: 0,
				fontColor:'dimgrey',
				fontFamily:'Omnes ExtraLight'
			}
		},
		tooltips: {
			mode: 'label',
			backgroundColor: 'rgba(255,255,255,0.5)',
			xPadding: 10,
			yPadding: 10,
			cornerRadius: 20,
			multiKeyBackground: 'rgba(255,255,255,0.5)',
			displayColors: true,
			borderColor: 'rgba(0,0,0,1)',
			borderWidth: 5,

			titleFontFamily: 'Omnes Medium',
			titleFontColor: 'dimgrey',
			titleFontSize: 15,
			titleMarginBottom: 10,

			bodyFontFamily: 'Omnes Regular',
			bodyFontColor: 'dimgrey',
			bodyFontSize: 15
		},
		scales: {
			xAxes: [{
				display: false,
				stacked: true
			}],
			yAxes: [{
				display: false,
				stacked: true
			}]
		}
	}
});










var barChartDataVordering = {
	labels: [
		"1 - 30 dagen",
		"31 - 60 dagen",
		"61 - 90 dagen",
		"91 - 120 dagen",
		"> 120 dagen"
	],
	datasets: [{
		label: 'Vlottende Handelsvorderingen',
		data: [2727, 8596, 1972, 1468, 15996],
		backgroundColor: ["rgba(255,220,115, 1)", "rgba(255,207,64, 1)", "rgba(255,191,0, 1)", "rgba(255,231,0, 1)", "rgba(191,155,48, 1)"],
		borderColor: 'rgb(254, 195, 33)',
		borderWidth: 5
	}]
};
Chart.defaults.global.animation.duration = 8000;
var ctx = document.getElementById("vordering").getContext("2d");
window.myBar = new Chart(ctx, {
	responsive:true,
	type: 'polarArea',
	data: barChartDataVordering,
	options: {
		title: {
			display: true,
			position: 'bottom',
			text: 'Nog te goed in duizend €',
			fontSize:13,
			fontFamily:'Omnes ExtraLight',
			fontColor:'dimgrey',
			padding:0,
		},
		legend: {
			display: false,
			position: 'bottom',
			labels: {
				boxWidth: 40,
				fontSize: 12,
				padding: 0,
				fontColor:'dimgrey',
				fontFamily:'Omnes ExtraLight'
			}
		},
		tooltips: {
			mode: 'label',
			backgroundColor: 'rgba(255,255,255,0.5)',
			xPadding: 10,
			yPadding: 10,
			cornerRadius: 20,
			multiKeyBackground: 'rgba(255,255,255,0.5)',
			displayColors: true,
			borderColor: 'rgba(0,0,0,1)',
			borderWidth: 5,

			titleFontFamily: 'Omnes Medium',
			titleFontColor: 'dimgrey',
			titleFontSize: 15,
			titleMarginBottom: 10,

			bodyFontFamily: 'Omnes Regular',
			bodyFontColor: 'dimgrey',
			bodyFontSize: 15
		},
		scales: {
			xAxes: [{
				display: false
			}],
			yAxes: [{
				display: false
			}]
		}
	}
});