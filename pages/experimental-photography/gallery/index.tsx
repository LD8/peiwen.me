import { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import HeadInfo from '../../../components/HeadInfo'
import { getEPSeries, TResGetEPSeries } from '../../../lib/getExpPhotoData'
import { FCwc } from '../../../types'

export const getStaticProps: GetStaticProps<TResGetEPSeries> = () => ({
  props: getEPSeries(),
})
const EPGallery: NextPage<TResGetEPSeries> = ({ epSeries }) => {
  const router = useRouter()
  return (
    <EPLayout>
      <HeadInfo title={`Gallery - Experimental Photography`} />
      {epSeries.map(({ order, seriesName, coverImgSrc, photos }) => {
        return (
          <div
            key={order}
            onClick={() =>
              router.push(
                `/experimental-photography/gallery/${seriesName.toLowerCase()}`,
              )
            }
          >
            <Image
              src={coverImgSrc}
              alt={`Cover image of ${seriesName}`}
              width='50%'
              height='50%'
            />
            <h2>{seriesName}</h2>
          </div>
        )
      })}
    </EPLayout>
  )
}

export default EPGallery

export const EPLayout: FCwc = ({ children }) => {
  return <div>{children}</div>
}
