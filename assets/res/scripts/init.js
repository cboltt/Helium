console.log("initializing...");
		
	
	var now = new Date();

	var days = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
	var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');

	var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
	function fourdigits(number)	{
		return (number < 1000) ? number + 1900 : number;
	}
	
	today_weekday =  days[now.getDay()];
	today_date = months[now.getMonth()] + " " + date + ", " + (fourdigits(now.getYear())) ;
	document.getElementById('today-weekday').innerHTML = today_weekday;
	document.getElementById('today-date').innerHTML = today_date;
	
//====================================================================

	console.log(now);
	
	function loadTimetable(type, block1, block2, block3, block4){
		$('#timetable-load').load('res/timetables/timetable-full.html #' + type, function() {
		  console.log('Load was performed on ' + type);
		  document.getElementById("timetable1").innerHTML = block1;
		  document.getElementById("timetable2").innerHTML = block2;
		  document.getElementById("timetable3").innerHTML = block3;
		  document.getElementById("timetable4").innerHTML = block4;

		});
	}
	function getDataInit(){
		getData();
		setTimeout(function() {
			getDataInit();
			console.log("updated at " + now);
		},45000000);
	}
	getDataInit();
console.log("---------------");