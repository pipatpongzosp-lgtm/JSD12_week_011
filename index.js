import express from 'express';
import cors from 'cors'; // 👉 จุดที่ 1: นำเข้า cors ไว้ด้านบนสุด

const app = express();
const port = 6767;

app.use(cors()); // 👉 จุดที่ 2: สั่งเปิดใช้งาน cors (สำคัญมาก: ต้องบรรทัดนี้ไว้ก่อน Route app.get เสมอ)
app.use(express.json()); // (แถม) ใส่ไว้เผื่อตอนส่งข้อมูล POST จากฟอร์ม React
const member = [
  { name: "โอ้", jsd_No: 15, genmate: "D", },
  { name: "ปาล์ม", jsd_No: 24, genmate: "D" },
  { name: "แม็ก", jsd_No: 21, genmate: "D" },
  { name: "กิ๊ฟ", jsd_No: 32, genmate: "D" },
  { name: "ต่าย", jsd_No: 33, genmate: "D" },
  { name: "แวว", jsd_No: 43, genmate: "D" },
];

app.get("/", (req, res) => {
  res.send("้hello gooes gooes duck");
});

app.get("/users", (req, res) => {
  res.send(member);
});

app.get("/api", async (req, res) => {
  try {
    // ย้ายการ fetch เข้ามาไว้ข้างในนี้ เพื่อให้มันดึงข้อมูลใหม่ทุกครั้งที่มีคนเรียกใช้ Route นี้
    const response = await fetch(
      "https://67eca027aa794fb3222e43e2.mockapi.io/members",
    );
    const result = await response.json();

    res.send(result);
  } catch (error) {
    console.log("เกิดข้อผิดพลาดในการดึงข้อมูล:", error);
    res.status(500).send("ไม่สามารถเชื่อมต่อ API ได้");
  }
});

app.listen(port, () => {
  console.log(`server is running on: ${port}`);
});
