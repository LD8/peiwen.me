import { useRouter } from 'next/router'
import React from 'react'
import ICONS from '../lib/icons'
import snatch from '../lib/snatch'
import hocIsLi from './hocIsLi'
import { StyledSpan } from './JournalDisplay'
import StyledDiv from './StyledDiv'

const Create: React.FC = () => {
  const router = useRouter()
  return (
    <div>
      <StyledDiv
        as='button'
        size='S'
        style={{
          display: 'block',
          margin: '0 auto',
          height: '30px',
          fontSize: 'var(--fontS)',
        }}
        onClick={() => router.push('/journals/create')}
      >
        create
      </StyledDiv>
    </div>
  )
}

type IPOp = { slug: string }

const Edit: React.FC<IPOp> = ({ slug }) => {
  const router = useRouter()
  return (
    <StyledSpan
      className='hov-blue'
      onClick={async (e) => {
        e.stopPropagation()
        router.push(`/journals/edit/${slug}`)
      }}
    >
      <ICONS.edit />
    </StyledSpan>
  )
}

const Delete: React.FC<IPOp & { afterDel?: (slug: string) => void }> = ({
  slug,
  afterDel,
}) => {
  return (
    <StyledSpan
      className='hov-red'
      onClick={async (e) => {
        e.stopPropagation()
        const confirmed = confirm(`Confirm to delete ${slug}`)
        if (confirmed) {
          const { slug: resSlug } = await snatch(`/journals/${slug}`, {
            method: 'DELETE',
          })
          if (resSlug) {
            afterDel?.(resSlug)
          }
        }
      }}
    >
      <ICONS.del />
    </StyledSpan>
  )
}

const JournalOps = {
  Create: hocIsLi(Create),
  Edit: hocIsLi(Edit),
  Delete: hocIsLi(Delete),
}
export default JournalOps
