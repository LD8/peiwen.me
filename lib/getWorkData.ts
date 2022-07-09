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
  techs: string[]
  summary: string
  content: string[]
  startedAt: string // dayjs().format()
  endedAt: string // dayjs().format()
  links?: Record<'online' | 'github' | 'codeSandbox', IHref>
}
type IWorkYaml = Omit<IWork, 'imgSrcArr' | 'slug'>
export type TResGetWorks = { workList: IWork[]; badgeList: IBadgeName[] }

const FORMAT_WORK = 'YYYY-MM'
const regulate = (s: string) => dayjs(s, FORMAT_WORK)
export const getAllWorks = (): TResGetWorks => {
  const badgeSet = new Set<IBadgeName>()
  const workList: IWork[] = getAllFileNames()
    .map((fileName) => {
      const slug = fileName.replace(/\.yml$/, '')
      const { data } = parseYmlFrontMatter<IWorkYaml>(contentDir, fileName)
      if (data.badges?.length) data.badges.forEach((b) => badgeSet.add(b))
      const imgSrcArr = getImgSrcArr(assetsDir, slug)
      return { ...data, slug, imgSrcArr }
    })
    .sort(({ endedAt: aEnd }, { endedAt: bEnd }) => {
      if (!regulate(aEnd).isValid()) return -1
      return regulate(bEnd).valueOf() - regulate(aEnd).valueOf()
    })
  const data = { workList, badgeList: [...badgeSet] }
  return data
}

const getAllFileNames = (): string[] =>
  fs.readdirSync(contentDir).filter((name) => name !== '.DS_Store')

export const getAllWorkSlugs = () => {
  return getAllFileNames().map((fileName) => ({
    params: { slug: fileName.replace(/\.yml$/, '') },
  }))
}

/**
 * slug is file name without extension
 */
export const getWork = (slug: string): IWork => {
  const { data } = parseYmlFrontMatter<IWorkYaml>(contentDir, `${slug}.yml`)
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
