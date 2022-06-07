/**
 * Journal Record in DB
 */
type IJournal = {
  type_of: 'article' | 'note' | 'diary' // input: radio group
  title: string // input: text
  slug: string // input: text

  body_markdown: string // input: textarea ?? rich like github
  summary: string // input: textarea
  tag_list: string[] // input: text -> with comma separated
  created_at: string // input: datetime -> "2022-05-04T11:40" format: "YYYY-MM-DDTHH:mm"
  alt_source: string // input: text

  commentable: boolean // input: checkbox
  featured: boolean // input: checkbox
  published: boolean // input: checkbox

  updated_at: string
}
type IJournalExtra = {
  slug: string
  comment_count: number
  comments: IComment[]
  view_count: number
  like_count: number
}
type IComment = {
  commenter: string
  body_markdown: string
  created_at: string
}

/**
 * TQPostJournal -> type of reQuest BODY
 * @method POST
 * @path /journals | /journals/:slug
 * @type Request
 * @represents TBody
 */
type TQPostJournal = Omit<
  IJournal,
  | 'updated_at'
  | 'comments_count'
  | 'page_views_count'
  | 'positive_reactions_count'
>
/**
 * TSPostJournal -> type of reSponse DATA
 * @method POST
 * @path /journals | /journals/:slug
 * @type Response
 * @represents TData
 */
type TSPostJournal = { slug: string }

/**
 * @method PATCH
 * @path /journals/:slug
 * @type Request
 * @represents TBody
 */
type TQUpdateJournal = TQPostJournal
type TSUpdateJournal = TSPostJournal

type TSDeleteJournal = TSPostJournal

/**
 * TSGetJournals -> type of reSponse DATA
 * @method GET
 * @path /journals
 * @type Response
 * @represents TData
 */
type TSGetJournals = { journals: IJournal[] }
/**
 * TSGetJournal -> type of reSponse DATA of /journals/:slug
 * @method GET
 * @path /journals/:slug
 * @type Response
 * @represents TData
 */
type TSGetJournal = { journal?: IJournal }
