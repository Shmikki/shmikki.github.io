import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {
    sendMessageActionController,
    updateMessageActionController,
} from "../../redux/dialogsReducer";



const mapStateToProps = state => {
    return {
        DialogsPage : state.DialogsPage    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessageBody: (text) => {
            dispatch(updateMessageActionController(text))
        },
        sendMessage: () => {
            dispatch(sendMessageActionController())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;