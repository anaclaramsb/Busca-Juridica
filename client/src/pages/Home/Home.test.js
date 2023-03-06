import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Home component', () => {
  test('renders Home component', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const imageElement = screen.getByAltText('');
    expect(imageElement).toBeInTheDocument();
    const titleElement = screen.getByText('Seu processo à distância de um');
    expect(titleElement).toBeInTheDocument();
    const descriptionElement = screen.getByText(
      'Selecione um tribunal para listar os processos ou busque pelo número unificado de um processo específico.'
    );
    expect(descriptionElement).toBeInTheDocument();
    const searchBarElement = screen.getByTestId('search-bar');
    expect(searchBarElement).toBeInTheDocument();
  });
});
