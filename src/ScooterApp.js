const User = require('./User')
const Scooter = require('./Scooter').default

class ScooterApp {
  constructor(stations, registeredUsers){
    this.stations = {
      'Northampton': [],
      'Birmingham': [],
      'London': []
    };
    this.registeredUsers = {
      username: 'Monesha30',
      username: 'Anthong15',
      username: 'Sally21'
  };
  }
registeredUsers(username,password,age){
  const newUser = new user(username, password, age)
  if(this.registeredUsers[username] === newUser){
    throw Error ('already registered')
  }
  if(newUser.age < 18){
    throw Error ('Too young to register')
  }
}


loginUser(username,password){
  const user = this.registeredUsers[username]
  if(user.password === password){
    user.loggedIn = true;
  }else{
    throw Error ('Incorrect password entered')
  }
}
logout(){
  this.loggedIn = false;
}
}

module.exports = ScooterApp
