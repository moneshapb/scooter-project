const { describe, test, expect } = require("@jest/globals");
const User = require("../src/User");


describe("User instance interity check", () => {
// User tests here
test("has correct scooter properties", () => {
  // edit this to be a real test!
  let user = new User("tom", "chocolate", 21);
  expect(user).toHaveProperty("username", "tom");
  expect(user).toHaveProperty("password", "chocolate");
  expect(user).toHaveProperty("age", 21);
  expect(user).toHaveProperty("loggedIn", false);
});
// test username
});
// test password

// test age
describe("User login and out ", () => {
// test login
test("can login", function () {
  let user = new User("tom", "chocolate", 21);
  expect(user).toHaveProperty("loggedIn", false);
  user.login("chocolate");
  expect(user).toHaveProperty("loggedIn", true);
});
// test logout

test("can logout", function () {
    let user = new User("tom", "chocolate", 21);
    expect(user).toHaveProperty("loggedIn", false);
    user.login("chocolate");
    expect(user).toHaveProperty("loggedIn", true);
    user.logout();
    expect(user).toHaveProperty("loggedIn", false);

});
});