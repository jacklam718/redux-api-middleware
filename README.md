## Flexible Redux Api Middleware

A simple and flexible redux api middleware for handling api call and response.

### Installation
`yarn add flexible-redux-api-middleware`

### Setup
```javascript
import { applyMiddleware, createStore } from 'redux';

// api middleware with default api client
import { apiMiddleware } from 'flexible-redux-api-middleware'
const store = createStore(
  reducer,
  applyMiddleware(apiMiddleware),
);
```
Or you can create an api middleware with a custom api client
```javascript
import { applyMiddleware, createStore } from 'redux';

// api middleware with a custom api client
import { apiMiddlewareFactory } from 'flexible-redux-api-middleware'

const api = (options) => {
  return fetch(options)
}

const store = createStore(
  reducer,
  applyMiddleware(apiMiddlewareFactory(api)),
);
```

### Usage
#### Import
```javascript
import { asyncActionType } from 'flexible-redux-api-middleware';
```
#### Constant
```javascript
// create an async action type
const FETCH_USER_PROFILE = asyncActionType('FETCH_USER_PROFILE');
```

#### Action
```javascript
const fetchUserProfile = (id) => ({
  type: 'API',
  payload: {
    url: 'https://example.com/user/',
    method: 'GET',
    data: {
      id,
    },
    next: FETCH_USER_PROFILE,
  },
});
```

#### Reducer
```javascript
const initState = {
  error: null,
  pending: false,
};

const user = (state = initState, action) => {
  switch (action.type) {
    case FETCH_USER_PROFILE.PENDING: {
      return {
        pending: true,
      };
    }
    case FETCH_USER_PROFILE.SUCCESS: {
      return {
        ...action.payload,
        pending: false,
      };
    }
    case FETCH_USER_PROFILE.ERROR: {
      return {
        error: action.payload,
        pending: false,
      };
    }
    default:
      return state;
  }
};
```
