import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1.2rem;
    overflow-x: hidden;
    overflow-y: scroll;
    position: absolute;



    ::-webkit-scrollbar {
    width: 0px;
    border-radius: 10px;
    position: relative;
    }
    /* Track */
    ::-webkit-scrollbar-track {
    background: none;
    border-radius: 10px;
    margin-top: 90px;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #4652fd;
    border-radius: 40px;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #4652fd;
    }
    
    >.card-container{
        margin-top: 5.5rem;
        padding-bottom: 3rem; 
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        align-items: center;
        justify-content: flex-start;

        @media only screen and (min-width: 768px) {
            width: 100vw;
        }

        @media only screen and (min-width: 440px) {
            width: 100vw;
        }

        
    }

    
`
