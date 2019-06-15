/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
// mocha: estrutura describe (classe/metodos) > context (casos de test) > it (testes efetivamente)
// hooks: métodos ou dados para usos nos testes (before, after, beforeEach, afterEach)
// chai: lib de asserts(shoul, expect, assert)

const { expect } = require('chai');
// const expect = require('chai').expect;

describe('Main', () => {
  let arr;
  // ** ESTRUTURA
  // describe('Method A', () => {
  //   context('Case 1', () => {
  //     it('should happen blabla', () => {});
  //     it.skip('should happen mimimi', () => {}); // pular test
  //     // it.only('should happen lalala', () => {}); // somente test
  //   });

  //   context('Case 2', () => {});
  // });

  // describe('Method B', () => {});

  // ** HOOKS
  // before(() => console.log('before'));
  // after(() => console.log('after'));
  // beforeEach(() => console.log('beforeEach'));
  // afterEach(() => console.log('afterEach'));

  // it('test 1', () => console.log('test 1'));
  // it('test 2', () => console.log('test 2'));

  // ** CHAI EXPECTS
  beforeEach(() => {
    arr = [1, 2, 3];
  });

  it('should have a size of 4 when push another value to the array', () => {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should remove the value 3 when user pop in the array', () => {
    arr.pop();
    expect(arr).to.not.include(3);
  });

  it('shoul be an array', () => {
    expect(arr).to.be.a('array');
  });

  it('should return true when pop 3 from the array', () => {
    expect(arr.pop() === 3).to.be.true;
  });
});
