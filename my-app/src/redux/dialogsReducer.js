const SEND_MESSAGE = "SEND_MESSAGE",
    UPDATE_MESSAGE = "UPDATE_MESSAGE";

const initialState = {
    users: [
        {name: "Liza", surname: "Chueshova", id: 2},
        {name: "Kirill", surname: "Mazinskii", id: 3},
        {name: "Vlad", surname: "Semenkok", id: 4},
        {name: "Pavel", surname: "Kiselov", id: 5},
        {name: "Nikolay", surname: "Rumov", id: 6}
    ],
    messages: [
        {text: 'Hello', date: new Date().toDateString()},
        {text: "How are you?", date: new Date().toDateString()},
        {text: "What about my money?", date: new Date().toDateString()}
    ],
    newMessageText: ""
};


export const dialogReducer = (state = initialState, action) => {
    const newState = Object.assign({},state);
    switch (action.type) {
        case SEND_MESSAGE :
            let text = newState.newMessageText;
            newState.newMessageText = '';
            newState.messages.push({text: text, date: new Date().toDateString()});
            return newState;
        case UPDATE_MESSAGE :
            newState.newMessageText = action.text;
            return newState;
        default:
            return state;
    }
}

export const sendMessageActionController = () =>{
    return {
        type : SEND_MESSAGE
    }
}

export const updateMessageActionController = (text) =>{
    return {
        type : UPDATE_MESSAGE,
        text: text
    }
}
