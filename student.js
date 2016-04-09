function Student(name,gender,grade,gpa,detentions,sleepingInClass,catchPhrase){
  this.name = name,
  this.gender = gender,
  this.grade = grade,
  this.gpa = gpa,
  this.detentions = detentions,
  this.sleepingInClass = sleepingInClass,
  this.catchPhrase = catchPhrase,
  this.canStudentHaveFun = function(){
    if(this.detentions < 10 && this.gpa > 2){
      console.log(this.name + " can have fun!");
    } else {
      console.log(this.name + " needs to study before having fun.");
    }
  }
}

prompter.start();

prompter.get(['name', 'gender','grade','gpa','detentions','sleepingInClass','catchPhrase'], function (err, result) {
  //
  // Log the results.
  for(var key in result){
    console.log('You entered:');
    console.log(key + ': ' + result[key]);
  }
});

module.exports = Student();
  // body...
