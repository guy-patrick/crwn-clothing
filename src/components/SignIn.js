import { Component } from "react";
import { connect } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../redux/user/user.actions";
import { FormInput } from "./FormInput";
import { CustomButton } from "./CustomButton";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    const { emailSignInStart } = this.props;

    emailSignInStart(email, password);

    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { email, password } = this.state;
    const { googleSignInStart } = this.props;

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={email}
            handleChange={handleChange}
            required
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={password}
            handleChange={handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit" title="sign in" />
            <CustomButton
              type="button"
              title="sign in with google"
              isGoogleSignIn
              onClick={googleSignInStart}
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
