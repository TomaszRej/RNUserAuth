import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { connect } from 'react-redux';


class HomeScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>HOME SCREEN</Text>
                <Text>{this.props.test}</Text>
                <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        test: state.test.test
    }
}

export default connect(mapStateToProps,{})(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});