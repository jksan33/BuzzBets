// Storing input from the bet form
function storeLong() {
    localStorage.setItem('long', 1);
}

function storeShort() {
    localStorage.setItem('short', 1);
}

// Functions for if the user already bet
function blong() {
	var input = document.createElement('div');
	
	div.className = 'row';
	
	div.innerHTML = '<input id="long" type="button" value="Long" onclick="" />
}

function bshort() {
	
}

function init() {
	 // Stored data from the bet form
    var storedLong = localStorage.getItem('long');
    var storedShort = localStorage.getItem('short');
    
    // Check if there is an existing bet
    if (storedLong == 1) {
    	blong()
    }
    else if (storedShort == 1) {
    	bshort()
    }
    else {
    	
    }
}






