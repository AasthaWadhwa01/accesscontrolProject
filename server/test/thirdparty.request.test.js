let assert = require('chai').assert;
let expect = require('chai').expect;
let supertest = require('supertest');
let express = require('express');
let sinon = require('sinon');
var url = supertest("http://localhost:4000");

let app = require("../app");
let thirdParty = require("../models/thirdparty.request");

let requesterGetStub = sinon.stub(requester, 'find');
let requesterInsertStub = sinon.stub(requester.prototype, 'save');


//Test Cases for requester
describe("Testing Requester", function() {

    requesterStub.yields(null, { "name": "Shubhang" })
    it("find requesters", function(done) {

        url
            .get("/thirdPartDetails")
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if (err) {
                    throw err
                }
                expect(res.body.name).to.be.equal('Shubhang')
                done()

            })
    })

    /* requesterStub.yields(null, { "id": "50042956" })
    it("find requesters", function(done) {

        url
            .get("/findemployeebyid/50042956")
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if (err) {
                    throw err
                }
                expect(res.body.id).to.be.equal('50042956')
                done()

            })
    })*/

    /* modelsave.yields(null, { success: "success" })
     it("add employees", function(done) {


         url
             .post("/emp/add")
             .end(function(err, res) {
                 if (err) {
                     throw err
                 }
                 expect(res.body.success).to.be.equal("success")
                 done()
             })
     })


     modelupdate.withArgs({ id: "23" }, { $set: { name: "Krrr" } }).yields(null, { name: "Prakhar" })
     it("update employees", function(done) {

         url
             .put('/emp/update/23')
             .send({ name: "Krrr" })
             .end((err, res) => {
                 if (err)
                     throw err
                 expect(res.body.name).to.be.equal("Prakhar")
                 done()
             })


     })


     it("delete employees", function(done) {
         modeldelete.withArgs({ id: "23" }).yields(null, { name: "Prakhar" })
         url
             .delete('/emp/delete/23')
             .end((err, res) => {
                 if (err) throw err
                 expect('Prakhar').to.be.equal(res.body.name)

                 done()
             })


     })*/
})