import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { EPLayout } from '.'
import HeadInfo from '../../../components/HeadInfo'
import { getEPSeries, IEPSingle } from '../../../lib/getExpPhotoData'

export const getStaticPaths: GetStaticPaths = () => ({
  paths: getEPSeries().epSeries.map(({ seriesSlug }) => ({
    params: { seriesSlug },
  })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<IEPSingle> = (context) => ({
  props: getEPSeries().epSeries.find(
    ({ seriesSlug }) => seriesSlug === (context.params?.seriesSlug as string),
  )!,
})

const SingleSeries: NextPage<IEPSingle> = ({ seriesName, photos }) => {
  return (
    <EPLayout>
      <HeadInfo title={`${seriesName} - Experimental Photography`} />
      <h1>{seriesName}</h1>
      <section>
        {photos.map(({ imgSrc, order, title, medium, location, time }) => (
          <div key={order}>
            <Image src={imgSrc} alt='title' width='100' height='100' />
            <div>
              {title} <i>{medium}</i> {location} ({time})
            </div>
          </div>
        ))}
      </section>
    </EPLayout>
  )
}

export default SingleSeries
