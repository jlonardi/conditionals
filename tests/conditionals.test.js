import assert from 'assert';
import { when, unless, no, not } from '../src/conditionals.js';

describe('conditional', () => {
    describe('when', () => {
        it('should reject on falsy value', done => {
            when(false).catch(done);
        });
        it('should accept on true value', done => {
            when(true).then(done);
        });
    });
    describe('unless', () => {
        it('should reject on true value', done => {
            unless(true).catch(done);
        });
        it('should accept on false value', done => {
            unless(false).then(done);
        });
    });
    describe('not', () => {
        it('should return true on false', () => {
            assert.equal(not(false), true);
        });
        it('should return false on true', () => {
            assert.equal(not(true), false);
        });
    });
    describe('no', () => {
        it('should return true on false', () => {
            assert.equal(no(false), true);
        });
        it('should return false on true', () => {
            assert.equal(no(true), false);
        });
    });
});
