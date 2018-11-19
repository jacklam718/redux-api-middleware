// @flow

import { API_START, API_DONE } from './constants';

export const apiStart = () => ({ type: API_START });
export const apiDone = (error?: Object) => ({ type: API_DONE, payload: error });
export const apiSuccess = (type: string, data: any) => ({ type, payload: data });
export const apiPending = (type: string) => ({ type });
export const apiError = (type: string, error?: Object) => ({ type, payload: error });
