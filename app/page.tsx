import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars()
  // const allCars: any[] = []
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars


  return (
    <main className="overflow-hidden">
      <Hero/>

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Categories</h1>
          <p>Browse the best cars in the world.</p>
        </div>

        <div className="home__filters">
          <SearchBar/>
          <div className="home__filter-container">
            <CustomFilter title='fuel'/>
            <CustomFilter title='year'/>
          </div>
        </div>

        {!isDataEmpty ? (
          <section className="home__cars-wrapper">
            {
              allCars.map((car, index) => (
                <CarCard car={car}/>
              ))
            }
          </section>
        ):(<div className="home__error-container">
          <h1 className="text-black font-bold text-2xl">Sorry, we do not sell such cars</h1>
        </div>)}
      </div>
    </main>
  );
}
