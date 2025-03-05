import React from "react";
import { Repo } from "../../types/types";
import { FaCodeFork } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { FaEye } from "react-icons/fa";

export const RepoCard: React.FC<{ repo: Repo }> = ({ repo }) => {
    return (
        <div className="border border-gray-200 p-4 rounded-md space-y-8 mt-3.5">
            <div className="flex justify-between items-center">
                <h3 className="text-blue-700 font-medium text-sm">
                    {repo.name}
                </h3>
                <p className=" text-green-500 px-2 text-xs border border-green-500 rounded-full inline-block">
                    {repo.visibility}
                </p>
            </div>

            <div className="flex justify-between items-center text-xs text-gray-700">
                <p className="flex gap-1 items-center">
                    <span className="h-2 w-2 bg-yellow-600 rounded-full" />{" "}
                    <span>{repo.language}</span>
                </p>

                <p className="flex gap-1 items-center">
                    <FaCodeFork />
                    <span>{repo.forks_count}</span>
                </p>

                <p className="flex gap-1 items-center">
                    <CiStar />
                    <span>{repo.stargazers_count}</span>
                </p>

                <p className="flex gap-1 items-center">
                    <FaEye />
                    <span>{repo.watchers_count}</span>
                </p>
            </div>
        </div>
    );
};
