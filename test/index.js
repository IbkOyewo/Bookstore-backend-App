const {expect} = require('chai')
const request = require('supertest')
const app = require('../src/index')


describe('book', () => {
    it('baseroute', (done) => {
        request(app)
        .get('/')
        .expect(201)
        .end((err, res) => {
            expect(res.body.message).to.equal('Welcome to my book store app')
            expect(res.body.code).to.equal(200)
            done()
        })
    })

})