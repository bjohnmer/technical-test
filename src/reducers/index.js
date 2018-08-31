const initialState = {};
const AppReducers = (state = initialState, action) => {
  switch (action.type) {
//home
    case 'GET_BUCKET_LIST':
      return (
        Object.assign(
            {},
            state,
            {
              bucket_list: action.data
            }
        )
      );
    default:
      return state;
  }
};

export {AppReducers};
export default AppReducers;
