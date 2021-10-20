// src/utils/Firebase/signout.tsを作成
// signoutのコード

import { fireAuth } from "./config";

export const signout = () => fireAuth.signOut();
