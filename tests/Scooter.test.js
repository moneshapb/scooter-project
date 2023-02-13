const Scooter = require('../src/Scooter').default
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  test('has correct scooter properties', () => {
    // edit this to be a real test!
    let station = "waterloo";
    let scooter = new Scooter(station);
    expect(scooter).toHaveProperty("station", "wateraloo");
    expect(scooter).toHaveProperty("user", null);
    expect(scooter).toHaveProperty("serial", 1);
    expect(scooter).toHaveProperty("charge", 100);
    expect(scooter).toHaveProperty("isBroken", false);

  }
)

})

//Method tests
describe('scooter methods', () => {
  // tests here!

  //rent method
test ("can be rented", function(){
  let station = "waterloo";
  let scooter = new Scooter(station);
scooter.rent()
expect(scooter).toHaveProperty("station", null)

});
  //dock method
  test("check dock scooter returned to station", () => {
    let station = "waterloo";
    let scooter = new Scooter(station);
  scooter.dock("waterloo")
    expect(scooter.station).toBe("waterloo")
    expect(scooter.user).toBe(null)
  });
});

//recharge method
test("check scooter is fully charged", () => {
  let station = "waterloo";
  let scooter = new Scooter(station);
  scooter.recharge() 
  expect(scooter.charge).toBe(100)
  expect(scooter.recharge()).toBe("Scooter is now fully charged")
});
//request repair method
test("check scooter is broken", () => {
  let station = "waterloo";
  let scooter = new Scooter(station);
  scooter.requestRepair()
  expect(scooter.isBroken).toBe(true)
  expect(scooter.station).toBe(null)
  expect(scooter.user).toBe(null)
});
