let supertest = require('supertest');
let chai = require('chai');
let sinon = require('sinon');

let app = require('../app');
let locationChange = require('../models/locationChange');
let url = 'http://localhost:4009'; //application running port
let locationChangeSqlStub = sinon.stub(locationChange, 'query');
let locationChangeGetStub = sinon.stub(locationChange, 'find');
let locationChangePostStub = sinon.stub(locationChange.prototype, 'save');

describe('test fetch data of locationchange access card', () => {
    before(() => {
        locationChangeGetStub.yields(null, [{
            category: 'Employee',
            accessType: 'temp',
            empId: '50042924',
            empType: 'temp',
            empName: 'Shubhang',
            dateOfJoining: '12/07/20017',
            designation: 'trainee',
            project: 'stackroute',
            ou: 'moon',
            status: 'temp',
            dateOfExpiry: '19/12/2017',
            projectTransfer: 'sita',
            existingLocation: 'Greater Noida',
            newLocation: 'Delhi',
            signature: 'Shubhang',
            date: '21/11/2017'
        }]);
    });

    //positive test case for fetch location change record
    it('validation for positive case of locationchange access type', (done) => {
        supertest(url)
            .get('/locationchange/findlocation')
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);
                chai.expect(res.body.data[0].category).to.equal('Employee');
                done();
            });
    });

    //negative test case for fetch location change record
    it('validation for negative case of locationchange access type', (done) => {
        supertest(url)
            .get('/locationchange/findlocation')
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);
                chai.expect(res.body.data[0].category).not.to.equal('Emp');
                done();
            });
    });
});

describe('test status of locationchange access card', () => {
    before(() => {
        locationChangeGetStub.yields(null, [{
            category: 'Employee',
            accessType: 'temp',
            empId: '50042924',
            empType: 'temp',
            empName: 'Shubhang',
            dateOfJoining: '12/07/2017',
            designation: 'trainee',
            project: 'stackroute',
            ou: 'moon',
            status: 'temp',
            dateOfExpiry: '19/12/2017',
            projectTransfer: 'sita',
            existingLocation: 'Greater Noida',
            newLocation: 'Delhi',
            signature: 'Shubhang',
            date: '21/11/2017'
        }]);
    });

    //test case status success for fetch location change record
    it('validation for status success', (done) => {
        supertest(url)
            .get('/locationchange/findlocation')
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);
                chai.expect(res.status).to.equal(200);
                done();
            });
    });

    //test case status not found for fetch location change record
    it('validation for status not found', (done) => {
        supertest(url)
            .get('/locationchange/findlocation')
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);
                chai.expect(res.status).not.to.equal(404);
                done();
            });
    });
});

describe('test new record of locationchange access card', () => {
    let locationChangeInfo = {
        category: 'Employee',
        accessType: 'temp',
        empId: '50042924',
        empType: 'temp',
        empName: 'Shubhang',
        dateOfJoining: '12/07/2017',
        designation: 'trainee',
        project: 'stackroute',
        ou: 'moon',
        status: 'temp',
        dateOfExpiry: '19/12/2017',
        projectTransfer: 'sita',
        existingLocation: 'Greater Noida',
        newLocation: 'Delhi',
        signature: 'Shubhang',
        date: '21/11/2017'
    };

    //application running port//positive test case for insert new location change record
    it('positive case for new locationchange access card record', (done) => {
        locationChangePostStub.yields(null, [locationChangeInfo])
        supertest(url)
            .post('/locationchange/locationInsert')
            .send(locationChangeInfo)
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);
                chai.expect(res.body.data.category).to.be.equal('Employee');
                done();
            });
    });

    //negative test case for insert new location change record
    it('negative case for new locationchange access card record', (done) => {
        locationChangePostStub.yields(null, [locationChangeInfo])
        supertest(url)
            .post('/locationchange/locationInsert')
            .send(locationChangeInfo)
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);
                chai.expect(res.body.data.empId).not.to.be.equal("50042")
                done();
            });
    });
});