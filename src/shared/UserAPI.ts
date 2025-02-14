import { FormattedUser } from 'src/backend/controllers/utils/interfaces';
import Collection from './constants/Collections';
import { request } from './utils/request';

export const getUserProfile = async (userId: string): Promise<FormattedUser> => {
  const { data: result } = await request({
    method: 'GET',
    url: `${Collection.USERS}/${userId}`,
  });
  return result;
};
