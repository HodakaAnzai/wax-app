import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "./firebase";

export const addFavorite = async (
  name: string,
  manufacturer:string,
  description: string,
  price: string
) => {
  const user = auth.currentUser;
  if (!user) {
    alert("ログインが必要です");
    return;
  }
  try {
    alert("お気に入りリストに追加しました。");
     await addDoc(collection(db, "favorite"), {
      userId: user.uid,
      name,
      manufacturer,
      description,
      price,
    });
  } catch (error) {
    console.error("お気に入りの追加に失敗しました:", error);
  }
};
