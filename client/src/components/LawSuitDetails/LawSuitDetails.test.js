import React from 'react';
import { render, screen } from '@testing-library/react';
import LawSuitDetails from './LawSuitDetails';

describe('LawSuitDetails component', () => {
  const lawSuit = {
    author: 'Autor',
    defendent: 'Réu',
    trregion: 'Região',
  };

  it('should render LawSuitDetails component with correct props', () => {
    render(<LawSuitDetails lawSuit={lawSuit} />);
    
    expect(screen.getByText(`Autor: ${lawSuit.author}`)).toBeInTheDocument();
    expect(screen.getByText(`Réu: ${lawSuit.defendent}`)).toBeInTheDocument();
    expect(screen.getByText(`Região: ${lawSuit.trregion}`)).toBeInTheDocument();
  });
});






