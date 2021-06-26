import { Component } from "react";
import { auth, signInWithGoogle } from "../firebase/firebase.utils";
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

    await auth.signInWithEmailAndPassword(email, password);

    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    const { email, password } = this.state;
    const { handleChange, handleSubmit } = this;

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
            type="empasswordail"
            name="password"
            value={password}
            handleChange={handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit" title="sign in" />
            <CustomButton
              title="sign in with google"
              isGoogleSignIn
              onClick={signInWithGoogle}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
