import {GetAnswers, GetAnswer, AddAnswer, UpdateAnswer, DeleteAnswer} from './answer';
export { GetAnswers, GetAnswer, AddAnswer, UpdateAnswer, DeleteAnswer};

import { forgotPassword, login, logout, signup } from './auth';
export { login, logout, signup, forgotPassword };

import { GetCategories, GetCategorie, AddCategorie, UpdateCategorie, DeleteCategorie} from './categorie'
export { GetCategories, GetCategorie, AddCategorie, UpdateCategorie, DeleteCategorie};

import { GetCertificates, GetCertificateById, AddCertificate, UpdateCertificate, DeleteCertificate} from './certificate'
export { GetCertificates, GetCertificateById, AddCertificate, UpdateCertificate, DeleteCertificate};

import { GetParticipations, AddParticipation, UpdateParticipation, DeleteParticipation} from './participation'
export { GetParticipations, AddParticipation, UpdateParticipation, DeleteParticipation};

import {  GetAllCourses,  GetCourseById, AddCourse, UpdateCourse, DeleteCourse  } from './course';
export {  GetAllCourses,  GetCourseById, AddCourse, UpdateCourse, DeleteCourse};

import { GetDetailsChapters, GetDetailsChapterById, AddDetailsChapter, UpdateDetailsChapter, DeleteDetailsChapter} from './detailschapter'
export { GetDetailsChapters, GetDetailsChapterById, AddDetailsChapter, UpdateDetailsChapter, DeleteDetailsChapter};

import { GetFeedbacks, GetFeedbackById, AddFeedback, UpdateFeedback, DeleteFeedback} from './feedback'
export { GetFeedbacks, GetFeedbackById, AddFeedback, UpdateFeedback, DeleteFeedback};

import { GetInscriptions, GetInscriptionById, AddInscription, UpdateInscription, DeleteInscription} from './inscription'
export { GetInscriptions, GetInscriptionById, AddInscription, UpdateInscription, DeleteInscription};

import { GetInvoices,  GetInvoiceById, AddInvoice, UpdateInvoice, DeleteInvoice} from './invoice'
export { GetInvoices,  GetInvoiceById, AddInvoice, UpdateInvoice, DeleteInvoice};

import {  GetLevels,GetLevel, AddLevel, UpdateLevel, DeleteLevel} from './level';
export { GetLevels,GetLevel, AddLevel, UpdateLevel, DeleteLevel};

import {GetPayments ,GetPaymentById, AddPayment, UpdatePayment, DeletePayment} from './payment';
export { GetPayments, GetPaymentById, AddPayment, UpdatePayment, DeletePayment};

import { GetQuestions ,GetQuestionById, AddQuestion, UpdateQuestion, DeleteQuestion} from './question'
export { GetQuestions ,GetQuestionById, AddQuestion, UpdateQuestion, DeleteQuestion};

import { GetResponses ,GetResponseById, AddResponse, UpdateResponse, DeleteResponse} from './response'
export { GetResponses ,GetResponseById, AddResponse, UpdateResponse, DeleteResponse};

import { GetResponseDetails ,GetResponseDetailsById, AddResponseDetails, UpdateResponseDetails, DeleteResponseDetails} from './responsedetails'
export { GetResponseDetails ,GetResponseDetailsById, AddResponseDetails, UpdateResponseDetails, DeleteResponseDetails};

import { GetRoles, GetRole, AddRole, UpdateRole, DeleteRole} from './role'
export { GetRoles, GetRole, AddRole, UpdateRole, DeleteRole};

import { GetAllTests,  GetTestById, AddTest, UpdateTest, DeleteTest} from './Test'
export { GetAllTests,  GetTestById, AddTest, UpdateTest, DeleteTest};

import { AddUser, UpdateUser, GetUserById, GetAllUsers, DeleteUser   } from './user';
export { AddUser, UpdateUser, GetUserById, GetAllUsers, DeleteUser  };

import { GetConfirmations,  GetConfirmationById, AddConfirmation, UpdateConfirmation, DeleteConfirmation} from './emailconfirmation';
export { GetConfirmations,  GetConfirmationById, AddConfirmation, UpdateConfirmation, DeleteConfirmation};

import { GetPaymentMethodes ,GetPaymentMethodeById, AddPaymentMethode, UpdatePaymentMethode, DeletePaymentMethode} from './paymentmethode'
export { GetPaymentMethodes ,GetPaymentMethodeById, AddPaymentMethode, UpdatePaymentMethode, DeletePaymentMethode};

import { AddReclaim, UpdateReclaim, GetReclaimById, GetAllReclaims, DeleteReclaim } from './reclaim';
export { AddReclaim, UpdateReclaim, GetReclaimById, GetAllReclaims, DeleteReclaim };
