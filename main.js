var prompter = require('prompt');
var bus = require('./bus');
var student = require('./student');

var schoolBus = new bus();

prompter.start();

prompter.get(['name','gender','grade','GPA','detentions','sleepingInClass','catchPhrase'],function(err,result){
  var newStudent = new student(result.name,result.gender,result.grade,result.GPA,result.detentions,result.sleepingInClass,result.catchPhrase);
newStudent.canStudentHaveFun();

  schoolBus.studentEntersBus(result.name,result.gender,result.grade,result.GPA,result.detentions,result.sleepingInClass,result.catchPhrase);

  fs.appendFile("BUS.txt", JSON.stringify(newBus.studentsOnTheBus) + "\r\n", function(err){
	if(err)
	  throw err;
    }
  )

  fs.readFile("BUS.txt", "utf-8", function(err, data){
		if(err)
			throw err;
		else{
		  var items = data.split('\r\n');
		  if (items.length>=20){
				schoolBus.busChatter();
		  }
	  }
   }
 )
});
