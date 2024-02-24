"use client"
import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import ShowMore from "@/components/ShowMore";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import { Space_Grotesk} from 'next/font/google'
import Image from "next/image";
import { useEffect, useState } from "react";
 
const grotesk = Space_Grotesk({
  weight: ['500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  const [allCars, setAllCars] = useState([])
  const [loading, setLoading] = useState(false)
  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')
  const [fuel, setFuel] = useState('')
  const [year, setYear] = useState(2020)
  const [limit, setLimit] = useState(9)

  const getCars = async () => {
    setLoading(true)
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || '',
        model: model || '',
        year: year || 2022,
        fuel: fuel || '',
        limit: limit || 9,
      })
      setAllCars(result)
    } catch (error) {
      alert(error)
    }finally {
      setLoading(false)
    }
  }

  useEffect(()=>{
    getCars()
  }, [manufacturer, model, fuel, year, limit])

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars


  return (
    <main className="overflow-hidden">
      <Hero/>

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className={`text-4xl font-extrabold ${grotesk.className}`}>Car Categories</h1>
          <p>Browse the best cars in the world.</p>
        </div>

        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel}/>
          <div className="home__filter-container">
            <CustomFilter title='fuel' options={fuels} setFilter={setFuel}/>
            <CustomFilter title='year' options={yearsOfProduction} setFilter={setYear}/>
          </div>
        </div>

        {allCars.length>0 ? (
          <section>
            <div className="home__cars-wrapper">
              {
                allCars.map((car, index) => (
                  <CarCard car={car}/>
                ))
              }
            </div>

              {loading && (
                <div className="mt-16 w-full flex-center">
                  <Image src="/loader.svg" alt="loader" width={50} height={50} className="object-contain"/>
                </div>
              )}

            <ShowMore pageNumber={limit/ 9} isNext={limit > allCars.length} setLimit={setLimit}/>
          </section>
        ):(<div className="home__error-container">
          <h1 className="text-[#121619da] font-bold text-2xl">Sorry, we do not sell such cars</h1>
        </div>)}
      </div>
    </main>
  );
}
