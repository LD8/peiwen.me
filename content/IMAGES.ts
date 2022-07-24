import { StaticImageData } from 'next/image'
import aw1 from '../public/work/artists-website/1.jpg'
import aw2 from '../public/work/artists-website/2.jpg'
import aw3 from '../public/work/artists-website/3.jpg'
import ba1 from '../public/work/budget-app/1.jpg'
import do1 from '../public/work/donlee-online/1.jpeg'
import do2 from '../public/work/donlee-online/2.jpg'
import do3 from '../public/work/donlee-online/3.jpeg'
import dogif1 from '../public/work/donlee-online/p-1-640-lowfr.gif'
import dogif2 from '../public/work/donlee-online/p-2-640-lowfr.gif'
import dogif3 from '../public/work/donlee-online/p-3-640-lowfr.gif'
import dogif4 from '../public/work/donlee-online/p-4-640-lowfr.gif'
import mf1 from '../public/work/metta-forum/1.jpg'
import mf2 from '../public/work/metta-forum/2.jpg'
import mf3 from '../public/work/metta-forum/3.jpg'
import mf4 from '../public/work/metta-forum/4.jpg'
import pc1 from '../public/work/privacy-computing/1.jpg'
import pc2 from '../public/work/privacy-computing/2.jpg'
import pc3 from '../public/work/privacy-computing/3.jpg'
import pc4 from '../public/work/privacy-computing/4.jpg'
import pc5 from '../public/work/privacy-computing/5.jpg'
import qt1 from '../public/work/tactical-trading/1.jpg'
import qt2 from '../public/work/tactical-trading/2.jpg'
import qt3 from '../public/work/tactical-trading/3.jpg'
import rs1 from '../public/work/rca-system/1.jpg'
import rs2 from '../public/work/rca-system/2.jpg'
import rs3 from '../public/work/rca-system/3.jpg'
import vb1 from '../public/work/va-boutique/1.jpg'
import vb2 from '../public/work/va-boutique/2.jpg'
import vb3 from '../public/work/va-boutique/3.jpg'
import wa1 from '../public/work/weather-app/1.jpg'
import wa2 from '../public/work/weather-app/2.jpg'

export const IMG_WORK: Record<string, StaticImageData[]> = {
  'artists-website': [aw1, aw2, aw3],
  'budget-app': [ba1],
  'donlee-online': [do1, do2, do3, dogif1, dogif2, dogif3, dogif4],
  'metta-forum': [mf1, mf2, mf3, mf4],
  'privacy-computing': [pc1, pc2, pc3, pc4, pc5],
  'tactical-trading': [qt1, qt2, qt3],
  'rca-system': [rs1, rs2, rs3],
  'va-boutique': [vb1, vb2, vb3],
  'weather-app': [wa1, wa2],
}
