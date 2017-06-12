import * as RestErrors from '../src';
import * as StatusCode from '@bluejay/status-code';

describe('RestErrors', function () {
  describe('AbstractRestError', function () {
    class ConcreteRestError extends RestErrors.AbstractRestError {
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
      });
    });
  });

  describe('.fromStatusCode()', function () {
    it('should return a ConflictRestError', function () {
      expect(RestErrors.fromStatusCode(StatusCode.CONFLICT, 'foo')).to.be.an.instanceOf(RestErrors.Conflict);
    });

    it('should throw for a non error code', function () {
      expect(function () {
        RestErrors.fromStatusCode(StatusCode.OK, 'foo');
      }).to.throw(/not a valid error code/);
    });
  });
});