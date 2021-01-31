import React, {Component} from 'react';
import {View,Text,TextInput,Picker} from 'react-native';
import {Button, Card, CardSection,Spinner} from '../ortak';
import {studentChange,studentUpdate,studentDelete} from '../actions';
import {connect} from 'react-redux';
class StudentUpdate extends Component{
  state={isim:'',soyisim:'',ogrencinumara:'',sube:''};
  componentDidMount(){
    const{isim,soyisim,ogrencinumara,sube}=this.props.student;
    this.setState({isim,soyisim,ogrencinumara,sube});
  }
  clickUpdate(){
    const {isim,soyisim,ogrencinumara,sube}=this.state
    this.props.studentUpdate({isim,soyisim,ogrencinumara,sube,uid:this.props.student.uid})

  }
  clickDelete(){
    this.props.studentDelete({uid:this.props.student.uid})
  }
  renderButton(){
    if(!this.props.loadingUpdate){
        return <Button onPress={this.clickUpdate.bind(this)}> Güncelle </Button>;
    }
      return <Spinner size='small' />;

  }
  renderDeleteButton(){
    if(!this.props.loadingDelete){
        return <Button onPress={this.clickDelete.bind(this)}> Sil </Button>;
    }
      return <Spinner size='small' />;

  }
    render(){
      console.log('data',this.props.student)
      const {inputStyle}=styles
        return(
          <View>
              <CardSection>
                  <TextInput
                    placeholder="İsim"
                    style={inputStyle}
                    value={this.state.isim}
                    onChangeText={isim=>this.setState({isim})}
                  />
              </CardSection>
              <CardSection>
                  <TextInput
                    placeholder="Soyisim"
                    style={inputStyle}
                    value={this.state.soyisim}
                    onChangeText={soyisim=>this.setState({soyisim})}
                  />
              </CardSection>
              <CardSection>
                  <TextInput
                    placeholder="Öğrenci Numarsı"
                    style={inputStyle}
                    value={this.state.ogrencinumara}
                    onChangeText={ogrencinumara=>this.setState({ogrencinumara})}
                  />
              </CardSection>
              <CardSection>
                <Text> Şube </Text>
                  <Picker
                    style={{flex:1}}
                    selectedValue={this.state.sube}
                    onValueChange={sube=>this.setState({sube})}
                  >
                  <Picker.Item label="A Sube" value="asube" />
                  <Picker.Item label="B Sube" value="bsube" />
                  <Picker.Item label="C Sube" value="csube" />
                  <Picker.Item label="D Sube" value="dsube" />

                  </Picker>
              </CardSection>

              <CardSection>
                  {this.renderButton()}
              </CardSection>
              <CardSection>
                  {this.renderDeleteButton()}
              </CardSection>
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
const mapToStateProps=({studentUpdateResponse})=>{
  const {loadingUpdate,loadingDelete}=studentUpdateResponse
  return {loadingUpdate};
}
export default connect(mapToStateProps,{studentChange,studentUpdate,studentDelete}) (StudentUpdate);
