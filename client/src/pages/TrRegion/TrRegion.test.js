import React from 'react';
import { render, screen } from '@testing-library/react';
import TrRegion from './TrRegion';
import api from '../../api/api';
import { formatDate } from '../../utils';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
}));

jest.mock('../../api/api');

describe('TrRegion component', () => {
  const lawSuits = [
    {
      cnj: '1234567-89.2021.1.01.0000',
      date: '2022-02-28',
    },
    {
      cnj: '7654321-98.2021.2.02.0000',
      date: '2022-03-01',
    },
  ];

  beforeEach(() => {
    api.get.mockImplementation((url) => {
      if (url === '/trregion') {
          return Promise.resolve({ data: lawSuits });
      } else {
          return Promise.resolve({ data: ['TRSC', 'TRRJ'] });
      }
  });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render TrRegion component with law suits', async () => {
    render(<Router><TrRegion /></Router>);
    await screen.findByText('Processo n. 1234567-89.2021.1.01.0000');
    expect(screen.getByText('Processo n. 1234567-89.2021.1.01.0000')).toBeInTheDocument();
    expect(screen.getByText(formatDate('2022-02-28'))).toBeInTheDocument();
    expect(screen.getByText('Processo n. 7654321-98.2021.2.02.0000')).toBeInTheDocument();
    expect(screen.getByText(formatDate('2022-03-01'))).toBeInTheDocument();
  });
});
