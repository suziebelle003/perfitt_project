import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../service/firebase';
import { TUserInfo } from '../../types/sign';

export const upsertUser = async (uid: string, userInfo: TUserInfo) => {
  try {
    const { password, year, month, day, size, ...rest } = userInfo;

    const userData = {
      ...rest,
      birth: {
        year: typeof year === 'string' ? parseInt(year.slice(0, -1)) : year || 0, // 기본값 0 설정
        month: typeof month === 'string' ? parseInt(month.slice(0, -1)) : month || 1, // 기본값 1 설정
        day: typeof day === 'string' ? parseInt(day.slice(0, -1)) : day || 1, // 기본값 1 설정
      },
    };

    await setDoc(doc(db, 'user', uid), userData);

    return userData;
  } catch (error) {
    throw error;
  }
};
