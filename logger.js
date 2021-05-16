export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action);
        console.log("Previous State", prevState);
        const curState = reducer(prevState, action, args);
        console.log("Current State", curState);
        console.groupEnd();
        return curState;
    };
}
