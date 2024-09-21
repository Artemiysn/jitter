import React from "react";

const PostDisplay = () => {
  return (
    <div className="flex flex-row border-b-gray-900 border-b">
      <div className="basis-10 p-2"> userblock</div>
      <article className="grow p-2">post text</article>
    </div>
  );
};

export default PostDisplay;
