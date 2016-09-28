import { connect } from 'react-redux';
import Main from '../../components/Main';

import {
  setSnackBar,
} from '../../actions';

export default connect(
  state => ({
    data: state,
  }),
  dispatch => ({
    setSnackBar: condition => (
      dispatch(setSnackBar(condition))
    ),
  })
)(Main);
