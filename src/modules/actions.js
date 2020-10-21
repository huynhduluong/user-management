import { DELETE_USER, SUBMIT_USER } from "./constant";

export const actDeleteUser = (user) => {
  return {
    type: DELETE_USER,
    payload: user,
  };
};
export const actSubmitUser = (user) => {
  return {
    type: SUBMIT_USER,
    payload: user,
  };
};
