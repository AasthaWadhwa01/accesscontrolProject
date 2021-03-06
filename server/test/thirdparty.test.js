let supertest = require('supertest');
let chai = require('chai');
let sinon = require('sinon');

let url = 'http://localhost:4009'; //application running port
let app = require('../app');
let thirdParty = require('../models/thirdParty');
let thirdPartySqlStub = sinon.stub(thirdParty, 'query');
let thirdPartyGetStub = sinon.stub(thirdParty, 'find');
let thirdPartyPostStub = sinon.stub(thirdParty.prototype, 'save');

describe('test fetch data of thirdparty access card', () => {
    before(() => {
        thirdPartyGetStub.yields(null, [{
            category: 'Client',
            location: 'Greater Noida',
            employeeName: 'Shubhang',
            employeeId: '50042924',
            visitorName: 'Rohit',
            visitingPurpose: 'Project',
            duration: '7 days',
            dateOfVisiting: '12/12/2017',
            signature: 'Shubhang',
            applicationDate: '21/11/2017'
        }]);
    });

    //positive test case to fetch third party record
    it('validation for positive case of thirdparty access card', (done) => {
        supertest(url)
            .get('/thirdparty/findthird')
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);
                chai.expect(res.body.data[0].category).to.equal('Client');
                done();
            });
    });

    //negative test case to fetch third party record
    it('validation for negative case of thirdparty access type', (done) => {
        supertest(url)
            .get('/thirdparty/findthird')
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);
                chai.expect(res.body.data[0].category).not.to.equal('Cle');
                done();
            });
    });
});

describe('test status of thirdparty access card', () => {
    before(() => {
        thirdPartyGetStub.yields(null, [{
            category: 'Client',
            location: 'Greater Noida',
            employeeName: 'Shubhang',
            employeeId: '50042924',
            visitorName: 'Rohit',
            visitingPurpose: 'Project',
            duration: '7 days',
            dateOfVisiting: '12/12/2017',
            signature: 'Shubhang',
            applicationDate: '21/11/2017'
        }]);
    });

    //test case for status success to fetch third party record
    it('validation for status success', (done) => {
        supertest(url)
            .get('/thirdparty/findthird')
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);
                chai.expect(res.status).to.equal(200);
                done();
            });
    });

    //test case for status not found to fetch third party record
    it('validation for status not found', (done) => {
        supertest(url)
            .get('/thirdparty/findthird')
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);
                chai.expect(res.status).not.to.equal(404);
                done();
            });
    });
});

describe('test new record of thirdparty access card ', () => {
    let thirdPartyInfo = { category: 'Client', accesstype: "temporary", employeeName: "shiksha", employeeId: "50042986", visitorName: "Atul verma", visitingPurpose: "training", duration: "6hr", dateOfVisiting: "09/17/2017", signature: "shiksha", applicationDate: "09/17/2017" };

    //positive test case for insert new third party record
    it('positive case for new thirdparty record', (done) => {
        thirdPartyPostStub.yields(null, [thirdPartyInfo])
        supertest(url)
            .post('/thirdparty/thirdInsert')
            .send(thirdPartyInfo)
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);
                chai.expect(res.body.data.category).to.be.equal('Client');
                done();
            });
    });

    //negative test case for insert new third party record
    it('negative case for new thirdparty record', (done) => {
        thirdPartyPostStub.yields(null, [thirdPartyInfo])
        supertest(url)
            .post('/thirdparty/thirdInsert')
            .send(thirdPartyInfo)
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);
                chai.expect(res.body.data.category).not.to.be.equal("cli")
                done();
            });
    });
});