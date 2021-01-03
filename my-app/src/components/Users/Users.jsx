import React from 'react';
import styles from "./Users.module.css";
import User from "./User/User";
import Preloader from "../common/Preloader/Preloader";


function Users(props) {


    let pagesCount = Math.ceil(props.totalCountUsers / props.pageSize);
    let pages = [];
    for (let i = 1; i <= 5; i++) {
        pages.push(i);
    }
    const users = props.users.map(user => <User user={user} changeFollow={props.changeFollow}/>)

    return (
        <div className={styles.content}>
            <div className={styles.pages}>
                {pages.map(p => <span className={p === props.currentPage ? `${styles.selectedPage}` : `${styles.page}`}
                                      onClick={() => props.onChangeCurrentPage(p)}> {p} </span>)}
            </div>
            {props.isFetching ? <Preloader classname={styles.preloader} /> : users}
        </div>

    );
}


export default Users;