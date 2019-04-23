import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { Button, Text, Container, Content, Item, Input, Icon, Form, H1, Label } from 'native-base';

class RegisterScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        const { height: screenHeight } = Dimensions.get('window');
        return (
            <Container style={styles.container}>
                <Content style={styles.content} >
                    <View style={{ flex: 1, height: screenHeight, justifyContent: 'space-around', alignItems: 'stretch' }}>
                        <View style={styles.flexCenter}>
                            <H1 style={styles.textColor}>REGISTER</H1>
                        </View>
                        <Form style={{ flex: 2, justifyContent: 'space-between' }}>
                            <Item rounded style={{ backgroundColor: 'rgba(200,200,200,0.3)', borderColor: 'rgba(200,200,200,0.3)' }}  >
                                <Icon active name='person' style={{ color: 'white' }} />

                                <Input placeholderTextColor='rgba(255,255,255,0.6)' placeholder='E-mail' style={{ color: 'white' }} />
                            </Item>
                            <Item rounded style={{ backgroundColor: 'rgba(200,200,200,0.3)', borderColor: 'rgba(200,200,200,0.3)' }}  >
                                <Icon name='mail' style={{ color: 'white' }} />
                                <Input placeholderTextColor='rgba(255,255,255,0.6)' placeholder='E-mail' style={{ marginLeft: 20, color: 'white' }} />
                            </Item>
                            <Item rounded style={{ backgroundColor: 'rgba(200,200,200,0.3)', borderColor: 'rgba(200,200,200,0.3)' }}  >

                                <Icon active name='lock' style={{ marginLeft: 10, color: 'white' }} />
                                <Input placeholderTextColor="white" placeholder="Password" style={{ color: 'white' }} />


                            </Item>
                            <Item rounded style={{ backgroundColor: 'rgba(200,200,200,0.3)', borderColor: 'rgba(200,200,200,0.3)' }}  >
                                <Icon active name='lock' style={{ color: 'white' }} />
                                <Input placeholderTextColor="white" placeholder="Confirm password" style={{ marginLeft: 20, color: 'white' }} />
                            </Item>


                            <Button rounded bordered block light><Text>Next</Text></Button>
                        </Form>
                        {/* <View style={{ flex: 1, justifyContent: 'flex-end' }}> */}
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', paddingBottom: 50 }}>
                            {/* <Text style={{ color: 'white' }}>{'Terms && Conditions'}</Text>
                                <Text style={{ color: 'white' }}>Login</Text> */}
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                                <Button transparent light>
                                    <Text>{'Terms && Conditions'}</Text></Button>
                                <Button transparent light onPress={() => this.props.navigation.goBack()}>
                                    <Text>Login</Text></Button>
                            </View>
                        </View>
                        {/* </View> */}

                    </View>
                </Content>

            </Container>

        )
    }
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#009999',

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
    }

});