import { SET_USER } from './actions';

interface UserState { user: null | { email: string }; }
const initialState: UserState = { user: null };

const userReducer = (state = initialState, action: any): UserState => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default { user: userReducer };
