import { toast } from "react-toastify";

export const ToastNotification = ({
    status,
    message,
}: {
    status: "success" | "error" | "info";
    message: string;
}) => {
    toast[status](message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
};
