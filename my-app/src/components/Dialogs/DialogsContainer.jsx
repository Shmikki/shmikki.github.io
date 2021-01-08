import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {
    sendMessageActionController,
    updateMessageActionController,
} from "../../redux/dialogsReducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import React from "react";

class DialogsContainer extends React.Component{

    render(){ return <Dialogs DialogsPage={this.props.DialogsPage} />}
}


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

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(DialogsContainer);