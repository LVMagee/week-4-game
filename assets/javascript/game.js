$(document).ready(function(){

//game varibles
var num = Math.floor(Math.random() * 120) + 19;
var ruby= Math.floor(Math.random() *12) +1;
var emerald= Math.floor(Math.random() *12) +1;
var diamond= Math.floor(Math.random() *12) +1;
var sapphire= Math.floor(Math.random() *12) +1;
var points 	= 0
var wins = 0
var loss = 0

//sets opening random number
$("#num").text(num);


//shows wins and loss
$("#wins").text(wins);
$("#loss").text(loss);


//game reset to new randoms
function reset(){
	num = Math.floor(Math.random() * 120) +19;
	$("#num").text(num);
	ruby = Math.floor(Math.random() *12) +1;
	emerald = Math.floor(Math.random() *12) +1;
	diamond = Math.floor(Math.random() *12) +1;
	sapphire = Math.floor(Math.random() *12) +1;
	points = 0;
	$("#points").text(points);
} 

//adds the wins 
function winner (){
	alert("Winner, way to go!");
	wins++; 
	$("#wins").text(wins);
	reset();
}

//addes the losses
function loser (){
	alert ("Oops try again!");
	loss++;
	$("#loss").text(loss);
	reset()
}

//sets up click for jewels
$("#ruby").on ("click", function(){
	points = points + ruby;
	$("#points").text(points); 
	if (points == num){
		winner();
	}
	else if ( points > num){
		loser();
	}   
})  
$("#emerald").on ("click", function(){
	points = points + emerald;
	$("#points").text(points); 
	if (points == num){
		winner();
	}
	else if ( points > num){
		loser();
	}   
})  
$("#diamond").on ("click", function(){
	points = points + diamond;
	$("#points").text(points); 
	if (points == num){
		winner();
	}
	else if ( points > num){
		loser();
	}   
})  
$("#sapphire").on ("click", function(){
	points = points + sapphire;
	$("#points").text(points); 
	if (points == num){
		winner();
	}
	else if ( points > num){
		loser();
	}   
}) 
$("#clear").on ("click", function(){
	wins = 0;
	loss = 0;
	$("#wins").text(wins);
	$("#loss").text(loss);
})

});


