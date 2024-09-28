import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase";
  
  export type FavoriteItem = {
    id: string;
    manufacturer:string;
    name: string;
    description: string;
    price: string;
  };
  
  export const Favorite = () => {
    const [user] = useAuthState(auth); 
    const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  
    // Firestoreからお気に入りを取得する関数
    const fetchFavorites = async () => {
      if (!user) return; // ユーザーがいない場合は処理を中断
      try {
        console.log("現在のユーザーUID:", user.uid);

        // Firestoreのクエリを作成してユーザーのデータを取得
        const q = query(
          collection(db, "favorite"), 
          where("userId", "==", user.uid) 
        );
        const querySnapshot = await getDocs(q);
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as FavoriteItem[]; 
        console.log("取得したデータ:", items);
        setFavorites(items); 
      } catch (error) {
        console.error("お気に入りの取得に失敗しました:", error);
      }
    };
  
    // お気に入りを削除する関数
    const removeFavorite = async (id: string) => {
      try {
        await deleteDoc(doc(db, "favorite", id)); 
        fetchFavorites(); 
      } catch (error) {
        console.error("お気に入りの削除に失敗しました:", error);
      }
    };
  
    useEffect(() => {
      fetchFavorites(); 
    }, [user]);
  
    return (
      <>
        <div className="favorite-area">
        <h2>お気に入りリスト</h2>
        {favorites.length > 0 ? (
          favorites.map((item) => (
            <Card key={item.id} style={{ width: "100%", minHeight: "150px", margin: "10px 0" }}>
              <Card.Body>
                <Card.Title className='card-title'>{item.name}</Card.Title>
                <Card.Text>メーカー {item.manufacturer}</Card.Text>
                <Card.Text>{item.description}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                <p>税込 {item.price}</p>
                <Button variant="outline-danger" onClick={() => removeFavorite(item.id)}>
                  リストから削除
                </Button>
                </div>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>お気に入りはまだありません。</p>
        )}
      </div>
      <div className="returnbutton-area">
        <Link to="/">
        <button>戻る</button>
        </Link>
      </div>
      </>
    );
  };
  