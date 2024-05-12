import * as Yup from "yup";

export const SignInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
});

export const SignUpSchema = Yup.object().shape({
    userName: Yup.string().required("User name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
        .required("Please enter your password")
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        ),
    confirmPassword: Yup.string()
        .required("Please confirm your password")
        .oneOf([Yup.ref('password')], "Passwords don't match."),
    profession: Yup.object().shape({
        value: Yup.string().required("Profession is required"),
        label: Yup.string().required("Profession is required")
    }),
    interests: Yup.array()
        .min(1, 'Select at least one interest')
        .of(Yup.object().shape({
            value: Yup.string(),
            label: Yup.string()
        })),
});
