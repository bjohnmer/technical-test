//home

export const get_bucket_list = () => {
  return dispatch => fetch('http://roadmapservice.azurewebsites.net/api/buckets')
    .then(res => res.json())
    .then((data) => {
      data.sort((a, b) => a.OrderInVertical - b.OrderInVertical);
      return (
        dispatch({ type: 'GET_BUCKET_LIST', data })
      )
    },
    err => dispatch({ type: 'LOAD_DATA_FAILURE', err })
  );
}
