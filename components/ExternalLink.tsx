import { FCwc } from '../types'

const ExternalLink: FCwc<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
> = ({ children, ...props }) => (
  <a target='_blank' rel='noopener noreferrer' {...props}>
    {children}
  </a>
)

export default ExternalLink
