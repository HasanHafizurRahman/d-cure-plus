import { PackageOption, ReviewItem, FAQItem, VideoItem } from './types';

export const packageOptions: PackageOption[] = [
  {
    id: 'single',
    title: '১টি বক্স (১২০ ক্যাপসুল)',
    capsules: '১২০টি ক্যাপসুল',
    price: 1200,
    originalPrice: 1200,
    label: 'সাধারণ মূল্য',
    isPopular: false
  },
  {
    id: 'double',
    title: '২টি বক্স (২৪০ ক্যাপসুল)',
    capsules: '২৪০টি ক্যাপসুল',
    price: 2000,
    originalPrice: 2400,
    savings: 400,
    label: 'সেরা অফার',
    isPopular: true
  }
];

export const reviewItems: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'মো: শফিকুল ইসলাম',
    rating: 5,
    text: 'আমি গত ২ মাস ধরে এটি ব্যবহার করছি। আমার সুগার লেভেল এখন অনেক নিয়ন্ত্রিত। সম্পূর্ণ প্রাকৃতিক হওয়ায় কোনো চিন্তাও নেই।'
  },
  {
    id: 'rev-2',
    name: 'রহিমা বেগম',
    rating: 5,
    text: 'প্যাকেজিং খুব ভালো এবং ১২০টি ক্যাপসুল থাকায় অনেকদিন যায়। ফলাফলও বেশ সন্তোষজনক।'
  },
  {
    id: 'rev-3',
    name: 'আব্দুল করিম',
    rating: 5,
    text: 'ডাক্তারের পরামর্শে শুরু করেছিলাম। অন্যান্য ওষুধের তুলনায় এর কোনো সাইড ইফেক্ট বুঝিনি। ডেলিভারিও খুব দ্রুত পেয়েছি।'
  }
];

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'D-CURE Plus এর পার্শ্বপ্রতিক্রিয়া আছে কি?',
    answer: 'না, এটি সম্পূর্ণ প্রাকৃতিক ভেষজ উপাদানে তৈরি এবং এতে কোনো রাসায়নিক উপাদান নেই, তাই এর কোনো পার্শ্বপ্রতিক্রিয়া নেই।'
  },
  {
    id: 'faq-2',
    question: 'কতদিন সেবন করতে হবে?',
    answer: 'ভালো ফলাফলের জন্য অন্তত ২-৩ মাস নিয়মিত সেবন করার পরামর্শ দেওয়া হয়। তবে আপনার শারীরিক অবস্থার ওপর ভিত্তি করে এটি ভিন্ন হতে পারে।'
  },
  {
    id: 'faq-3',
    question: 'এটি কি গর্ভবতী মহিলারা সেবন করতে পারেন?',
    answer: 'গর্ভবতী বা স্তন্যদানকারী মায়েদের যেকোনো ঔষধ সেবনের আগে অবশ্যই বিশেষজ্ঞ চিকিৎসকের পরামর্শ নেওয়া উচিত।'
  },
  {
    id: 'faq-4',
    question: 'খাবার আগে না পরে সেবন করতে হবে?',
    answer: 'সাধারণত প্রতিদিন সকালে এবং রাতে খাবারের ৩০ মিনিট আগে ১টি করে ক্যাপসুল সেবন করা উত্তম।'
  }
];

export const videoItems: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'বিশেষজ্ঞের পরামর্শ',
    subtitle: 'ডায়াবেটিস নিয়ন্ত্রণে ইউনানী চিকিৎসার ভূমিকা',
    youtubeId: 'video_expert',
    thumbnailUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'vid-2',
    title: 'গ্রাহকের অভিজ্ঞতা',
    subtitle: 'D-CURE Plus ব্যবহারের বাস্তব ফলাফল',
    youtubeId: 'video_customer',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=600&q=80'
  }
];
