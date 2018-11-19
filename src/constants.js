// @flow

// async action types
export const asyncActionType = (type: string): Object => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`,
});

export const API_START: string = 'API_START';
export const API_DONE: string = 'API_DONE';
