import axios from 'axios';

export const runAudit = (contractCode) => {
  return axios.post('/api/audit/run', { contractCode });
};
