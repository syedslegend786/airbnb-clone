import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

export default function Home(props) {
  console.log(props.medCardData)
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <section className='mx-3 space-y-3
      lg:max-w-5xl lg:mx-auto 
      '>
        <h1 className='capitalize mt-5 text-4xl font-bold tracking-wider'>Locations to visit</h1>
        <div className='grid grid-cols-1 space-y-3
        sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
        '>
          {
            props.cardData?.map((val, index) => (
              <SmallCard val={val} />
            ))
          }
        </div>
      </section>
      <section className='
      lg:max-w-5xl lg:mx-auto pl-2 mt-6'>
        <h1 className='text-4xl font-semibold'>Popular places to visit</h1>
        <div className='scrollbar-hide flex flex-shrink-0 overflow-x-scroll
        space-x-3 p-4
        '>
          {
            props.medCardData?.map((val, index) => (
              <MediumCard val={val} key={index} />
            ))
          }
        </div>
      </section>
      <Footer />
    </div>
  )
}
export async function getStaticProps(context) {
  const res = await fetch('https://jsonkeeper.com/b/4G1G')
  const data = await res.json()
  const medCardData = await fetch('https://jsonkeeper.com/b/VHHT').then((_res) => _res.json())
  return {
    props: {
      cardData: data,
      medCardData: medCardData,
    }, // will be passed to the page component as props
  }
}