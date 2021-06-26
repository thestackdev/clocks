import Clocks from 'components/Clocks';
import Form from '../components/Form';
import Head from 'next/head'

const Home = () => {
    return <div className='home__container'>
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <meta name="description" content="worlds clocks online search by timezome , country area" />
            <meta name="keywords" content="timezone world clocks" />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="EN" />
            <title>world clocks</title>
        </Head>
        <Form />
        <Clocks />
    </div>
}
export default Home