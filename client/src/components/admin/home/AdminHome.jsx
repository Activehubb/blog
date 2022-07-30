import React from "react";
import SideNav from "../layout/sidebar/SideNav";
import { CrtPost, UpdPost, UpdProfile } from "../pages/Pages";

export const CreatePost = () => {
  return (
    <div>
      <CrtPost />
    </div>
  );
};

export const UpdatePost = () => {
  return (
    <div>
      <UpdPost />
    </div>
  );
};

export const UpdateProfile = () => {
  return (
    <div>
      <UpdProfile />
    </div>
  );
};
