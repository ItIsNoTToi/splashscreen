import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text, Image} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from "react-native-app-intro-slider";
import { TouchableHighlight } from "react-native";


const Dashboard = ({navigation}) =>
{
    const slides = [
        {
          key: 'slide1',
          image: require('./image/onboard.png'),
        },
        {
          key: 'slide2',
          image: require('./image/welcome.png'),
        },
        {
            key: 'slide3',
            image: require('./image/Login.png'),
        },
        {
            key: 'slide4',
            image: require('./image/Loginnumber.png'),
        },
        {
            key: 'slide5',
            image: require('./image/Sendcode.png'),
        },
      ];


      const renderItem = ({ item }) => (
        <View style={{height: '100%', width: '100%',}}>
          <Image style={{width: '100%', height: '100%'}} source={item.image} />
          
        </View>
      );
       
    const onDone = ()=>
    {
        navigation.navigate('Hello');
    }

    return (
        <AppIntroSlider
        data={slides}
        renderItem={renderItem}
        showNextButton={false}
        onDone={()=>onDone()}
        />
    );
};

const Hello = ({navigation}) =>
{
    return(
        <View style={{width: '100%', height: '100%',justifyContent: 'center', alignItems: 'center', }}>
            <TouchableHighlight onPress={()=> navigation.navigate('Dashboard')} style={{width: '100%', height: 30, backgroundColor: '#39bbf4', justifyContent: 'center', alignItems: 'center',}}>
                <Text style={{textAlign: 'center', color: '#ff0000'}}> Back to Dashboard</Text>
            </TouchableHighlight>
        </View>
        
    );
}

const Stack = createStackNavigator();
//"screenOptions={{ headerShown: false }}" dung de an header
const App = () =>{
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen  name="Dashboard"  component={Dashboard}  />   
            <Stack.Screen name="Hello"  component={Hello} /> 
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default App;