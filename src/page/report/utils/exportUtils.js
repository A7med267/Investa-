import * as XLSX from 'xlsx';

export const exportToExcel = (data, fileName) => {
  // تحويل البيانات إلى تنسيق مناسب للتصدير
  const exportData = data.map(item => ({
    'Title': item.title,
    'Date': item.date,
    'Amount/Return': item.amount || item.return,
    'Type': item.type,
    'Status': item.status,
    'Details': item.details
  }));

  // إنشاء ورقة عمل جديدة
  const ws = XLSX.utils.json_to_sheet(exportData);
  
  // إنشاء مصنف جديد
  const wb = XLSX.utils.book_new();
  
  // إضافة ورقة العمل إلى المصنف
  XLSX.utils.book_append_sheet(wb, ws, 'Reports');
  
  // تنزيل الملف
  XLSX.writeFile(wb, `${fileName}.xlsx`);
}; 