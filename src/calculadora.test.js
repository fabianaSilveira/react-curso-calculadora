import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Calculadora from './calculadora';
import '@testing-library/jest-dom/extend-expect';

{/*
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

*/}

//suite de testes
describe('Calculadora', () => {


  it('deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Calculadora />, div);
    ReactDOM.unmountComponentAtNode(div);

  })

  it('deve limpar o campo de numeros', () => {

    const {getByTestId, getByText}= render(<Calculadora />);

    //simular click no bt 2
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('C'));
    // na classe calculadora.js foiincluido data-testid="txtNumeros"
    expect(getByTestId('txtNumeros')).toHaveValue('0');

  });


  it('deve somar  2.5 + 3 e obter 5.5 ', () => {

    const {getByTestId, getByText}= render(<Calculadora />);

    //simular click no bt 2 + 3 = 5
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('5.5');

  });

});