class Scooter{

  static nextSerial = 1;
  constructor(station){

    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial ++ ;
    this.charge = 100;
    this.isBroken = false;
  }
  // scooter code here

  rent(){
if(this.charge > 20 && this.isBroken == false){
  this.user = "user";
  this.station = null;
  console.log(`Scooter with serial number ${this.serial} is rented by ${this.user}`);
}else if (this.charge < 20){
  throw Error("Scooter needs to charge");
}else{
  throw Error("Scooter needs repair");
}
 }

 dock(station) {
this.station = station
this.user = null;
console.log('Thank you for your custom');
 }

 recharge(){
  if(this.charge < 100){
    this.charge = 100;
  }
  console.log('Scooter is now fully charged');
 }

 requestRepair(){
if(this.isBroken == false){
  this.isBroken = true;
  this.station = null;
  this.user = null;
  console.log('Scooter is now broken');
 }else if(this.isBroken == true){
  console.log('Scooter is already broken');
}else{
  console.log('Scooter is now fixed');
}
 }
}


module.exports = Scooter
