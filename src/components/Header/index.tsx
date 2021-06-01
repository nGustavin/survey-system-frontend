import React from 'react'
import Logo from '../../assets/logo.svg'
import { Container, ButtonContainer } from './styles'
import { Link } from 'react-router-dom'

interface HeaderProps{
    surveyAmount?: number;
    isHome?: boolean;
}

function Header({surveyAmount, isHome}: HeaderProps) {

    
    return (
        <Container>
            <img src={Logo} alt="Signo Logo"/>
            {isHome ? <h1>Total Surveys: <span>{surveyAmount}</span></h1> : null}
            <Link to="/create-survey">
                <ButtonContainer>
                    <button>NEW SURVEY</button>
                </ButtonContainer>
            </Link>
        </Container>
    )
}

export default Header
