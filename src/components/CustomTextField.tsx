import { Field } from "formik"
function CustomTextField({
    name,
    placeholder,
    multiline,
    type = "text"
}: {
    name: string
    placeholder: string
    multiline?: boolean
    type?: string
}) {

    return (
        <div className="flex flex-col gap-1">
            <Field
                name={name}
                fullWidth
                type={type}
                multiline={multiline}
                rows={multiline && 4}
                margin="normal"
                placeholder={placeholder}
                className="w-full bg-[#2c2c2c90] rounded-md py-2.5 pr-4 pl-14 placeholder:text-[#c2c2c250] caret-[#aeaeae] text-[#aeaeae] focus:outline-none"
            />
        </div>
    )
}

export default CustomTextField
