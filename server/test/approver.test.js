let supertest = require('supertest');
let chai = require('chai');
let sinon = require('sinon');

let url = 'http://localhost:4009'; //application running port
let app = require('../app');
let approver = require('../models/approverData');
let approverSqlStub = sinon.stub(approver, 'query');
let approverGetStub = sinon.stub(approver, 'find');
let approverPostStub = sinon.stub(approver.prototype, 'save');


describe('test fetch data of approver of access card', () => {
    before(() => {
        approverGetStub.yields(null, [{ serial: '1', project: 'training', phase: 'phase 3', access: 'sita', proCat: 'internal', appAuth: 'Sheetal', appEmp: 'Hr' }]);
    });

    //positive test case for fetch approver record
    it('validation for positive case of approver of access type', (done) => {
        supertest(url)
            .get('/approver/find')
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);
                chai.expect(res.body.data[0].project).to.equal('training');
                done();
            });
    });


    //negative test case for fetch approver record
    it('validation for negative case of approver of access type', (done) => {
        supertest(url)
            .get('/approver/find')
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);
                chai.expect(res.body.data[0].project).not.to.equal('train');
                done();
            });
    });
});

describe('test status of approver of access card', () => {
    before(() => {
        approverGetStub.yields(null, [{ serial: '1', project: 'training', phase: 'phase 3', access: 'sita', proCat: 'internal', appAuth: 'Sheetal', appEmp: 'Hr' }]);
    });

    //test case for status success to fetch approver record
    it('validation for status success', (done) => {
        supertest(url)
            .get('/approver/find')
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);
                chai.expect(res.status).to.equal(200);
                done();
            });
    });

    //test case for status not found to fetch approver record
    it('validation for status not found', (done) => {
        supertest(url)
            .get('/approver/find')
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);
                chai.expect(res.status).not.to.equal(404);
                done();
            });
    });
});

describe('test new record of approver of access card ', () => {
    let approverInfo = { serial: '1', project: 'training', phase: 'phase 3', access: 'sita', proCat: 'internal', appAuth: 'Sheetal', appEmp: 'Hr' };

    //positive test case for insert new approver record
    it('positive case for new approver record', (done) => {
        approverPostStub.yields(null, [approverInfo])
        supertest(url)
            .post('/approver/employee')
            .send(approverInfo)
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);
                chai.expect(res.body.data.project).to.be.equal('training')
                done();
            });
    });

    //negative test case for insert new approver record
    it('negative case for new approver record', (done) => {
        approverPostStub.yields(null, [approverInfo])
        supertest(url)
            .post('/approver/employee')
            .send(approverInfo)
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);
                chai.expect(res.body.data.project).not.to.be.equal('train')
                done();
            });
    });
});