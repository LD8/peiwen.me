import { NextPage } from 'next'
import Image from 'next/image'
import styled from 'styled-components'
import HeadInfo from '../../components/HeadInfo'
import { EPLayout } from './gallery'

const EPAbout: NextPage = () => {
  return (
    <EPLayout>
      <HeadInfo title='About Don Lee - Experimental Photography' />
      <StyledMain>
        <div className='title'>
          <h1>About Don Lee / Peiwen Li</h1>
        </div>
        <div className='content'>
          <div className='image'>
            <Image
              src='/experimental-photography/pinhole_24h.jpg'
              width='2000'
              height='4259'
              alt='Pinhole 24h'
            />
          </div>
          <div className='desc'>
            <p>
              Don Lee considers himself an experimental photographer whose
              practice is strongly related to light and forms, the emotions
              expressed through abstraction.
            </p>
            <p>
              For its unconventional application of analogue photographic
              processes, camera-less photography offers the chance to peek into
              human consciousness, providing a new way of seeing. Combining the
              surrealist approaches in camera-less photography and modern
              technologies, his experiments are conducted to render the forces
              behind the norm, amplifying the abnormality, surfacing the
              regularities hidden in the chaos beyond human constructs.
            </p>
            <p>
              In a world with fewer certainties, his works — prints, photographs
              and moving images — aspire to provoke intellectual thinking and
              bring out a more personal, psychological and spiritual
              consciousness in response to the contingent nature of the present.
            </p>
          </div>
        </div>
      </StyledMain>
    </EPLayout>
  )
}
export default EPAbout

const StyledMain = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 3vh 20px 6vh 20px;
  color: silver;
  cursor: default;
  user-select: none;

  .title {
    margin-bottom: 3vh;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    max-width: 1000px;

    .image {
      flex: 1 300px;
      max-width: 400px;
      padding: 0 20px;
      display: flex;
      justify-content: flex-end;
    }
    .desc {
      flex: 1 400px;
      max-width: 700px;
      padding: 0 20px;
      p {
        color: silver;
        text-align: justify;
        line-height: 2rem;
        font-size: 1.1rem;
      }
    }

    @media screen and (max-width: 900px) {
      flex-wrap: wrap-reverse;
      .desc {
        flex: 1 100%;
        max-width: unset;
      }
      .image {
        flex: 1 100%;
        max-width: unset;
        justify-content: center;
        margin-top: 20px;
      }
    }
  }
`
