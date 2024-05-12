import { Field } from "formik"
import classNames from 'classnames'

function CustomTextField({
    name,
    placeholder,
    multiline,
    type = "text",
    isDisabled
}: {
    name: string
    placeholder: string
    multiline?: boolean
    type?: string
    isDisabled?: boolean
}) {

    return (
        <div className="flex flex-col gap-1">
            <Field
                name={name}
                fullWidth
                type={type}
                as={multiline && "textarea"}
                multiline={multiline}
                rows={multiline ? 4 : undefined}
                margin="normal"
                placeholder={placeholder}
                disabled={isDisabled}
                className={classNames("w-full  rounded-md py-2.5 pr-4 pl-14 placeholder:text-[#c2c2c250] caret-[#aeaeae] text-[#aeaeae] focus:outline-none}", isDisabled ? 'bg-[#6e6e6e] cursor-not-allowed' : "bg-[#2c2c2c90]")}
            />
        </div>
    )
}

export default CustomTextField
