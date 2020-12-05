import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component {
    render() {
        const { currentUser, logout } = this.props;
        return (
            <div>
                {currentUser ? (
                    <div>
                        <h2>Greetings {currentUser.username}!</h2>
                        <button onClick={logout}>Logout</button>
                    </div>
                ) : (
                    <div>
                        <Link to="/signup">Sign-up</Link>
                        <Link to="/login">Login</Link>
                    </div>
                )}
            </div>
        );
    }
}

export default Greeting;
