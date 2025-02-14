import React, { useEffect } from "react";
import { Input } from "./components/ui/input";
import { IoSend } from "react-icons/io5";
import getStats from "./apis/getStats";
import { Profile } from "./Profile";
import { useQuery } from "@tanstack/react-query";
import MyLoader from "./Loading";
import { Button } from "./components/ui/button";

export function GitHubStats() {
    const [username, setUsername] = React.useState<string>("");
    const [debouncedUsername, setDebouncedUsername] =
        React.useState<string>("");

    // debounce the input
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedUsername(username);
        }, 500);

        return () => clearTimeout(handler);
    }, [username]);

    const { data, refetch, isLoading } = useQuery({
        queryKey: ["stats", debouncedUsername],
        queryFn: () => getStats(debouncedUsername),
        enabled: false,
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setDebouncedUsername(username);
        refetch();
    };

    return (
        <>
            <header className="space-y-6">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-zinc-800 via-zinc-500 to-zinc-700 max-w-[50%] mx-auto bg-clip-text text-transparent">
                    <span>Hi there,</span> <br /> Get Detailed Insights on Any
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-600 bg-clip-text text-transparent">
                        GitHub Profile
                    </span>
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="relative max-w-[50%] mx-auto"
                >
                    <Input
                        type="text"
                        placeholder="Enter your Github Username"
                        className="w-full bg-zinc-50"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Button
                        type="submit"
                        variant={"gradient"}
                        disabled={!username.trim()}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2"
                    >
                        <IoSend className="w-6 h-6 text-white" />
                    </Button>
                </form>
            </header>

            <main className="mt-6 max-w-[50%] mx-auto">
                {isLoading ? <MyLoader /> : data && <Profile data={data} />}
            </main>
        </>
    );
}
