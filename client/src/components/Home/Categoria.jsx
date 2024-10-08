import React from "react";
import PostCard from "./PostCard.jsx";

function Categoria({ text }) {
  return (
    <div className="py-[8%] px-[10%]">
      <h2 className="dark:text-white text-2xl">{text}</h2>
      <div className="h-[50%] w-full py-2 flex flex-row">
        <PostCard
          username="King"
          avatar={"../../assets/avatar.jpg"}
          title="Mi primer post"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique qui reprehenderit veritatis odit repudiandae tempora non optio, nam, voluptates obcaecati culpa cum. Eligendi laborum suscipit dolorem ea. Rerum, ipsam dolore!"
        />
        <PostCard
          username="KingGod"
          avatar={"../../assets/avatar.jpg"}
          title="Mi primer post"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique qui reprehenderit veritatis odit repudiandae tempora non optio, nam, voluptates obcaecati culpa cum. Eligendi laborum suscipit dolorem ea. Rerum, ipsam dolore!"
        />
      </div>
    </div>
  );
}

export default Categoria;
