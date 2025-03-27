export interface FeaturedCar {
  id: number;
  make: string;
  model: string;
  details: string;
  image: string;
  price: number;
  term: number;
  upfront: number;
  mileage: number;
}

export interface Deal {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  initialPayment: number;
  months: number;
  mileage: number;
  engine: string;
  badges: {
    type: string;
    text: string;
    bgColor: string;
    textColor: string;
  }[];
}

export interface LeadSubmission {
  name: string;
  email: string;
  phone: string;
  carInterest: string;
  message: string;
}
