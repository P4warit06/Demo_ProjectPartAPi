const { MagicString } = require("vue/compiler-sfc");

const updateDemo = (demos, name, newData) => {
  const index = demos.findIndex((demo) => demo.name === name); // ค้นหาชื่อที่ตรงกัน

  if (index === -1) {
    // ถ้าไม่พบข้อมูล
    console.log("demo not found");
    return null;
  }

  demos[index] = { ...demos[index], ...newData }; // อัพเดตข้อมูล

  console.log("demos updated successfully:");
  return demos[index];
};

let demos = [
  { name: "kuy", value: "hee" },
  { name: "ku2y", value: "hee2" },
];

console.log(updateDemo(demos, "ku2y", { name: "IKuy", value: "maeyed" }));
console.log(demos);
console.log(data);


