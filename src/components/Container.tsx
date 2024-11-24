import { ComponentPropsWithRef, ElementType, ReactNode } from "react";

type ContainerProps<T extends ElementType> = {
    as: T;
    children: ReactNode;
} & ComponentPropsWithRef<T>;

export default function Container<C extends ElementType>({
    as,
    children,
    ...props
}: Readonly<ContainerProps<C>>) {
    const Component = as;
    return (
        <Component className="container" {...props}>
            {children}
        </Component>
    );
}
