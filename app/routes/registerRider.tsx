import { useState, useEffect } from "react";
import { 
  Bike, 
  User, 
  Car, 
  MapPin, 
  Loader2, 
  ArrowRight, 
  CheckCircle2, 
  XCircle,
  Phone,
  MessageCircle,
  Tag,
  ChevronDown,
  Send
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
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[length:24px_24px] font-['Prompt',_sans-serif]">
      <div className="max-w-3xl w-full space-y-8 bg-white/95 backdrop-blur-[10px] rounded-3xl shadow-xl overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-red-600 to-rose-700 p-8 text-center sm:p-10">
          <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
            <Bike className="text-red-600 w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">ร่วมเป็นครอบครัวไรเดอร์กับเรา</h2>
          <p className="text-red-100 text-sm sm:text-base">สร้างรายได้ง่ายๆ ขับเมื่อไหร่ก็ได้ที่คุณต้องการ กรอกข้อมูลด้านล่างเพื่อเริ่มต้น</p>
        </div>

        {/* Form Section */}
        <div className="p-8 sm:p-10 pt-4">
          <Form method="post" className="space-y-6">
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              
              {/* ชื่อ */}
              <div>
                <label htmlFor="FullName" className="block text-sm font-medium text-gray-700 mb-1">
                  ชื่อ-นามสกุล <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="text" id="FullName" name="FullName" required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:border-red-500 focus:ring-3 focus:ring-red-500/15"
                    placeholder="นาย/นาง/นางสาว ..." />
                </div>
              </div>

              {/* เบอร์โทรศัพท์ */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  เบอร์โทรศัพท์ <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="tel" id="phone" name="phone" required pattern="[0-9]{10}"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:border-red-500 focus:ring-3 focus:ring-red-500/15"
                    placeholder="0812345678" />
                </div>
                <p className="text-xs text-gray-500 mt-1 ml-1">กรอกตัวเลข 10 หลัก ติดกัน</p>
              </div>

              {/* Line ID */}
              <div>
                <label htmlFor="lineId" className="block text-sm font-medium text-gray-700 mb-1">ไอดีไลน์ (Line ID)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MessageCircle className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="text" id="lineId" name="lineId"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:border-red-500 focus:ring-3 focus:ring-red-500/15"
                    placeholder="somchai_rider" />
                </div>
              </div>

              {/* ประเภทรถ */}
              <div>
                <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700 mb-1">
                  ประเภทรถ <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Car className="h-5 w-5 text-gray-400" />
                  </div>
                  <select id="vehicleType" name="vehicleType" required defaultValue=""
                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl text-gray-900 bg-white appearance-none transition-all duration-200 focus:outline-none focus:border-red-500 focus:ring-3 focus:ring-red-500/15">
                    <option value="" disabled>เลือกประเภทรถ</option>
                    <option value="motorcycle">รถจักรยานยนต์ (มอเตอร์ไซค์)</option>
                    <option value="car">รถยนต์</option>
                    <option value="pickup">รถกระบะ</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* ยี่ห้อ / รุ่นรถ */}
              <div>
                <label htmlFor="vehicleModel" className="block text-sm font-medium text-gray-700 mb-1">
                  ยี่ห้อ / รุ่นรถ <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Tag className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="text" id="vehicleModel" name="vehicleModel" required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:border-red-500 focus:ring-3 focus:ring-red-500/15"
                    placeholder="เช่น Honda Wave 110i" />
                </div>
              </div>

              {/* ป้ายทะเบียน */}
              <div>
                <label htmlFor="licensePlate" className="block text-sm font-medium text-gray-700 mb-1">
                  ป้ายทะเบียน <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Tag className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="text" id="licensePlate" name="licensePlate" required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:border-red-500 focus:ring-3 focus:ring-red-500/15"
                    placeholder="เช่น 1กข 1234 กทม." />
                </div>
              </div>

              {/* พื้นที่ให้บริการ */}
              <div className="col-span-1 sm:col-span-2">
                <label htmlFor="serviceArea" className="block text-sm font-medium text-gray-700 mb-1">
                  จังหวัดที่ต้องการวิ่งงาน <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="text" id="serviceArea" name="serviceArea" required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:border-red-500 focus:ring-3 focus:ring-red-500/15"
                    placeholder="เช่น กรุงเทพมหานคร, นนทบุรี" />
                </div>
              </div>

            </div>

            {/* ข้อตกลง */}
            <div className="flex items-start mt-4">
              <div className="flex items-center h-5">
                <input id="terms" name="terms" type="checkbox" required
                  className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded cursor-pointer" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-medium text-gray-700 cursor-pointer">ข้าพเจ้ายอมรับเงื่อนไขการให้บริการ</label>
                <p className="text-gray-500">ข้าพเจ้ายืนยันว่าข้อมูลข้างต้นเป็นความจริงทุกประการและยินยอมให้เก็บรวบรวมข้อมูล</p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button type="submit" disabled={isSubmitting}
                className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-lg font-medium rounded-xl text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200 shadow-md hover:shadow-lg overflow-hidden disabled:opacity-75 disabled:cursor-not-allowed">
                
                {/* Background hover effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-rose-600 transition-opacity duration-300 group-hover:opacity-100 opacity-0"></div>
                
                <span className={`relative flex items-center gap-2 ${isSubmitting ? 'hidden' : 'flex'}`}>
                  <Send className="w-5 h-5" />
                  สมัครเป็นไรเดอร์
                </span>

                <span className={`relative flex items-center gap-2 ${isSubmitting ? 'flex' : 'hidden'}`}>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  กำลังบันทึกข้อมูล...
                </span>
              </button>
            </div>
          </Form>
        </div>
        
        {/* Footer */}
        <p className="text-center text-gray-500 text-sm py-6">
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
            
            <button onClick={closeModal} className="w-full py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors">
              ตกลง
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
