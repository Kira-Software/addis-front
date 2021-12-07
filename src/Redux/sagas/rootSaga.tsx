import { takeLatest } from "redux-saga/effects";
import employee, {
  DELETE_EMPLOYEE,
  EDIT_EMPLOYEE,
  GET_EMPLOYEE,
  POST_EMPLOYEE,
  SET_EMPLOYEE,
} from "../reducer/employee";
import {
  handleDeleteEmployee,
  handleEditEmployee,
  handleGetEmployee,
  handlePostEmployee,
} from "./handlers/employee";

export function* watcherSaga() {
  yield takeLatest(GET_EMPLOYEE, handleGetEmployee);
  yield takeLatest(POST_EMPLOYEE, handlePostEmployee);
  yield takeLatest(EDIT_EMPLOYEE, handleEditEmployee);
  yield takeLatest(DELETE_EMPLOYEE, handleDeleteEmployee);
}
