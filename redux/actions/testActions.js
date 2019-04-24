import { TEST } from './types';

export const testAction = (test) => {
    return {
      type: TEST,
      payload: test
    }
}
