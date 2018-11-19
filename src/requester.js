// @flow

import axios from 'axios';

export default async (options: {
  url: string;
  method: string;
  data?: Object;
  headers?: Object;
}): Promise<Object> => {
  // handle api response
  try {
    return await (await axios(options)).data;
  } catch (error) {
    throw error;
  }
};
