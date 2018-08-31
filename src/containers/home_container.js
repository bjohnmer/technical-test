// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { get_bucket_list } from '../actions';

import Home from '../views/pages/Home';
 
const mapStateToProps = state => {
  return {
    bucket_list: state.bucket_list || [],
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    get_bucket_list: () => {
      dispatch(get_bucket_list())
    }
  }
}
 
const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
 
export default HomeContainer
