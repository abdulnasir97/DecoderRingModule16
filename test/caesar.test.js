// Write const expect = require("chai").expect;
const expect = require("chai").expect;
const {caesar} = require("../src/caesar.js");

describe("Checking if the input is valid", () => {
  it("should show false if the shift input is zero", () => {
  const actual = caesar("message", 0);
  expect(actual).to.be.false;
    });
  });

describe("Checking if the input is valid", () => {
  it("should show false if the shift input is less then -25", () => {
  const actual = caesar("message", -26);
  expect(actual).to.be.false;
    });
  });

describe("Checking if the input is valid", () => {
  it("should show false if the shift input is greater then 25", () => {
  const actual = caesar("message", 26);
  expect(actual).to.be.false;
    });
  });

describe("Checking if the input is valid", () => {
  it("should show false if the shift input is'nt present", () => {
  const actual = caesar("message");
  expect(actual).to.be.false;
    });
  });

describe("Checking if Caesar shift works properly", () => {
  it("should show the properly encoded message while ignoring capital letters", () => {
  const actual = caesar("Zebra Magazine", 3);
  const expected = "cheud pdjdclqh"
  expect(actual).to.eql(expected);
    });
  });

describe("Checking if Caesar shift works properly", () => {
  it("should show the properly encoded message that handles shifts that go past the end of the alphabet.", () => {
  const actual = caesar("Zebra Magazine", 3);
  const expected = "cheud pdjdclqh"
  expect(actual).to.eql(expected);
    });
  });

describe("Checking if Caesar shift works properly", () => {
  it("should show the properly decoded/encoded message that maintains spaces and other nonalphabetic symbols.", () => {
  const actual = caesar("Zebra Magazine!", 3);
  const expected = "cheud pdjdclqh!"
  expect(actual).to.eql(expected);
    });
  });

describe("Checking if Caesar shift works properly", () => {
  it("should show the properly decoded message that maintains spaces and other nonalphabetic symbols.", () => {
  const actual = caesar("cheud pdjdclqh!", 3, false);
  const expected = "zebra magazine!"
  expect(actual).to.eql(expected);
    });
  });
