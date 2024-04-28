export interface Repository {
    id: number;
    name: string;
    description: string;
    forks: number;
    stargazers_count: number;
    license: {
        key: string | null;
        name: string | null;
        spdx_id: string | null;
    };
    html_url: string;
    updated_at: string;
}
