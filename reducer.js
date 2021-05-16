const init = {
    sample: ["Hello World"],
};

export default function reducer(state = init, action, args) {
    switch (action) {
        case "ADD":
            state = {
                ...state,
                sample: [...state.sample, ...args],
            };
            return state;
        default:
            return state;
    }
}
