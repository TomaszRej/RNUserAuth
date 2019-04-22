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

  hanldeChange = (key, value) => {

    // const backToInput = this.state[key].valid === false && this.state[key].touched === true ? true : false;
    //  if (backToInput) { this._validate(key) };

    const { isValid, errors } = this._validate(key);


    this.setState(prevState => {
      return {
        ...prevState,
        [key]: {
          ...prevState[key],
          value: value,
          //valid: isValid,
          touched: true,
          //errors: errors

        }
      };
    });
  }

  handleSubmitForm = () => {
    console.log('test submiting form method')
  }

  _toggleActiveItem = (key) => {
    //const backToInput = this.state[key].valid === false && this.state[key].touched === true ? true : false;
    // if (backToInput) { this._validate(key) };

    this.setState(prevState => {
      return {
        ...prevState,
        [key]: {
          ...prevState[key],
          active: !prevState[key].active,
          //active: backToInput ? false : !prevState[key].active
          active: !prevState[key].active
        }
      };
    });
  }

  _validate = (key) => {
    //todo validation rules

    const { value, validationRules } = this.state[key]


    //const isValid = false;

    const { isValid, errors } = validate(value, validationRules)
    //console.warn( errors, 'errors po validate 1')


    this._toggleActiveItem(key);
    this.setState(prevState => {
      return {
        ...prevState,
        [key]: {
          ...prevState[key],
          valid: isValid,
          touched: true,
          errors: errors
        }

      };
    });

    return { isValid, errors };

  }

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

  renderErrors = (key) => {

    let error = '';

    if (this.state[key].errors['notEmpty']) {
      error = this.state[key].errors['notEmpty'];
    } else if (this.state[key].errors['minLength']) {
      error = this.state[key].errors['minLength'];
    } else if (this.state[key].errors['isEmail']) {
      error = this.state[key].errors['isEmail'];
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
                  onChangeText={(value) => this.hanldeChange('email', value)}
                  onFocus={() => this._toggleActiveItem('email')}
                  onBlur={() => this._validate('email')}
                />
                {email.touched ? <Icon name='close' style={styles.closeIcon} onPress={() => this._clearingInput('email')} /> : null}
              </Item>
              {/* {email.touched && email.valid ? */}
              {!email.valid && email.touched ?
                <Row style={{ justifyContent: 'flex-end' }}>
                  <Text style={styles.errorMessage}>
                    {this.renderErrors('email')}
                  </Text>
                </Row> : null
              }
              <Item rounded style={styles.item}>
                <Icon active name='lock' style={styles.icon} />

                <Input
                  placeholderTextColor='rgba(255,255,255,0.6)'
                  placeholder='Password'
                  style={styles.input}
                  value={password.value}
                  onChangeText={(value) => this.hanldeChange('password', value)}
                  onFocus={() => this._toggleActiveItem('password')}
                  onBlur={() => this._validate('password')}
                />
                {this.state.password.touched ? <Icon name='close' style={styles.closeIcon} onPress={() => this._clearingInput('password')} /> : null}
              </Item>
              {!password.valid && password.touched ?
                <Row style={{ justifyContent: 'flex-end' }}>
                  <Text style={styles.errorMessage}>
                    {this.renderErrors('password')}
                  </Text>
                </Row> : null
              }
              <Button disabled={email.valid && password.valid ? false : true} rounded block style={styles.loginButton}><Text style={styles.loginButtonText}>Login</Text></Button>
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
