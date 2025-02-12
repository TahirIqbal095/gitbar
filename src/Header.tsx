import React from "react";
import { Input } from "./components/ui/input";
import { IoSend } from "react-icons/io5";
import getStats from "./apis/getStats";

export function GitHubStats() {
    const [username, setUsername] = React.useState<string>("");
    const profile = getStats(username);

    return (
        <header className="space-y-6">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-zinc-800 via-zinc-500 to-zinc-700 max-w-[50%] mx-auto bg-clip-text text-transparent">
                <span>Hi there,</span> <br /> Get Detailed Insights on Any
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-600 bg-clip-text text-transparent">
                    GitHub Profile
                </span>
            </h1>

            <div className="relative max-w-[50%] mx-auto">
                <Input
                    type="text"
                    placeholder="Enter your Github Username"
                    className="w-full bg-zinc-50"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-600 rounded-full p-2">
                    <IoSend className="w-6 h-6 text-white" />
                </button>
            </div>
        </header>
    );
}
