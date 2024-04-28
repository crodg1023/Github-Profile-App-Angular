export interface User {
    id: number;
    avatar_url: string;
    name: string;
    location: string | null;
    bio: string | null;
    followers: number;
    following: number;
    repos_url: string;
}
