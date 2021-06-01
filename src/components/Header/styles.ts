import styled from 'styled-components'
import colors from '../../styles/colors'

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: ${colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 3rem;
    box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    z-index: 10;
    
    @media only screen and (max-width: 440px) {
            padding: 0px 1rem;
    }
    

    >h1{
        width: auto;
        font-size: 1.5rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 400;

        @media only screen and (max-width: 440px) {
            display: none;
        }

        >span{
            font-weight: 500;
            color: ${colors.red}
        }
    }

    >img{
        width: 110px;

        @media only screen and (max-width: 440px) {
            width: 90px;
        }
        
    }

    

`

export const ButtonContainer = styled.div`
     >button{
            width: 7.5rem;
            height: 2.5rem;
            border-radius: 9px;
            background: ${colors.red};
            color: ${colors.white};
            font-weight: 600;
            font-size: 0.9rem;
            font-family: sans-serif;
            transition: 0.2s;

            @media only screen and (max-width: 440px) {
                width: 7rem;
                height: 2.5rem;
            }

            &:hover{
                background: #FB6775;
                cursor: pointer;
            }
        }
`