export default (state, action) => {
  console.log(action);
  return null; //Reducers must never return "undefined", but "null" is ok
}