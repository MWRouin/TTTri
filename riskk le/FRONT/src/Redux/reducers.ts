import { combineReducers } from 'redux';
import themeConfigSlice from '../store/themeConfigSlice';
import Auth from './auth/reducers';
import Chapter from './participation/reducers';
import User from './user/reducers';
import Answer from './answer/reducers copy';
import Categorie from './categorie/reducers';
import Course from './course/reducers';

import EmailConfirmation from './emailconfirmation/reducers';
import Feedback from './feedback/reducers';
import Favorite from './favorite/reducers';
import Inscription from './inscription/reducers';
import Invoice from './invoice/reducers';
import Level from './level/reducers';
import Payment from './payment/reducers';
import PaymentMethode from './paymentmethode/reducers';
import Question from './question/reducers';
import Response from './response/reducers';
import Responsedetails from './responsedetails/reducers';
import Role from './role/reducers';
import Test from './test/reducers';
import Participation from './participation/reducers';
import Section from './section/reducers';
import Session from './session/reducers';
import File from './File/reducers';
import Reclaim from './reclaim/reducers';

export default combineReducers({
    themeConfig: themeConfigSlice,
    Answer,
    Auth,
    Categorie,
    Chapter,
    Course,
    EmailConfirmation,
    Feedback,
    Favorite,
    Invoice,
    Level,
    Participation,
    Payment,
    PaymentMethode,
    Question,
    Response,
    Reclaim,
    Responsedetails,
    Role,
    Section,
    Session,
    Test,
    User,
    File,
});
