export type PackageId = string | number;

export interface PackageOption {
  id: PackageId;
  title: string;
  capsules: string;
  price: number;
  originalPrice?: number;
  savings?: number;
  label?: string;
  isPopular?: boolean;
  image_path?: string;
  box_quantity?: number;
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
  id: number;
  encrypted_id: string;
  order_number: string;
  customer_name: string;
  customer_phone: string;
  alternative_phone: string | null;
  shipping_address: string;
  district_id: number;
  thana_id: number;
  product_id: number;
  quantity: number;
  unit_price: string;
  total_amount: number;
  status: string;
  payment_method: string;
  payment_status: string;
  notes: string | null;
  created_at: string;
  updated_at: string;
  product: {
    id: number;
    name: string;
    package_details: string;
    capsule_quantity: number;
    box_quantity: number;
    selling_price: string;
    original_price: string;
    offer_label: string | null;
    is_popular: boolean;
    image_path: string | null;
  };
  district: {
    name: string;
    name_bn: string;
    code: string;
    encrypted_id: string;
  };
  thana: {
    district_id: number;
    name: string;
    name_bn: string;
    code: string;
    encrypted_id: string;
    inside_dhaka?: boolean | number;
  };
}

export interface District {
  name: string;
  name_bn: string;
  code: string;
  encrypted_id: string;
}

export interface Thana {
  district_id: number;
  name: string;
  name_bn: string;
  code: string;
  encrypted_id: string;
  inside_dhaka?: boolean | number;
}
