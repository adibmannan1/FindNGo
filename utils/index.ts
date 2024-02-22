import { CarProps } from "@/types";

export async function fetchCars() {
    const headers = {
		'X-RapidAPI-Key': '64e68b590dmshbe1e0bff85cc930p17d6b5jsnc9f3144e3200',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=bmw&limit=16', { headers: headers })
    const result = await response.json()
    return result
}

//function for calculation car rent price
export const calculateCarRent = (city_mpg: number, year: number) => {
    const randomFactor = 3 + Math.random() * 30;
    const randomFactor2 = 10 + Math.random() * 123;
    const basePricePerDay = 100 + randomFactor * randomFactor2; // Base rental price per day in dollars
    const mileageFactor = 30; // Additional rate per mile driven
    const ageFactor = 2; // Additional rate per year of vehicle age
    
    // Generate a random factor between 0.9 and 1.1 for variation

    // Calculate total rental rate per day with the random factor
    const rentalRatePerDay = basePricePerDay + (city_mpg * mileageFactor) + ((new Date().getFullYear() - year) * ageFactor * randomFactor);

    return Math.floor(rentalRatePerDay);
};

export const generateCarUrl = (car:CarProps, angle?:string) => {
    const url = new URL('https://cdn.imagin.studio/getimage')

    const {make, model, year} = car

    url.searchParams.append('customer', 'hrjavascript-mastery')
    url.searchParams.append('make', make)
    url.searchParams.append('modelFamily', model.split(' ')[0])
    url.searchParams.append('zoomType', 'fullscreen')
    url.searchParams.append('modelYear', `${year}`)
    url.searchParams.append('angle', `${angle}`)
    url.searchParams.append('make', make)

    return `${url}`
}