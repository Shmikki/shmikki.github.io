import {connect} from "react-redux";
import {
    changeFollowActionCreator,
    setUsersActionCreator,
    setTotalCountUsersActionCreator, changeCurrentPageActionCreator, toggleIsFetchingActionCreator
} from "../../redux/usersReducer";
import {Component} from "react";
import Users from "./Users";
import {getUsers} from "../../api/api";

class UsersContainer extends Component{

    constructor(props) {
        super(props);
        this.onChangeCurrentPage = this.onChangeCurrentPage.bind(this);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);
        getUsers(1,10)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setCountUsers(data.totalCount);
            });
    }

    onChangeCurrentPage(p){
        this.props.toggleIsFetching(true);
       getUsers(p)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
        this.props.setCurrentPage(p);
    }

    render(){
        return (
            <Users users={this.props.users}
                   onChangeCurrentPage={this.onChangeCurrentPage}
                   currentPage = {this.props.currentPage}
                   changeFollow = {this.props.changeFollow}
                   totalCountUsers={this.props.totalCountUsers}
                   pageSize={this.props.pageSize}
                   isFetching={this.props.isFetching}
            />
        )
    }
}

const mapStateToProps = state => {
    return{
        users:  state.usersPage.users,
        pageSize : state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalCountUsers: state.usersPage.totalCountUsers,
        isFetching: state.usersPage.isFetching
    }
};

const mapDispatchToProps = (dispatch) => {
    return(
        {
            changeFollow : (id) => dispatch(changeFollowActionCreator(id)),
            setUsers : (users) => dispatch(setUsersActionCreator(users)),
            setCountUsers: (count) => dispatch(setTotalCountUsersActionCreator(count)),
            setCurrentPage: (p) => dispatch(changeCurrentPageActionCreator(p)),
            toggleIsFetching: (toggle) => dispatch(toggleIsFetchingActionCreator(toggle))
        }
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);
