import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import appeal from './appeal';
import errors from './errors';
import checklist from './checklist';
import files from './files';
import forward from './forward';
import payment from './payment';

export default combineReducers({
    auth: auth,
    user: user,
    appeal: appeal,
    errors: errors,
    checklist: checklist,
    files: files,
    forward: forward,
    payment: payment,
});
