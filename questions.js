const SELECT = [
  {
    question: 'ดึงข้อมูลทั้งหมดในตาราง "ez_students"',
    answer: "SELECT * FROM ez_students;",
    level: 2,
  },
  {
    question: 'ดึงข้อมูลทั้งหมดของนักเรียนที่ชื่อว่า "โหย่ว"',
    answer: "SELECT * FROM ez_students WHERE name = 'โหย่ว';",
    level: 2,
  },
  {
    question: 'ดึงข้อมูลอายุของนักเรียนที่ชื่อว่า "นายเวลา"',
    answer: "SELECT age FROM ez_students WHERE name = 'นายเวลา';",
    level: 2,
  },
  {
    question: "ดึงข้อมูล ชื่อและอายุ ของนักเรียนที่ไม่ชอบกินผัก",
    answer: "SELECT name,age FROM ez_students WHERE like_vegetables = FALSE;",
    level: 2,
  },
  {
    question: "ต้องการทราบชื่ออายุและวันเกิด ของคนที่มีอายุต่ำกว่า 27",
    answer: "SELECT name, age, birthday FROM ez_students WHERE age < 27;",
    level: 2,
  },
  {
    question:
      "มีนักเรียนใหม่เข้ามาชื่อว่าโจอี้ อายุ 21 เกิด วันที่ 6 ธันวาคม 2545 ชอบกินผักและอาหารที่ชอบคือสลัด",
    answer:
      "INSERT INTO ez_students VALUES (11, 'โจอี้', 21, '2002-06-12',  TRUE, 'Salad');",
    level: 2,
  },
  {
    question:
      "มีนักเรียนใหม่ชื่อว่า ceo เกิดวันเดียวกับทอฝันแต่เค้าไม่ชอบกินผักและอาหารที่ชอบคือ pizza",
    answer:
      "INSERT INTO ez_students VALUES (12, 'ceo', 29, '1992-12-18', FALSE, 'Pizza')",
    level: 2,
  },
  {
    question: "ต้องการรู้ข้อมูลทั้งหมดในตาราง ez_students",
    answer: "SELECT * FROM ez_students;",
    level: 2,
  },
  {
    question: "ในห้องเรียนนี้มีนักเรียนชื่ออะไรบ้าง",
    answer: "SELECT nickname FROM ez_students;",
    level: 2,
  },
  {
    question: "ต้องการทราบว่านักเรียนในห้องเรียนนี้มีใครชอบกินอะไรบ้าง",
    answer: "SELECT nickname, favorite_food FROM ez_students;",
    level: 2,
  },
  {
    question:
      "ต้องการทราบว่านักเรียนในห้องเรียนนี้มีใครเกิดวันไหนและอายุเท่าไหร่บ้าง",
    answer: "SELECT nickname, birthday, age FROM students;",
    level: 2,
  },
  {
    question: "ต้องการทราบข้อมูลทั้งหมดของเหยิน",
    answer: "SELECT * FROM students WHERE nickname = 'เหยิน';",
    level: 2,
  },
  {
    question: "ต้องการทราบว่านายเวลาชอบกินผักหรือเปล่า",
    answer: "SELECT like_vegetables FROM students WHERE nickname = 'นายเวลา';",
    level: 2,
  },
  // easy level
  {
    question: "INSERT INTO table_name  ______ (column1, column2);",
    answer: "VALUES",
    level: 1,
  },
  {
    question: "______ column1, column2  FROM table_name  WHERE condition;",
    answer: "SELECT",
    level: 1,
  },
  {
    question: "SELECT *  ____ table_name  WHERE column1 = 'value1';",
    answer: "FROM",
    level: 1,
  },
  {
    question: "SELECT *  FROM ______;",
    answer: "table_name",
    level: 1,
  },
  {
    question: "SELECT ____  FROM table_name;",
    answer: "column_name",
    level: 1,
  },
  {
    question: "SELECT *  FROM ______;",
    answer: "table_name",
    level: 1,
  },
  {
    question: "SELECT ____  FROM table_name;",
    answer: "column_name",
    level: 1,
  },
  {
    question: "SELECT column1, column2  FROM ____;",
    answer: "table_name",
    level: 1,
  },
  {
    question: "SELECT *  FROM ____  WHERE ____;",
    answer: "table_name, condition",
    level: 1,
  },
  {
    question: "เลือกพิซซ่ามาจากร้านพิซซ่าเเต่ไม่เอาแป้ง",
    answer: "SELECT Pizza from Pizza_shop WHERE vegetable=FALSE ;",
    category: "SELECT",
    level: 2,
    กิจกรรม: 1,
  },
  {
    question: "เลือกช้างจากป่าเอาตัวใหญ่",
    answer: "SELECT Elephant from Forrest WHERE Big = TRUE ;",
    category: "SELECT",
    level: 2,
    กิจกรรม: 1,
  },
  {
    question: "เลือกร้านอาหารที่มีอาหารทะเลในเมนู",
    answer: "SELECT ร้านอาหาร FROM ร้านอาหาร WHERE มีอาหารทะเล=TRUE;",
    category: "SELECT",
    level: 2,
    กิจกรรม: 1,
  },
  {
    question: 'ค้นหาหนังสือจากห้องสมุดที่เขียนโดย "จอห์น โด',
    answer: "SELECT หนังสือ FROM ห้องสมุด WHERE ผู้เขียน='จอห์น โด';",
    category: "SELECT",
    level: 2,
    กิจกรรม: 1,
  },
  {
    question: "หาสินค้าจากร้านสุขภัณฑ์ที่มีการลดราคาและมีส่วนลดมากกว่า 20%",
    answer: "SELECT สินค้า FROM ร้านสุขภัณฑ์ WHERE ลดราคา=TRUE AND ส่วนลด>20;",
    category: "SELECT",
    level: 2,
    กิจกรรม: 1,
  },
  {
    question: "เลือกบริษัทจากรายชื่อที่มีส่วนของเสี่ยงต่อสิ่งแวดล้อม",
    answer:
      "SELECT บริษัท FROM รายชื่อ WHERE มีส่วนของเสี่ยงต่อสิ่งแวดล้อม=TRUE;",
    category: "SELECT",
    level: 2,
    กิจกรรม: 1,
  },
  {
    question: "ค้นหาคนจากฐานข้อมูลที่มีอายุน้อยกว่า 25 ปีและเป็นเพศหญิง",
    answer: "SELECT คน FROM ฐานข้อมูล WHERE อายุ<25 และ เพศ='หญิง';",
    category: "SELECT",
    level: 2,
    กิจกรรม: 1,
  },
  {
    question: 'ดึงข้อมูลทั้งหมดในตาราง "ez_students',
    answer: "SELECT * FROM ez_students;",
    category: "SELECT",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question: "ต้องการทราบชื่ออายุและวันเกิด ของคนที่มีอายุต่ำกว่า 27",
    answer: "SELECT name, age, birthday FROM ez_students WHERE age < 27;",
    category: "SELECT",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question: "ดึงข้อมูล ชื่อและอายุ ของนักเรียนที่ไม่ชอบกินผัก",
    answer: "SELECT name,age FROM ez_students WHERE like_vegetables = FALSE;",
    category: "SELECT",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question: 'ดึงข้อมูลอายุของนักเรียนที่ชื่อว่า "นายเวลา',
    answer: "SELECT age FROM ez_students WHERE name = 'นายเวลา';",
    category: "SELECT",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question: 'ดึงข้อมูลทั้งหมดของนักเรียนที่ชื่อว่า "โหย่ว',
    answer: "SELECT * FROM ez_students WHERE name = 'โหย่ว';",
    category: "SELECT",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question: "ต้องการรู้ข้อมูลทั้งหมดในตาราง ez_students",
    answer: "SELECT * FROM ez_students;",
    category: "SELECT",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question: "ในห้องเรียนนี้มีนักเรียนชื่ออะไรบ้าง",
    answer: "SELECT nickname FROM ez_students;",
    category: "SELECT",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question: 'ดึงข้อมูลทั้งหมดในตาราง "students',
    answer: "SELECT * FROM students;",
    category: "SELECT",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question: 'ดึงข้อมูลทั้งหมดของนักเรียนที่ชื่อว่า "โหย่ว',
    answer: "SELECT * FROM ez_students WHERE name = 'โหย่ว';",
    category: "SELECT",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question: 'ดึงข้อมูลอายุของนักเรียนที่ชื่อว่า "นายเวลา',
    answer: "SELECT age FROM ez_students WHERE name = 'นายเวลา';",
    category: "SELECT",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question: "ดึงข้อมูล ชื่อและอายุ ของนักเรียนที่ไม่ชอบกินผัก",
    answer: "SELECT name,age FROM ez_students WHERE like_vegetables = FALSE;",
    category: "SELECT",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question: "ต้องการทราบชื่ออายุและวันเกิด ของคนที่มีอายุต่ำกว่า 27",
    answer: "SELECT name, age, birthday FROM ez_students WHERE age < 27;",
    category: "SELECT",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question: "ต้องการรู้ข้อมูลทั้งหมดในตาราง ez_students",
    answer: "SELECT * FROM ez_students;",
    category: "SELECT",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question: "ในห้องเรียนนี้มีนักเรียนชื่ออะไรบ้าง",
    answer: "SELECT nickname FROM ez_students;",
    category: "SELECT",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question: "ต้องการทราบว่านักเรียนในห้องเรียนนี้มีใครชอบกินอะไรบ้าง",
    answer: "SELECT nickname, favorite_food FROM ez_students;",
    category: "SELECT",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question:
      "ต้องการทราบว่านักเรียนในห้องเรียนนี้มีใครเกิดวันไหนและอายุเท่าไหร่บ้าง",
    answer: "SELECT nickname, birthday, age FROM students;",
    category: "SELECT",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question: "ต้องการทราบข้อมูลทั้งหมดของเหยิน",
    answer: "SELECT * FROM students WHERE nickname = 'เหยิน';",
    category: "SELECT",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question: "ต้องการทราบว่านายเวลาชอบกินผักหรือเปล่า",
    answer: "SELECT like_vegetables FROM students WHERE nickname = 'นายเวลา';",
    category: "SELECT",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question: "______ column1, column2  FROM table_name  WHERE condition;",
    answer: "SELECT",
    category: "SELECT",
    level: 1,
    กิจกรรม: 5,
  },
  {
    question: "SELECT *  ____ table_name  WHERE column1 = 'value1';",
    answer: "FROM",
    category: "SELECT",
    level: 1,
    กิจกรรม: 5,
  },
  {
    question: "SELECT *  FROM ______;",
    answer: "table_name",
    category: "SELECT",
    level: 1,
    กิจกรรม: 5,
  },
  {
    question: "SELECT ____  FROM table_name;",
    answer: "column_name",
    category: "SELECT",
    level: 1,
    กิจกรรม: 5,
  },
  {
    question: "SELECT *  FROM ______;",
    answer: "table_name",
    category: "SELECT",
    level: 1,
    กิจกรรม: 5,
  },
  {
    question: "SELECT ____  FROM table_name;",
    answer: "column_name",
    category: "SELECT",
    level: 1,
    กิจกรรม: 5,
  },
  {
    question: "SELECT column1, column2  FROM ____;",
    answer: "table_name",
    category: "SELECT",
    level: 1,
    กิจกรรม: 5,
  },
  {
    question: "SELECT *  FROM ____  WHERE ____;",
    answer: "table_name, condition",
    category: "SELECT",
    level: 1,
    กิจกรรม: 5,
  },
  {
    question: "______ column1, column2 FROM table_name WHERE condition;",
    answer: "SELECT",
    category: "SELECT",
    level: 1,
    กิจกรรม: 5,
  },
  {
    question: "SELECT * ____ table_name  WHERE column1 = 'value1';",
    answer: "FROM",
    category: "SELECT",
    level: 1,
    กิจกรรม: 5,
  },
  {
    question: "SELECT * FROM ____  WHERE column1 = 'value1';",
    answer: "table_name",
    category: "SELECT",
    level: 1,
    กิจกรรม: 5,
  },
  {
    question: "SELECT * FROM ______;",
    answer: "table_name",
    category: "SELECT",
    level: 1,
    กิจกรรม: 5,
  },
  {
    question: "SELECT ____  FROM table_name;",
    answer: "column_name",
    category: "SELECT",
    level: 1,
    กิจกรรม: 5,
  },
  {
    question: "SELECT column1, column2  FROM ___;",
    answer: "table_name",
    category: "SELECT",
    level: 1,
    กิจกรรม: 5,
  },
  {
    question: "SELECT COUNT(*)  FROM __ WHERE __;",
    answer: "table_name, condition",
    category: "SELECT",
    level: 1,
    กิจกรรม: 5,
  },
];

const INSERT = [
  {
    question:
      "มีนักเรียนใหม่ชื่อว่า nong yern อายุมากกว่า นักเรียน id=8 3ปี ชอบกินเหมือนส่อง แต่ชอบผักเหมือน sine",
    answer:
      "INSERT INTO ez_students VALUES (13, 'nong yern', 32, '1989-12-18', FALSE, 'Pizza')",
    category: "INSERT",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question: "กีกี เป็นเด็กใหม่ เกิดปีที่แล้ว ชอบกินสลัดที่แม่เค้าทำให้ทุกวัน",
    answer:
      "INSERT INTO ez_students VALUES (14, 'กีกี', 1, 'ปีที่แล้ว', TRUE, 'สลัด')",
    category: "INSERT",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question:
      "มีนักเรียนใหม่เข้ามาชื่อว่าลี่จินเกิดวันที่ 6 ธันวาคม 2540 ชอบกินผักและอาหารกินกุ้ง แต่ไม่ชอบกินผัก",
    answer:
      "INSERT INTO ez_students VALUES (15, 'ลี่จิน', 16, '1997-12-6', FALSE, 'กุ้ง')",
    category: "INSERT",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question: "INSERT INTO ____ (column1, column2) VALUES (value1, value2);",
    answer: "table_name",
    category: "INSERT",
    level: 1,
    กิจกรรม: 5,
  },
  {
    question:
      "INSERT ____ table_name (column1, column2) VALUES (value1, value2);",
    answer: "INTO",
    category: "INSERT",
    level: 1,
    กิจกรรม: 5,
  },
  {
    question: "INSERT INTO ____ (column1, column2) VALUES (value1, value2);",
    answer: "table_name",
    category: "INSERT",
    level: 1,
    กิจกรรม: 5,
  },
  {
    question: "INSERT INTO ____ (column1, column2) VALUES (value1, value2);",
    answer: "table_name",
    category: "INSERT",
    level: 1,
    กิจกรรม: 5,
  },
  {
    question: "INSERT INTO ____ (column1, column2) VALUES (value1, value2);",
    answer: "table_name",
    category: "INSERT",
    level: 1,
    กิจกรรม: 5,
  },
  {
    question: "INSERT INTO table_name ______ (column1, column2);",
    answer: "VALUES",
    category: "INSERT",
    level: 1,
    กิจกรรม: 5,
  },
  {
    question: "INSERT INTO __ (column1, column2)  VALUES (value1, value2);",
    answer: "table_name",
    category: "INSERT",
    level: 1,
    กิจกรรม: 5,
  },
  {
    question:
      "มีนักเรียนใหม่เข้ามาชื่อว่าโจอี้ อายุ 21 เกิด วันที่ 6 ธันวาคม 2545 ชอบกินผักและอาหารที่ชอบคือสลัด",
    answer:
      "INSERT INTO ez_students VALUES (11, 'โจอี้', 21, '2002-06-12',  TRUE, 'Salad');",
    category: "INSERT",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question:
      "มีนักเรียนใหม่ชื่อว่า ceo เกิดวันเดียวกับทอฝันแต่เค้าไม่ชอบกินผักและอาหารที่ชอบคือ pizza",
    answer:
      "INSERT INTO ez_students VALUES (12, 'ceo', 29, '1992-12-18', FALSE, 'Pizza')",
    category: "INSERT",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question: "INSERT INTO table_name  ______ (column1, column2);",
    answer: "VALUES",
    category: "INSERT",
    level: 1,
    กิจกรรม: 5,
  },
  {
    question:
      "มีนักเรียนใหม่เข้ามาชื่อว่าโจอี้ อายุ 21 เกิด วันที่ 6 ธันวาคม 2545 ชอบกินผักและอาหารที่ชอบคือสลัด",
    answer:
      "INSERT INTO ez_students VALUES (11, 'โจอี้', 21, '2002-06-12',  TRUE, 'Salad');",
    category: "INSERT",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question:
      "มีนักเรียนใหม่ชื่อว่า ceo เกิดวันเดียวกับทอฝันแต่เค้าไม่ชอบกินผักและอาหารที่ชอบคือ pizza",
    answer:
      "INSERT INTO ez_students VALUES (12, 'ceo', 29, '1992-12-18', FALSE, 'Pizza')",
    category: "INSERT",
    level: 2,
    กิจกรรม: 2,
  },
];

const UPDATE = [
  {
    question: "ต้องการเปลี่ยนให้ลี่จินชอบกินผัก",
    answer:
      "UPDATE students SET like_vegetables =  TRUE WHERE name = 'ลี่จิน';",
    level: 2,
  },
  {
    question: "ต้องการเปลี่ยนให้ส่องชอบกิน Steak",
    answer:
      "UPDATE students SET favorite_food = \"Steak\" WHERE name = 'ส่อง';",
    level: 2,
  },
  {
    question: "คนที่อายุมากกว่า 25 ให้เป็นคนชอบกินผัก",
    answer: "UPDATE students SET like_vegetables =  TRUE WHERE age > 25;",
    level: 2,
  },
  {
    question: "คนที่อายุน้อยกว่า 25 ให้เป็นคนไม่ชอบกินผัก",
    answer: "UPDATE students SET like_vegetables =  TRUE WHERE age < 25;",
    level: 2,
  },
  {
    question: "UPDATE ____ SET column1 = value1 WHERE ____;",
    answer: "table_name, condition",
    category: "UPDATE",
    level: 1,
    กิจกรรม: 5,
  },
  {
    question:
      "UPDATE table_name ____ column1 = 'value1', column2 = 'value2' WHERE condition;",
    answer: "SET",
    category: "UPDATE",
    level: 1,
    กิจกรรม: 5,
  },
  {
    question: "ต้องการเปลี่ยนให้ลี่จินชอบกินผัก",
    answer:
      "UPDATE students SET like_vegetables =  TRUE WHERE name = 'ลี่จิน';",
    category: "UPDATE",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question: "ต้องการเปลี่ยนให้ส่องชอบกิน Steak",
    answer:
      "UPDATE students SET favorite_food = \"Steak\" WHERE name = 'ส่อง';",
    category: "UPDATE",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question: "คนที่อายุมากกว่า 25 ให้เป็นคนชอบกินผัก",
    answer: "UPDATE students SET like_vegetables =  TRUE WHERE age > 25;",
    category: "UPDATE",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question: "คนที่อายุน้อยกว่า 25 ให้เป็นคนไม่ชอบกินผัก",
    answer: "UPDATE students SET like_vegetables =  TRUE WHERE age < 25;",
    category: "UPDATE",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question: "ต้องการแก้ไขเพศของหนิงหลงจากทีมเฉียบให้เป็นเพศหญิง",
    answer: "UPDATE ทีมเฉียบ SET เพศ = 'หญิง' WHERE nickname = 'หลง';",
    category: "UPDATE",
    level: 2,
    กิจกรรม: 1,
  },
  {
    question: "ต้องการแก้ไขความเข้มของพี่โด้จากทีมเฉียบให้เข้มน้อย",
    answer:
      "UPDATE ทีมเฉียบ SET ความเข้ม = 'เข้มน้อย' WHERE nickname = 'พี่โด้';",
    category: "UPDATE",
    level: 2,
    กิจกรรม: 1,
  },
  {
    question: "ต้องการแก้ไขหน้าพิซซ่าของพี่โด้จากทีมเฉียบให้เป็นพิซซ่าหน้าหมู'",
    answer:
      "UPDATE ทีมเฉียบ SET หน้าพิซซ่า = 'หน้าหมู' WHERE nickname = 'พี่โด้';",
    category: "UPDATE",
    level: 2,
    กิจกรรม: 1,
  },
  {
    question:
      'ต้องการแก้ไขชื่อของคนที่มีชื่อว่า "อะเมซิ่ง" จากทีมชื่อ "เทสโต้"\'',
    answer:
      "UPDATE ทีมเทสโต้ SET ชื่อคน = 'อะเมซิ่ง' WHERE nickname = 'เทสโต้';",
    category: "UPDATE",
    level: 2,
    กิจกรรม: 1,
  },
  {
    question:
      'ต้องการแก้ไขอายุของคนที่มีชื่อว่า "เจมส์" จากทีมชื่อ "เทสโต้" ให้เป็น 30 ปี',
    answer: "UPDATE ทีมเทสโต้ SET อายุ = 30 WHERE nickname = 'เจมส์';",
    category: "UPDATE",
    level: 2,
    กิจกรรม: 1,
  },
  {
    question:
      'ต้องการแก้ไขสีผมของคนที่มีชื่อว่า "ลินดา" จากทีมชื่อ "เทสโต้" ให้เป็นสีน้ำตาล',
    answer: "UPDATE ทีมเทสโต้ SET สีผม = 'น้ำตาล' WHERE nickname = 'ลินดา';",
    category: "UPDATE",
    level: 2,
    กิจกรรม: 1,
  },
];
const DELETE = [
  {
    question: "ต้องการลบข้อมูลของหลง",
    answer: 'DELETE FROM students WHERE name = "หลง";',
    level: 2,
  },
  {
    question: "ต้องการลบข้อมูลของนักเรียนที่ชอบกิน Chocolate",
    answer: 'DELETE FROM students WHERE favorite_food = "Chocolate";',
    level: 2,
  },
  {
    question: "ต้องการลบข้อมูลของนักเรียนที่อายุมากกว่า 28 ปี",
    answer: "DELETE FROM students WHERE age > 28;",
    level: 2,
  },
  {
    question: "ต้องการลบข้อมูลของหลง",
    answer: 'DELETE FROM students WHERE name = "หลง";',
    category: "DELETE",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question: "ต้องการลบข้อมูลของนักเรียนที่ชอบกิน Chocolate",
    answer: 'DELETE FROM students WHERE favorite_food = "Chocolate";',
    category: "DELETE",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question: "ต้องการลบข้อมูลของนักเรียนที่อายุมากกว่า 28 ปี",
    answer: "DELETE FROM students WHERE age > 28;",
    category: "DELETE",
    level: 2,
    กิจกรรม: 2,
  },
  {
    question: "DELETE FROM __ WHERE __;",
    answer: "table_name, condition",
    category: "DELETE",
    level: 1,
    กิจกรรม: 5,
  },
  {
    question: "DELETE FROM ____ WHERE ____;",
    answer: "table_name, condition",
    category: "DELETE",
    level: 1,
    กิจกรรม: 5,
  },
  {
    question: "______ FROM table_name WHERE column1 = 'value1';",
    answer: "DELETE",
    category: "DELETE",
    level: 1,
    กิจกรรม: 5,
  },
  {
    question: "DELETE FROM table_name _____ column1 = 'value1';",
    answer: "WHERE",
    category: "DELETE",
    level: 1,
    กิจกรรม: 5,
  },
  {
    question: "DELETE FROM ____ WHERE column1 = 'value1';",
    answer: "table_name",
    category: "DELETE",
    level: 1,
    กิจกรรม: 5,
  },
];

const ONE_TO_MANY = [
  {
    question: "จังหวัดกับเขต",
    answer: "One-to-Many",
    level: 2,
  },
  {
    question: "เข็มนาฬิกากับนาฬิกา",
    answer: "One-to-Many",
    level: 2,
  },
  {
    question: "หมอฟันกับคนไข้",
    answer: "One-to-Many",
    level: 2,
  },
  {
    question: "หนังสือกับห้องสมุด",
    answer: "One-to-Many",
    level: 2,
  },
  {
    question: "รถประจำทางกับผู้โดยสาร",
    answer: "One-to-Many",
    level: 2,
  },
  {
    question: "ตู้เสื้อผ้ากับเสื้อ",
    answer: "One-to-Many",
    level: 2,
  },
  {
    question: "ทะเบียนบ้านกับผู้อยู่อาศัย",
    answer: "One-to-Many",
    level: 2,
  },
  {
    question: "ทีมเฉียบกับน้ำสมุนไพร",
    answer: "One-to-Many",
    level: 2,
  },
  {
    question: "โยเกิร์ตกับรสชาติ",
    answer: "One-to-Many",
    level: 2,
  },
  {
    question: "เซเว่นกับสาขาต่างๆ",
    answer: "One-to-Many",
    level: 2,
  },
  {
    question: "ร้านอาหารและออเดอร์",
    answer: "One-to-Many",
    level: 2,
  },
  {
    question: "หนังสือกับบทเรียน",
    answer: "One-to-Many",
    level: 2,
  },
  {
    question: "ต้นมะพร้าวกับลูกมะพร้าว",
    answer: "One-to-Many",
    level: 2,
  },
  {
    question: "แม่กับลูก",
    answer: "One-to-Many",
    level: 2,
  },
  {
    question: "สนามบินกับเครื่องบิน",
    answer: "One-to-Many",
    level: 2,
  },
  {
    question: "โรงพักกับตำรวจ",
    answer: "One-to-Many",
    level: 2,
  },
];

const MANY_TO_MANY = [
  {
    question: "คุณครูกับนักเรียน",
    answer: "Many-to-Many",
    level: 2,
  },
  {
    question: "หมอกับคนไข้",
    answer: "Many-to-Many",
    level: 2,
  },
  {
    question: "ลูกค้าและสินค้า",
    answer: "Many-to-Many",
    level: 2,
  },
  {
    question: "ซีรีส์และผู้ชม",
    answer: "Many-to-Many",
    level: 2,
  },
  {
    question: "สายการบินและเส้นทาง",
    answer: "Many-to-Many",
    level: 2,
  },
  {
    question: "แพ็คเกจท่องเที่ยวและนักท่องเที่ยว",
    answer: "Many-to-Many",
    level: 2,
  },
  {
    question: "วิชาเรียนกับนักเรียน",
    answer: "Many-to-Many",
    level: 2,
  },
  {
    question: "หนังและนักแสดง",
    answer: "Many-to-Many",
    level: 2,
  },
  {
    question: "สถานที่เที่ยวและนักท่องเที่ยว",
    answer: "Many-to-Many",
    level: 2,
  },
  {
    question: "สายการบินและเส้นทาง",
    answer: "Many-to-Many",
    level: 2,
  },
  {
    question: "ผลไม้กับร้านขายผลไม้",
    answer: "Many-to-Many",
    level: 2,
  },
  {
    question: "ประกันกับลูกค้า",
    answer: "Many-to-Many",
    level: 2,
  },
  {
    question: "นักร้องกับเพลง",
    answer: "Many-to-Many",
    level: 2,
  },
];
const database = {
  SELECT,
  INSERT,
  UPDATE,
  DELETE,
  ONE_TO_MANY,
  MANY_TO_MANY,
};
