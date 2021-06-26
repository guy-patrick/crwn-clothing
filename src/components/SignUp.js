import { Component } from "react";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";
import { CustomButton } from "./CustomButton";
import { FormInput } from "./FormInput";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {}
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="Display name"
            value={displayName}
            handleChange={handleChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={email}
            handleChange={handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={password}
            handleChange={handleChange}
            required
          />
          <FormInput
            type="confirmPassword"
            name="confirmPassword"
            label="Confirm password"
            value={confirmPassword}
            handleChange={handleChange}
            required
          />
          <CustomButton type="submit" title="sign up" />
        </form>
      </div>
    );
  }
}

export default SignUp;
