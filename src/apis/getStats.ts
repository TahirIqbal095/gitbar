import { useSuspenseQuery } from "@tanstack/react-query";
import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: import.meta.env.VITE_GITHUB_TOKEN,
});

export default function getStats(username: string) {
    const data = useSuspenseQuery({
        queryKey: ["stats"],
        queryFn: async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a slow network request
            return await octokit.request(`GET /users/${username}`, {
                username: import.meta.env.VITE_USERNAME,
                headers: {
                    accept: "application/vnd.github+json",
                    "X-GitHub-Api-Version": "2022-11-28",
                },
            });
        },
    });
    return data;
}
