import { useState, useEffect } from "react";
import { 
  Bike, 
  User, 
  Car, 
  MapPin, 
  Loader2, 
  ArrowRight, 
  CheckCircle2, 
  XCircle 
} from 'lucide-react';
import { Form, useActionData, useNavigation } from "react-router";
import type { Route } from "./+types/registerRider";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  
  // Simulate database delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log("Rider Registration Data:", data);

  // Here you would normally save to a database
  // return { success: true };
  
  // For demonstration, let's say it's always successful
  return { 
    success: true, 
    title: "สมัครสำเร็จ!", 
    message: "ข้อมูลของคุณถูกส่งเข้าระบบเรียบร้อยแล้ว ทีมงานจะทำการติดต่อกลับโดยเร็วที่สุด" 
  };
}

export default function RegisterRider() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  
  const [modal, setModal] = useState<{
    show: boolean;
    type: "success" | "error";
    title: string;
    message: string;
  }>({
    show: false,
    type: "success",
    title: "",
    message: "",
  });

  useEffect(() => {
    if (actionData) {
      if (actionData.success) {
        setModal({
          show: true,
          type: "success",
          title: actionData.title,
          message: actionData.message,
        });
      } else {
        setModal({
          show: true,
          type: "error",
          title: "เกิดข้อผิดพลาด",
          message: "ไม่สามารถส่งข้อมูลได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง",
        });
      }
    }
  }, [actionData]);

  const closeModal = () => {
    setModal((prev) => ({ ...prev, show: false }));
  };

  return (
    <div className="bg-gray-100 min-h-screen font-['Prompt',_sans-serif]">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white pb-24 pt-10 px-6 text-center shadow-md relative overflow-hidden">
        <div className="absolute -top-10 -right-10 opacity-20">
          <Bike size={192} className="w-48 h-48" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">ร่วมเป็นครอบครัวไรเดอร์กับเรา</h1>
          <p className="text-white/90 text-sm md:text-base">สร้างรายได้ง่ายๆ ขับเมื่อไหร่ก็ได้ที่คุณต้องการ กรอกข้อมูลด้านล่างเพื่อเริ่มต้น</p>
        </div>
      </div>

      {/* Form Container */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 -mt-16 relative z-20 mb-12">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <Form method="post" className="space-y-6">
            {/* ข้อมูลส่วนตัว */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center border-b pb-2">
                <User className="w-5 h-5 mr-2 text-red-600" />
                ข้อมูลส่วนตัว
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อ <span className="text-red-500">*</span></label>
                  <input type="text" name="firstName" required placeholder="สมชาย" 
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-colors outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">นามสกุล <span className="text-red-500">*</span></label>
                  <input type="text" name="lastName" required placeholder="ใจดี" 
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-colors outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">เบอร์โทรศัพท์ <span className="text-red-500">*</span></label>
                  <input type="tel" name="phone" required pattern="[0-9]{10}" placeholder="0812345678" 
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-colors outline-none" />
                  <p className="text-xs text-gray-500 mt-1">กรอกตัวเลข 10 หลัก ติดกัน</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ไอดีไลน์ (Line ID)</label>
                  <input type="text" name="lineId" placeholder="somchai_rider" 
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-colors outline-none" />
                </div>
              </div>
            </div>

            {/* ข้อมูลยานพาหนะ */}
            <div className="pt-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center border-b pb-2">
                <Car className="w-5 h-5 mr-2 text-red-600" />
                ข้อมูลยานพาหนะ
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ประเภทรถ <span className="text-red-500">*</span></label>
                  <select name="vehicleType" required defaultValue="" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-colors outline-none bg-white">
                    <option value="" disabled>เลือกประเภทรถของคุณ</option>
                    <option value="motorcycle">รถจักรยานยนต์ (มอเตอร์ไซค์)</option>
                    <option value="car">รถยนต์</option>
                    <option value="pickup">รถกระบะ</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ยี่ห้อ / รุ่นรถ <span className="text-red-500">*</span></label>
                    <input type="text" name="vehicleModel" required placeholder="เช่น Honda Wave 110i" 
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-colors outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ป้ายทะเบียน <span className="text-red-500">*</span></label>
                    <input type="text" name="licensePlate" required placeholder="เช่น 1กข 1234 กทม." 
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-colors outline-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* พื้นที่ให้บริการ */}
            <div className="pt-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center border-b pb-2">
                <MapPin className="w-5 h-5 mr-2 text-red-600" />
                พื้นที่ให้บริการ
              </h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">จังหวัดที่ต้องการวิ่งงาน <span className="text-red-500">*</span></label>
                <input type="text" name="serviceArea" required placeholder="เช่น กรุงเทพมหานคร, นนทบุรี, นครสวรรค์" 
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-colors outline-none" />
              </div>
            </div>

            {/* ข้อตกลง */}
            <div className="pt-2">
              <label className="flex items-start">
                <input type="checkbox" required className="mt-1 w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-600 cursor-pointer" />
                <span className="ml-2 text-sm text-gray-600 cursor-pointer">
                  ข้าพเจ้ายอมรับ <a href="#" className="text-red-600 hover:text-red-700 hover:underline">เงื่อนไขการให้บริการ</a> และยืนยันว่าข้อมูลข้างต้นเป็นความจริงทุกประการ
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button type="submit" disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3.5 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex justify-center items-center group disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    <span>กำลังส่งข้อมูล...</span>
                  </>
                ) : (
                  <>
                    <span>สมัครเป็นไรเดอร์</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </Form>
        </div>
        
        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          มีข้อสงสัย? ติดต่อ <a href="#" className="text-red-600 hover:text-red-700 hover:underline">ศูนย์ช่วยเหลือ</a>
        </p>
      </div>

      {/* Status Modal */}
      {modal.show && (
        <div className="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center transform transition-transform duration-300 scale-100">
            <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${modal.type === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
              {modal.type === 'success' ? <CheckCircle2 className="w-10 h-10" /> : <XCircle className="w-10 h-10" />}
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2">{modal.title}</h3>
            <p className="text-gray-600 mb-6 text-sm">{modal.message}</p>
            
            <button onClick={closeModal} className="w-full py-2.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-lg transition-colors">
              ตกลง
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
