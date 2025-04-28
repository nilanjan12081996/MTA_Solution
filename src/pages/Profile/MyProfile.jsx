import React from "react";

const MyProfile = () => {
  return (
    <div>
      <div className="mx-auto max-w-2xl mt-16 mb-20 px-2">
        <h2 className="text-4xl font-bold mb-6">My Profile</h2>
        <div className="mb-2">
          <p className="text-lg font-medium text-[#8d8d8d] mb-0">Name:</p>
          <span className="text-black text-lg font-medium">Sourav Sarkar</span>
        </div>
        <div className="mb-2">
          <p className="text-lg font-medium text-[#8d8d8d] mb-0">Email:</p>
          <span className="text-black text-lg font-medium">
            me.sourav81@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
