const initialState = {
  value: "",
};

export default function textReducer(state = initialState, action) {
  switch (action.type) {
    case "text/edited":
      return {
        value: action.payload,
      };

    default:
      return state;
  }
}

export const textEdited = (value) => ({
  type: "text/edited",
  payload: value,
});
