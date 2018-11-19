// @flow

import { apiSuccess, apiPending, apiError, apiStart, apiDone } from './actions';

export default (dispatch: Function, action: Object) => ({
  success(data: Object): Object {
    dispatch(apiDone());
    dispatch(apiSuccess(action.payload.next.SUCCESS, data));
    return data;
  },

  notify(data: Object): Object {
    (action.payload.success || [])
      .forEach(callback => dispatch(callback(data)));
    return data;
  },

  start(): void {
    dispatch(apiStart());
    dispatch(apiPending(action.payload.next.PENDING));
  },

  error(error: Object): Object {
    dispatch(apiDone(error));
    dispatch(apiError(action.payload.next.ERROR, error));
    return error;
  },
});
