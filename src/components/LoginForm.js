import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import {Button, Card, CardSection, Input} from "./common";



class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }


    onPasswordChange(text) {
        console.log(text);
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const email = this.props.email;
        const password = this.props.password;
        console.log(this.props);
        console.log(this.props.email);

        this.props.loginUser({ email, password });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label={"Email"}
                        placeholder={"email@mail.com"}
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email.value}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label={"Password"}
                        placeholder={"password"}
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password.value}
                    />
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    return {
      email: auth.email,
      password: auth.password
  }
};
//adds in this.props.emailChanged - action
export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm);