import { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import EPLayout from '../../../components/EPLayout'
import HeadInfo from '../../../components/HeadInfo'
import {
  getEPSeries,
  IEPSingle,
  TResGetEPSeries
} from '../../../lib/getExpPhotoData'

export const getStaticProps: GetStaticProps<TResGetEPSeries> = () => ({
  props: getEPSeries(),
})
const EPGallery: NextPage<TResGetEPSeries> = ({ epSeries }) => {
  return (
    <EPLayout>
      <HeadInfo title='Gallery - Experimental Photography' />
      <StyledMain>
        {epSeries.map((series) => (
          <SingleSeries key={series.order} {...series} />
        ))}
      </StyledMain>
    </EPLayout>
  )
}
export default EPGallery

const StyledMain = styled.div`
  display: flex;
  flex-flow: row wrap;
`

const SingleSeries: React.FC<IEPSingle> = ({
  seriesName,
  seriesSlug,
  coverImgSrc,
}) => {
  const router = useRouter()
  const path = `/experimental-photography/gallery/${seriesSlug}`
  return (
    <StyledSingleSeries
      onClick={() => router.push(path)}
      coverImgSrc={coverImgSrc}
    >
      <div className='series-cover' />
      <h2 className='series-title'>{seriesName}</h2>
    </StyledSingleSeries>
  )
}
const StyledSingleSeries = styled.div<{ coverImgSrc: string }>`
  cursor: pointer;
  flex: 1 50%;
  height: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .series-cover {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ coverImgSrc }) => `url(${coverImgSrc})`};
    background-size: 110%;
    background-position: center;
    transition: all 500ms ease-in-out;
  }
  .series-title {
    position: absolute;
    z-index: 3;
    color: white;
    font-size: 36px;
    text-shadow: 0px 3px 8px black;
    letter-spacing: 6px;
    font-family: 'Poiret One', cursive;
    transition: all 1200ms ease-in-out;
  }

  :hover {
    .series-cover {
      background-size: 150%;
    }
    .series-title {
      transform: scale(1.8);
      opacity: 0.2;
      letter-spacing: 8px;
    }
  }
  @media screen and (max-width: 600px) {
    flex: 1 100%;
    height: 300px;
  }
`
