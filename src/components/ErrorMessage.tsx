const ErrorMessage = ({ message }: { message: string | undefined | string[] }) => {
    return (
        <div>
            <p className="text-sm text-[#ac3030]">{message}</p>
        </div>
    );
};

export default ErrorMessage;
