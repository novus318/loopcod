import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import WhyLoopcod from '@/components/WhyLoopcod'

export default function Home() {
  return (
    <>
    <Layout
    title="LOOPCOD"
    description="Self-taught web developer,creates innovative solutions for the web and skilled to build both the frontend and backend components of a web application."
    keywords="Muhammed Nizamudheen,,nizam,kannur,Nizamudheen,nizamudheen m,Muhammed Nizamudheen m,web developer,web development,software,software engineer,web design,website design,website builder,web designer,ecommerce website,website creator,responsive web design,web development company,best website,web design software,build a website,web developer salary,design website,website layout,web application development,JavaScript,Node.js,Full-Stack Development,Git,Front-end Development,Back-End Web Development"
    author="Muhammed Nizamudheen M"
    canonicalUrl="https://nizamudheen.tech/">
      <Header/>
      <Hero/>
      <WhyLoopcod/>
    </Layout>
    </>
  )
}
