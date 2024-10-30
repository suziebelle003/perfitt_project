import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../service/firebase';
import { TUserInfo } from '../../types/sign';

export const createUser = async (uid: string, user: TUserInfo) => {
  try {
    const { password, year, month, day, ...rest } = user;
    await setDoc(doc(db, 'user', uid), {
      ...rest,
      birth: {
        year: year ? parseInt(year.toString().slice(0, -1)) : null,
        month: month ? parseInt(month.toString().slice(0, -1)) : null,
        day: day ? parseInt(day.toString().slice(0, -1)) : null,
      },
    });

    return 'success';
  } catch (error) {
    throw error;
  }
};
