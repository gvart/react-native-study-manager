import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import {Button, Card, CardSection, Input, Spinner} from "./common";



class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }


    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const email = this.props.email;
        const password = this.props.password;

        this.props.loginUser({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                </View>
            )
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size={"large"}/>
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
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

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

//add this object to this.props
const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return {
      email: email,
      password: password,
      error: error,
      loading: loading
  }
};
//trigger mapStateToProps when one of this methods is called
export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm);