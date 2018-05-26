var expect = require("chai").expect;
var mongoose = require("mongoose");
var plant = require("../db/index");
var server = require("../server.js");

var supertest = require("supertest");

var request = supertest.agent(server);

describe("plant Model", function () {

  it("should be a Mongoose model", function () {
    expect(new plant.Plant()).to.be.instanceOf(mongoose.Model);
  });

  it("should have a schema", function () {
    expect(plant.Plant.schema).to.exist;
  });

  it("should have a `name` property", function () {
    expect(plant.Plant.schema.paths.name).to.exist;
  });

  it("should have a `name` property that is a string", function () {
    expect(plant.Plant.schema.paths.name.options.type.name).to.equal("String");
  });

  it("should have a `number` property", function () {
    expect(plant.Plant.schema.paths.number).to.exist;
  });

  it("should have a `number` property that is a number", function () {
    expect(plant.Plant.schema.paths.number.options.type.name).to.equal("Number");
  });

  it("should have a `description` property", function () {
    expect(plant.Plant.schema.paths.description).to.exist;
  });

  it("should have a `description` property that is a string", function () {
      expect(plant.Plant.schema.paths.description.options.type.name).to.equal("String");
  });

  it("should have a `imageUrl` property", function () {
    expect(plant.Plant.schema.paths.imageUrl).to.exist;
  });

  it("should have a `imageUrl` property that is a string", function () {
      expect(plant.Plant.schema.paths.imageUrl.options.type.name).to.equal("String");
  });

});