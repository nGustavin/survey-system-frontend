import { ReactNode, useEffect } from 'react';
import api from '../../services/api';

import { Votes, Container } from './styles';

interface VotesComponentProps {
  votes?: number;
  children?: ReactNode
}


function VotesComponent({ votes, children }: VotesComponentProps) {


  return (
    <Container>
      
    </Container>
  );
};

export default VotesComponent;
