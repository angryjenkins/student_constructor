function Bus(studentsOnTheBus,driverName,color,gas,studentEntersBus,busChatter){
  this.studentsOnTheBus = studentsOnTheBus,
  this.driverName = driverName,
  this.color = color,
  this.gas = gas,
  this.studentEntersBus = function(){
    studentsOnTheBus.push(new Student);
  },
  this.busChatter = function(){
    for(i=0;i<studentsOnTheBus.length;i++){
      console.log(studentsOnTheBus[i].catchPhrase);
    }
  }
}

module.exports = Bus();
