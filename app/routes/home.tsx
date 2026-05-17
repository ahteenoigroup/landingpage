import { useState, useEffect } from "react";
import type { Route } from "./+types/home";
import {
  Bike,
  Download,
  Menu,
  Apple,
  Play,
  CheckCircle,
  MapPin,
  Utensils,
  Package,
  ShoppingCart,
  Car,
  Heart,
  Store,
  Motorbike,
  ArrowRight,
  Phone,
  Mail,
  X,
  Globe,
  Camera,
  MessageCircle,
} from "lucide-react";
import type { LinksFunction } from "react-router";

// Fallback for missing brand icons in Lucide v1.x
const Facebook = Globe;
const Instagram = Camera;
const Twitter = MessageCircle;
const Motorcycle = Motorbike;

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "อาตี๋น้อย เดลิเวอรี่ - สั่งอาหาร ส่งพัสดุ รวดเร็วทันใจ" },
    {
      name: "description",
      content:
        "บริการจัดส่งอาหาร เครื่องดื่ม และพัสดุ ที่รู้ใจคุณที่สุด ส่งไว ปลอดภัย ค่าส่งเป็นมิตร สั่งง่ายผ่านแอปพลิเคชันได้แล้ววันนี้",
    },
    { property: "og:title", content: "อาตี๋น้อย เดลิเวอรี่ - สั่งอาหาร ส่งพัสดุ รวดเร็วทันใจ" },
    {
      property: "og:description",
      content: "บริการจัดส่งอาหาร เครื่องดื่ม และพัสดุ ส่งไว ปลอดภัย ค่าส่งเป็นมิตร สั่งง่ายผ่านแอปได้แล้ววันนี้",
    },
    { property: "og:image", content: "https://ahteenoi.com/logo.webp" },
    { property: "og:url", content: "https://ahteenoi.com/" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "อาตี๋น้อย เดลิเวอรี่ - สั่งอาหาร ส่งพัสดุ รวดเร็วทันใจ" },
    {
      name: "twitter:description",
      content: "บริการจัดส่งอาหาร เครื่องดื่ม และพัสดุ ส่งไว ปลอดภัย ค่าส่งเป็นมิตร",
    },
    { name: "twitter:image", content: "https://ahteenoi.com/logo.webp" },
    { tagName: "link", rel: "canonical", href: "https://ahteenoi.com/" },
  ];
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [showQRModal, setShowQRModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "อาตี๋น้อย เดลิเวอรี่",
    image: "https://ahteenoi.com/logo.webp",
    "@id": "https://ahteenoi.com",
    url: "https://ahteenoi.com",
    telephone: "085-598-9548",
    address: {
      "@type": "PostalAddress",
      streetAddress: "404/1 ม.1 ต.แม่ปะ",
      addressLocality: "แม่สอด",
      addressRegion: "ตาก",
      postalCode: "63110",
      addressCountry: "TH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 16.7161,
      longitude: 98.5761,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <div className="font-sans text-gray-800 antialiased overflow-x-hidden relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Navigation */}
      <nav
        id="navbar"
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm h-16"
            : "bg-transparent h-20"
        } flex items-center`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center mr-3 shadow-lg">
                {/* <Bike className="text-white w-6 h-6" /> */}
                <img
                  src="/logo.webp"
                  alt="โลโก้ อาตี๋น้อย เดลิเวอรี่"
                  className="rounded-full w-10"
                />
              </div>
              <span className="font-bold text-2xl text-gray-900 tracking-tight">
                อาตี๋น้อย <span className="text-primary-600">เดลิเวอรี่</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a
                href="#home"
                className="text-gray-700 hover:text-primary-600 font-medium transition"
              >
                หน้าแรก
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-primary-600 font-medium transition"
              >
                บริการของเรา
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-primary-600 font-medium transition"
              >
                วิธีใช้งาน
              </a>
              <a
                href="#partners"
                className="text-gray-700 hover:text-primary-600 font-medium transition"
              >
                ร่วมงานกับเรา
              </a>
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setShowQRModal(true)}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full font-medium transition shadow-md hover:shadow-lg flex items-center"
              >
                <Download className="w-4 h-4 mr-2" /> โหลดแอปเลย
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-primary-600 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="w-7 h-7" />
                ) : (
                  <Menu className="w-7 h-7" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div
          id="mobile-menu"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden bg-white shadow-xl absolute w-full left-0 top-full border-t border-gray-100`}
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:text-primary-600 hover:bg-primary-50"
            >
              หน้าแรก
            </a>
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:text-primary-600 hover:bg-primary-50"
            >
              บริการของเรา
            </a>
            <a
              href="#how-it-works"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:text-primary-600 hover:bg-primary-50"
            >
              วิธีใช้งาน
            </a>
            <a
              href="#partners"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:text-primary-600 hover:bg-primary-50"
            >
              ร่วมงานกับเรา
            </a>
            <a
              href="#download"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 mt-4 text-center rounded-md text-base font-medium bg-primary-600 text-white hover:bg-primary-700"
            >
              โหลดแอปเลย
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-white to-primary-50"
      >
        <div className="blob-bg"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-medium mb-6 text-sm">
                <span className="flex w-2 h-2 rounded-full bg-primary-600 mr-2 animate-pulse"></span>
                พร้อมให้บริการแล้วในพื้นที่ของคุณ!
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                หิวเมื่อไหร่ <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-red-400">
                  อาตี๋น้อย
                </span>{" "}
                จัดให้!
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                บริการจัดส่งอาหาร เครื่องดื่ม และพัสดุ ที่รู้ใจคุณที่สุด ส่งไว
                ปลอดภัย ค่าส่งเป็นมิตร สั่งง่ายผ่านแอปพลิเคชันได้แล้ววันนี้
              </p>

              {/* App Download Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="https://apps.apple.com/th/app/%E0%B8%AD%E0%B8%B2%E0%B8%95-%E0%B8%99-%E0%B8%AD%E0%B8%A2/id6759367582"
                  className="flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition w-full sm:w-auto transform hover:-translate-y-1"
                >
                  {/* <Apple className="w-8 h-8 mr-3" /> */}
                  <i className="fab fa-apple text-3xl mr-3"></i>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold -mt-1">App Store</div>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.ahteenoidelivery.appuser&fbclid=IwY2xjawRtNGJleHRuA2FlbQIxMABicmlkETEwU2EwWldJU0N3WXpuRFFOc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHmLCjeGLSrMv7ToK039Czj8zX0varOiNoLz_w28TJnwCgGoHnvegaE-jlbBq_aem_IZj1DwcF-Oo3g6WgqFpFXA"
                  className="flex items-center justify-center bg-white border border-gray-200 text-gray-900 px-6 py-3 rounded-xl hover:bg-gray-50 transition shadow-sm w-full sm:w-auto transform hover:-translate-y-1"
                >
                  {/* <Play className="w-8 h-8 mr-3 text-primary-500 fill-primary-500" /> */}
                  <i className="fab fa-google-play text-3xl mr-3"></i>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-lg font-semibold -mt-1">
                      Google Play
                    </div>
                  </div>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500 font-medium">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-1" />{" "}
                  ร้านค้ากว่า 200+ ร้าน
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-1" />{" "}
                  ไรเดอร์พร้อมส่ง 24 ชม.
                </div>
              </div>
            </div>

            {/* Hero Image/Mockup */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-none flex justify-center mt-10 lg:mt-0">
              {/* Phone Mockup Container */}
              <div className="relative w-72 h-[550px] bg-gray-900 rounded-[3rem] border-[14px] border-gray-900 shadow-2xl z-20 overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition duration-500">
                <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 z-30 rounded-b-3xl w-40 mx-auto"></div>
                {/* Mockup Screen Image */}
                <img
                  src="/rider.webp"
                  // src="https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=400&q=80"
                  alt="ตัวอย่างหน้าแอปพลิเคชัน อาตี๋น้อย เดลิเวอรี่ บนมือถือ"
                  className="w-full h-full object-cover opacity-90"
                />
                {/* Mockup UI Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  <div className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg transform translate-y-2">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                        <MapPin className="text-primary-600 w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">
                          กำลังจัดส่งไปที่
                        </div>
                        <div className="text-sm font-semibold truncate w-32">
                          บ้านของคุณ
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                      <div
                        className="bg-primary-500 h-1.5 rounded-full"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                    <div className="text-xs text-center text-primary-600 font-medium">
                      ไรเดอร์กำลังเดินทาง... 5 นาที
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-10 -left-10 w-24 h-24 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-40 -right-10 w-24 h-24 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase mb-2">
              บริการของเรา
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ครบจบในแอปเดียว
            </h3>
            <p className="text-gray-600 text-lg">
              อาตี๋น้อย เดลิเวอรี่ ตอบโจทย์ทุกไลฟ์สไตล์ของคุณ ไม่ว่าจะกิน ดื่ม
              หรือส่งของ เราพร้อมดูแล
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer">
              <div className="w-16 h-16 bg-red-100 text-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                <Utensils className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                สั่งอาหาร (Food)
              </h4>
              <p className="text-gray-600">
                รวบรวมร้านเด็ด ร้านดัง และสตรีทฟู้ดใกล้บ้านคุณ จัดส่งร้อนๆ
                ถึงมือ
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 text-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <Package className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                ส่งพัสดุ (Express)
              </h4>
              <p className="text-gray-600">
                รับ-ส่งเอกสาร พัสดุ ด่วนทันใจ ภายในวันเดียว ปลอดภัย
                เช็คสถานะได้เรียลไทม์
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer">
              <div className="w-16 h-16 bg-green-100 text-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                <ShoppingCart className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                ฝากซื้อของ (Mart)
              </h4>
              <p className="text-gray-600">
                ของสด ของใช้ในซุปเปอร์มาร์เก็ต หรือของร้านสะดวกซื้อ
                เราอาสาไปซื้อให้
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer">
              <div className="w-16 h-16 bg-purple-100 text-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                <Car className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                เรียกวิน (Ride)
              </h4>
              <p className="text-gray-600">
                เรียกมอเตอร์ไซค์รับจ้าง
                ไปส่งทุกที่หมายอย่างรวดเร็วและปลอดภัยในราคายุติธรรม
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              สั่งง่ายๆ ใน 3 ขั้นตอน
            </h3>
            <p className="text-gray-600 text-lg">
              ไม่ต้องยุ่งยาก แค่ปลายนิ้วสัมผัส ความอร่อยก็ส่งตรงถึงหน้าประตูบ้าน
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-200 border-t border-dashed border-gray-300 z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-6 border-4 border-primary-50">
                <span className="text-3xl font-bold text-primary-500">1</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                เลือกร้านและเมนู
              </h4>
              <p className="text-gray-600">
                ค้นหาร้านโปรดของคุณ เลื่อนดูเมนู และกดเพิ่มลงตะกร้า
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-6 border-4 border-primary-50">
                <span className="text-3xl font-bold text-primary-500">2</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                ยืนยันและชำระเงิน
              </h4>
              <p className="text-gray-600">
                ตรวจสอบออเดอร์ เลือกวิธีชำระเงินที่สะดวก
                ไม่ว่าจะเป็นเงินสดหรือโอน
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/30 mb-6 border-4 border-primary-100 text-white">
                <Heart className="w-10 h-10 fill-current" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                รอรับความสุขได้เลย
              </h4>
              <p className="text-gray-600">
                ติดตามสถานะไรเดอร์ได้แบบเรียลไทม์ และรอรับของที่หน้าบ้าน
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Banner / Promotion */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gray-900 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
              alt="อาหารอร่อยหลากหลายเมนูพร้อมเสิร์ฟผ่าน อาตี๋น้อย เดลิเวอรี่"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div className="relative p-10 md:p-16 flex flex-col items-center text-center">
              <span className="bg-primary-500 text-white text-sm font-bold uppercase tracking-wider py-1 px-3 rounded-full mb-4">
                โปรโมชั่นพิเศษ
              </span>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                ลูกค้าใหม่ มีแถม! โค้ดส่วนลด 200 บาท*
              </h3>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl">
                เพียงใช้โค้ด{" "}
                <span className="font-mono bg-white/20 px-2 py-1 rounded text-yellow-300 font-bold tracking-widest">
                  NEW200
                </span>{" "}
                ไม่มีขั้นต่ำ
              </p>
              <button
                onClick={() => setShowQRModal(true)}
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-bold text-lg transition shadow-lg transform hover:-translate-y-1"
              >
                สั่งเลย
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us (Partners & Riders) */}
      <section id="partners" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ร่วมเติบโตไปกับ อาตี๋น้อย
            </h3>
            <p className="text-gray-600 text-lg">
              ไม่ว่าคุณจะเป็นเจ้าของร้านอาหาร หรืออยากหารายได้เสริม
              เรายินดีต้อนรับ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Merchant Box */}
            <div className="bg-red-50 rounded-3xl p-8 sm:p-10 relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition duration-500">
                <Store className="w-64 h-64 text-red-500" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-red-500 shadow-sm mb-6">
                  <Store className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                  สมัครเป็นพาร์ทเนอร์ร้านค้า
                </h4>
                <p className="text-gray-600 mb-8 max-w-sm">
                  เพิ่มยอดขาย ขยายฐานลูกค้า
                  ให้เราช่วยส่งต่อความอร่อยของคุณไปให้ไกลกว่าเดิม สมัครง่าย
                  อนุมัติไว
                </p>
                <a
                  href="/register-shop"
                  className="inline-flex items-center font-semibold text-red-600 hover:text-red-700 transition"
                >
                  สมัครร้านค้าเลย <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>

            {/* Rider Box */}
            <div className="bg-gray-900 rounded-3xl p-8 sm:p-10 relative overflow-hidden group text-white">
              <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition duration-500">
                <Motorcycle className="w-64 h-64 text-white" />
              </div>
              <img
                src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=600&q=80"
                alt="Rider"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition duration-500 mix-blend-overlay"
              />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white shadow-sm mb-6 border border-white/20">
                  <Motorcycle className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">
                  สมัครเป็นไรเดอร์
                </h4>
                <p className="text-gray-300 mb-8 max-w-sm">
                  รับงานอิสระ รายได้ดี เลือกเวลาทำงานได้เอง
                  มีโบนัสและสวัสดิการดูแลตลอดเส้นทาง
                </p>
                <a
                  href="/register-rider"
                  className="inline-flex items-center font-semibold text-primary-400 hover:text-primary-300 transition"
                >
                  สมัครขับกับเรา <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t-4 border-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mr-3">
                  {/* <Bike className="text-white w-5 h-5" /> */}
                  <img
                    src="/logo.webp"
                    alt="โลโก้ อาตี๋น้อย เดลิเวอรี่"
                    className="rounded-full w-10"
                  />
                </div>
                <span className="font-bold text-xl text-white tracking-tight">
                  อาตี๋น้อย เดลิเวอรี่
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                แอปพลิเคชันจัดส่งอาหารและพัสดุ ที่มุ่งมั่นให้บริการที่ดีที่สุด
                เพื่อความสะดวกสบายในชีวิตประจำวันของคุณ
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61577899289210"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition"
                >
                  <i className="fab fa-facebook-f text-2xl"></i>
                </a>
                <a
                  href="https://www.youtube.com/@%E0%B8%AD%E0%B8%B2%E0%B8%95%E0%B8%B5%E0%B9%8B%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B9%80%E0%B8%94%E0%B8%A5%E0%B8%B4%E0%B9%80%E0%B8%A7%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A3%E0%B8%B5%E0%B9%88/videos"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition"
                >
                  <i className="fab fa-youtube text-2xl"></i>
                </a>
                <a
                  href="https://www.tiktok.com/@ahteenoigroup997"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition"
                >
                  <i className="fab fa-tiktok text-2xl"></i>
                </a>
              </div>
            </div>

            {/* Links 1 */}
            <div>
              {/* <h4 className="text-white font-bold mb-6">เกี่ยวกับเรา</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-primary-500 transition">
                    รู้จักอาตี๋น้อย
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-500 transition">
                    บล็อก / ข่าวสาร
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-500 transition">
                    ร่วมงานกับเรา (Careers)
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-500 transition">
                    นโยบายความเป็นส่วนตัว
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-500 transition">
                    เงื่อนไขการให้บริการ
                  </a>
                </li>
              </ul> */}
            </div>

            {/* Links 2 */}
            <div>
              <h4 className="text-white font-bold mb-6">บริการ</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <button
                    onClick={() => setShowQRModal(true)}
                    className="hover:text-primary-500 transition cursor-pointer text-left w-full"
                  >
                    สั่งอาหารออนไลน์
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowQRModal(true)}
                    className="hover:text-primary-500 transition"
                  >
                    ส่งพัสดุด่วน
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowQRModal(true)}
                    className="hover:text-primary-500 transition"
                  >
                    สำหรับร้านค้า
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowQRModal(true)}
                    className="hover:text-primary-500 transition"
                  >
                    สำหรับองค์กร (Corporate)
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-6">ติดต่อสอบถาม</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span>404/1 ม.1 ต.แม่ปะ แม่สอด ตาก 63110</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-primary-500 flex-shrink-0" />
                  <span>085-598-9548</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-primary-500 flex-shrink-0" />
                  <span>ahteenoigroup@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; 2026 Ahteenoi Delivery. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <span>
                Made with Panthakit Totid{" "}
                <Heart className="w-3 h-3 inline text-red-500 fill-current" />{" "}
                in Thailand
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* QR Code Modal */}
      {showQRModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowQRModal(false)}
          ></div>
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full relative z-10 shadow-2xl transform transition-all">
            <button
              onClick={() => setShowQRModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                โหลดแอปเลย!
              </h3>
              <p className="text-gray-600 mb-8">
                สแกน QR Code เพื่อดาวน์โหลดแอปและเริ่มสั่งอาหารได้ทันที
              </p>

              <div className="bg-gray-50 p-6 rounded-2xl mb-8 border-2 border-dashed border-gray-200">
                <div className="aspect-square bg-white rounded-xl shadow-inner flex items-center justify-center relative group">
                  {/* Placeholder for QR Code */}
                  <div className="p-4">
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://linktr.ee/ahteenoigroup"
                      alt="QR Code"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowQRModal(false)}
                className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-2xl shadow-lg transition-all"
              >
                เข้าใจแล้ว
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
