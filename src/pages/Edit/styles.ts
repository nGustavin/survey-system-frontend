import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    /* padding: 5rem 0 0 0; */
`;

export const FormContainer = styled.div`
    width: 55rem;
    height: 60rem;
    background: ${colors.white};
    border-radius: 9px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 2rem 7rem 0 7rem;
    gap: 2rem;

    >p{
        color: #7D8C96;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 300;
        font-size: 1.2rem;
        margin-bottom: 20px;
    }

   
    >#voteSubmit{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;

        >form{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            gap: 1.5rem;

            

            >.actionButtons{
                display: flex;
                width: 100%;
                justify-content: space-around;

                >button, .EditButton{
                    background: #727cff;
                    color: white;
                    font-weight: 600;
                    height: 2.2rem;
                    width: 20%;
                    padding: 0px 1.5rem;
                    border-radius: 4px;
                    transition: 0.2s;

                    &:hover{
                        cursor: pointer;
                        background: #9ea4ff;
                    }
                }       
                
                .EditButton{
                    background: #727cff;
                    color: white;
                    font-weight: 600;
                    height: 2.2rem;
                    width: 100%;
                    padding: 0px 1.5rem;
                    border-radius: 4px;
                    transition: 0.2s;

                    &:hover{
                        cursor: pointer;
                        background: #9ea4ff;
                    }
                }
            }

            >.status{
                display: flex;
                width: 100%;
                align-items: center;
                justify-content: center;
                gap: 1.5rem;

                margin-top: 1rem;
                >h3{
                    font-weight: 400;
                }
            }

            >.left{
                width: 100%;
                height: 4.0rem;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                border: solid 1px #A9BBC8;
                padding: 0px 1rem;
                border-radius: 4px;
                background:#EEF1F3;
                            

            input[type="radio"] {
                background-color: #ddd;
                
                
                cursor: pointer;
                margin-right: 15px;
                position: relative;
            }
                
                input[type="radio"]:checked{
                    background-color: #f66;
                    
                }

                >label{
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    width: 100%;
                }

                >.right{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: 0.8rem;

                
            }
            }

            

        }
    }

    .addFields{
        background: #727cff;
        color: white;
        font-weight: 600;
        height: 2.2rem;
        width: auto;
        padding: 0px 1.5rem;
        border-radius: 4px;
        transition: 0.2s;

        &:hover{
            cursor: pointer;
            background: #9ea4ff;
        }
    }

    .removeFields{
        background: ${colors.red};
        color: white;
        width: auto;
        padding: 0px 1rem;
        height: 2.2rem;
        border-radius: 4px;
        font-weight: 600;
        transition: 0.2s;

        &:hover{
            cursor: pointer;
            background: #f76271;
        }
    }

    .submitNotAllowed{
        background: #DEE0E7;
        height: 2.2rem;
        min-height: 2.2rem;
        width: auto;
        padding: 0px 1.5rem;
        border-radius: 4px;
        color: white;
        font-weight: 600;
        transition: 200ms;

        &:hover{
            cursor: not-allowed;
        }
    }

    .submitButton{
        background: #7D8C96;
        height: 2.2rem;
        min-height: 2.2rem;
        width: auto;
        padding: 0px 1.5rem;
        border-radius: 4px;
        color: white;
        font-weight: 600;
        transition: 0.2s;


        &:hover{
            cursor: pointer;
            background: #a4b6c1;
        }

    }

    .addFieldContainer{
        width: 100%;
        display: flex;
        justify-content: center;
    }

    >h1{
        font-weight: 300;
        color: #7D8C96;
    }

    >form{
        width: 100%;
        height: 100%;
        margin-bottom: 2rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 3rem;
        overflow-x: hidden;
        overflow-y: scroll;

        /* width */
        ::-webkit-scrollbar {
            display: none;
        }

        /* Track */
        ::-webkit-scrollbar-track {
        background: #f1f1f1;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
        background: #888;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
        background: #555;
        }

        

        
        >.default-field{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 1.1rem;
            width: 100%;
            
            >label{
                color: #7D8C96;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                font-size: 1.3rem;
            }

            >input{
                background: #eef1f3;
                width: 100%;
                height: 2.2rem;
                border: solid 1px #A9BBC8;
                border-radius: 4px;
                padding: 1rem;
            }

            >textarea{
                background: #eef1f3;
                width: 100%;
                max-height: 12rem;
                height: 5.2rem;
                border: solid 1px #A9BBC8;
                border-radius: 4px;
                /* min-width: 496px; */
                min-height: 2.2rem;
                padding: 1rem;
            }

            >div{
                display: flex;
                width: 100%;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;


                >input{
                    background: #eef1f3;
                    width: 100%;
                    height: 2.2rem;
                    border: solid 1px #A9BBC8;
                    border-radius: 4px;
                    padding: 1rem;
                }
            }
        }

        >.row-fields{
            display: flex;
            justify-content: space-between;
            /* gap: 1.5rem; */
            width: 100%;
            align-items: flex-start;
            height: auto;

            >div{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                width: auto;
                height: auto;
                gap: 1.1rem;

                >label{
                    color: #7D8C96;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    font-size: 1.3rem;
                }

                >input{
                    background: #eef1f3;
                    height: 2.2rem;
                    border: solid 1px #A9BBC8;
                    border-radius: 4px;
                    padding: 1rem;
                    width: 14rem;
                }
            }

        }

        
    }
`

export const BackButtoContainer = styled.div`
    position: absolute;
    top: 30px;
    left: 30px;
    width: 80px;
    height: 35px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 0px 3px ${colors.red};
    transition: 0.2s;

    &:hover{
        background: white;
        box-shadow: 0px 0px 0px 3px ${colors.white};
        cursor: pointer
    }
    >img{
        width: 60px;
    }
`
