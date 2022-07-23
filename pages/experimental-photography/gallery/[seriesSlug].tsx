import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import styled from 'styled-components'
import EPLayout from '../../../components/EPLayout'
import HeadInfo from '../../../components/HeadInfo'
import { getEPSeries, IEPSingle } from '../../../lib/getExpPhotoData'
import Image from 'next/image'
import genShimmerDataUrl from '../../../lib/genShimmerDataUrl'

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
      <HeadInfo
        title={`${seriesName} - Experimental Photography`}
        description="Don Lee/Peiwen's work aspire to provoke intellectual thinking and bring out a more personal, psychological and spiritual consciousness in response to the contingent nature of the present"
      />
      <StyledMain>
        <section className='series-title'>
          <h1>{seriesName}</h1>
        </section>
        <section className='section-photos'>
          {photos.map(({ imgSrc, order, title, medium, location, time }) => (
            <div key={order} className='photo-display'>
              <div className='image'>
                <img
                  src={imgSrc}
                  alt={title}
                  className='display'
                  // placeholder='blur'
                  // blurDataURL={genShimmerDataUrl(400, 800)}
                  // width={400}
                  // height={800}
                />
              </div>
              <div className='caption'>
                <span className='title'>
                  <em>
                    <b>{title}</b>
                  </em>
                </span>
                <span className='medium'>{medium}</span>
                <span className='separator'>·</span>
                <span className='location'>
                  {location} ({time})
                </span>
              </div>
            </div>
          ))}
        </section>
      </StyledMain>
    </EPLayout>
  )
}

export default SingleSeries

const StyledMain = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 3vh auto 6vh auto;
  color: silver;

  .series-title {
    margin-bottom: 3vh;
    cursor: default;
    font-family: 'Poiret One', cursive;
    letter-spacing: 3px;
    h1 {
      text-align: center;
      font-size: 40px;
    }
  }

  .section-photos {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    gap: 6vh;

    .photo-display {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      gap: 10px;

      div.image {
        display: flex;
        justify-content: center;
        .display {
          width: 80%;
          max-width: 600px;
        }
      }
      div.caption {
        margin: 10px;
        text-align: center;
        .title {
          display: block;
          margin-bottom: 2px;
        }
        .medium {
          font-size: var(--fontM);
        }
        .separator {
          padding: 0 10px;
          font-size: var(--fontL);
        }
        .location {
          font-size: var(--fontM);
        }
      }
    }
  }
`
