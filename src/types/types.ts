export interface GitHubUser {
    login: string;
    name: string;
    bio: string;
    followers: number;
    following: number;
    id: number;
    node_id: string;
    gravatar_id: string;
    public_repos: number;
    url: string;
    avatar_url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    repos_url: string;
}

export interface Repo {
    id: number;
    name: string;
    full_name: string;
    owner: {
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        gravatar_id: string;
        url: string;
        html_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        type: string;
        site_admin: boolean;
    };
    private: boolean;
    html_url: string;
    description: string;
    forks_count: number;
    watchers_count: number;
    stargazers_count: number;
    language: string;
    visibility: string;
    url: string;
}
