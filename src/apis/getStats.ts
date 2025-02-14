import { GitHubUser } from "@/types/types";
import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: import.meta.env.VITE_GITHUB_TOKEN,
});

export default async function getStats(username: string): Promise<GitHubUser> {
    const response = await octokit.request(`GET /users/${username}`, {
        username: import.meta.env.VITE_USERNAME,
        headers: {
            accept: "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
        },
    });
    return response.data;
}

export async function getRepos(username: string) {
    const response = await octokit.request(`GET /users/${username}/repos`, {
        username: import.meta.env.VITE_USERNAME,
        headers: {
            accept: "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
        },
    });
    return response.data;
}
