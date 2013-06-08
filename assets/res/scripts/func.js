

function getData(){

	$.getJSON('res/db/data.json', function(data) {

		for (var i in data.rotations) {
			if(data.rotations[i].date === today_date){
				var current = data.rotations[i];
				
				if(current.type === "10"){
					$('#error-toast').show();
					document.getElementById("error-toast").innerHTML = "No School Today";
					console.log("No School");
				}else{
					
					var block1 = current.block1;
					var block2 = current.block2;
					var block3 = current.block3;
					var block4 = current.block4;
					
					document.getElementById("today-blockday").innerHTML = "Day " + current.day;
					document.getElementById("block1").innerHTML = block1;
					document.getElementById("block2").innerHTML = block2;
					document.getElementById("block3").innerHTML = block3;
					document.getElementById("block4").innerHTML = block4;
					
					loadTimetable(current.type, block1, block2, block3, block4);
					
				}
				
			}
		}

	});

}
