import React from 'react';
import { Keyboard, View, StyleSheet, } from 'react-native';
import { Container, Content, Body, Grid, Col, Row, Right, Button, Text, Form, Item, Icon, Input, H1 } from 'native-base';
import validate from '../utility/validation';


class LoginScreen extends React.Component {
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

      },
      password: {
        value: "",
        valid: false,
        validationRules: {
          notEmpty: true,
          minLength: 6
        },
        touched: false,
        errors: []
      },
    }
  }

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

  handleSubmitForm = () => {
    console.log('test submiting form method')
  }


  // _validate = (key) => {
  //   const { value, validationRules } = this.state[key];
  //   const { isValid, errors } = validate(value, validationRules)
  //   return { isValid, errors };

  // }

  _clearingInput = (key) => {
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
    const { email, password } = this.state;

    return (
      <Grid style={styles.container}>
        <Row size={45}>
          <Col style={styles.flexCenter}>
            <Row style={styles.logoContainer} >
              <Col style={styles.flexCenter}>
                <H1 style={styles.logo}>LOGO</H1>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row size={48}>
          <Content>
            <Form onSubmit={this.handleSubmitForm}>
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
                {email.touched && <Icon name='close' style={styles.closeIcon} onPress={() => this._clearingInput('email')} />}
              </Item>

              {!email.valid && email.touched &&
                <Row style={{ justifyContent: 'flex-end' }}>
                  <Text style={styles.errorMessage}>
                    {this.renderError('email')}
                  </Text>
                </Row>
              }
              <Item rounded style={styles.item}>
                <Icon active name='lock' style={styles.icon} />
                <Input
                  placeholderTextColor='rgba(255,255,255,0.6)'
                  placeholder='Password'
                  style={styles.input}
                  value={password.value}
                  onChangeText={(value) => this.hanldeChange('password', value)}
                  onBlur={() => this.hanldeChange('password', password.value, true)}
                />
                {this.state.password.touched &&
                  <Icon name='close'
                    style={styles.closeIcon}
                    onPress={() => this._clearingInput('password')}
                  />}
              </Item>
              {!password.valid && password.touched &&
                <Row style={{ justifyContent: 'flex-end' }}>
                  <Text style={styles.errorMessage}>
                    {this.renderError('password')}
                  </Text>
                </Row>
              }
              <Button disabled={email.valid && password.valid ? false : true} rounded block style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
              </Button>
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
        <Row size={7} style={{ justifyContent: 'flex-end' }} >
          <Button bordered light small onPress={() => this.props.navigation.navigate('App')}>
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
  errorText: {
    backgroundColor: 'rgba(255,0,0,0.7)',
    borderRadius: 30,
    color: 'white'
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
    marginTop: 15,



  },
  icon: {
    marginLeft: 10,
    color: 'white'
  },
  closeIcon: {
    marginRight: 10,
    color: 'white',
    fontSize: 30
  }
  ,
  input: {
    color: 'white',

  },
  errorMessage: {
    color: 'red',
    marginTop: 5,
    fontSize: 12
  },
  loginButton: {
    backgroundColor: '#80ffff',

    marginTop: 15
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
