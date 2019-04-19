import React from 'react';
import { View, StyleSheet, } from 'react-native';
import { Container, Content, Grid, Col, Row, Button, Text, Form, Item, Icon, Input, H1 } from 'native-base';

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container style={styles.container}>
        <Grid >
          <Row size={50}>
            <Col style={styles.flexCenter}>
              <Row style={styles.logoContainer} >
                <Col style={styles.flexCenter}>
                  <H1 style={styles.logo}>LOGO</H1>
                </Col>
              </Row>
            </Col>
            {/* <Text>Nowy login</Text>
          <Button title='Register'

          />
          <Button title='Forgot password'
            onPress={() => this.props.navigation.navigate('ForgotPassword')}
          />
          <Button block primary><Text>TEST KLIK</Text></Button> */}
          </Row>
          <Row size={45} style={{borderColor:'red', borderWidth: 2}}>
            {/* <Col size={1} style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
          <Button light rounded bordered onPress={() => this.props.navigation.navigate('Register')} ><Text>register</Text></Button>
          <Col size={2} style={{ backgroundColor: '#00CE9F', height: 200 }}></Col> */}
            <Form style={{ flex: 2, justifyContent: 'space-between' }}>
              <Item rounded style={{ backgroundColor: 'rgba(200,200,200,0.3)', borderColor: 'rgba(200,200,200,0.3)' }}  >
                <Icon active name='person' style={{ color: 'white' }} />

                <Input placeholderTextColor='rgba(255,255,255,0.6)' placeholder='E-mail' style={{ color: 'white' }} />
              </Item>
            </Form>
          </Row>
          <Row size={5} ><Text>Test skip</Text>
            <Button light rounded bordered onPress={() => this.props.navigation.navigate('Register')} ><Text>register</Text></Button>
            <Button light rounded bordered onPress={() => this.props.navigation.navigate('ForgotPassword')} ><Text>ForgotPassword</Text></Button>
          </Row>
        </Grid>
      </Container>


    )
  }
}

export default LoginScreen;

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
  logoContainer: {
    backgroundColor: '#80ffff',
    borderRadius: 100,
    width: 200,
    height: 200
  },
  logo: {
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
