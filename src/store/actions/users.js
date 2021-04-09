export const Types = {
  GET_USERS_REQUEST: 'users/get_users_request',
  GET_USERS_SUCCESS: 'users/get_users_success',
  CREATE_USER_REQUEST: 'users/create_user_request',
  CREATE_USER_SUCCESS: 'user/create_user_success',
  DELETE_USER_REQUEST: 'user/delete_user_request',
  USER_ERROR: 'user/user_error',
};

export const getUsersRequest = () => ({
  type: Types.GET_USERS_REQUEST,
});

export const getUsersSuccess = (users) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: users,
});

export const createUserRequest = (firstName, lastName) => ({
  type: Types.CREATE_USER_REQUEST,
  payload: { firstName, lastName },
});

export const deleteUserRequest = (id) => ({
  type: Types.DELETE_USER_REQUEST,
  payload: id,
});

export const userError = (errorMessage) => ({
  type: Types.USER_ERROR,
  payload: errorMessage,
});
