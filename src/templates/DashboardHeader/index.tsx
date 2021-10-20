// src/templates/DashboardHeader/index.tsx

import {
  AppBar,
  Avatar,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import { Logo } from "../../components/Logo";
import { SearchBar } from "./SearchBar";
import useStyles from "./style";
// codegenで生成したコードをimportします。
import { useUserByIdQuery } from "../../utils/graphql/generated";


export const DashboardHeader = () => {
  const styles = useStyles();

 //GraphQLの`Query`を発行して、Hasuraのエンドポイントにリクエストを飛ばし、返り値を取得するまでが、この3行に詰まっています。
  const { data } = useUserByIdQuery({
    variables: { id: "testid" },
  });

  return (

    <AppBar elevation={0} color="inherit">
      <Toolbar className={styles.between}>
        <div className={styles.flex}>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <div className={styles.logo}>
            <Logo />
          </div>
        </div>
        <SearchBar />
        <div className={styles.flex}>

          {/*
            データが取得されたら、`data`内に`Schema`と同じ名前のオブジェクトの中にデータが格納されます。
            データがないときは表示されません。
          */}
          <IconButton>
            <Typography>{data?.users_by_pk?.name}</Typography>
          </IconButton>
          <IconButton>
            <VideoCallIcon />
          </IconButton>
          <IconButton className={styles.profileIcon}>
            <Avatar />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};
