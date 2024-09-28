import { signInWithPopup } from "firebase/auth";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase";

// Navigationコンポーネント
export const Navigation = () => {
  return (
    <div className="fixed-top">
      <Navbar expand="lg" className="bg-body-tertiary nav" style={{ height: 'auto' }}>
        <Container>
          <Navbar.Brand href="#" className="nav-title">
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              WaxMatch
            </Link>
          </Navbar.Brand>

          {/* トグルボタン */}
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          {/* オフキャンバスメニュー */}
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            className="custom-offcanvas" // カスタムスタイルを適用
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">メニュー</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {/* 小さい画面用のメニューリンクやログインフォーム */}
              <Nav className="flex-column w-100 d-lg-none">
                <LoginForm />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          {/* 大きい画面用の右寄り配置 */}
          <Nav className="ms-auto d-none d-lg-flex align-items-center">
            <UserNavigation />
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;

// LoginFormコンポーネント
export const LoginForm = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      {user ? (
        <div className="d-flex flex-column align-items-start w-100">
          <Link to="/favorites" className="mb-2">
            お気に入り
          </Link>
          <UserInfo />
          <SignOutButton />
        </div>
      ) : (
        <SignInButton />
      )}
    </>
  );
};

// UserNavigationコンポーネント（大きい画面用）
export const UserNavigation = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      {user ? (
        <div className="d-flex align-items-center me-3">
          <Link to="/favorites" className="nav-link">
            お気に入り
          </Link>
          <UserInfo />
          <SignOutButton />
        </div>
      ) : (
        <SignInButton />
      )}
    </>
  );
};

// SignInButtonコンポーネント
export const SignInButton = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
  };
  return (
    <Button variant="outline-primary" onClick={signInWithGoogle}>
      ログイン
    </Button>
  );
};

// SignOutButtonコンポーネント
export const SignOutButton = () => {
  return (
    <Button variant="outline-primary" onClick={() => auth.signOut()}>
      ログアウト
    </Button>
  );
};

// UserInfoコンポーネント
export const UserInfo = () => {
  const photoURL = auth.currentUser?.photoURL;
  return (
    <img
      src={photoURL || ""}
      alt="ユーザーのプロフィール画像"
      className="userphoto"
      style={{ width: '40px', height: '40px', borderRadius: '50%', marginLeft: '10px' }}
    />
  );
};
