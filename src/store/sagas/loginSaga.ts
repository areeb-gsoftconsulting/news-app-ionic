import AsyncStorage from '@react-native-async-storage/async-storage';
import {call, put} from 'redux-saga/effects';
import * as authActions from 'app/store/slice/AuthSlice';

import * as loadingAction from 'app/store/slice/loadingSlice';
import * as navigationActions from '../actions/navigationActions';
import * as snackbarActions from 'app/store/slice/snackSlice';
import loginUser from 'app/services/loginUser';
import {requestAction} from 'app/models/types';

// Our worker Saga that logins the user
export default function* loginAsync(action: requestAction) {
  yield put(loadingAction.enableLoading({}));

  //how to call api
  let response = yield call(loginUser, action.data);

  // response = response;

  if (response && response.status == true) {
    AsyncStorage.setItem('@token', response.result.token);
    yield put(loadingAction.disableLoading({}));
    yield put(
      authActions.onLoginResponse({
        email: action.data.Email,
        token: response.result.token,
      }),
    );
    yield call(navigationActions.navigateToHome, '');
    let data = response.message;
    yield put(snackbarActions.enableSnackbar(data));
  } else if (response && response.status == false) {
    yield put(loadingAction.disableLoading({}));
    let data = response.message;
    yield put(snackbarActions.enableSnackbar(data));
  } else {
    yield put(loadingAction.disableLoading({}));
    // let data = "something went wrong";
    // yield put(snackbarActions.enableSnackbar(data));
  }
  // else {
  // yield put(loginActions.loginFailed());
  // yield put(loginActions.disableLoader({}));
  // alert('err');
  // }
}
