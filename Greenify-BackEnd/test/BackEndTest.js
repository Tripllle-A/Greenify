var expect = require('chai').expect;
var mongoose = require('mongoose');
var user = require('../db/index');

describe('User Model', function () {

  it('should be a Mongoose model', function () {
    expect(new user.User()).to.be.instanceOf(mongoose.Model);
  });

  it('should have a schema', function () {
    expect(user.User.schema).to.exist;
  });

  it('should have a `username` property', function () {
    expect(user.User.schema.paths.username).to.exist;
  });

  it('should have a `username` property that is a string', function () {
    expect(user.User.schema.paths.username.options.type.name).to.equal('String');
  });

  it('should have a `username` property that is unique', function () {
    expect(user.User.schema.paths.username.options.unique).to.be.true;
  });

  it('should have a `password` property', function () {
    expect(user.User.schema.paths.password).to.exist;
  });

  it('should have a `password` property that is a string', function () {
    expect(user.User.schema.paths.password.options.type.name).to.equal('String');
  });

  it('should have a `phonenumber` property', function () {
    expect(user.User.schema.paths.phonenumber).to.exist;
  });

  it('should have a `phonenumber` property that is a number', function () {
      expect(user.User.schema.paths.phonenumber.options.type.name).to.equal('Number');
  });

});