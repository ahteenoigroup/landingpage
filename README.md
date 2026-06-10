# อาตี๋น้อย เดลิเวอรี่ (Ah-Tee-Noi Delivery)

เว็บไซต์อย่างเป็นทางการของ **อาตี๋น้อย เดลิเวอรี่** บริการจัดส่งอาหาร เครื่องดื่ม และพัสดุ ที่รวดเร็วและปลอดภัย พร้อมระบบรับสมัครพาร์ทเนอร์ร้านค้าและไรเดอร์

## 🚀 เทคโนโลยีที่ใช้ (Tech Stack)

- **Frontend:** [React Router v7](https://reactrouter.com/) (React Framework)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **API Client:** [Axios](https://axios-http.com/)
- **Deployment:** Docker support

## ✨ ฟีเจอร์หลัก

- **Home Page:** แสดงรายละเอียดบริการ และลิงก์ดาวน์โหลดแอปพลิเคชัน (iOS & Android)
- **Rider Registration:** ระบบสมัครสมาชิกสำหรับไรเดอร์ พร้อมส่งข้อมูลไปยัง Google Apps Script
- **Shop Registration:** ระบบสมัครพาร์ทเนอร์ร้านค้า พร้อมส่งข้อมูลไปยัง Google Apps Script
- **Responsive Design:** รองรับการใช้งานทุกหน้าจอ (Mobile, Tablet, Desktop)

## 🛠 การตั้งค่าเพื่อพัฒนา (Local Development)

### 1. ติดตั้ง Dependencies
```bash
npm install
```

### 2. ตั้งค่า Environment Variables
สร้างไฟล์ `.env` ที่ root directory โดยอ้างอิงจาก `.env.example`:
```bash
cp .env.example .env
```
จากนั้นแก้ไขไฟล์ `.env` และใส่ URL ของ Google Apps Script Web App ที่ถูกต้อง:
```env
VITE_RIDER_SCRIPT_URL=https://script.google.com/macros/s/XXXXX/exec
VITE_SHOP_SCRIPT_URL=https://script.google.com/macros/s/XXXXX/exec
```

### 3. รันโปรเจกต์ (Development Mode)
```bash
npm run dev
```
เข้าชมเว็บไซต์ได้ที่: `http://localhost:5173`

## 📦 การ Build และ Production

### Build โปรเจกต์
```bash
npm run build
```

### Preview ตัวที่ Build แล้ว
```bash
npm run start
```

## 🐳 Docker
คุณสามารถรันโปรเจกต์ผ่าน Docker ได้โดยใช้คำสั่ง:
```bash
docker build -t ahteenoi-web .
docker run -p 3000:3000 ahteenoi-web
```

---
&copy; 2026 Ahteenoi Delivery. All rights reserved.
