import React from 'react'
import Markdown from 'react-markdown'
import Typography from "@mui/material/Typography";

const StyledMarkdownText = ({children, variant, id, style}) => {
    return (
        <Typography
            variant={variant}
            id={id}
            style={{
                ...style,
            }}
        >
            <Markdown
                components={{
                    p: ({...props}) => <span {...props} />
                }}
            >
                {children}
            </Markdown>
        </Typography>
    )
}
export default StyledMarkdownText