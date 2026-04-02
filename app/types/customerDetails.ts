interface CustomerDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
  zipcode: number;
  city: string;
  country: string;
  paymentMethod: "paymongo" | "cod";
}
