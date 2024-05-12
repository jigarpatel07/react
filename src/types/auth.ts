export type SignInValue = {
    email: string;
    password: string;
};
export type SignUpValue = {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    gender: string;
    profession: {
        value: string;
        label: string
    };
    interests: {
        value: string;
        label: string
    }[]
};