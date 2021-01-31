import React, { Component } from 'react';
import { Router, Scene ,Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import StudentsList from './components/StudentsList';
import StudentCreate from './components/StudentCreate';
import StudentUpdate from './components/StudentUpdate';

class RouterComponent extends Component {
  render() {
    return (
      <Router sceneStyle={{marginTop:65}}>
      <Scene key="root" >
        <Scene key="loginPage" component={LoginForm} title="Giriş Sayfası" />
      </Scene>
          <Scene key="main">

              <Scene
                onRight={()=>{Actions.studentCreate()}}
                rightTitle="Yeni Ögrenci"
                key="studentsList"
                component={StudentsList}
                title="Öğrenci Listesi"
              />
              <Scene
                  key="studentCreate"
                  component={StudentCreate}
                  title="Öğrenci ekle"
              />
              <Scene
                  key="studentUpdate"
                  component={StudentUpdate}
                  title="Öğrenci Güncelle"
              />
          </Scene>


      </Router>
    );
  }
}

export default RouterComponent;
