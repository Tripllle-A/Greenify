
let mongoose = require("mongoose");
let User = require("../db/index");

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();
let config = require("config");

chai.use(chaiHttp);



  describe("/POST user", () => {

      it("it should POST a user ", (done) => {
                    chai.request(server)
            .post("/users")
            .end((err, res) => {
                res.should.have.status(404);
                //res.body.should.be.a('object');
              done();
            });
      });
  });


  

    describe("/POST login", () => {

      it("it should send status 404 if there is an error in login ", (done) => {
                    chai.request(server)
            .post("/login")
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.be.a("object");
              done();
            });
      });
  });