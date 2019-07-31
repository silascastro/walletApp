import Home from './screens/Home';
import Details from './screens/Details';
import Form from './screens/Form';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const AppNavigator = createStackNavigator({
    /*Home: {
      screen: App
    }*/
    Home: Home,
    Form: Form,
    Details: Details
  },{
    initialRouteName: "Home",

    headerLayoutPreset: 'center'
});
  
export default createAppContainer(AppNavigator);
