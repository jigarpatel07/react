import * as Yup from "yup";

export const SignInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
});

export const SignUpSchema = Yup.object().shape({
    userName: Yup.string().required("User name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    profession: Yup.string().required("Profession is required"),
    interests: Yup.array()
        .min(1, 'Select at least one interest')
        .of(Yup.string()),
});
