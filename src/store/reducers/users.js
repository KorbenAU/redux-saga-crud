import { Types } from '../actions/users';

const INITIAL_STATE = {
  userList: [],
  error: null,
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS:
      return { ...state, userList: action.payload.users };
    default:
      return state;
  }
};

export default usersReducer;
