import { Outlet } from "react-router-dom";

// DashboardHeaderをimport
import { DashboardHeader } from "../../templates/DashboardHeader";

export const HomeLayout = () => {
  return (
    <div>
      {/*
        DashboardHeaderコンポーネントを表示する
      */}
      <DashboardHeader />

      <Outlet />
    </div>
  );
};
