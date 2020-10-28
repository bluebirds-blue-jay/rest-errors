import { expect } from 'chai';
import * as RestErrors from '../src';
import { StatusCode } from '@bluejay/status-code';

describe('RestErrors', function () {
  describe('RestError', function () {
    class ConcreteRestError extends RestErrors.RestError {
      public readonly statusCode = StatusCode.INTERNAL_SERVER_ERROR;
    }

    describe('constructor', function () {
      it('should apply default values', function () {
        const instance = new ConcreteRestError('foo');
        expect(instance.message).to.equal('foo');
        expect(instance.statusCode).to.equal(500);
        expect(instance.code).to.equal('ConcreteRestError');
        expect(instance.meta).to.deep.equal({});
      });

      it('should store `meta`', function () {
        const instance = new ConcreteRestError('foo', { foo: 'bar' });
        expect(instance.meta).to.deep.equal({ foo: 'bar' });
      });

      it('should preserve the class code if exists', function () {
        class WithCode extends ConcreteRestError {
          public readonly code: string = 'code';
        }

        const instance = new WithCode('foo');
        expect(instance.code).to.equal('code');
      });
    });

    describe('getters', function () {
      it('should return value', function () {
        const instance = new ConcreteRestError('foo', { foo: 'bar' });
        expect(instance.getMeta()).to.deep.equal({ foo: 'bar' });
        expect(instance.getCode()).to.equal('ConcreteRestError');
        expect(instance.getStatusCode()).to.equal(500);
        expect(instance.getMessage()).to.equal('foo');
        expect(instance.getStack()).to.be.a('string');
      });
    });
  });

  describe('.fromStatusCode()', function () {
    it('should return a ConflictRestError', function () {
      expect(RestErrors.fromStatusCode(StatusCode.CONFLICT, 'foo')).to.be.an.instanceOf(RestErrors.ConflictRestError);
    });

    it('should throw for a non error code', function () {
      expect(function () {
        RestErrors.fromStatusCode(StatusCode.OK, 'foo');
      }).to.throw(/not a valid error code/);
    });
  });

  describe('.isRestError()', function() {
    it('should return true', function () {
      expect(RestErrors.isRestError(new RestErrors.NotFound(''))).to.equal(true);
    });

    it('should return false', function () {
      expect(RestErrors.isRestError(new Error(''))).to.equal(false);
    });
  });
});