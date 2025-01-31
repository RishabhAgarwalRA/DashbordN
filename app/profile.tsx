// profile.tsx
import React from "react";
import Layout from "./layout";

const Profile: React.FC = () => {
  return (
    <Layout>
      <h1>User Profile</h1>
      <div className="card">
        <h2>User Information</h2>
        <p>Profile settings can go here.</p>
      </div>
    </Layout>
  );
};

export default Profile;
