var Student = require('./student');
var fs = require('fs');

function Bus(studentsOnTheBus,driverName,color,gas,studentEntersBus,busChatter){
  this.studentsOnTheBus = [];
  this.driverName = driverName,
  this.color = color,
  this.gas = gas,
  this.studentEntersBus = function(name,gender,grade,GPA,detentions,sleepingInClass,catchPhrase){
		this.studentsOnTheBus.push(new Student(name,gender,grade,GPA,detentions,sleepingInClass,catchPhrase));
	},
  this.busChatter = function(){
		fs.readFile("BUS.txt", "utf-8", function(err, data){
		if(err){
      throw err;
    }	else{
			var items = data.split('\r\n');
			for (var i=0; i< items.length-1; i++){
			  var itemJSON = JSON.parse(items[i].replace(/[\[\]']+/g,''));
		    if(itemJSON.detentions<10 && parseFloat(itemJSON.GPA)>2) {
			    console.log(itemJSON.name + " says: " + itemJSON.catchPhrase);
	      }
		  }
	  }
  })
}
};

module.exports = Bus;
