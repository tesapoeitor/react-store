import React, { ReactNode } from "react";

interface Props {
    children: ReactNode
}

const Layout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    )
}

export { Layout }