import styled from 'styled-components'
import colors from '../../styles/colors'

type Props = {
    isOpen?: boolean,
    isOver?: boolean,
    notStated?: boolean,
}

export const Container = styled.div<Props>`
    width: 45rem;
    height: 200px;
    background: ${colors.white};
    border-radius: 9px;
    box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 3rem;
    transition: box-shadow 0.1s;
    border: ${props => (props.isOpen ? "solid 3px #4DFF7E" : props.isOver ? "solid 3px #FF0000" : "solid 3px #FFF500")};

    @media only screen and (max-width: 440px) {
            width: 100%;
            max-width: 440px;
            border: none;
    }


    &:hover{
        cursor: pointer;
    }

    >h1{
        font-size: 1.5rem;
        font-weight: 300;

        @media only screen and (max-width: 440px) {
            font-size: 1.2rem;
        }
    }

    >p{
        font-size: 1rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: ${colors.gray};

    }

    >div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 4rem;


        >div{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: auto;
            gap: 1rem;
            font-size: 0.9rem;
            color: rgba(0, 0, 0, 0.7);

            @media only screen and (max-width: 440px) {
                gap: 0.5rem;

            }
            
            >h3{
                font-weight: 400;
                @media only screen and (max-width: 440px) {
                     width: 100%;
                     max-width: 440px;
                     border: none;
                     font-size: 0.8rem;
                     
                }
            }
        }

        >div{

        >button{
            width: 9.5rem;
            height: 2.5rem;
            border-radius: 9px;
            background: ${props => (props.isOver ? colors.red : props.notStated ? "#FFF500" : "#4DFF7E")};
            color: ${props => (props.isOver || props.isOpen ? colors.white : "rgba(0, 0, 0, 0.8)")};
            font-weight: 600;
            font-size: 0.9rem;
            font-family: sans-serif;
            transition: 0.2s;

            @media only screen and (max-width: 440px) {
                width: 6.5rem;
                font-size: 0.7rem;
            }

            &:hover{
                background: ${props => (props.isOver || props.notStated ? "": "#90FFAF")};
                cursor: pointer;
            }
        }
    }
    }
    
`