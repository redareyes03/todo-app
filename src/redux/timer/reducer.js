const initialState = {
    countTimer: 0,
    isReset: false
}

export const timerReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "@increment/timer":
            state.countTimer += 10;
            return { ...state }

        case "@reset/timer":
            state.countTimer = 0;
            state.isReset = true;
            return {
                ...state
            }

        default: return { ...state };

    }
}