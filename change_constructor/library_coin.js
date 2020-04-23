'use strict';
var coins =  { 
	cents: 0,
	isValid: function(cents) {
if (this.cents === "") 
	{
		return alert("Please enter a number 0-99");
	}
else if (isNaN(this.cents)) 
	{
		return alert("Please enter a number 0-99");
	}
else if (this.cents > 0 && this.cents < 99) 
	{
		return alert("Please enter a number 0-99");
	}
else
 {
  return true ;
   }
},
getNumber: function(divisor) {
var coins = this.cents / divisor;
	}
};
