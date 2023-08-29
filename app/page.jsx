import Banner from '@/components/Banner'
import Newsletter from '@/components/Newsletter'
import Skills from '@/components/Skills'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'

const Home = () => {
  return (
    <main>
      <Banner />
      <Testimonials />
      <Skills />
      <Team />
      <Newsletter />
      <div className='h-[2000px]'></div>
    </main>
  )
}
export default Home
