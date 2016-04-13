var prompter = require('prompt');
var bus = require('./bus');
var student = require('./student');
var fs = require('fs');

var schoolBus = new bus();

prompter.start();

prompter.get(['name','gender','grade','GPA','detentions','sleepingInClass','catchPhrase'],function(err,result){
  var newStudent = new student(result.name,result.gender,result.grade,result.GPA,result.detentions,result.sleepingInClass,result.catchPhrase);

  newStudent.canStudentHaveFun();

  schoolBus.studentEntersBus(result.name,result.gender,result.grade,result.GPA,result.detentions,result.sleepingInClass,result.catchPhrase);

  fs.appendFile("BUS.txt", JSON.stringify(schoolBus.studentsOnTheBus) + "\r\n");

  fs.readFile("BUS.txt", "utf-8", function(err, data){
    if (err){
      throw err;
    } else {
      var items = data.split('\r\n');
				if (items.length>=2){
					//Begin the bus chatter if there are at least (startChatterTrigger)# of students in schoolbus.txt
						schoolBus.busChatter();
				}
	  }
  }
)
});
