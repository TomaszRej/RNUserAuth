import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Grid, Col, Row, Form, Item, Icon, Input, Button, Text, H1, Content } from 'native-base';




class ForgotPasswordScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);

        this.state = {
            email: ''
        }
    }

    hanldeChange = ({email}) => {
        console.log(email);
        
        this.setState({
            email
        })
    }

    handleSubmitForm = () => {
        console.log('handle submit form forgot password');
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
                                <Input placeholderTextColor='rgba(255,255,255,0.6)' placeholder='E-mail' style={styles.input} value={email} onChangeText={(email) => this.hanldeChange({ email })} />
                                <Icon name='close-circle' />
                            </Item>
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
    input: {
        color: 'white',

    },
    sendEmailButton: {
        marginTop: 15
    },
});