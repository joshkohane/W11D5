import React from "react";
import { Link, Redirect } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(type) {
        return (e) => {
            this.setState({
                [type]: e.target.value,
            });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render() {
        const { errors, formType} = this.props;
        const text = formType === "login" ? "Log In" : "Sign Up";
        const oppText = formType === "signup" ? "Log In" : "Sign Up";
        return (
            <section>
                <h2>{text}</h2>
                <ul>
                    {errors.session.map(error => {
                        return <li>{error}</li>
                    })}
                </ul>
                <form>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange("username")}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange("password")}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>{text}</button>
                </form>
                <Link to={formType === "login" ? "/signup" : "/login"}>
                    {oppText}
                </Link>
            </section>
        );
    }
}

export default SessionForm;