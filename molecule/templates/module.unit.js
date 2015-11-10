/* global describe:false, it:false, expect:false, <%= namespace %>:false */
// <reference path='<%= modulenameCamelized %>.js">
'use strict';

describe('<%= modulenameCamelized %> tests', function () {

  it('Adds two numbers', () => {
    // Arrange
    let num1 = 1;
    let num2 = 3;
    let expected = 4;

    // Act
    let result = <%= namespace %>.<%= modulenameCamelized %>.publicFunctionExample(num1, num2);

    // Assert
    expect(result).toBe(expected);
  });

});
