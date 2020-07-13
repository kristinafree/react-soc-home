import React from 'react';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers } from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import { connect } from 'react-redux';
import Users from '../Users/Users';
import { withAuthRedirect } from '../../hoc/withAuthRedirect'; 
import { compose } from 'redux';
import { getUsers,getFollowingInProgress, getIsFetching, getCurrentPage, getTotalUsersCount, getPageSize} from '../../redux/users-selectors';

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage,pageSize} = this.props;
        this.props.getUsers(currentPage,pageSize);
    }

    onPageChanged = (pageNamber) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNamber,pageSize);
    }

    render () {
        return <>
              {this.props.isFetching ? <Preloader /> : null}
              <Users totalUsersCount = {this.props.totalUsersCount}
                      pageSize = {this.props.pageSize}
                      currentPage = {this.props.currentPage}
                      onPageChanged = {this.onPageChanged}
                      users = {this.props.users}
                      follow = {this.props.follow}
                      unfollow = {this.props.unfollow} 
                      followingInProgress = {this.props.followingInProgress}
                /> 
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

// let withRedirect = withAuthRedirect(UsersContainer);

export default compose(
//    withAuthRedirect,
    connect (mapStateToProps, {follow,unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers})
)(UsersContainer);
