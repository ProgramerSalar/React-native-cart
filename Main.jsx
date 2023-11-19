import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Toast from 'react-native-toast-message'
import Home from './screens/Home'
import Productdetails from './screens/Productdetails'
import Cart from './screens/Cart'
import ConfirmOrder from './screens/ConfirmOrder'
import Payment from './screens/Payment'
import Login from './screens/Login'

  import SignUp from './screens/SignUp'
import ForgotPassword from './screens/ForgotPassword'
import Verify from './screens/Verify'
import Profile from './screens/Profile'
import UpdateProfile from './screens/UpdateProfile'
import ChangePassword from './screens/ChangePassword'
import Order from './screens/Order'
import Admin from './screens/Admin'




const Main = () => {


  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
        <Stack.Group>
          <Stack.Screen name='home' component={Home} />
          <Stack.Screen name='productdetails' component={Productdetails} />
          <Stack.Screen name='cart' component={Cart} />
          <Stack.Screen name='confirmOrder' component={ConfirmOrder} />
          <Stack.Screen name='payment' component={Payment} />
          <Stack.Screen name='login' component={Login}  />
          <Stack.Screen name='signUp' component={SignUp} />
          <Stack.Screen name='forgotPassword' component={ForgotPassword}/>
          <Stack.Screen name='verify' component={Verify}/>
          <Stack.Screen name='profile' component={Profile} />


          <Stack.Screen name='order' component={Order} />
          <Stack.Screen name='admin' component={Admin} />
          <Stack.Screen name='updateProfile' component={UpdateProfile} />
          <Stack.Screen name='changePassword' component={ChangePassword} />
          
        


        </Stack.Group>
      </Stack.Navigator>

      <Toast position='bottom' topOffset={50} />
    </NavigationContainer>
    
  )
}

export default Main