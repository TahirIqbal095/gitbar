import { RepoCard } from "@/components/ui/RepoCard";
import { GitHubUser, Repo } from "@/types/types";
import { getRepos } from "@/apis/getStats";
import { useQuery } from "@tanstack/react-query";
import RepoSkeleton from "@/components/skeleton/Repo";
import { Card } from "@/components/ui/Card";

export function Profile(profile: GitHubUser) {
    const { data, isLoading } = useQuery({
        queryKey: ["repos", profile.login],
        queryFn: () => getRepos(profile.login),
    });

    return (
        <Card profile={profile}>
            <div>
                <h1 className="text-xl font-bold">
                    Repositories: {profile.public_repos}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {isLoading ? (
                        <RepoSkeleton times={4} />
                    ) : (
                        data &&
                        data
                            .slice(0, 4)
                            .map((r: Repo) => <RepoCard key={r.id} repo={r} />)
                    )}
                </div>
                {data && data.length > 4 && (
                    <div className="mt-4">
                        <a
                            href={profile.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-700 underline"
                        >
                            View All Repositories
                        </a>
                    </div>
                )}
            </div>
        </Card>
    );
}
