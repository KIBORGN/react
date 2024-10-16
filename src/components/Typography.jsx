import React from 'react'

export default function Typography({type, className, children}) {
    const renderTypography = () => {
        switch (type) {
            case 'h1':
                return <h1 class={className}>{children}</h1>
            case 'h2':
                return <h2 class={className}>{children}</h2>
            case 'h3':
                return <h3 class={className}>{children}</h3>
            case 'p':
                return <p class={className}>{children}</p>
            case 'h4':
                return <h4 class={className}>{children}</h4>
            case 'span':
                    return <span class={className}>{children}</span>
            default:
                return <p class={className}>{children}</p>
        }
    }

    return renderTypography()
}
