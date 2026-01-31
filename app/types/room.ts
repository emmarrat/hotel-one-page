export interface Room {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  images: string[];
  features: string[];
  price?: string;
  capacity: number;
}
