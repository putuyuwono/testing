'use strict';

var test = require('supertest');
var app = require('../index').getApp;

describe('Basic HTTP Test', function(){
    it('expect HTTP Response 200', function(done){
        test(app).get('/').expect(200, done);
    });
});
