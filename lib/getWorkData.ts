/**
 * Get work data from file system directly
 */
import dayjs from 'dayjs'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { IHref, IImageSource, IObject } from '../types'

const contentDir = path.resolve('content/work')
const assetsDir = path.resolve('public/work')

type IBadgeName = string
export type IWork = {
  slug: string
  title: string
  imgSrcArr: IImageSource[]
  badges: IBadgeName[]
  summary: string
  endedAt: string // dayjs().format()
}
export type TResGetWorks = { workList: IWork[]; badgeList: IBadgeName[] }

const FORMAT_WORK = 'YYYY-MM'
const regulate = (s: string) => dayjs(s, FORMAT_WORK)
export const getAllWorks = (): TResGetWorks => {
  const badgeList: IBadgeName[] = []
  const workList: IWork[] = getAllFileNames()
    .map((fileName) => {
      const slug = fileName.replace(/\.yml$/, '')
      const { data } = parseYmlFrontMatter<IWorkDetail>(contentDir, fileName)
      const { title, badges, summary, endedAt } = data
      if (badges) badgeList.push(...badges)
      const imgSrcArr = getImgSrcArr(assetsDir, slug)
      return { slug, imgSrcArr, title, badges, summary, endedAt }
    })
    .sort(({ endedAt: aEnd }, { endedAt: bEnd }) => {
      if (!regulate(aEnd).isValid()) return -1
      return regulate(bEnd).valueOf() - regulate(aEnd).valueOf()
    })
  const data = { workList, badgeList: [...new Set(badgeList)] }
  return data
}

const getAllFileNames = (): string[] =>
  fs.readdirSync(contentDir).filter((name) => name !== '.DS_Store')

export const getAllWorkSlugs = () => {
  return getAllFileNames().map((fileName) => ({
    params: { slug: fileName.replace(/\.yml$/, '') },
  }))
}

export type IWorkDetail = IWork & {
  content: string[]
  techs: string[]
  links: Record<'online' | 'github' | 'codeSandbox', IHref>
  startedAt: string // dayjs().format()
}
/**
 * slug is file name without extension
 */
export const getWork = (slug: string): IWorkDetail => {
  const { data } = parseYmlFrontMatter<IWorkDetail>(contentDir, `${slug}.yml`)
  const imgSrcArr = getImgSrcArr(assetsDir, slug)
  return { ...data, slug, imgSrcArr }
}

function getImgSrcArr(assetsDir: string, slug: string) {
  return fs
    .readdirSync(path.join(assetsDir, slug))
    .filter((name) => name !== '.DS_Store')
    .map((imgName) => `/work/${slug}/${imgName}`)
}

function parseYmlFrontMatter<TData extends IObject>(
  contentDir: string,
  fileName: string,
) {
  return matter.read(
    path.join(contentDir, fileName),
  ) as matter.GrayMatterFile<string> & { data: TData }
}
