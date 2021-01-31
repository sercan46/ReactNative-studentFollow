import _ from "lodash";
import React,{Component} from 'react';
import {View,Text,FlatList} from 'react-native';
import {connect} from 'react-redux';
import {studentsListData} from '../actions';
import ListItem from './ListItem';

class StudentsList extends Component{

    componentDidMount() {
      this.props.studentsListData();
    }

    renderRow({ item, index }) {
      console.log('item')
          return <ListItem ogrenci={item} />;
    }
    render() {
      console.log('this.props.studentsArray',this.props.studentsArray)
      return (
        <FlatList
        data={this.props.studentsArray}
        renderItem={this.renderRow}
        keyExtractor={(item, index) => index.toString()}
        />
      );
    }

}
const mapStateToProps = ({ studentDataResponese }) => {
  // studentDataResponse
    console.log('studentDataResponse',studentDataResponese)
  const studentsArray = _.map(studentDataResponese, (val, uid) => {
  return { ...val, uid }; // { isim: ayse, soyisim: soyu, sube: 1c, uid: Kq9 }
  });
  return { studentsArray };
};
export default connect(mapStateToProps, {studentsListData}) (StudentsList);
