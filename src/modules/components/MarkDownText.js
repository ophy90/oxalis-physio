import React from 'react'
import ReactMarkdown from 'react-markdown'

const MarkdownText = ({ children, as = 'span' }) => {
    const Tag = as

    return (
        <ReactMarkdown
            components={{
                p: ({ node, ...props }) => <Tag {...props} />
            }}
        >
            {children}
        </ReactMarkdown>
    )
}

export default MarkdownText