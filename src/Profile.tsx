import { RepoCard } from "./RepoCard";
import { GitHubUser } from "./types/types";
import { getRepos } from "./apis/getStats";
import { useQuery } from "@tanstack/react-query";

export function Profile(profile: GitHubUser) {
    const { data, isLoading } = useQuery({
        queryKey: ["repos", profile.login],
        queryFn: () => getRepos(profile.login),
    });

    console.log(data);

    return (
        <div>
            <div className="flex items-center">
                <div className="h-44 min-w-44 object-cover">
                    <img
                        className="w-full h-full rounded-full"
                        src={profile.avatar_url}
                        alt="image"
                    />
                </div>

                <div className="ml-4">
                    <div className="flex items-center gap-2">
                        <svg
                            aria-hidden="true"
                            className="octicon octicon-mark-github"
                            height="24"
                            version="1.1"
                            viewBox="0 0 16 16"
                            width="24"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                            ></path>
                        </svg>
                        <h1 className="text-3xl font-bold">{profile.name}</h1>
                    </div>
                    <p className="ml-8 text-base text-gray-500">
                        Id : {profile.id}
                    </p>
                    {profile.bio && (
                        <p className="ml-8 text-base text-gray-500">
                            {profile.bio}
                        </p>
                    )}
                </div>
            </div>

            <div className="border border-gray-200 mt-4 p-4 rounded-md">
                <div className="flex justify-around border-b border-gray-200 pb-4">
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl font-bold">
                            {profile.followers}
                        </h1>
                        <p className="text-gray-500">Followers</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl font-bold">
                            {profile.following}
                        </h1>
                        <p className="text-gray-500">Following</p>
                    </div>
                </div>

                {isLoading ? (
                    <div>loading...</div>
                ) : (
                    data && <RepoCard repo={data} />
                )}
            </div>
        </div>
    );
}
