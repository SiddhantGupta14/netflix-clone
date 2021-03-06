import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Row from './components/Row';
import requests from './request';

function App() {
  return (
    <>
    <Navbar />

    <Banner />

    <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />

    <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

    <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

    <Row title=" Action Movies" fetchUrl={requests.fetchActionMovies} />

    <Row title=" Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

    <Row title=" Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

    <Row title="Documentries" fetchUrl={requests.fetchDocumantaries} />

    </>
  );
}

export default App;
