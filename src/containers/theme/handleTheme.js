import {toggleTheme} from '../../redux/theme-mode/actions';

function mapDispatchToProps(dispatch){
    return {
        toggleTheme: () => dispatch(toggleTheme())
    }
}

function mapStateToProps({theme_reducer}){
    return {
        theme_mode: theme_reducer.themeMode
    }
}

export {
    mapDispatchToProps, mapStateToProps
}