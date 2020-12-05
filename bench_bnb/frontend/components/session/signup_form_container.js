import SessionForm from "./session_form";
import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";

const mapSTP = (state, ownProps) => ({
    errors: state.errors,
    formType: "signup",
});

const mapDTP = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(signup(user)),
});

export default connect(mapSTP, mapDTP)(SessionForm);
