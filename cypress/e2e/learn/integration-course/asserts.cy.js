/// <reference types="cypress" />

it('Equality', () => {
  const a = 1
  const b = 2

  expect(a).equal(1)
  expect(a).to.be.equal(1)
  expect(b).not.to.be.equal(1)
  expect(b, 'Deveria ser 1').equal(1)
});

it('Truthy', () => {
  const a = true
  const b = null
  let c

  expect(a).to.be.true;
  expect(true).to.be.true;
  expect(b).to.be.null;
  expect(a).to.be.not.null;
  expect(c).to.be.undefined;

});

it('Object Equality', () => {
  const obj = {
    a: 1,
    b: 2
  }

  expect(obj).equal(obj)
  expect(obj).equals(obj)
  expect(obj).eq(obj)
  expect(obj).to.be.equal(obj)
  expect(obj).to.be.deep.equal({ a: 1, b: 2 })
  expect(obj).eql({ a: 1, b: 2 })
  expect(obj).include({ b: 2 })
  expect(obj).to.have.property('b')
  expect(obj).to.have.property('b', 2)
  expect(obj).to.not.be.empty
  expect({}).to.be.empty
});

it('Arrays', () => {

  const arr = [1, 2, 3]

  expect(arr).to.have.members([1, 2, 3])
  expect(arr).to.include.members([2, 3])
  expect(arr).to.not.be.empty
  expect([]).to.be.empty
});

it('Types', () => {
  const num = 1
  const str = 'uma string';

  expect(num).to.be.a('number')
  expect(str).to.be.a('string')
  expect({}).to.be.an('object')
  expect([]).to.be.an('array')
});

it('Strings', () => {
  const str = 'String para teste'
  const strJustLetters = 'StringApenasLetras'

  expect(str).to.be.equal('String para teste');
  expect(str).to.have.length(17);
  expect(str).to.contains('para');

  expect(str).to.match(/para/); //REGEX: deve conter a palavra 'para'
  expect(str).to.match(/^String/); //REGEX: deve iniciar com a palavra String
  expect(str).to.match(/teste$/); //REGEX: deve finalizar com a palavra teste

  expect(str).to.match(/^.{17}$/);
  /*REGEX ACIMA: deve ter pelo menos 17 caracteres 
  Este comando verifica se a string começa (^) com qualquer caractere (.)
   e se repete exatamente 19 vezes ({19}) e termina ($) sem nenhum outro caractere.
    Se a string não tiver exatamente 19 caracteres, o teste falhará.
  */

  expect(strJustLetters).to.match(/^[a-zA-Z]+$/); //REGEX: deve havar apenas letras


  expect(str).to.match(/^[^0-9]+$/); //REGEX: deve Não conter numeros
});

it('Numbers', () => {
  const number = 4
  const floatNumber = 6.2123

  expect(number).to.be.equal(4)
  expect(number).to.be.above(3)
  expect(number).to.be.below(7)
  expect(floatNumber).to.be.equal(6.2123)
  expect(floatNumber).to.be.closeTo(6.2, 0.1)
  expect(floatNumber).to.be.above(6)


});