export interface IUser {
    id: number;
    name: {
        first: string;
        last: string;
    };
    email: string;
    location: {
        state: string;
        city: string;
    };
    date_joined: string;
    bio: string;
    avatar: string
}