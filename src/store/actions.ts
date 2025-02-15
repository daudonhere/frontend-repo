export const SET_USER = 'SET_USER';

export const setUser = (user: { email: string } | null) => ({
  type: SET_USER,
  payload: user,
});
