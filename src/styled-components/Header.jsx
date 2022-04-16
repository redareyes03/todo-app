import styled from "styled-components"
import darkHeaderUrl from "../assets/images/bg-desktop-dark.jpg"
import lightHeaderUrl from "../assets/images/bg-desktop-light.jpg"

export const Header = styled.header`
    width: 100%;
    height: 300px;
    background-image: url(${props => props.theme === "dark" ? darkHeaderUrl : lightHeaderUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
` 
