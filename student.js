var prompter = require('prompt');

function Student(name,gender,grade,gpa,detentions,sleepingInClass,catchPhrase){
  this.name = name,
  this.gender = gender,
  this.grade = grade,
  this.gpa = gpa,
  this.detentions = detentions,
  this.sleepingInClass = sleepingInClass,
  this.catchPhrase = catchPhrase,
  this.canStudentHaveFun = function(){
    if(this.detentions < 10 && parseFloat(this.gpa)>2){
      console.log(this.name + " can have fun!");
    } else {
      console.log(this.name + " needs to study before having fun.");
    }
  }
}

module.exports = Student;
