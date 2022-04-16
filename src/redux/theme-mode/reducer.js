const initialState = {
    themeMode: window.localStorage.getItem("theme-mode") ? window.localStorage.getItem("theme-mode") : "dark"
}

export const themeReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "@toggle/theme":
            state.themeMode = state.themeMode === "dark" ? "light" : "dark";
            window.localStorage.setItem("theme-mode", state.themeMode);
            return {
                ...state,
            }

        default: return { ...state };
    }
}
