function Flight(fnum, capacity, reserved, ETA){
    this.fnum = fnum;
    this.capacity = capacity;
    this.reserved = reserved;
    this.ETA = ETA;
    
}

Flight.prototype.bookSeats = function(numSeats){
	if(numSeats + this.reserved <= this.capacity){
		this.reserved += numSeats;
		alert("Seats Booked!");
	}else{
		alert("Not Enough Seats Left!");
	}
	
};

function Arrivals(name){
	this.name = name;
	this.flights = [];
}

Arrivals.prototype.addFlight = function(flight){
	this.flights.push(flight);
};

Arrivals.prototype.arrivingPassengers = function(minutes){
var pass = 0;
	for(var i = 0; i < this.flights.length; i++){
		if(this.flights[i].ETA < minutes){
			pass+=this.flights[i].reserved;
		}
	}
	return pass;
};


//var montreal1 = new Flight("AC755", 135, 60, 14);
//alert(montreal1.fnum +": "+montreal1.reserved);
//function book(){
//	montreal1.bookSeats(2);
//}
var flight1 = new Flight("AC123", 130, 90, 14);
var flight2 = new Flight("AC124", 135, 95, 14);
var flight3 = new Flight("AC125", 140, 100, 40);
var flight4 = new Flight("AC126", 145, 105, 40);

var terminal1 = new Arrivals();
terminal1.addFlight(flight1);
terminal1.addFlight(flight2);
terminal1.addFlight(flight3);
terminal1.addFlight(flight4);
alert("Passengers arriving in 15 minutes: " + terminal1.arrivingPassengers(15));
