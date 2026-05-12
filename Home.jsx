import React, { useState, useEffect } from 'react';

function Home() {
  // 1. สร้าง State ไว้เก็บข้อมูล (เริ่มต้นให้เป็น Array ว่างๆ ไว้ก่อน)
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // สร้างตัวแปรเช็คว่ากำลังโหลดอยู่ไหม

  // 2. ใช้ useEffect เพื่อดึงข้อมูลตอนที่เปิดหน้าเว็บขึ้นมา
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        // ตรงนี้จะดึงจาก API ภายนอก หรือดึงจาก Backend ของเรา (เช่น http://localhost:6767/api) ก็ได้
        const response = await fetch('https://67eca027aa794fb3222e43e2.mockapi.io/members');
        const result = await response.json();
        
        // 3. พอแกะข้อมูลเสร็จ ก็เอาไปเก็บไว้ใน State ที่ชื่อ members
        setMembers(result);
        setIsLoading(false); // โหลดเสร็จแล้ว

      } catch (error) {
        console.error("เกิดข้อผิดพลาดในการดึงข้อมูล:", error);
        setIsLoading(false);
      }
    };

    fetchData(); // เรียกใช้งานฟังก์ชันที่เขียนไว้ด้านบน

  }, []); // วงเล็บเหลี่ยมว่างๆ [] สำคัญมาก! หมายความว่าให้ดึงข้อมูลแค่ "ครั้งเดียว" ตอนเปิดหน้าเว็บ

  // 4. นำข้อมูลมา Render (แสดงผล) บนหน้าเว็บ
  return (
    <div style={{ padding: '20px' }}>
      <h1>รายชื่อแก๊ง Goose Goose Duck 🦆</h1>
      
      {/* ถ้ากำลังโหลดอยู่ ให้แสดงข้อความรอ */}
      {isLoading ? (
        <p>กำลังโหลดข้อมูล...</p>
      ) : (
        /* ถ้าโหลดเสร็จแล้ว ให้เอา Array มาวนลูปด้วย .map() */
        <ul>
          {members.map((member) => (
            // การวนลูปใน React ต้องใส่พร็อพเพอร์ตี้ key เสมอ เพื่อให้ React จำได้ว่าคือรายการไหน
            <li key={member.jsd_No} style={{ marginBottom: '10px' }}>
              <strong>รหัส JSD:</strong> {member.jsd_No} <br />
              <strong>ชื่อ:</strong> {member.name} <br />
              <strong>Gen:</strong> {member.genmate}
            </li>
          ))}
        </ul>
      )}
      
    </div>
  );
}

export default Home;