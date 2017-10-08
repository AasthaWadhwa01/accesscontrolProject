let assert = require('chai').assert;
let expect = require('chai').expect;
let supertest = require('supertest');
let express = require('express');
let sinon = require('sinon');
var url = supertest("http://localhost:3000");

let app = require("../app");
let approver = require("../models/approverData");
let damage = require("../models/damage");
let locationChange = require("../models/locationChange");
let lostCard = require("../models/lostCard");
let requester = require("../models/requester");
let thirdParty = require("../models/thirdParty");
let requesterStub = sinon.stub(requester, 'find');
let requestersave = sinon.stub(requester.prototype, 'save');
let requesterupdate = sinon.stub(requester, 'update');
let requesterdelete = sinon.stub(requester, 'remove');

//Test Cases for requester
describe("Testing Requester", function() {

    requesterStub.yields(null, { "name": "Prakhar" })
    it("find requesters", function(done) {

        url
            .get("/findemployee")
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if (err) {
                    throw err
                }
                expect(res.body.name).to.be.equal('Prakhar')
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