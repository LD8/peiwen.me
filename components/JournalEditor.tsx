import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { useState, useMemo } from 'react'
import toast from 'react-hot-toast'
import styled from 'styled-components'
import empowerSetState from '../lib/empowerSetState'
import snatch from '../lib/snatch'
import { capitalize } from '../lib/utils'
import { StyledHeader } from '../pages/journals'
import Fieldset from './Fieldset'
import HeadInfo from './HeadInfo'
import Input from './Input'
import Loaders from './Loaders'
import StyledDiv from './StyledDiv'
import Textarea from './Textarea'

const JOURNAL_TYPES: IJournal['type_of'][] = ['article', 'note', 'diary']

type IInfo = Partial<IJournal>
const JournalEditor: React.FC<Partial<TSGetJournal>> = ({ journal }) => {
  const isCreating = journal === undefined
  const isUpdating = journal !== undefined

  const router = useRouter()
  const [posting, setPosting] = useState(false)

  const [markdown, setMarkdown] = useState<IInfo['body_markdown']>(
    journal?.body_markdown || '',
  )
  const [info, setI] = useState<IInfo>(() => ({
    type_of: journal?.type_of ?? 'article',
    title: journal?.title ?? '',
    slug: journal?.slug ?? '',
    summary: journal?.summary ?? '',
    tag_list: journal?.tag_list ?? [],
    alt_source: journal?.alt_source ?? '',
    created_at: journal?.created_at ?? dayjs().format('YYYY-MM-DDTHH:mm'),
    commentable: journal?.commentable ?? true,
    featured: journal?.featured ?? false,
    published: journal?.published ?? false,
  }))

  const setInfo = useMemo(() => empowerSetState(setI), [])

  return (
    <div style={{ width: '100%' }}>
      <HeadInfo title="Peiwen's writing a journal" />

      <StyledHeader>
        <h3 style={{ margin: 0 }}>
          Journal ✍🏻 anything you'd like to share / Note anything you'd rather
          keep than forget
        </h3>
      </StyledHeader>

      <StyledInfoDiv>
        <Fieldset gap='10px' legend='General' row>
          {JOURNAL_TYPES.map((typeName) => (
            <Input
              key={typeName}
              label={capitalize(typeName)}
              name='type_of'
              type='radio'
              value={typeName}
              checked={info.type_of === typeName}
              onChange={(e) =>
                setInfo({ type_of: e.target.value as IInfo['type_of'] })
              }
            />
          ))}

          <Input
            autoFocus={isCreating}
            label='Title'
            name='title'
            required
            divStyle={{ flex: '1 0 250px' }}
            style={{ width: '100%' }}
            placeholder='A concise one'
            value={info.title}
            onChange={(e) => {
              const title = e.target.value
              if (isUpdating) return setInfo({ title })
              setInfo({
                title,
                slug: title.trim().toLowerCase().split(' ').join('-'),
              })
            }}
          />
          {isCreating && (
            <Input
              label='Slug'
              name='slug'
              placeholder='Generated automatically from title'
              divStyle={{ flex: '1 0 300px' }}
              style={{ width: '100%' }}
              value={info.slug}
              onChange={(e) => {
                setInfo({ slug: e.target.value })
              }}
            />
          )}
        </Fieldset>

        <Fieldset legend='Markdown'>
          <Textarea
            name='summary'
            placeholder='Summary - one liner no more than 200 characters'
            required
            maxLength={300}
            minLength={5}
            value={info.summary}
            onChange={(e) => setInfo({ summary: e.target.value })}
          />
          <Textarea
            autoFocus={isUpdating}
            name='body_markdown'
            placeholder={`Journal ✍🏻 anything you'd like to share / Note anything you'd rather keep than forget`}
            required
            rows={10}
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Input
              name='tag_list'
              placeholder='Tags separated by commas'
              divStyle={{ flex: '1 0 400px' }}
              style={{ width: '100%' }}
              value={info.tag_list}
              onChange={(e) => setInfo({ tag_list: e.target.value.split(',') })}
            />
            <Input
              name='alt_source'
              placeholder='Alternative source link'
              divStyle={{ flex: '1 0 400px' }}
              style={{ width: '100%' }}
              value={info.alt_source}
              onChange={(e) => setInfo({ alt_source: e.target.value })}
            />
            <Input
              name='created_at'
              type='datetime-local'
              // step='1'
              placeholder='created at'
              value={info.created_at}
              onChange={(e) => setInfo({ created_at: e.target.value })}
            />
          </div>
        </Fieldset>

        <Fieldset legend='Status' row>
          <Input
            label='Commentable'
            name='commentable'
            type='checkbox'
            checked={info.commentable}
            onChange={() => {
              setInfo((prev) => ({ commentable: !prev.commentable }))
            }}
          />
          <Input
            label='Featured'
            name='featured'
            type='checkbox'
            checked={info.featured}
            disabled={!info.published}
            onChange={() => {
              setInfo((prev) => ({ featured: !prev.featured }))
            }}
          />
          <Input
            label={`Publish ${
              info.published
                ? '- share it with the world'
                : '(Save as a draft viewable only to yourself)'
            }`}
            name='published'
            type='checkbox'
            checked={info.published}
            onChange={() => {
              setInfo((prev) => ({
                published: !prev.published,
                featured: prev.published ? false : prev.featured,
              }))
            }}
          />
        </Fieldset>
      </StyledInfoDiv>

      <div style={{ paddingTop: '20px', width: '100%', textAlign: 'center' }}>
        <StyledDiv
          as='button'
          size='S'
          isActive={posting}
          style={{
            margin: '0',
            height: '40px',
            fontSize: 'var(--fontS)',
          }}
          onClick={async () => {
            const { title, summary } = info
            if (!title || !summary || !markdown)
              return toast('缺少必要信息啦~', { icon: '🫠' })

            const tag_list: string[] =
              info.tag_list
                ?.map((s) => s.trim().toLowerCase())
                .filter((s) => !!s) || []
            const data: IInfo = { ...info, tag_list, body_markdown: markdown }

            // DO_NEXT: validate markdown

            try {
              setPosting(true)
              const res = isCreating
                ? await snatch<TSPostJournal>('/journals', {
                    method: 'POST',
                    body: JSON.stringify(data),
                  })
                : await snatch<TSPostJournal>(`/journals/${journal.slug}`, {
                    method: 'PATCH',
                    body: JSON.stringify(data),
                  })

              if (res?.slug) {
                const path = `/journals/${res.slug}`
                // if (isProd) {
                //   const toRebuild = confirm('Rebuilding this page?')
                //   if (toRebuild) {
                //     await rebuildPage({ paths: ['/journals'] })
                //   }
                // }
                router.push(path)
              } else {
                toast.error(
                  `Something went wrong on ${
                    isCreating ? 'creating a' : 'updating the'
                  } journal`,
                )
              }
            } finally {
              setPosting(false)
            }
          }}
        >
          {posting ? <Loaders.Swinger /> : 'POST'}
        </StyledDiv>
      </div>
    </div>
  )
}

export default JournalEditor

const StyledInfoDiv = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  gap: 10px;
  flex-flow: column;
`
