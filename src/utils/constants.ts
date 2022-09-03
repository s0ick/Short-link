export const SL_ACCESS_TOKEN = 'SL_ACCESS_TOKEN';
export const BASE_URL = 'http://79.143.31.216/';
export const URL_REG_EX = new RegExp('^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?');

export enum NotificationTypes {
  SUC = 'SUCCESS',
  ERR = 'ERROR'
}

export const LIMIT_SELECTOR_CONFIG = [
  {value: '10', label: '10'},
  {value: '20', label: '20'},
  {value: '40', label: '40'}
];

export const ORDER_SELECTOR_CONFIG = [
  {value: 'asc_short', label: 'Short link'},
  {value: 'asc_target', label: 'Original link'},
  {value: 'asc_counter', label: 'Number of transitions'}
];
