import React, { useEffect } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { connect } from 'react-redux';
import * as userActions from '../store/actions/users';

const UserList = ({ fetchUsers, users, onDelete }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  const renderUserItems = users.userList
    .sort((a, b) => {
      if (a.firstName > b.firstName) return 1;
      else if (a.firstName < b.firstName) return -1;
      else if (a.lastName > b.lastName) return 1;
      else return -1;
    })
    .map((user) => (
      <ListGroupItem key={user.id}>
        <div style={{ display: 'flex' }}>
          <div style={{ flexGrow: 1, margin: 'auto 0' }}>
            {user.firstName} {user.lastName}
          </div>
          <div>
            <Button outline color="danger" onClick={() => onDelete(user.id)}>
              Delete
            </Button>
          </div>
        </div>
      </ListGroupItem>
    ));

  return <ListGroup>{renderUserItems}</ListGroup>;
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(userActions.getUsersRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
