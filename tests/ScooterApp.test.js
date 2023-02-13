const Scooter = require('../src/Scooter').default
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
describe('User instance interity check', () => {
const user = new User('monesha30', 'chocolate21', 31);

test('User instance is created', () => {
expect(user).toHaveProperty("username");
expect(user).toHaveProperty("password");
expect(user).toHaveProperty("age");
expect(typeof user.loggedIn).toBe("boolean");

});


}); 

describe('ScooterApp instance interity check', () => {

const scooterApp = new ScooterApp();

test('ScooterApp instance is created', () => {
expect(scooterApp).toHaveProperty("stations");
expect(scooterApp).toHaveProperty("registeredUsers");
expect(typeof scooterApp.stations).toBe("object");
expect(typeof scooterApp.registeredUsers).toBe("object");
});

});