import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../services/firebase-config";
import "./Login.scss";

const Login = () => {
  app();

  const handleLogin = (): void => {
    (async () => {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      try {
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        console.log(token, user, result);
      } catch (error) {
        const errorCode = error.code;
        const errorMsg = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log({ ...error.customData });
      }
    })();
  };

  return (
    <main className="container">
      <div className="container login">
        <img className="login__logo" src="wallet.png" alt="wallet" />
        <h1>Shopping List</h1>
        <button onClick={handleLogin}>Login with Google</button>
      </div>
    </main>
  );
};

export default Login;
