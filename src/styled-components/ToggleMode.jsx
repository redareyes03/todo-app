import styled from "styled-components"
import darkModeUrl from '../assets/images/icon-sun.svg'
import lightModeUrl from '../assets/images/icon-moon.svg'
export const ToggleMode = styled.img.attrs(
    ({ theme }) => ({
        src: theme === "dark" ? darkModeUrl : lightModeUrl,
        alt: theme === "dark" ? "Dark Mode" : "Light Mode"
    }))`
    width: 20px;
    height: 20px;
`
