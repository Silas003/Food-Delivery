import { View, Text } from 'react-native'
import React from 'react'
import Navigation from './Screens/Navigation'
import { Store } from './store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={Store}>
        <Navigation/>
    </Provider>
    
    
   
  )
}

export default App