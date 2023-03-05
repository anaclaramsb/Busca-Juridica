import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import LawSuit from './LawSuit';
import api from '../../api/api';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('../../api/api');

describe('LawSuit component', () => {
  it('call api and renders LawSuit component', async () => {
    const lawSuit = {
      id: 1,
      cnj: '5006789-12.2021.2.14.5462',
      author: 'Fulano',
      defendent: 'Sicrano',
      trregion: 'TJBA',
      date: '2021-02-14T12:00:00Z',
      movements: [],
    };

    api.get.mockImplementation((url) => {
      if (url === '/lawsuits') {
        return Promise.resolve({ data: lawSuit });
      } else {
        return Promise.resolve({ data: ['TRSC', 'TRRJ'] });
      }
    });

    render(
      <Router>
        <LawSuit />
      </Router>
    );

    await screen.findByText('Processo n. 5006789-12.2021.2.14.5462');
    expect(screen.getByText('Autor: Fulano')).toBeInTheDocument();
    expect(screen.getByText('Réu: Sicrano')).toBeInTheDocument();
    expect(screen.getByText('Região: TJBA')).toBeInTheDocument();
    expect(screen.getByText('Distribuído em 14/02/2021')).toBeInTheDocument();

    await waitFor(() => {
      expect(api.get).toHaveBeenCalled();
    });
    await waitFor(() => {
      expect(api.get).toHaveBeenCalledWith('/lawsuits', {
        params: { cnj: null },
      });
    });
  });
});
