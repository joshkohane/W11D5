import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login, receiveErrors } from '../../actions/session_actions';

const mapSTP = (state, ownProps) => ({
    errors: state.errors,
    formType: 'login',
})

const mapDTP = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login(user)),
})

export default connect(mapSTP, mapDTP)(SessionForm);