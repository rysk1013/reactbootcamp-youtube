import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Logo } from "../../components/Logo";

// export defaultしているので、import側でuseStylesと命名します。
// 命名はなんでも構いませんが、一貫して全て同じ名前にすることで、カスタム用のCSSを使用していることを明示します。
import useStyles from "./style";

export const DashboardHeader = () => {
  // 一度、useStylesを実行して、CSSを生成します。
  const styles = useStyles();

  return (
    <AppBar elevation={0} color="inherit">
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        {/*
          "useStyles"の値は、CSSモジュールと全く同じような使い方で、使用することができます。
        */}
        <div className={styles.logo}>
          <Logo />
        </div>
      </Toolbar>
    </AppBar>
  );
};
