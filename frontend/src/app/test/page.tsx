import Head from 'next/head';
import Carousell from '../components/testCarousal'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Image Carousel</title>
                <meta name="description" content="A simple image carousel example" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>Welcome to the Carousel</h1>
                <Carousell />
            </main>
        </div>
    );
}
