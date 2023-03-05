import React from 'react';
import { render, screen } from '@testing-library/react';
import Movements from './Movements';

describe('Movements component', () => {
  it('should render "Não há movimentações para esse processo" when there are no movements', () => {
    render(<Movements movements={[]} />);
    expect(screen.getByText('Não há movimentações para esse processo')).toBeInTheDocument();
  });

  it('should render the movements when there are any', () => {
    const movements = [
      {
        date: '2022-03-01T10:00:00Z',
        description: 'Movimentação 1',
      },
      {
        date: '2022-03-02T14:30:00Z',
        description: 'Movimentação 2',
      },
    ];
    render(<Movements movements={movements} />);
    expect(screen.getByText('Movimentações')).toBeInTheDocument();
    expect(screen.getByText('01/03/2022')).toBeInTheDocument(); 
    expect(screen.getByText('Movimentação 1')).toBeInTheDocument();
    expect(screen.getByText('02/03/2022')).toBeInTheDocument(); 
    expect(screen.getByText('Movimentação 2')).toBeInTheDocument();
  });
});



