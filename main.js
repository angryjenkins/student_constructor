var prompter = require('prompt');
var bus = require('./bus');
var student = require('./student');

var schoolBus = new Bus();

prompter.start();

prompter.get(['name','gender','grade','GPA','detentions','sleepingInClass','catchPhrase'],function(err,result){
  var newStudent = new Student(result.name,result.gender,result.grade,result.GPA,result.detentions,result.sleepingInClass,result.catchPhrase);
newStudent.canStudentHaveFun();

  schoolBus.studentEntersBus(result.name,result.gender,result.grade,result.GPA,result.detentions,result.sleepingInClass,result.catchPhrase);

  fs.appendFile("BUS.txt", JSON.stringify(newBus.studentsOnTheBus) + "\r\n", function(err){
		if(err)
		  throw err;
    }
  )

  fs.readFile("BUS.txt", "utf-8", function(err, readResult){
		if(err)
			throw err;
		else{
		  var items = readResult.split('\r\n');
		  if (items.length>=20){
				schoolBus.busChatter();
		  }
	  }
   }
 )
});
