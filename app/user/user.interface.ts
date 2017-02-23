export interface IUser {
    _id?: string;
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
    avatar: string;
}