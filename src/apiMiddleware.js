// @flow

import requester from './requester';
import createDispatcher from './createDispatcher';

type Action = {
  type: string;
  payload: {
    endpoint: string;
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    data?: Object;
    headers?: Object;
  }
}

/*
  A apiMiddleware support action callbacks and centralized all api success, error handling strategy
*/
export const apiMiddlewareFactory = (api: (any) => Promise<Object>): Function => (
  ({ dispatch }) => next => (action: Action) => {
    // handle all api calls
    if (action.type === 'API') {
      const dispatcher = createDispatcher(dispatch, action);
      dispatcher.start();

      const { endpoint, method, headers, data } = action.payload;
      api({ endpoint, method, headers, data })
        .then(dispatcher.success)
        .then(dispatcher.notify)
        .catch(dispatcher.error);
    }

    next(action);
  }
);

export default apiMiddlewareFactory(requester);
