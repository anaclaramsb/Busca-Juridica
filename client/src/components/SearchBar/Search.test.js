import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import { BrowserRouter as Router } from 'react-router-dom';
import { validateCnjCode } from './utils';
import api from '../../api/api';

jest.mock('../../api/api');
describe('SearchBar', () => {
  beforeEach(() => {
    const mockData = {
      data: ['TRSC', 'TRBA', 'TRSE'],
    };
    api.get.mockResolvedValue(mockData);
  });

  it('fetches and displays TR regions from the API', async () => {
    render(
      <Router>
        <SearchBar />
      </Router>
    );

    await screen.findAllByTestId('tr-options');

    expect(screen.getByTestId('select')).toHaveTextContent('TRSC');
    expect(screen.getByTestId('select')).toHaveTextContent('TRBA');
    expect(screen.getByTestId('select')).toHaveTextContent('TRSE');
  });

  it('should render the SearchBar component with input, select and button', async () => {
    render(
      <Router>
        <SearchBar />
      </Router>
    );

    await screen.findAllByTestId('tr-options');

    const inputElement = screen.getByTestId('input');
    const selectElement = screen.getByTestId('select');
    const buttonElement = screen.getByRole('button', { name: 'Buscar' });
    expect(inputElement).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});

describe('validateCnjCode', () => {
  it('should return true for a valid CNJ code', () => {
    expect(validateCnjCode('0000000-00.0000.0.00.0000')).toBe(true);
  });

  it('should return false for an invalid CNJ code', () => {
    expect(validateCnjCode('0000000-00.0000.0.00')).toBe(false);
  });
});
