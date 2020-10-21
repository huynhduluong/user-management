import { DELETE_USER, EDIT_USER, SUBMIT_USER } from "./constant";

const initialState = {
  userList: [
    {
      id: 1,
      name: "Dinh Phuc Nguyen",
      username: "dpnguyen",
      email: "dpnguyen@gmail.com",
      phoneNumber: "1123123213",
      type: "VIP",
    },
    {
      id: 2,
      name: "hao",
      username: "nguyendp",
      email: "nguyendp@gmail.com",
      phoneNumber: "1123123213",
      type: "VIP",
    },
  ],
  userEdit: null,
};

const userReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case DELETE_USER: {
      let userList = state.userList.filter((item) => {
        return item.id !== actions.payload.id;
      });
      state.userList = userList;
      return { ...state };
    }
    case SUBMIT_USER: {
      console.log(actions.payload.id);
      const index = state.userList.findIndex((item) => {
        console.log(item.id);
        return item.id === actions.payload.id;
      });
      console.log(index);

      if (index !== -1) {
        let updateList = [...state.userList];
        updateList[index] = actions.payload;
        state.userList = updateList;
      } else {
        let newUser = { ...actions.payload, id: Math.random() };
        let userList = [...state.userList, newUser];
        state.userList = userList;
      }
      return { ...state };
    }
    case EDIT_USER: {
      state.userEdit = actions.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default userReducer;
