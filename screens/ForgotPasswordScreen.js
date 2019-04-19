import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Grid, Col, Row} from 'native-base';

class ForgotPasswordScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Button title='Forgot PAssword go back to login'
                        onPress={() => this.props.navigation.navigate('Login')}
                />
  
                        <Grid>
          <Col size={1} style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
          <Col size={2} style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
        </Grid>
            </View>
        )
    }
}

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});