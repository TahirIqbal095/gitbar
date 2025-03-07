import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { IoSend } from "react-icons/io5";
import getStats from "@/apis/getStats";
import { Profile } from "@/Profile";
import { useQuery } from "@tanstack/react-query";
import ProfileSkeleton from "@/components/skeleton/Profile";
import { Button } from "@/components/ui/button";
import { NotFound } from "@/404";

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

    const { data, refetch, isLoading, status } = useQuery({
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
            <header className="mt-6">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-zinc-800 via-zinc-500 to-zinc-700 w-full px-6 md:p-0 md:max-w-[50%] mx-auto bg-clip-text text-transparent">
                    <span>Hi there,</span> <br /> Get Detailed Insights on Any
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-600 bg-clip-text text-transparent">
                        GitHub Profile
                    </span>
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="relative w-fll px-6 md:px-0 md:max-w-[50%] mt-2 mx-auto"
                >
                    <Input
                        type="text"
                        placeholder="Enter any Github Username"
                        className="w-full bg-zinc-50"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Button
                        type="submit"
                        variant={"gradient"}
                        disabled={!username.trim()}
                        className="absolute top-1/2 right-8 md:right-2 transform -translate-y-1/2"
                    >
                        <IoSend className="w-6 h-6 text-white" />
                    </Button>
                </form>
            </header>

            <main className="mt-6 w-full px-6 md:px-0 md:max-w-[50%] flex-1 mx-auto">
                {isLoading ? (
                    <ProfileSkeleton />
                ) : status === "error" ? (
                    <NotFound />
                ) : (
                    data && <Profile {...data} />
                )}
            </main>
        </>
    );
}
