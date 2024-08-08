// export const APP_ROOT = window.SRE_HAWKEYE_APP_ROOT; //process.env
// export const BASE_API_PATH = "/api/v1/";
// export const BASE_APP_API = window.SRE_HAWKEYE_ENV.REACT_APP_API_BASE_URL + BASE_API_PATH; //process.env
// export const IMAGE_ICONS_URL = APP_ROOT + "/images/icons/";
export const APP_ROOT = "//informationportal";
export const PORTAL_NAME = "Information Portal";
export const EST_TIMEZONE = "America/New_York";
export const TIME_OFFSET = 15;
export const supth = "th";
export const SUCCESS = "success";
export const ERROR = "error";
export const FAILURE = "failure";
export const UPDATE_BY = "User";
export const CREATED_BY = "User";
export const ADD_SUCCESS = "added Successfully.";
export const DELETE_SUCCESS = "deleted Successfully.";
export const UPDATE_SUCCESS = "updated Successfully.";
export const DATASOURCE_NAME_LENGTH = 100;
export const QUERY_NAME_LENGTH = 100;
export const APPLICATION_NAME_LENGTH = 100;
export const NAME_LENGTH = 100;
export const QUERY_LENGTH = 1000;
export const METRIC_LENGTH = 1000;
export const APP_NAME_200 = 200;
export const APP_NAME_1000 = 1000;
export const HTTP_END_POINT_LENGTH = 255;
export const DESCRIPTION_LENGTH = 500;
export const SAMPLING_INTERVAL_LENGTH = 2;
export const INGESTION = "Ingestion";
export const CORRELATION = "Correlation";
export const PASSWORD_LENGTH = 20;
export const MAX_LENGTH_400 = 400;
export const MAX_LENGTH_10 = 10;

export const DELETE_CONFIR_DIALOG_CONFIG = {
  TITLE: "Confirm Delete",
  CONTENT: "Are you sure you want to delete ?",
  OK_BTN_LABEL: "Yes",
  CANCEL_BTN_LABEL: "No",
};

export const APP_NAV_ROUTE = {
  ROOT: "root",
  HOME: "home",
  OPS: "ops",
};

export const TABS_LIST = [
  {
    label: "Address",
    value: "Address",
  },
  {
    label: "Educational Details",
    value: "Educational Details",
  },
];

export const getParent = (arr, childMenuUrl) => {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item.url === childMenuUrl)
      return item.parentTitle ? item.parentTitle : item.title; // found item
    if (item.submenu) {
      const prevSec = getParent(item.submenu, childMenuUrl);
      if (prevSec) return prevSec;
    }
  }
};

export const API_CONFIGURATION = {
  METRIC: {
    GET_METRIC_ALL: {
      API: "metrics",
    },
    INSERT_METRIC: {
      API: "metrics",
      PAYLOAD: {
        metricType: 0,
        metricName: "",
        metricDesc: "",
        createdBy: "",
        updatedBy: "",
      },
    },
    UPDATE_METRIC: {
      API: "metrics",
      PAYLOAD: {
        metricType: 0,
        metricName: "",
        metricDesc: "",
        createdBy: "",
        updatedBy: "",
        metricId: 0,
      },
    },
    DELETE_METRIC: {
      API: "metrics",
      PAYLOAD: { metricId: "" },
    },
    GET_METRIC_TYPE: {
      API: "metricsType",
    },
  },
};

export const REGEX = {
  ALPHANUMERIC_ONLY: /^[a-z\d\s]+$/i,
  ALPHANUMERIC_WITH_SPECIAL_CHARACTERS: /^[a-z\d\-_,&.\s]+$/i,
  ALPHANUMERIC_WITH_SPL_CHARS_WITHOUT_DOT: /^[a-z\d\-_,&]+$/i,
  ALPHANUMERIC_WITH_SPECIFIC_SPECIAL_CHARACTERS: /^[a-z\d\-_,&\s]+$/i,
  QUERY_VALIDATION: /^[A-Za-z\d\-_,&.()/*%" '\s]+$/i,
  NAME_VALIDATION: /^[A-Za-z\-_, & ]+$/i,
  DIGIT_ONLY: /^\d+$/,
  ALPHABETS_ONLY: /^[A-Za-z\. ]+$/i,
  ALPHABETS_WITH_SPECIAL_CHARACTERS: /^[A-Za-z\d- ]+$/i,
  ALPHANUMERIC_WITH_HYPHEN_ONLY: /^[a-z\d\- \s]+$/i,
  HTTP_END_POINT_VALIDATION: /^[A-Za-z\d\/:& %_*-.]+$/i,
  API_KEY_VALIDATION: /^[a-z\d\-._]+$/i,
  ACCOUNT_ID_VALIDATION: /^[\d\-.,]+$/i,
  ALPHANUMERIC_NAME_VALIDATION: /^[a-z\d\- _ &\s]+$/i,
  ALPHANUMERIC_WITHOUT_SPACE: /^[a-z\d\-_&]+$/i,
  ALPHANUMERIC_WITHOUT_SPACE_WITH_SPECIALCHAR: /^[A-Za-z\d\-_&+@#.]+$/i,
  PASSWORD_VALIDATION:
    /(?=[A-Za-z0-9@#$%^&+!=]+$)^((?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+!=])(?=.*[A-Z])).*$/,
  USERNAME_VALIDATION: /^[A-Za-z\d\-._]+$/i,
  ALPHABETS_ONLY_WITHOUT_DOT: /^[A-Za-z ]+$/i,
};
