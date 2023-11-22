import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Toast from 'react-native-toast-message'
import Home from './screens/Home'
import Productdetails from './screens/Productdetails'
import Cart from './screens/Cart'
import CartBill from './screens/CartBill'
import Payment from './screens/Payment'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import ForgotPassword from './screens/ForgotPassword'
import ResetPassword from './screens/ResetPassword'
import Profile from './screens/Profile'
import UpdateProfile from './screens/UpdateProfile'
import NewPassword from './screens/NewPassword'
import Order from './screens/Order'
import Admin from './screens/Admin'
import Category from './screens/Admin/Category'
import Product from './screens/Admin/Product'
import updateProduct from './screens/Admin/UpdateProduct'
import UpdateProduct from './screens/Admin/UpdateProduct'





const Main = () => {


  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
        <Stack.Group>
          <Stack.Screen name='home' component={Home} />
          <Stack.Screen name='productdetails' component={Productdetails} />
          <Stack.Screen name='cart' component={Cart} />
          <Stack.Screen name='cartbill' component={CartBill} />
          <Stack.Screen name='payment' component={Payment} />
          <Stack.Screen name='login' component={Login} />
          <Stack.Screen name='signUp' component={SignUp} />
          <Stack.Screen name='forgotPassword' component={ForgotPassword} />
          <Stack.Screen name='resetPassword' component={ResetPassword} />
          <Stack.Screen name='profile' component={Profile} />

          {/* profile  */}
          <Stack.Screen name='updateProfile' component={UpdateProfile} />
          <Stack.Screen name='newPassword' component={NewPassword} />
          <Stack.Screen name='order' component={Order} />
          <Stack.Screen name='admin' component={Admin} />



          {/* Admin  */}
          <Stack.Screen name='category' component={Category} />
          <Stack.Screen name='product' component={Product} />
          <Stack.Screen name='updateProduct' component={UpdateProduct}/>



          
          
          
          
          
        


        </Stack.Group>
      </Stack.Navigator>

      <Toast position='bottom' topOffset={50} />
    </NavigationContainer>
    
  )
}

export default Main