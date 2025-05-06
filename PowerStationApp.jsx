import { useState } from "react";

export default function PowerStationApp() {
  const [customers, setCustomers] = useState([]);
  const [bills, setBills] = useState([]);
  const [form, setForm] = useState({
    name: "",
    meter: "",
    prev: "",
    curr: "",
    unitPrice: 50,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addBill = () => {
    const consumption = parseFloat(form.curr) - parseFloat(form.prev);
    const amount = consumption * parseFloat(form.unitPrice);
    const newBill = {
      name: form.name,
      meter: form.meter,
      prev: form.prev,
      curr: form.curr,
      consumption,
      amount,
    };
    setBills([...bills, newBill]);
    setForm({ name: "", meter: "", prev: "", curr: "", unitPrice: 50 });
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '500px', margin: 'auto' }}>
      <h1>نظام محطة الكهرباء</h1>
      <input name="name" placeholder="اسم العميل" value={form.name} onChange={handleChange} /><br />
      <input name="meter" placeholder="رقم العداد" value={form.meter} onChange={handleChange} /><br />
      <input name="prev" type="number" placeholder="القراءة السابقة" value={form.prev} onChange={handleChange} /><br />
      <input name="curr" type="number" placeholder="القراءة الحالية" value={form.curr} onChange={handleChange} /><br />
      <input name="unitPrice" type="number" placeholder="سعر الكيلو" value={form.unitPrice} onChange={handleChange} /><br />
      <button onClick={addBill}>إنشاء فاتورة</button>

      {bills.map((bill, i) => (
        <div key={i} style={{ marginTop: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
          <p>اسم العميل: {bill.name}</p>
          <p>رقم العداد: {bill.meter}</p>
          <p>القراءة السابقة: {bill.prev}</p>
          <p>القراءة الحالية: {bill.curr}</p>
          <p>الاستهلاك: {bill.consumption} ك.و.س</p>
          <p>المبلغ المطلوب: {bill.amount} ريال</p>
        </div>
      ))}
    </div>
  );
}
