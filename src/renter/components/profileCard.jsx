import React from "react";
import { NavLink } from "react-router-dom";
const ProfileCard = ({name, email,phone}) => {
  
    
      const firstLetter = name.charAt(0).toUpperCase();
  return (
    <div className="max-w-lg mx-auto bg-[#FFFBF4] border border-[#11120D88] rounded-2xl shadow-md p-6 flex flex-row max-lg:items-center gap-6 lg:flex-row">
      <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#D8CFBC] flex items-center justify-center text-[#11120D] text-3xl font-bold">
        {firstLetter}
      </div>

      {/* Info */}
      <div className="flex flex-col text-left">
        <h2 className="text-xl font-bold text-[#11120D]">{name}</h2>
        <div className="flex-row">
          <p className="text-[#565449]">{email}</p>
          <p className="text-[#565449]">{phone}</p>
        </div>

        {/* Actions */}
        <div className="mt-4 flex justify-center sm:justify-start gap-3">
          <button className="bg-[#D8CFBC] text-[#11120D] px-2 rounded-lg border border-[#11120D88] hover:opacity-80 transition">
            Edit
          </button>
          <button className="bg-transparent text-[#565449] px-2 rounded-lg border border-[#11120D88] hover:bg-[#D8CFBC] hover:text-[#11120D] transition">
            Change Password
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
