import { Tooltip } from "@mui/material";
import React from "react";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineComment,
} from "react-icons/ai";

const LibraryItem = ({
  userName,
  title,
  profileURL,
  description,
  date,
  category,
}) => {
  const [isUpVote, setUpVote] = React.useState(null);

  return (
    <div class="flex items-center justify-start h-min my-3">
      <div class="rounded-xl border p-5 shadow-md w-9/12 bg-white">
        <div class="flex w-full items-center justify-between border-b pb-3">
          <div class="flex items-center space-x-3">
            <div
              class={`h-8 w-8 rounded-full bg-slate-400 bg-[url(${profileURL})]`}
            ></div>
            <div class="text-lg font-bold text-slate-700">{userName}</div>
          </div>
          <div class="flex items-center space-x-8">
            <button class="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">
              {category}
            </button>
            <div class="text-xs text-neutral-500">{date}</div>
          </div>
        </div>

        <div class="mt-4 mb-6">
          <div class="mb-3 text-xl font-bold text-left">{title}</div>
          <div class="text-sm text-neutral-600 text-left">{description}</div>
        </div>

        <div>
          <div class="flex items-center justify-between text-slate-500">
            <div class="flex space-x-4 md:space-x-8">
              <div class="flex cursor-pointer items-center transition hover:text-slate-600">
                <AiOutlineComment size={20} />
                <span>125</span>
              </div>
              <div className="flex gap-1 items-center">
                <div
                  onClick={() => setUpVote(true)}
                  class={`flex gap-1 cursor-pointer items-center transition hover:text-slate-600 ${
                    isUpVote
                      ? "rounded-full bg-orange-950 px-3 py-1"
                      : "rounded-full bg-orange-100 px-3 py-1"
                  }`}
                >
                  <AiFillCaretUp
                    size={20}
                    className={isUpVote && "text-white"}
                  />
                  <span className={isUpVote ? `text-white` : "text-black"}>
                    UpVote
                  </span>
                </div>
                <span>120</span>
                <Tooltip title="DownVote" placement="top">
                  <div
                    onClick={() => setUpVote(false)}
                    className="flex gap-1 items-center transition hover:text-slate-600 cursor-pointer px-2"
                  >
                    <AiFillCaretDown size={20} />
                  </div>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryItem;
