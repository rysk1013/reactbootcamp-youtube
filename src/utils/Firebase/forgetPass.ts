// src/utils/Firebase/forgetPass.tsを作成
// forgetPassのコード

import { fireAuth } from "./config";

/**
 * パスワードリセット用のメールを送信する関数
 * @param email メールアドレス
 * @returns
 */
export const forgetPass = (email: string) =>
  fireAuth.sendPasswordResetEmail(email);
