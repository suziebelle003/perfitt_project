import { doc, setDoc } from "firebase/firestore";
import { db } from "../../service/firebase";
import { TUserInfo } from "../../types/sign";

export const createUser = async (uid: string, user: TUserInfo) => {
  try {
    const { password, birthYear, birthMonth, birthDay, ...rest } = user;
    await setDoc(doc(db, 'user', uid), {
      ...rest,
      birth: {
        year: parseInt(birthYear.slice(0, -1)),
        month: parseInt(birthMonth.slice(0, -1)),
        day: parseInt(birthDay.slice(0, -1)),
      },
    });

    return 'success';
  } catch (error) {
    throw error;
  }
};