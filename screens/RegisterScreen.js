import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Grid, Row, Col, Left, Right, Button, Text, Container, Content, Item, Input, Icon, Form, H1, Label } from 'native-base';

class RegisterScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    handleSubmitForm = () => {
        console.log('test submiting form method')
    }

    render() {
        return (
            <Grid style={styles.container}>
                <Row size={25}>
                    <Col style={styles.flexCenter}>
                        <H1 style={styles.textColor}>REGISTER</H1>
                    </Col>
                </Row>
                <Row size={50}>
                    <Content>
                        <Form onSubmit={() => this.handleSubmitForm}
                            style={{ alignItems: 'stretch' }}
                        >
                            <Item rounded style={styles.item} >
                                <Icon active name='person' style={styles.icon} />
                                <Input placeholderTextColor='rgba(255,255,255,0.6)' placeholder='Username' style={styles.input} />
                            </Item>
                            <Item rounded style={styles.item} >
                                <Icon active name='mail' style={styles.icon} />
                                <Input placeholderTextColor='rgba(255,255,255,0.6)' placeholder='E-mail' style={styles.input} />
                            </Item>
                            <Item rounded style={styles.item} >
                                <Icon active name='lock' style={styles.icon} />
                                <Input placeholderTextColor='rgba(255,255,255,0.6)' placeholder='Password' style={styles.input} />
                            </Item>
                            <Item rounded style={styles.item} >
                                <Icon active name='lock' style={styles.icon} />
                                <Input placeholderTextColor='rgba(255,255,255,0.6)' placeholder='Confirm Password' style={styles.input} />
                            </Item>
                            <Button  rounded bordered block light style={styles.registerButton}
                            onPress={() => this.props.navigation.navigate('App')}>
                            <Text style={styles.loginButtonText}>Next</Text>
                            </Button>
                        </Form>
                    </Content>
                </Row>
                <Row size={25} style={{ alignItems: 'flex-end' }}>
                    {/* <Grid>
                        <Row style={{ alignItems: 'flex-end' }}>
                            <Col >
                                <Button light transparent onPress={() => this.props.navigation.navigate('Register')} >
                                    <Text style={{ paddingLeft: 10 }}>{'Terms && Conditions'}</Text>
                                </Button>
                            </Col>
                            <Col >
                                <Row style={{ justifyContent: 'flex-end' }}>
                                    <Button style={{ alignSelf: 'flex-end' }} light transparent onPress={() => this.props.navigation.goBack()} >
                                        <Text style={{ paddingRight: 10 }}>Login</Text>
                                    </Button>
                                </Row>
                            </Col>

                        </Row>
                    </Grid> */}
                    <Row>
                        <Left>
                            <Button light transparent onPress={() => this.props.navigation.navigate('Register')} >
                                <Text style={{ paddingLeft: 10 }}>{'Terms && Conditions'}</Text>
                            </Button>
                        </Left>
                        <Right>
                            <Button light transparent onPress={() => this.props.navigation.goBack()} >
                                <Text style={{ paddingRight: 10 }}>Login</Text>
                            </Button>
                        </Right>
                    </Row>

                </Row>
    
            </Grid>

        )
    }
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#009999',
        paddingHorizontal: 15
    },
    content: {
        marginHorizontal: 15,
        marginTop: 25
    },
    flexCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textColor: {
        color: 'white'
    },
    item: {
        backgroundColor: 'rgba(200,200,200,0.3)',
        borderColor: 'rgba(200,200,200,0.3)',
        marginBottom: 15
    },
    icon: {
        marginLeft: 10,
        color: 'white'
    },
    input: {
        color: 'white'
    },
    registerButton: {
        marginTop: 5
    }

});