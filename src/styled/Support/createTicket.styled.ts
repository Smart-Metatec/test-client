import styled from "styled-components"

export const CreateTicketForm = styled.div`
font-size: 1.5em;
text-align: center;
.back{
    display: flex;
    justify-content: space-between;
    width: calc(50% + 150px);
    svg {
        font-size: 2em;
        width: 100px;
        cursor: pointer;
        &:hover {
            color: ${({theme}) => theme.colors.orange};
        }
    }

    h1 {
        margin: 0px;
    }
} 

form {
        width: 60%;
        margin: auto;

        .wrapper {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            div {
                flex-direction: column;
                margin: 0px;
                width: 49%;
            }
        }
        div {
            display: flex;
            flex-direction: column;
            margin: 1rem 0px;
            
            label {
                text-align: left;
                margin-bottom: 10px;
            }
            input {
                font-size: 0.8em;
                border-radius: 5px;
                border: 1px solid black;
                padding: 5px;
            }

            textarea {
                padding: 5px;
                resize: none;
                font-size: 0.8em;
                border-radius: 5px;
                border: 1px solid black;
            }

            button {
                font-size: 1em;
                border-radius: 5px;
                background-color: ${({theme}) => theme.colors.green};
                border: 2px solid transparent;
                padding: 5px 0px;
                cursor: pointer;
                transition: 0.3s ease-in-out;
                &:hover {
                background-color: ${({theme}) => theme.colors.lightBlue};
                color: white;
                }

                &:active {
                    background-color: transparent;
                    border: 2px solid ${({theme}) => theme.colors.lightBlue};
                }

            }

        }
    }

    .submit-message {
        h1 {
            font-size: 4em;
            margin-top: 5rem;
        }

        button {
            font-size: 1.5em;
            background-color: ${({theme}) => theme.colors.green};
            padding: 5px 40px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s ease-in-out;
            border: 2px solid transparent;
            &:hover {
                background-color: ${({theme}) => theme.colors.lightBlue};
                color: white;
            }

            &:active {
                background-color: transparent;
                border: 2px solid ${({theme}) => theme.colors.lightBlue};
            }
        }
    }




`

/*
form {
        width: 60%;
        margin: auto;

        .wrapper {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            div {
                flex-direction: column;
                margin: 0px;
                width: 49%;
            }
        }
        div {
            display: flex;
            flex-direction: column;
            margin: 1rem 0px;
            
            label {
                text-align: left;
                margin-bottom: 10px;
            }
            input {
                font-size: 0.8em;
                border-radius: 5px;
                border: 1px solid black;
                padding: 5px;
            }

            textarea {
                padding: 5px;
                resize: none;
                font-size: 0.8em;
                border-radius: 5px;
                border: 1px solid black;
            }

            button {
                font-size: 1em;
                border-radius: 5px;
                background-color: ${({theme}) => theme.colors.green};
                border: 2px solid transparent;
                padding: 5px 0px;
                cursor: pointer;
                transition: 0.3s ease-in-out;
                &:hover {
                background-color: ${({theme}) => theme.colors.lightBlue};
                color: white;
                }

                &:active {
                    background-color: transparent;
                    border: 2px solid ${({theme}) => theme.colors.lightBlue};
                }

            }

        }
    }

    .submit-message {
        h1 {
            font-size: 4em;
            margin-top: 5rem;
        }

        button {
            font-size: 1.5em;
            background-color: ${({theme}) => theme.colors.green};
            padding: 5px 40px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s ease-in-out;
            border: 2px solid transparent;
            &:hover {
                background-color: ${({theme}) => theme.colors.lightBlue};
                color: white;
            }

            &:active {
                background-color: transparent;
                border: 2px solid ${({theme}) => theme.colors.lightBlue};
            }
        }
    }


*/