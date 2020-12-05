import Greeting from "./greeting";
import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";

const mapSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
});

const mapDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
});

export default connect(mapSTP, mapDTP)(Greeting);
