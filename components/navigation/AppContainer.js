
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import HomeScreen from '../../screens/HomeScreen';
import DetailsScreen from '../../screens/DetailsScreen';
import AuthLoadingScreen from '../../screens/AuthLoadingScreen';
import RegisterScreen from "../../screens/RegisterScreen";
import LoginScreen from "../../screens/LoginScreen";
import ForgotPasswordScreen from '../../screens/ForgotPasswordScreen';

const AuthStackNavigator = createStackNavigator({
     //ForgotPassword: ForgotPasswordScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    ForgotPassword: ForgotPasswordScreen
});



const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen
    },
    {
        initialRouteName: "Home"
    }
);
// const AppStackNavigator = createStackNavigator({
//     AppTabNavigator:{
//         screen: AppTabNavigator,
//         navigationOptions:({navigation}) => ({
//             title: 'App Name',
//             headerLeft: (
//                 <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
//                     <View style={{paddingHorizontal: 10}}>
//                         {/* <Icon name='md-menu' size={24}/> */}
//                         <Text>Zamiast ikony</Text>
//                     </View>
//                 </TouchableOpacity>
//             )
//         })
//     }
// });
const SwitchNavigator = createSwitchNavigator({
    //AuthLoading: AuthLoadingScreen,
    Auth: AuthStackNavigator,
    App: AppNavigator
});


export default createAppContainer(SwitchNavigator);