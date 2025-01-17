import { Layout, theme } from "antd";
import React from "react";
import UserProfile from "./components/UserProfile";
import UserCollection from "./components/UserCollection";

type Props = {};

const Profile = (props: Props) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <Layout
        style={{
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
          marginBottom: 24,
        }}
      >
        <UserProfile/>
      </Layout>{" "}
      <Layout
        style={{
          minHeight: 360,
         
          marginBottom: 24,
        }}
      >
        <UserCollection/>
      </Layout>{" "}
     
    </>
  );
};

export default Profile;
