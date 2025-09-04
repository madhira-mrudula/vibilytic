import {  MessageCircle,
  FileText,
  CheckCircle2,
  Video,
  MonitorUp,} from "lucide-react";

export const influencers = [
  {
    id:0,
    name: "Ava Thompson",
    profileImage: "https://randomuser.me/api/portraits/women/68.jpg",
    badge: "Pro",
    designation: "Fashion Influencer",
    followers: "120K",
    location:"chennai,India",
    Engagement:8.7,
    collabrations:3,
    Experience:4,
    bio: "Passionate about streetwear, trends, and empowering self-expression through fashion."
  },
  {
    id:1,
    name: "Liam Patel",
    profileImage: "https://randomuser.me/api/portraits/men/52.jpg",
    badge: "Expert",
    designation: "Tech Reviewer",
    followers: "95K",
    location:"Hyd,India",
    Engagement:8.0,
    Experience:2,
    collabrations:2,
    bio: "Breaking down complex tech for everyday users. Reviews, tips & gadget insights."
  },
  {
    id:2,
    name: "Sofia Ramirez",
    profileImage: "https://randomuser.me/api/portraits/women/21.jpg",
    badge: "Elite",
    designation: "Fitness Coach",
    followers: "78K",
    location:"Guntur,India",
    Engagement:6.7,
    collabrations:4,
    Experience:3,
    bio: "Helping people build healthy habits with strength training and wellness tips."
  },
  {
    id:3,
    name: "Ethan Zhao",
    profileImage: "https://randomuser.me/api/portraits/men/44.jpg",
    badge: "Master",
    designation: "Travel Blogger",
    followers: "140K",
    Engagement:7.5,
    location:"Banglore,India",
    collabrations:5,
    Experience:4,
    bio: "Exploring cultures, landscapes, and street food from around the world."
  }
];

export const campaigns = [
  {
    title: "Fashion Brand Collab",
    description: "Looking for fashion influencers to promote new collection.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROwFX9iU4EhxXvZUW4uiFk0tf50qYROfIIow&s",
    budget: '$600',
    platforms: ["Youtube", "Instagram"],
    bio: "Show off the latest fashion trends with our new collection."
  },
  {
    title: "Tech Product Launch",
    description: "Tech reviewers needed for product unboxing and reviews.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI2SOsgAVJlHHaN3Td-wdUexhqDvvku0Defj-RxbuSlXH5LgUMIJ1HZtpQQjZxwzHk1UY&usqp=CAU",
    budget: '$900',
    platforms: ["Facebook", "Instagram"],
    bio: "Unbox and review our newest tech innovation."
  },
  {
    title: "Music Video Promotion",
    description: "Promote new music video through influencer reels.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVf4SrXFB3WzZmncKTaWsg8vAnLZnJ8JAOnA&s",
    budget: '$300',
    platforms: ["Youtube", "Twitter"],
    bio: "Help a new track go viral with your creative reels."
  },
  {
    title: "Beauty Product Review",
    description: "Beauty influencers required to review skincare products.",
    image: "https://beautymatter.com/uploads/2023/09/two_image_row/hB1Fm0s2rgdV5jLzKA9BuEiJ2jpG7rOoe28exSHa.png",
    budget: '$700',
    platforms: ["Youtube", "Instagram"],
    bio: "Review and share your thoughts on our skincare line."
  },
];
export const upis = [
  {
    name: 'UPI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/UPI-Logo.png',
    description: 'UPI enables fast, secure, real-time payments directly from your bank account.',
  },
  {
    name: 'Bank Transfer',
    logo: 'https://w7.pngwing.com/pngs/382/83/png-transparent-bank-transfer-logo-wire-transfer-electronic-funds-transfer-bank-payment-computer-icons-bank-text-rectangle-service.png',
    description: 'Send and receive funds directly through bank-to-bank transfers.',
  },
  {
    name: 'Razorpay',
    logo: 'https://razorpay.com/build/browser/static/razorpay-logo.5cdb58df.svg',
    description: 'Razorpay powers businesses with reliable payment solutions in India.',
  },
  {
    name: 'Wise',
    logo: 'https://d21buns5ku92am.cloudfront.net/69645/images/470456-Frame-c061f4-large-1677657684.png',
    description: 'Make low-cost international money transfers with Wise.',
  },
  {
    name: 'Stripe',
    logo: 'https://media.designrush.com/inspirations/656399/conversions/1-preview.jpg',
    description: 'Stripe enables global businesses to accept online payments easily.',
  },
  {
    name: 'PayPal',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png',
    description: 'PayPal lets users send and receive money securely online.',
  },
];

export const tools = [
  {
    name: "Live Messaging",
    description: "Instant chat to stay connected with your team.",
    icon: <MessageCircle className="w-6 h-6 text-blue-500" />,
  },
  {
    name: "Media & File Sharing",
    description: "Easily share images, videos, and documents with your team.",
    icon: <FileText className="w-6 h-6 text-green-500" />,
  },
  {
    name: "Approval Workflow",
    description: "Automate approvals and streamline decision-making processes.",
    icon: <CheckCircle2 className="w-6 h-6 text-pink-500" />,
  },
]

export const steps = [
  {
    number: 1,
    title: "Registration or SignUp",
  },
  {
    number: 2,
    title: "Build Profile",
  },
  {
    number: 3,
    title: "Discovering Campaign /Influencers",
  },
  {
    number: 4,
    title: "Collaborate & Earn",
  },
];

export const testimonials = [
  {
    name: "Alice Johnson",
    role: "Influencer",
    review:
      "This platform is a game-changer. I connected with amazing brands!",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Miller",
    role: "Brand Manager",
    review:
      "We discovered top talent faster than ever. Highly recommended!",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sophie Lee",
    role: "Content Creator",
    review:
      "Super easy to use and very effective for finding brand deals.",
    image:
      "https://randomuser.me/api/portraits/women/65.jpg",
  },
   {
    name: "kalyan",
    role: "Fashion designer",
    review:
      "The networking opportunities here are phenomenal. It's not just about visibility—it's about the right connections.",
    image:
      "https://randomuser.me/api/portraits/men/60.jpg",
  },
];


export const pricingPlans = [
  {
    title: "Free",
    price: "$0",
    description: "For influencers just starting out.",
    features: [
      { label: "Basic profile listing", included: true },
      { label: "View limited campaigns", included: true },
      { label: "Basic support", included: true },
      { label: "Direct brand messaging", included: false },
      { label: "Analytics tools", included: false },
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    title: "Subscription",
    price: "$29/mo",
    description: "Ideal for serious influencers & creators.",
    features: [
      { label: "Basic profile listing", included: true },
      { label: "Unlimited campaigns", included: true },
      { label: "Pro analytics tools", included: true },
      { label: "Direct brand messaging", included: true },
      { label: "Priority Support", included: true },
    ],
    cta: "Subscribe Now",
    popular: true,
  },
  {
    title: "Commission Based",
    price: "10%/deal",
    description: "No upfront cost. Pay only on success.",
    features: [
      { label: "Custom deal dashboards", included: true },
      { label: "Performance-based payout", included: true },
      { label: "Flexible deal terms", included: true },
      { label: "Direct brand messaging", included: false },
    ],
    cta: "Join Commission Model",
    popular: false,
  },
  {
    title: "Ads & Boost",
    price: "Custom",
    description: "Boost your profile visibility with ads.",
    features: [
      { label: "Ad placement on home page", included: true },
      { label: "Priority search listing", included: true },
      { label: "Engagement targeting tools", included: true },
      { label: "Analytics tools", included: false },
    ],
    cta: "Promote with Ads",
    popular: false,
  },
];


export const faqs = [
  {
    question: "How do influencers collaborate with brands?",
    answer: "Influencers can collaborate through sponsored posts, affiliate marketing, product reviews, or brand ambassadorships.",
  },
  {
    question: "How can brands find suitable influencers?",
    answer: "Brands can use influencer platforms, social media research, or agencies to find influencers aligned with their target audience.",
  },
  {
    question: "Is there a minimum follower count to work with brands?",
    answer: "Not necessarily. Micro and nano influencers often have higher engagement rates and are valuable to many brands.",
  },
  {
    question: "What platforms are best for influencer marketing?",
    answer: "Instagram, TikTok, and YouTube are currently among the most effective platforms for influencer marketing due to high engagement and visual storytelling.",
  },
  {
    question: "How do influencers get paid?",
    answer: "Influencers may be paid per post, via affiliate commissions, through free products, or long-term contracts depending on the campaign and agreement.",
  },
  {
    question: "Can small brands benefit from influencer marketing?",
    answer: "Yes, small brands often find great ROI working with micro-influencers who have loyal and highly engaged audiences.",
  },
];

