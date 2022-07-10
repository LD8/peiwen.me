import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { prism } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import styled from 'styled-components'
import ExternalLink from './ExternalLink'
import StyledDiv from './StyledDiv'

const lineNumberStyle: React.CSSProperties = {
  borderRight: '1px solid silver',
  marginRight: '10px',
  paddingRight: '10px',
  width: '20px',
}
const customStyle: React.CSSProperties = {
  fontSize: '0.8rem',
  backgroundColor: 'transparent',
  padding: '8px',
  whiteSpace: 'pre-wrap',
}

const Markdown: React.FC<{ data: string }> = ({ data }) => {
  return (
    <StyledMarkdown
      children={data}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SDivPreCode isActive>
              <SyntaxHighlighter
                style={prism as any}
                language={match[1]}
                showLineNumbers
                wrapLines
                wrapLongLines
                PreTag='div'
                lineNumberStyle={lineNumberStyle}
                customStyle={customStyle}
                {...props}
              >
                {/* {String(children).replace(/(\n$)|(\s+)/, '')} */}
                {String(children)}
              </SyntaxHighlighter>
            </SDivPreCode>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        },
        a({ children, href, node }) {
          // console.log({ node })
          return <ExternalLink href={href}>{children}</ExternalLink>
        },
      }}
    />
  )
}

export default Markdown

const StyledMarkdown = styled(ReactMarkdown)`
  line-height: 1.5rem;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1rem 0;
  }
  img {
    margin: 1rem 0;
    border-radius: 8px;
    box-shadow: 0 0 8px grey;
    width: 100%;
  }
  blockquote {
    padding: 1rem 2rem;
    margin: 2rem 1rem;
    border-left: 5px solid var(--airy);
    border-radius: 10px;
    position: relative;
  }
  p {
    /* margin: 0 0 1rem 0; */
  }
  code {
    white-space: break-spaces;
    word-break: break-word;
    padding: 2px 6px;
    border-radius: 6px;
    font-family: Courier, monospace;
    color: var(--airy-dark);
    background-color: var(--bgc-code-alt);
  }
  pre {
    border-radius: 10px;
    .token {
      background: transparent !important;
    }
    code {
      background: transparent;
      border-radius: unset;
      padding: unset;
    }
  }
  a {
    /* color: var(--airy-vivid); */
    text-decoration: underline;
    text-underline-offset: 1px;
  }
  ul,
  ol {
    display: block;
    list-style-type: custom-counter;
    padding: 0 12px;
    li {
      margin: 0 10px 10px 10px;
    }
  }
`
const SDivPreCode = styled(StyledDiv)`
  width: 100%;
  height: unset;
  margin: 0;
  border-radius: 12px;
  background-color: var(--bgc-code);
`
