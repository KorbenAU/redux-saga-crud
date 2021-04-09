import { Types } from '../actions/users';

const INITIAL_STATE = {
  userList: [],
  error: null,
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS:
      return { ...state, error: null, userList: action.payload };
    case Types.USER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
