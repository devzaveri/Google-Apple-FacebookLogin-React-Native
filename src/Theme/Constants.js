import { Dimensions } from "react-native";

import { name as appName } from "../../app.json";

var { EventEmitter } = require("fbemitter");
import I18n from "react-native-i18n";


export const setUserData = (UserData) => {
  let headers = APIConfig.headers;
  if (UserData && UserData.token) {
    debugLog("User Data :==> \n" + JSON.stringify(UserData));
    headers.Authorization = UserData.token;
    commonConstant.appUser = UserData.userDetail;
  }
  axiosDefaults.headers = headers;
};

export const commonConstant = {
  cameraRemoteEnable: false,
  /// Screen Width And Height
  appName: appName,
  scrWidth: Dimensions.get("screen").width,
  scrHeight: Dimensions.get("screen").height,
  aws3URLPath: "https://d2bec4ydnvv57h.cloudfront.net/",

  /// Other Misc Constants
  emitter: new EventEmitter(),
  timeFormat: "YYYY-MM-DD HH:mm:ss",
  appUser: null,
  token: null,

  //scoket
  socketConnect: null,
  socketIO: null,

  // // Fire Event Key
  loginEvent: "loginEvent",
  logoutEvent: "logoutEvent",
  english: "en",

  Spanish: "es",
  currentLanguage: "",
  isLanguageChanging: false,
  chatListArray: [],
  chatListData: [],
  appointmentData: [],
};

export const asyncStorageKeys = {
  UserData: "UserData",
  UserToken: "UserToken",
  LoginDetails: "LoginDetails",
  languageCode: "languageCode",
};

export const eventListenerKeys = {
  Login: "Login",
  Logout: "Logout",
  ChatMessageReceive: "ChatMessageReceive",
  CallDisconnect: "CallDisconnect",
  CallDisconnectEvent: "CallDisconnectEvent",
  CallSettingsEvent: "CallSettingsEvent",
  CallSettings: "CallSettings",
  MessageUnread: "MessageUnread",
  RefreshHome: "refreshHome",
  HomeScreenOpen: "HomeScreenOpen",
  OpenHomeDataApi: "OpenHomeDataApi",
  MessageChatCount: "MessageChatCount",
};

export const API = {
  LoginApi: "/doctor/login",
  SignInApi: "/user/create",
  ForgotPasswordApi: "/forgot-password/send-otp",
  VerifyPasswordApi: "/forgot-password/verify-otp",
  ChangePasswordApi: "/forgot-password/forgot-change",
  ProfileChangePassword: "/change-password",
  appointmentOpened: "/doctor/appointment/opened",
  appointmentFinished: "/doctor/appointment/finished",
  appointmentUpcoming: "/doctor/appointment/upcoming",
  notificationsApi: "/notifications?page=",
  ascDescOrderApi: "/doctor/appointment/opened?",
  getClient: "/doctor/search-user-or-order",
  getReservation: "/appointment/",
  getUserBalance: "/doctor-wallet/balance",
  getUserTransaction: "/doctor-wallet/user-transaction",
  getOverView: "/doctor/overview",
  getReservationApi: "/appointment/",
  CreatePrescriptionApi: "/doctor/prescription/create",
  getAllSlots: "/time-slots",
  getDoctorTimeSlots: "/doctor-time-slot",
  AddAllTimeSlots: "/doctor-time-slot/add",
  editTimeSlots: "/doctor-time-slot/edit",
  getMessageCount: "/notifications/count",
  getNotificationCount: "/notifications/read",
  EditPrescriptionApi: "/doctor/prescription/detailed",
  MedicalReportApi: "/doctor/medical-report/create",
  GetMedicalReportApi: "/doctor/medical-report",
  UpdateMedicalReportApi: "/doctor/medical-report/update",
  UpdatePrescriptionApi: "/doctor/prescription/update",
  PrescriptionDetailsAPI: "/doctor/appointment-prescription-details",
  GetTimeSlotList: "/doctor/get-time-slot-list",
  getChatListDataApi: "/appointment/chat/message-list?",
  SendMessageApi: "/appointment/chat/send-message",
  ChangeMessageStatusApi: "/appointment/chat/change-status",
  PlayerIdToken: "/one-signal/add-token",
  PlayerIdTokenDelete: "/one-signal/delete-token",
  videoCall: "/video-call",
  topBanner: "/banner/top-banner",
  homeOpen: "/doctor/appointment/home-opened",
  deleteAccount: "/doctor/delete",
  deleteNotificationId: "/delete-notification/",
};

export const apiResponse = {
  success: 200,
  fail: 500,
};

export function errorHandle(response) {
  if (response && response.data && response.data.message) {
    showAlert(response.data.message);
  } else {
    showAlert("Please try again");
  }
}

export const localize = (localizeStr) => {
  return I18n.t(localizeStr);
};

export const awsConfig = {
  KeyPrefix: "",
  Bucket: "scotypets",
  Region: "us-west-2",
  AccessKey: "AKIAXXLZLVFFAH2HTTU3",
  SecretKey: "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",
  SuccessActionStatus: 201,
};

export default {
  //   colors,
  commonConstant,
  API,
  asyncStorageKeys,
  setUserData,
  eventListenerKeys,
  errorHandle,
  apiResponse,
  localize,
};
