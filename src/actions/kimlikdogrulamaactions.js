import {Alert} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import {EMAIL_CHANGED, PASSWORD_CHANGED,LOGIN_USER,LOGIN_USER_SUCCESS,LOGIN_USER_FAIL} from './types';
import { Actions } from 'react-native-router-flux';

export const emailChanged=(email)=>{
    return(dispatch)=>{
      dispatch({
        type:EMAIL_CHANGED,
        payload:email
      })
    };
};

export const passwordChanged=(password)=>{
    return(dispatch)=>{
      dispatch({
        type:PASSWORD_CHANGED,
        payload:password
      })
    };
};
export const loginUser=({email,password})=>{
  console.log('login email ',email,'password',password)
   return(dispatch)=>{
     console.log('dispatch')
     dispatch({type:LOGIN_USER});
     if(email===""||password===""){
       Alert.alert(
         'Hata',
         'Gerekli alanları giriniz!',
         [{text:"Tamam" , onPress:()=>null}]
       )
     }else{
       console.log('else girdi')
       dispatch({type:LOGIN_USER});

       firebase.auth().signInWithEmailAndPassword(email,password)
       .then((user)=> {
         console.log('then',user)
         loginSuccess(dispatch,user)
       })
       .catch((err)=>{
         console.log('err',err)
         firebase.auth().createUserWithEmailAndPassword(email,password)
         .then(user=>{
           console.log('userrr',user)
           loginSuccess(dispatch,user)
         } )
         .catch((err)=>{
           console.log('ERER',err);
            loginFail()}
         )
       });
     }
   }
};
const loginSuccess=(dispatch,user)=>{
    dispatch({
      type:LOGIN_USER_SUCCESS,
      payload:user
    });
    Actions.main()
};
const loginFail=(dispatch)=>{
  Alert.alert(
    'Hata',
    'Gerekli alanları giriniz!',
    [{text:"Tamam" , onPress:()=>null}]
  )
  dispatch({
    type:LOGIN_USER_FAIL,
    payload:""
  })
}
