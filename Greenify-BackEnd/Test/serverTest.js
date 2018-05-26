
let mongoose = require("mongoose");
let User = require("../db/index");

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();
//let config = require("config");

chai.use(chaiHttp);



  describe("/POST user", () => {

      it("it should POST a user ", (done) => {
                    chai.request(server)
            .post("/users")
            .end((err, res) => {
                res.should.have.status(200);
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


    describe("/POST logout", () => {

      it("it should send status 404 if there is an error in logout ", (done) => {
                    chai.request(server)
            .post("/logout")
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.be.a("object");
              done();
            });
      });
  });


      describe("/Get plants", () => {

      it("they should have id,number,name,imageUrl,description properties ", (done) => {
            chai.request(server)
            .get("/plants")
            .end((err, res) => {
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.have.property('_id');
                res.body[0].should.have.property('number');
                res.body[0].should.have.property('name');
                res.body[0].should.have.property('imageUrl');
                res.body[0].should.have.property('description');
              done();
            });
      });
  });


      describe("/Get myplants", () => {

      it("it should send status 500 because it is related for the session", (done) => {
            chai.request(server)
            .get("/myplants")
            .end((err, res) => {
                res.body.should.be.a('object');
                res.should.have.status(500);
               

                
              done();
            });
      });
  });

      describe("/POST forkOne", () => {

            it("it should send status 500 because it is related for the session ", (done) => {
                          chai.request(server)
                  .post("/forkOne")
                  .end((err, res) => {
                      res.should.have.status(500);
                      res.body.should.be.a("object");
                    done();
                  });
            });
        });

      describe("/Get viewProfile", () => {

      it("it should send status 500 because it is related for the session", (done) => {
            chai.request(server)
            .get("/viewProfile")
            .end((err, res) => {
                res.body.should.be.a('object');
                res.should.have.status(500);
               

                
              done();
            });
      });
  });

     describe("/Get plants/:number", () => {

      it("it should send status 200 to make sure it's getting the plant", (done) => {
            chai.request(server)
            .get("/plants/1")
            .end((err, res) => {
        
                res.should.have.status(200);
               

                
              done();
            });
      });
  }); 
