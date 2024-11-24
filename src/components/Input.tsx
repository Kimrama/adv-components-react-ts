import { forwardRef, ComponentPropsWithoutRef } from "react";

type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<"input">;

export default forwardRef<HTMLInputElement, InputProps>(function Input(
    { label, id, ...props }: Readonly<InputProps>,
    ref
) {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} {...props} ref={ref} />
        </p>
    );
});
