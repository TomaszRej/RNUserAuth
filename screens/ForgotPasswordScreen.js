import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Grid, Col, Row, Form, Item, Icon, Input, Button, Text, H1, Content } from 'native-base';
import validate from '../utility/validation';



class ForgotPasswordScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);

        this.state = {
            email: {
                value: "",
                valid: false,
                validationRules: {
                    notEmpty: true,
                    isEmail: true,

                },
                touched: false,
                errors: []
            }
        }
    }

    // hanldeChange = ({ email }) => {
    //     console.log(email);

    //     this.setState({
    //         email
    //     })
    // }
    hanldeChange = (key, value, onBlur) => {
        const { touched, validationRules } = this.state[key];
        const validationResult = {};

        if (touched || onBlur) {
            validationResult.isValid = validate(value, validationRules).isValid;
            validationResult.errors = validate(value, validationRules).errors;
        }

        this.setState(prevState => {
            return {
                ...prevState,
                [key]: {
                    ...prevState[key],
                    value: value,
                    valid: validationResult.isValid ? validationResult.isValid : false,
                    touched: true,
                    errors: validationResult.errors ? validationResult.errors : []

                }
            };
        });
    }

    clearingInput = (key) => {
        this.setState(prevState => {
            return {
                ...prevState,
                [key]: {
                    ...prevState[key],
                    value: '',
                    touched: false
                }

            };
        });
    }

    handleSubmitForm = () => {
        console.log('handle submit form forgot password');
    }

    renderError = (key) => {

        const { errors } = this.state[key]

        let error = '';

        if (errors['notEmpty']) {
            error = errors['notEmpty'];
        } else if (errors['minLength']) {
            error = errors['minLength'];
        } else if (errors['isEmail']) {
            error = errors['isEmail'];
        }

        return error;
    }

    render() {
        const { email } = this.state;
        return (
            <Grid style={styles.container}>
                <Row size={40} style={styles.flexCenter}>
                    <H1 style={styles.textColor}>Forgot Your Password? </H1>
                </Row>
                <Row size={50}>
                    <Content>
                        <Form>
                            <Item rounded style={styles.item} >
                                <Icon active name='mail' style={styles.icon} />
                                <Input
                                    placeholderTextColor='rgba(255,255,255,0.6)'
                                    placeholder='E-mail'
                                    style={styles.input}
                                    value={email.value}
                                    onChangeText={value => this.hanldeChange('email', value)}
                                    onBlur={() => this.hanldeChange('email', email.value, true)}
                                />
                                {email.touched && <Icon name='close' style={styles.closeIcon} onPress={() => this.clearingInput('email')} />}
                            </Item>

                            {!email.valid && email.touched &&
                                <Row style={{ justifyContent: 'flex-end' }}>
                                    <Text style={styles.errorMessage}>
                                        {this.renderError('email')}
                                    </Text>
                                </Row>
                            }


{/* 
                            <Item rounded style={styles.item} >
                                <Icon active name='mail' style={styles.icon} />
                                <Input placeholderTextColor='rgba(255,255,255,0.6)' placeholder='E-mail' style={styles.input} value={email} onChangeText={(email) => this.hanldeChange({ email })} />
                                <Icon name='close-circle' />
                            </Item> */}
                            <Button rounded bordered block light
                                onPress={this.handleSubmitForm}
                                style={styles.sendEmailButton}><Text >Send Email</Text></Button>
                        </Form>
                    </Content>
                </Row>
                <Row size={10} style={styles.flexCenter}>
                    <Button transparent light
                        onPress={() => this.props.navigation.goBack()}>
                        <Text>Back to Login</Text>
                    </Button>
                </Row>
            </Grid>
        )
    }
}

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#009999',
        paddingHorizontal: 15
    },
    flexCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textColor: {
        color: 'white'
    },
    item: {
        backgroundColor: 'rgba(200,200,200,0.3)',
        borderColor: 'rgba(200,200,200,0.3)',
        marginBottom: 15,
        //borderColor: 'red',


    },
    icon: {
        marginLeft: 10,
        color: 'white'
    },
    closeIcon: {
        marginRight: 10,
        color: 'white',
        fontSize: 30
    },
    input: {
        color: 'white',

    },
    errorMessage: {
        color: 'red',
        marginTop: 5,
        fontSize: 12
    },
    sendEmailButton: {
        marginTop: 15
    },
});