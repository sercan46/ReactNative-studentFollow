import React,{Component} from 'react';
import {View,Text} from  'react-native';
import {Provider} from 'react-redux';
import firebase from '@firebase/app';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RouterComponent from './Router';
class Main extends Component{

  componentDidMount(){
    console.log('bura calisti')
    if (!firebase.apps.length) {
      console.log('ife girdi')
       firebase.initializeApp({
         apiKey: "AIzaSyCxAhhadujF165CQH2BhsusAvpAWJe0a6k",
          authDomain: "ogrencikayit-81ed2.firebaseapp.com",
          databaseURL: "https://ogrencikayit-81ed2-default-rtdb.firebaseio.com",
          projectId: "ogrencikayit-81ed2",
          storageBucket: "ogrencikayit-81ed2.appspot.com",
          messagingSenderId: "1051358315100",
          appId: "1:1051358315100:web:b1122dc0e0a35c4ca3dc99",
          measurementId: "G-4G3JHK5FLG"

       });

    }
    else {
      console.log('else girdi')
       firebase.app();
    }
  }

render(){
  const store=createStore(reducers,{},applyMiddleware(ReduxThunk));
  return(
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <RouterComponent />
      </View>
    </Provider>
  );

}

};
export default Main;
