import React from 'react';
import { Keyboard, View, StyleSheet, } from 'react-native';
import { Container, Content, Grid, Col, Row, Button, Text, Form, Item, Icon, Input, H1 } from 'native-base';

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Grid style={styles.container}>
        <Row size={40}>
          <Col style={styles.flexCenter}>
            <Row style={styles.logoContainer} >
              <Col style={styles.flexCenter}>
                <H1 style={styles.logo}>LOGO</H1>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row size={55}>
          <Content>
            <Form >
              <Item rounded style={styles.item} >
                <Icon active name='person' style={styles.icon} />
                <Input placeholderTextColor='rgba(255,255,255,0.6)' placeholder='E-mail' style={styles.input} />
              </Item>
              <Item rounded style={styles.item} >
                <Icon active name='lock' style={styles.icon} />
                <Input placeholderTextColor='rgba(255,255,255,0.6)' placeholder='Password' style={styles.input} />
              </Item>
              <Button rounded block style={styles.loginButton}><Text style={styles.loginButtonText}>Login</Text></Button>
            </Form>
            <Grid>
              <Row >
                <Col >
                  <Button light transparent onPress={() => this.props.navigation.navigate('Register')} >
                    <Text style={{ paddingLeft: 10 }}>Register</Text>
                  </Button>
                </Col>
                <Col >
                  <Row style={{ justifyContent: 'flex-end' }}>
                    <Button light transparent onPress={() => this.props.navigation.navigate('ForgotPassword')} >
                      <Text style={{ paddingRight: 10 }}>Forgot Password</Text>
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Grid>
          </Content>
        </Row>
        <Row size={5} style={{ justifyContent: 'flex-end'}} >
          <Button bordered light small>
            <Text>Skip</Text>
          </Button>

        </Row>
      </Grid >



    )
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#009999',
    paddingHorizontal: 15

  },
  content: {

    marginHorizontal: 15,
    marginTop: 25,

  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    backgroundColor: 'white',
    borderRadius: 100,
    width: 200,
    height: 200
  },
  logo: {
    color: '#009999'

  },
  form: {
    // flex: 2, justifyContent: 'space-between' 
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
  loginButton: {
    backgroundColor: '#80ffff',
    marginTop: 5
  },
  loginButtonText: {
    color: '#009999'
  }
});
// import React from 'react';
// import { Button, AsyncStorage, Container, Header, Content, Card, CardItem, Body, Text, Form, Item, Input } from 'native-base';


// export default class LoginScreen extends React.Component {
//   signIn = async () => {
//     await AsyncStorage.setItem('userToken', 'Tomek');
//     this.props.navigation.navigate('App');
//   };
//   render() {
//     return (
//       <Container>

//         <Content style={{ marginHorizontal: 50 }}>
//           <Card >

//             <CardItem header>
//               <Text>Login</Text>
//             </CardItem>
//             <CardItem>

//               <Form flex>

//                 <Item>
//                   <Input last placeholder="Username" />
//                 </Item>
//                 <Item >
//                   <Input last placeholder="Password" />
//                 </Item>
//                 <Button block onPress={this.signIn} ><Text>Login</Text></Button>



//               </Form>

//             </CardItem>
//           </Card>
//         </Content>
//       </Container>
//     );
//   }
// }
