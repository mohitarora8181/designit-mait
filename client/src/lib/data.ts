import { FeaturedCar, Deal } from "./types";
import { carImages } from "@/assets/carImages";

export const featuredCars: FeaturedCar[] = [
  {
    id: 1,
    make: "BYD",
    model: "SEALION 7",
    details: "230KW COMFORT 83KWH SDR AUTOMATIC",
    image: carImages.tesla,
    price: 378,
    term: 36,
    upfront: 6,
    mileage: 8000
  },
  {
    id: 2,
    make: "TESLA",
    model: "MODEL Y",
    details: "LONG RANGE AWD 82KWH AUTO",
    image: carImages.tesla,
    price: 429,
    term: 48,
    upfront: 9,
    mileage: 8000
  },
  {
    id: 3,
    make: "AUDI",
    model: "Q4 E-TRON",
    details: "40 82KWH SPORT AUTO",
    image: carImages.audiQ4,
    price: 459,
    term: 36,
    upfront: 9,
    mileage: 8000
  },
  {
    id: 4,
    make: "BMW",
    model: "I4",
    details: "EDRIVE40 335KW SPORT AUTO",
    image: carImages.bmwI4,
    price: 389,
    term: 36,
    upfront: 9,
    mileage: 8000
  }
];

export const dealsList: Deal[] = [
  {
    id: 1,
    name: "BMW i4",
    description: "eDrive40 335kW Sport Auto",
    image: carImages.bmwI4,
    price: 389,
    initialPayment: 3501,
    months: 36,
    mileage: 8000,
    engine: "EV",
    badges: [
      {
        type: "category",
        text: "ELECTRIC",
        bgColor: "bg-pink-500",
        textColor: "text-white"
      },
      {
        type: "availability",
        text: "IN STOCK",
        bgColor: "bg-yellow-400",
        textColor: "text-dark"
      }
    ]
  },
  {
    id: 2,
    name: "Kia Sportage",
    description: "1.6 T-GDi HEV GT-Line",
    image: carImages.kiaSportage,
    price: 319,
    initialPayment: 2871,
    months: 48,
    mileage: 10000,
    engine: "1.6L",
    badges: [
      {
        type: "category",
        text: "HYBRID",
        bgColor: "bg-green-500",
        textColor: "text-dark"
      },
      {
        type: "deal",
        text: "HOT DEAL",
        bgColor: "bg-red-500",
        textColor: "text-white"
      }
    ]
  },
  {
    id: 3,
    name: "Audi Q4 e-tron",
    description: "40 82kWh Sport Auto",
    image: carImages.audiQ4,
    price: 459,
    initialPayment: 4131,
    months: 36,
    mileage: 8000,
    engine: "EV",
    badges: [
      {
        type: "category",
        text: "ELECTRIC",
        bgColor: "bg-pink-500",
        textColor: "text-white"
      }
    ]
  }
];
