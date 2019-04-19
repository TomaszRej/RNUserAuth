import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class HomeScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>HOME SCREEN</Text>
                <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
            </View>
        )
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});