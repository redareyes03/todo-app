import styled from "styled-components";
import { rgba } from 'polished'
import { ctBg1, textColor, thinyText } from "../theme/_bundle.theme"

export const CreateInput = styled.input.attrs({
    type: 'text',
    placeholder: 'Create a new todo...'
})`
    width: 100%;
    padding: 15px 30px;
    background: ${ctBg1};
    border: none;
    border-radius: 5px;
    color: ${textColor};
    margin: 25px 0 10px 0;
    box-shadow: ${ctBg1} ;
`


export const FilterControls = styled.div`
    background-color: ${ctBg1};
    color: ${thinyText};
    padding: 20px 25px;
    position: relative;

    display: flex;
    justify-content: space-between;


    #filters{
        display: flex;
        gap: 20px;
        justify-content: center;
        position: absolute;
        left: 0;
        bottom: -70px;
        background-color: ${ctBg1};
        width: 100%;
        padding: 15px;
        border-radius: 5px;
        box-shadow: ${`0 10px 20px rgba(0,0,0,0.3)`};

        div{
            position: relative;
            span:not(.todo-counter){
                cursor: pointer;
                font-weight: bold;
                transition: color 0.2s ease-in-out;

                & + span{
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    bottom: -30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: ${rgba(0, 0, 0, 0.4)};
                    border-radius: 5px;
                    padding: 5px 10px;
                    color: white;
                    visibility: hidden;
                    opacity: 0;
                    transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;

                    &:before{
                        content: '';
                        display: block;
                        border-top: 5px solid transparent;
                        border-right: 5px solid transparent;
                        border-left: 5px solid transparent;
                        border-bottom: 5px solid rgba(0,0,0,0.4);

                        position: absolute;
                        left: 50%;
                        transform: translateX(-50%);
                        top: -10px;
                        z-index: -1;
                    }

                    &:hover{
                        opacity: 1;
                        visibility: visible;
                    }
                }

                &:hover{
                    color: ${textColor};
                }

                &.active{
                    color: #3a7bfd;
                }           

                &:hover + span{
                    visibility: visible;
                    opacity: 1;
                }
            }

        }

        @media (min-width: 768px) {
            position: relative;
            top : 0;
            box-shadow: none;
            border-radius: 0;
            padding: 0;
            width: auto;
        }
    }


    & span{
        font-size: 14px;
    }

`;



export const TodoCheckbox = styled.span`
    cursor: pointer;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid ${thinyText};
    border: ${props => props.check && "none"};
    background: ${props => `${props.check === true ? "linear-gradient(135deg, #57ddff, #c058f3)" : "none"}`};
`


export const StyledItem = styled.li`
    background-color: ${ctBg1};
    padding: 20px 30px;
    display: flex;
    color: ${textColor};
    justify-content: space-between;
    border-bottom: 1px solid ${thinyText};
    align-items: center;


    & div:first-child {
        display: flex;
        width: 100%;
        gap: 20px;
        align-items: center;

        & input.todo-task{
            background: none;
            position: relative;
            color: ${textColor};
            border: none;
            width: 100%;
        
            &[check=true]{
                text-decoration: line-through;
                color: ${thinyText};
            }
    }
`

export const Advertisment = styled.p`
    background: ${ctBg1};
    width: 100%;
    border-radius: 5px;
    padding: 15px 0;
    color: ${thinyText};
    text-align: center;

`;

export const TodosContainer = styled.ul`
    width: 100%;
    border-radius: 5px;
    box-shadow: ${props => `0 10px 20px rgba(0,0,0,0.3)`} ;
    list-style: none;
    padding: 0;

    li:first-child {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }    
`