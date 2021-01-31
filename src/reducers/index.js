import {combineReducers} from 'redux';
import KimlikdogrulamaReducers from './KimlikdogrulamaReducers';
import  StudentsListReducers from './StudentsCreateReducers';
import StudentDataReducers from './StudentDataReducers';
import StudentUpdateReducers from './StudentUpdateReducers';

export default combineReducers({
  kimlikdogrulamaResponse:KimlikdogrulamaReducers,
  studentsListResponse:StudentsListReducers,
  studentDataResponese:StudentDataReducers,
  studentUpdateResponse:StudentUpdateReducers
})
