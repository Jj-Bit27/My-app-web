import Buttons from "../components/ButtonLanding.jsx";

function Home() {
  return (
    <>
      <section className="h-screen w-screen bg-slate-100 dark:bg-zinc-900 content-center text-center">
        {/*<CardLanding />*/}
        <h1 className="text-7xl font-EduVICWANTBeginner dark:text-white">
          Whet
          <span className="text-7xl font-metamasie dark:text-white">SLi</span>
        </h1>
        <Buttons />
      </section>
    </>
  );
}

export default Home;
