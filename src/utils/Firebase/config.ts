import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCmzjC0fp8LA4q9ZxkZFi4jkFLtuq2YuOg",
  authDomain: "react-bootcamp-cb086.firebaseapp.com",
  projectId: "react-bootcamp-cb086",
  storageBucket: "react-bootcamp-cb086.appspot.com",
  messagingSenderId: "1091146603550",
  appId: "1:1091146603550:web:40195bde96f9d278f7220f"
};

// firebaseパッケージをAPI Keyで初期化
// Firebaseコンソールでさksウエイ他アプリとReactを紐づける処理
firebase.initializeApp(firebaseConfig);

// 認証用のfirebaseモジュール
export const fireAuth = firebase.auth();

// ストレージ用のfirebaseモジュール
export const storage = firebase.storage();

// 初期化済みのfirebaseパッケージを確実に使用するためのexport defaultでfirebaseパッケージをexport
export default firebase;
