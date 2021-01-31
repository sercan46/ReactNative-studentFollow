import React,{Component} from 'react';
import {View,TextInput,Alert} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import {Button, Card, CardSection, Spinner } from '../ortak';
import {emailChanged, passwordChanged,loginUser} from '../actions';
import {connect} from 'react-redux';

class LoginForm extends Component{
  state={email:'',password:'', loading:false};
  clickLogin(){
    const {email,password}=this.props;
    this.props.loginUser({email,password});
  }
  loginSuccess(){
    this.setState({loading:false})
  }
  loginFail(){
    this.setState({loading:false})

    Alert.alert(
      'Hata',
      'Girdiğiniz Bilgiler Hatalı',
      [{text:"Tamam" , onPress:()=>null}]
    )
  }
  renderButton(){
    console.log('this pros',this.props.loading)
    if(!this.props.loading){
        return <Button onPress={this.clickLogin.bind(this)}> Giriş </Button>;
    }
      return <Spinner size='small' />;

  }
  render(){
    const {inputStyle}=styles;
    return(
      <View>
      <Card>
        <CardSection>
          <TextInput
            placeholder="E-Mail"
            style={inputStyle}
            value={this.props.email}
            onChangeText={email=>this.props.emailChanged(email)}
          />
        </CardSection>

        <CardSection>
        <TextInput
          secureTextEntry
          placeholder="Password"
          style={inputStyle}
          value={this.props.password}
          onChangeText={password=>this.props.passwordChanged(password)}
        />
        </CardSection>

        <CardSection>
        {this.renderButton()}
        </CardSection>

      </Card>
      </View>
    )
  }
}
const styles={

  inputStyle:{
    color:'#000',
    paddingRight:5,
    paddingLeft:5,
    fontSize:18,
    lineHeight:23,
    flex:2
  },
};
const mapStateToProps=({kimlikdogrulamaResponse})=>{
  const {email,password,loading}=kimlikdogrulamaResponse;
  return {
    email:'Chesercan@gmail.com',password:'123123',loading
  }
};
export default connect(mapStateToProps, {emailChanged,passwordChanged,loginUser}) (LoginForm);
