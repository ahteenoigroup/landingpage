import { useState, useEffect } from "react";
import { 
  Store, 
  ShoppingBag, 
  User, 
  Tag, 
  Phone, 
  MessageCircle, 
  MapPin, 
  ChevronDown, 
  Send, 
  Loader2, 
  CheckCircle2, 
  XCircle 
} from 'lucide-react';
import { Form, useActionData, useNavigation } from "react-router";
import type { Route } from "./+types/registerShop";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  
  // Simulate database delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log("Shop Registration Data:", data);

  // Here you would normally save to a database
  return { 
    success: true, 
    title: "สมัครสำเร็จ!", 
    message: "ระบบได้รับข้อมูลของคุณเรียบร้อยแล้ว ทีมงานจะติดต่อกลับโดยเร็วที่สุด" 
  };
}

export default function RegisterShop() {
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
          message: "ไม่สามารถส่งข้อมูลได้ กรุณาลองใหม่อีกครั้ง",
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
            <Store className="text-red-600 w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">ร่วมเป็นพาร์ทเนอร์กับเรา</h2>
          <p className="text-red-100 text-sm sm:text-base">ขยายธุรกิจของคุณ เพิ่มยอดขาย และเข้าถึงลูกค้าได้มากขึ้น</p>
        </div>

        {/* Form Section */}
        <div className="p-8 sm:p-10 pt-4">
          <Form method="post" className="space-y-6">
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              
              {/* ชื่อร้านค้า */}
              <div className="col-span-1 sm:col-span-2">
                <label htmlFor="shopName" className="block text-sm font-medium text-gray-700 mb-1">
                  ชื่อร้านค้า (Shop Name) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <ShoppingBag className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="text" id="shopName" name="shopName" required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:border-red-500 focus:ring-3 focus:ring-red-500/15"
                    placeholder="พิมพ์ชื่อร้านค้าของคุณ" />
                </div>
              </div>

              {/* ชื่อ-นามสกุล เจ้าของร้าน */}
              <div>
                <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 mb-1">
                  ชื่อ-นามสกุล เจ้าของร้าน <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="text" id="ownerName" name="ownerName" required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:border-red-500 focus:ring-3 focus:ring-red-500/15"
                    placeholder="นาย/นาง/นางสาว ..." />
                </div>
              </div>

              {/* ประเภทสินค้า/บริการ */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  ประเภทสินค้า/บริการ <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Tag className="h-5 w-5 text-gray-400" />
                  </div>
                  <select id="category" name="category" required defaultValue=""
                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl text-gray-900 bg-white appearance-none transition-all duration-200 focus:outline-none focus:border-red-500 focus:ring-3 focus:ring-red-500/15">
                    <option value="" disabled>เลือกประเภท</option>
                    <option value="อาหาร">อาหาร</option>
                    <option value="เครื่องดื่ม">เครื่องดื่ม / คาเฟ่</option>
                    <option value="เสื้อผ้าและแฟชั่น">เสื้อผ้าและแฟชั่น</option>
                    <option value="ไอทีและอิเล็กทรอนิกส์">ไอทีและอิเล็กทรอนิกส์</option>
                    <option value="บริการ">บริการ (เช่น ซาลอน, สปา)</option>
                    <option value="อื่นๆ">อื่นๆ</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* เบอร์โทรศัพท์ */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  เบอร์โทรศัพท์มือถือ <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="tel" id="phone" name="phone" required pattern="[0-9]{9,10}"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:border-red-500 focus:ring-3 focus:ring-red-500/15"
                    placeholder="08XXXXXXXX" />
                </div>
              </div>

              {/* Line ID */}
              <div>
                <label htmlFor="lineId" className="block text-sm font-medium text-gray-700 mb-1">Line ID</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MessageCircle className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="text" id="lineId" name="lineId"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:border-red-500 focus:ring-3 focus:ring-red-500/15"
                    placeholder="กรอกไอดีไลน์" />
                </div>
              </div>

              {/* ที่อยู่ร้านค้า */}
              <div className="col-span-1 sm:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  ที่ตั้งร้านค้า / โลเคชั่น <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea id="address" name="address" rows={3} required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:border-red-500 focus:ring-3 focus:ring-red-500/15"
                    placeholder="ระบุบ้านเลขที่, ถนน, ตำบล, อำเภอ, จังหวัด และรหัสไปรษณีย์"></textarea>
                </div>
              </div>

            </div>

            {/* นโยบายความเป็นส่วนตัว */}
            <div className="flex items-start mt-4">
              <div className="flex items-center h-5">
                <input id="terms" name="terms" type="checkbox" required
                  className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded cursor-pointer" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-medium text-gray-700 cursor-pointer">ข้าพเจ้ายินยอมให้เก็บรวบรวมข้อมูล</label>
                <p className="text-gray-500">ข้อมูลนี้จะถูกใช้เพื่อการติดต่อกลับสำหรับพิจารณาการเข้าร่วมเป็นพาร์ทเนอร์เท่านั้น</p>
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
                  ยืนยันการส่งข้อมูลสมัคร
                </span>

                <span className={`relative flex items-center gap-2 ${isSubmitting ? 'flex' : 'hidden'}`}>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  กำลังบันทึกข้อมูล...
                </span>
              </button>
            </div>
          </Form>
        </div>
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
