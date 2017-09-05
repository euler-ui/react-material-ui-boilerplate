const GET_BUILD_LIST = 'react-material-ui-boilerplate/builds/GET_BUILD_LIST';
export const getBuildList = () => {
  return (dispatch) => {
    fetch('/api/builds')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({
          type: GET_BUILD_LIST,
          payload: json,
        });
      });
  };
};
const builds = (state = [], action) => {
  switch (action.type) {
    case GET_BUILD_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default builds;
