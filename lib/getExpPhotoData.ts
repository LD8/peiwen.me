import fs from 'fs'
import { GetStaticPaths } from 'next'
import path from 'path'

const epPath = '/experimental-photography'
const epDir = path.resolve(`public${epPath}`)

export type IEPhoto = {
  imgSrc: string
  order: number
  title: string
  medium: string
  location: string
  time: string
}

export type IEPSingle = {
  order: number
  seriesName: string
  seriesSlug: string
  coverImgSrc: string
  photos: IEPhoto[]
}

export type TResGetEPSeries = { epSeries: IEPSingle[] }

export const getEPSeries = (): TResGetEPSeries => {
  const epSeriesDirents = fs
    .readdirSync(epDir, { withFileTypes: true })
    .filter((dirent) => dirent.name !== '.DS_Store' && dirent.isDirectory())
  const epSeries: IEPSingle[] = epSeriesDirents
    .map(({ name: seriesDirName }) => {
      const [seriesOrder, seriesNameTemp] = seriesDirName.split('--')
      const seriesDir = `${epDir}/${seriesDirName}`
      const seriesPhotos = fs
        .readdirSync(seriesDir)
        .filter((n) => n !== '.DS_Store')
      const photos = seriesPhotos
        .map((photoFileName) => {
          const [
            orderTemp = '',
            titleTemp = '',
            medium = '',
            location = '',
            timeTemp = '',
          ] = photoFileName.split('--')
          const imgSrc = `${epPath}/${seriesDirName}/${photoFileName}`
          return {
            imgSrc,
            order: Number(orderTemp),
            title: titleTemp?.replaceAll('_', ' '),
            medium,
            location,
            time: timeTemp?.replace(/(\.jpg)|(\.jpeg)|(\.png)$/, ''),
          }
        })
        .sort((a, b) => a.order - b.order)
      return {
        order: Number(seriesOrder),
        seriesName: seriesNameTemp?.replaceAll('_', ' '),
        seriesSlug: seriesNameTemp?.replaceAll('_', '-').toLowerCase(),
        coverImgSrc: photos[0].imgSrc,
        photos,
      }
    })
    .sort((a, b) => a.order - b.order)
  return { epSeries }
}
