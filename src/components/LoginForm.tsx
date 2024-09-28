import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from "../firebase";

export const LoginForm = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      {user ? (
        <>
          <UserInfo />
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </>
  );
};

export const SignInButton = () => {
  const signIntWithGoogle = () => {
    signInWithPopup(auth, provider);
  };
  return (
    <>
      <button onClick={signIntWithGoogle}>
        <p>ログイン</p>
      </button>
    </>
  );
};

export const SignOutButton = () => {
  return (
    <button onClick={() => auth.signOut()}>
      <p>ログアウト</p>
    </button>
  );
};

export const UserInfo = () => {
    const photoURL=auth.currentUser?.photoURL;
  return (
    <>
      <img src={photoURL||'' }alt="ユーザーのプロフィール画像" ></img>
    </>
  );
};
