let supertest = require('supertest');
let chai = require('chai');
let sinon = require('sinon');

let app = require('../app');
let damageCard = require('../models/damage');
let url = 'http://localhost:4009'; //application running port
let damageCardSqlStub = sinon.stub(damageCard, 'query');
let damageCardGetStub = sinon.stub(damageCard, 'find');
let damageCardPostStub = sinon.stub(damageCard.prototype, 'save');

describe('test fetch data of damage access card', () => {
    before(() => {
        damageCardGetStub.yields(null, [{
            empId: 50042924,
            empType: 'temp',
            name: 'Rohit',
            doj: '03/07/2017',
            designation: 'trainee',
            project: 'stackroute',
            ou: 'trainee',
            date: '21/12/2017',
            comments: 'card is damaged',
            prev: 'Supervisor',
            current: 'Hr'
        }]);
    });

    //positive test case for fetch damage card record
    it('validation for positive case of damage access card', (done) => {
        supertest(url)
            .get('/damage/finddamage')
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);
                chai.expect(res.body.data[0].empId).to.equal(50042924);
                done();
            });
    });

    //negative test case for fetch damage card record
    it('validation for negative case of damage access card', (done) => {
        supertest(url)
            .get('/damage/finddamage')
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);
                chai.expect(res.body.data[0].empId).not.to.equal(50042);
                done();
            });
    });
});

describe('Test status of damage access card', () => {
    before(() => {
        damageCardGetStub.yields(null, [{
            empId: '50042924',
            empType: 'temp',
            name: 'Rohit',
            doj: '03/07/2017',
            designation: 'trainee',
            project: 'stackroute',
            ou: 'trainee',
            date: '21/12/2017',
            comments: 'card is damaged',
            prev: 'Supervisor',
            current: 'Hr'
        }]);
    });

    //test case status success for fetch damage card record
    it('validation for status success', (done) => {
        supertest(url)
            .get('/damage/finddamage')
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);
                chai.expect(res.status).to.equal(200);
                done();
            });
    });

    //test case status not found for fetch damage card record
    it('validation for status not found', (done) => {
        supertest(url)
            .get('/damage/finddamage')
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);
                chai.expect(res.status).not.to.equal(400);
                done();
            });
    });
});

describe('Test new record of damage access card', () => {
    let damageCardInfo = {
        empId: 50042924,
        empType: 'temp',
        name: 'Rohit',
        doj: '03/07/2017',
        designation: 'trainee',
        project: 'stackroute',
        ou: 'trainee',
        date: '21/12/2017',
        comments: 'card is damaged',
        prev: 'Supervisor',
        current: 'Hr'
    };

    //positive test case for insert new damage card record
    it('positive case for new damagecard record', (done) => {
        damageCardPostStub.yields(null, [damageCardInfo])
        supertest(url)
            .post('/damage/damageInsert')
            .send(damageCardInfo)
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);
                chai.expect(res.body.data.empId).to.be.equal(50042924);
                done();
            });
    });

    //negative test case for insert new damage card record
    it('negative case for new damagecard record', (done) => {
        damageCardPostStub.yields(null, [damageCardInfo])
        supertest(url)
            .post('/damage/damageInsert')
            .send(damageCardInfo)
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);
                chai.expect(res.body.data.empId).not.to.be.equal(50042)
                done();
            });
    });
});