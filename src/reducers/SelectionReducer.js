//The ES6 "state = null" means "if the state is undefined, default it to become 'null' instead". This is used just for the beginning, when there is nothing currently selected
export default (state = null, action) => {
  switch (action.type) {
    case "select_era":
      return action.payload;
    default:
      return state; //state is whatever was returned from the last time the reducer ran
  }
}