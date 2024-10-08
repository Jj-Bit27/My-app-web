import React from "react";
import { NavLink } from "react-router-dom";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";

function PostCard({ username, avatar, content, title }) {
  return (
    /* Card */
    <div className="h-auto w-[50%] max-h-[75%] rounded-lg bg-slate-300 ml-5 dark:bg-zinc-800">
      <h1 className="text-xl pl-5 pt-3 font-bold dark:text-white">{title}</h1>
      <p className="pl-5 pr-5 pt-3 pb-3 dark:text-white">{content}</p>
      <div className="flex flex-row">
        {/* Usuario */}
        <div className="justify-between">
          <div className="gap-x-2 pl-5 pb-4">
            <NavLink to="/profile/${username}" className="flex flex-row">
              <img
                src="https://nextui.org/avatars/avatar-1.png"
                alt=""
                className="w-[35px] h-[35px] rounded-xl"
              />
              <div className="gap-1 items-start justify-center content-center px-3">
                <h4 className="text-small font-semibold leading-none text-default-600 dark:text-white">
                  {username}
                </h4>
              </div>
            </NavLink>
          </div>
        </div>

        {/* Botones */}
        <div className="items-center pb-4 pl-[260px] flex flex-row">
          <NavLink to="/post/${id}/comments" className="cursor-pointer">
            <FaComment size="18" className="text-emerald-600" />
          </NavLink>
          <FaHeart size="18" className="ml-3 text-emerald-600 cursor-pointer" />
          <FaShare size="18" className="ml-3 text-emerald-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default PostCard;
