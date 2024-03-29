import { Outlet } from "react-router-dom";
import { DashboardHeader } from "../../templates/DashboardHeader";
import { Sidebar } from "../../templates/Sidebar";
import useStyles from "./style";

export const HomeLayout = () => {
  const styles = useStyles();
  return (

    // 一番上位の<div>に対して"root"スタイリングを指定
    // 今ままで`<div className={styles.flex}>`としていた要素は削除
    <div className={styles.root}>

      <DashboardHeader />

      {/*
        `<div className={styles.flex}>`としていた要素は削除
      */}
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
};
