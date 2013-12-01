// JavaScript Document

window.onload = function(){
	$.getJSON("includes/stations.json", function(stations){ //includes/lures.json would be php file, function (lures) is an array created to grab from
		//alert(lures[1].brand);
		//alert(lures.length);
		$('#stationList li').remove(); //clears the ul with the id stationList so info doesnt keep appending
		for(var i = 0; i < stations.length; i++){
			document.getElementById("stationList").innerHTML+=
			'<li>' + '<a href="'+stations[i].page+'">' + 
			'<h1>' + stations[i].stationName + '</h1>' + 
			'<img src="'+stations[i].image+'" alt="'+stations[i].stationName+'">' + 
			'<p>' + stations[i].musicStyle + 
			'</p>' + 
			'</a>' + 
			'</li>';
		//basically filling in with a loop the html with the proper information until the loop runs out of items, [i] is the array number as it increases
		}
		$('#stationList').listview('refresh'); //Refreshes the list after adding information
	});
}