// Write your tests here!
const expect = require("chai").expect;
const {polybius} = require("../src/polybius.js");

describe("Checking if the Polybius works properly", () => {
    it("should ignore capital letters when it is encoding", () => {
    const actual = polybius("A Message");
    const expected = "11 23513434112251"
    expect(actual).to.eql(expected);
      });
    });
  
describe("Checking if the Polybius works properly", () => {
  it("should translate the letters i and j to 42 when encoding", () => {
  const actual = polybius("ij");
  const expected = "4242"
  expect(actual).to.eql(expected);
    });
  });

describe("Checking if the Polybius works properly", () => {
  it("should translate 42 to the letters (i,j) when decoding", () => {
  const actual = polybius("42", false);
  const expected = "(i/j)"
  expect(actual).to.eql(expected);
    });
  });


describe("Checking if the Polybius works properly", () => {
  it("should maintain spaces in the message before and after when it is encoding", () => {
  const actual = polybius("A Message");
  const expected = "11 23513434112251"
  expect(actual).to.eql(expected);
    });
  });

describe("Checking if the Polybius works properly", () => {
  it("should maintain spaces in the message before and after when it is decoding", () => {
  const actual = polybius("11 23513434112251", false);
  const expected = "a message"
  expect(actual).to.eql(expected);
    });
  });
