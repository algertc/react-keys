import { DefaultSeo, SocialProfileJsonLd } from 'next-seo'
import seo from '../data/seo.config.json'
import Header from '../components/sections/Header'
import Keys from '../components/sections/Keys'

export default function Home() {
    return (
        <>
            <DefaultSeo {...seo.defaultSeo} />
            <SocialProfileJsonLd {...seo.socialProfileJsonLd} />
            <Header />
            <Keys />
        </>
    )
}
