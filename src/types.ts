export interface PackageOption {
  id: 'single' | 'double';
  title: string;
  capsules: string;
  price: number;
  originalPrice?: number;
  savings?: number;
  label?: string;
  isPopular?: boolean;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  text: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface VideoItem {
  id: string;
  title: string;
  subtitle: string;
  youtubeId: string;
  thumbnailUrl: string;
}

export interface OrderDetails {
  id?: string;
  packageName: string;
  packagePrice: number;
  customerName: string;
  phoneNumber: string;
  address: string;
  deliveryArea: 'inside' | 'outside';
  deliveryCharge: number;
  totalCost: number;
  orderDate: string;
  status: 'Processing' | 'Shipped' | 'Delivered';
}
