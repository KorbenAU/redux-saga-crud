import React from 'react';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import { createUserRequest, deleteUserRequest } from './store/actions/users';
import { connect } from 'react-redux';

function App({ createUser, deleteUser, users }) {
  const onFormSubmit = (firstName, lastName) => {
    createUser(firstName, lastName);
  };

  const onDeleteUser = (id) => {
    deleteUser(id);
  };

  return (
    <div style={{ width: '60%', margin: '10px auto' }}>
      <AddUser onSubmit={onFormSubmit} />
      <hr />
      {users.error ? <p>{users.error}</p> : null}
      <UserList onDelete={onDeleteUser} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (firstName, lastName) =>
      dispatch(createUserRequest(firstName, lastName)),
    deleteUser: (id) => dispatch(deleteUserRequest(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
