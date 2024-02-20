import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";

export default function Home() {
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
      </div>
    </main>
  );
}
