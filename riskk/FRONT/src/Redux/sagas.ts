import { all } from 'redux-saga/effects';
import authSaga from './auth/saga';
import UserSaga from './user/saga';
import AnswerSaga from './answer/saga';
import CategorieSaga from './categorie/saga';
import CertificateSaga from './certificate/saga';
import ParticipationSaga from './participation/saga';
import CourseSaga from './course/saga';
import EmailConfirmationSaga from './emailconfirmation/saga';
import FeedbackSaga from './feedback/saga';
import FavoriteSaga from './favorite/saga';
import PaymentMethodeSaga from './paymentmethode/saga';
import ResponsedetailsSaga from './responsedetails/saga';
import InscriptionSaga from './inscription/saga';
import InvoiceSaga from './invoice/saga';
import LevelSaga from './level/saga';
import QuestionSaga from './question/saga';
import PaymentSaga from './payment/saga';
import RoleSaga from './role/saga';
import TestSaga from './test/saga';
import ResponseSaga from './response/saga';
import SectionSaga from './section/saga';
import SessionSaga from './session/saga';
import FileSaga from './File/saga';
import ReclaimSaga from './reclaim/saga';

export default function* rootSaga() {
    yield all([
        authSaga(),
        UserSaga(),
        AnswerSaga(),
        CategorieSaga(),
        CertificateSaga(),
        CourseSaga(),
        ReclaimSaga(),
        EmailConfirmationSaga(),
        FeedbackSaga(),
        FavoriteSaga(),
        InscriptionSaga(),
        InvoiceSaga(),
        LevelSaga(),
        ParticipationSaga(),
        PaymentSaga(),
        PaymentMethodeSaga(),
        QuestionSaga(),
        ResponseSaga(),
        ResponsedetailsSaga(),
        RoleSaga(),
        SectionSaga(),
        SessionSaga(),
        TestSaga(),
        FileSaga(),
    ]);
}
