import {connect} from "react-redux";
import {
    changeFollowActionCreator,
    setUsersActionCreator,
    setTotalCountUsersActionCreator, changeCurrentPageActionCreator, toggleIsFetchingActionCreator
} from "../../redux/usersReducer";
import {Component} from "react";
import axios from "axios";
import Users from "./Users";

class UsersContainer extends Component{

    constructor(props) {
        super(props);
        this.onChangeCurrentPage = this.onChangeCurrentPage.bind(this);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setCountUsers(response.data.totalCount);
            });
    }

    onChangeCurrentPage(p){
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
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
