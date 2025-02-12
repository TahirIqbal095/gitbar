import { useSuspenseQuery } from "@tanstack/react-query";
import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: import.meta.env.VITE_GITHUB_TOKEN,
});

export default function getStats() {
    const data = useSuspenseQuery({
        queryKey: ["stats"],
        queryFn: async () => {
            await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate a slow network request
            return await octokit.request(
                "GET /repos/tahiriqbal095/travelapp/stats/commit_activity",
                {
                    owner: "OWNER",
                    repo: "REPO",
                    headers: {
                        "X-GitHub-Api-Version": "2022-11-28",
                    },
                }
            );
        },
    });
    return data;
}
