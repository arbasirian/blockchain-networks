const dispatchHelper = (dispatch, values, token?) =>

new Promise((resolve, reject) =>
  dispatch({ token, ...values, resolve, reject })
);

export default dispatchHelper;
