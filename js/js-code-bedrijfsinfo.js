/*///// CHART BESTUUR /////*/
var barChartData = {
	labels: ["Bert De Graeve","Jo Van Biesbroeck",
	"Christiane Franck","Charles H. Bracken","Diedrik Karsten",
	"Manuel Kohnstamm","Jim Ryan"],
	datasets: [{
		label: 'Vaste vergoeding',
		backgroundColor: "rgba(255,220,115, 1)",
		data: [
			145,
			45,
			45,
			12,
			12,
			12,
			12
		]
	}, {
		label: 'Variabele vergoeding',
		backgroundColor: "rgba(191,155,48, 1)",
		data: [
			27.5,
			7.5,
			15,
			22,
			14,
			12,
			12
		]
	}]
};

Chart.defaults.global.animation.duration = 8000;
var ctx = document.getElementById("canvasbestuur").getContext("2d");
window.myBar = new Chart(ctx, {
	responsive:true,
	type: 'bar',
	data: barChartData,
	options: {
		title: {
			display: true,
			position: 'bottom',
			text: 'Vergoeding in duizend €',
			fontSize:15,
			fontFamily:'Omnes ExtraLight',
			fontColor:'dimgrey',
			padding:20
		},
		legend: {
			display: false,
			position: 'bottom',
			labels: {
				boxWidth: 40,
				fontSize: 12,
				padding: 20,
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








/*///// CHART AANDELEN /////*/
var barChartDataAandeel = {
	labels: ["Aantal aandelen"],
	datasets: [{
		label: 'Liberty Global Group',
		backgroundColor: "rgba(255,220,115, 1)",
		data: [
			56.57
		]
	}, {
		label: 'Norges Bank',
		backgroundColor: "rgba(255,207,64, 1)",
		data: [
			4.52
		]
	}, {
		label: 'BNP Paribas Investment Partners SA',
		backgroundColor: "rgba(255,191,0, 1)",
		data: [
			3.27
		]
	}, {
		label: 'Eigen aandelen',
		backgroundColor: "rgba(255,231,0, 1)",
		data: [
			0.65
		]
	}, {
		label: 'Werknemers',
		backgroundColor: "rgba(191,155,48, 1)",
		data: [
			0.32
		]
	}, {
		label: 'Publiek',
		backgroundColor: "rgba(166,124,0, 1)",
		data: [
			34.67
		]
	}]
};
Chart.defaults.global.animation.duration = 8000;
var ctx = document.getElementById("canvasaandeel").getContext("2d");
window.myBar = new Chart(ctx, {
	responsive:true,
	type: 'horizontalBar',
	data: barChartDataAandeel,
	options: {
		title: {
			display: true,
			position: 'bottom',
			text: 'Aantal aandelen in %',
			fontSize:15,
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










/*///// ADRESSEN VESTIGINGEN /////*/
//default coordinates and zoomview
var mymap = L.map('map').setView([52.5, 0], 5);
//marker
var marker1 = L.marker([51.035331, 4.483217]).addTo(mymap); //Liersesteenweg 4, 2800 Mechelen, België
var marker2 = L.marker([49.576655, 6.138278]).addTo(mymap); //Rue Peternelchen 2, L-2370 Howald, Luxemburg 
var marker3 = L.marker([49.609908, 6.119692]).addTo(mymap); // Avenue Monterey 40, L-2163 Luxemburg
var marker4 = L.marker([53.361806, -6.443320]).addTo(mymap); // Commercial House, Milbank Business Park, Lucan, Co. Dubline, Ireland
//popups
marker1.bindPopup("<h3>Mechelen,<br>België</h3>").openPopup();
marker2.bindPopup("<h3>Howald,<br>Luxemburg</h3>");
marker3.bindPopup("<h3>Luxemburg,<br>Luxemburg</h3>");
marker4.bindPopup("<h3>Dubline,<br>Ireland</h3>");

L.tileLayer('http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {
	maxZoom: 18,
	id: 'mapbox.satellite',
	accessToken: 'your.mapbox.access.token'
}).addTo(mymap);



