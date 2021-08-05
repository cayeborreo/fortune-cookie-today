export const initialState = {
  fortunes: [
    // {
    //   id: "",
    //   notes: "",
    //   lastModified: "",
    // },
  ],
  todaysFortune: null,
  modal: {
    isActive: false,
    title: "",
    component: null,
  },
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "RESET_STATE":
      return initialState;

    case "UPDATE_FORTUNES":
      return {
        ...state,
        fortunes: action.payload,
      };

    case "UPDATE_FORTUNE":
      if (typeof action.payload === "object") {
        // User changed one of the fortunes
        const newFortuneBank = state?.fortunes?.map((fortune) => {
          if (fortune.id === action.payload.id) {
            return { ...fortune, ...action.payload };
          } else return fortune;
        });
        return {
          ...state,
          fortunes: newFortuneBank,
          todaysFortune: action.payload,
        };
      } else {
        // User just wants a new, randomized fortune
        const randomIndex = Math.floor(Math.random() * state?.fortunes?.length);
        return {
          ...state,
          todaysFortune: state?.fortunes[randomIndex],
        };
      }

    case "SHOW_MODAL":
      return {
        ...state,
        modal: {
          isActive: true,
          component: action.payload,
        },
      };

    case "HIDE_MODAL":
      return {
        ...state,
        modal: { isActive: false, component: null },
      };

    default:
      return state;
  }
};
