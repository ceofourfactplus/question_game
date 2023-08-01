const SELECT = [
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
    question: "______ column1, column2 FROM table_name WHERE condition;",
    answer: "SELECT",
    level: 1,
  },
  {
    question: "SELECT * ____ table_name  WHERE column1 = 'value1';",
    answer: "FROM",
    level: 1,
  },
  {
    question: "SELECT * FROM ____  WHERE column1 = 'value1';",
    answer: "table_name",
    level: 1,
  },
  {
    question: "SELECT * FROM ______;",
    answer: "table_name",
    level: 1,
  },
  {
    question: "SELECT ____  FROM table_name;",
    answer: "column_name",
    level: 1,
  },
  {
    question: "SELECT column1, column2  FROM ___;",
    answer: "table_name",
    level: 1,
  },
  {
    question: "SELECT COUNT(*)  FROM __ WHERE __;",
    answer: "table_name, condition",
    level: 1,
  },
  // translate
  {
    question: 'ดึงข้อมูลทั้งหมดในตาราง "ez_students"',
    answer: "SELECT * FROM ez_students;",
    level: 2,
  },
  {
    question: 'ดึงข้อมูลวันเกิดในตาราง "ez_students"',
    answer: "SELECT birthday FROM ez_students;",
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
    answer: "SELECT nickname, birthday, age FROM ez_students;",
    level: 2,
  },
  {
    question: 'ดึงข้อมูลทั้งหมดของนักเรียนที่ชื่อว่า "โหย่ว"',
    answer: "SELECT * FROM ez_students WHERE nickname = 'โหย่ว';",
    level: 2,
  },
  {
    question: 'ดึงข้อมูลอายุของนักเรียนที่ชื่อว่า "นายเวลา"',
    answer: "SELECT age FROM ez_students WHERE nickname = 'นายเวลา';",
    level: 2,
  },
  {
    question: 'ดึงข้อมูล id ของนักเรียนที่ไม่ชื่อว่า "หลง"',
    answer: "SELECT id FROM ez_students WHERE nickname != 'หลง';",
    level: 2,
  },
  {
    question: "ดึงข้อมูล ชื่อและอายุ ของนักเรียนที่ไม่ชอบกินผัก",
    answer:
      "SELECT nickname,age FROM ez_students WHERE like_vegetable = FALSE;",
    level: 2,
  },
  {
    question: "ดึงข้อมูล ชื่อและอายุ ของนักเรียนที่ชอบกินผัก",
    answer: "SELECT nickname,age FROM ez_students WHERE like_vegetable = TRUE;",
    level: 2,
  },
  {
    question: "ต้องการทราบชื่ออายุและวันเกิด ของคนที่มีอายุต่ำกว่า 27",
    answer: "SELECT nickname, age, birthday FROM ez_students WHERE age < 27;",
    level: 2,
  },
  {
    question: "ต้องการทราบข้อมูลทั้งหมดของเหยิน",
    answer: "SELECT * FROM ez_students WHERE nickname = 'เหยิน';",
    level: 2,
  },
  {
    question: "ต้องการทราบว่านายเวลาชอบกินผักหรือเปล่า",
    answer:
      "SELECT like_vegetable FROM ez_students WHERE nickname = 'นายเวลา';",
    level: 2,
  },
  // {
  //   question: "เลือกพิซซ่ามาจากร้านพิซซ่าแต่ไม่เอาแป้ง",
  //   answer: "SELECT Pizza from Pizza_shop WHERE like_vegetable = FALSE;",
  //   level: 2,
  // },
  // {
  //   question: "เลือกช้างจากป่าเอาตัวใหญ่",
  //   answer: "SELECT Elephant from Forrest WHERE Big = TRUE ;",
  //   level: 2,
  // },
  // {
  //   question: "เลือกร้านอาหารที่มีอาหารทะเลในเมนู",
  //   answer: "SELECT ร้านอาหาร FROM ร้านอาหาร WHERE มีอาหารทะเล=TRUE;",
  //   level: 2,
  // },
  // {
  //   question: 'ค้นหาหนังสือจากห้องสมุดที่เขียนโดย "จอห์น โด',
  //   answer: "SELECT หนังสือ FROM ห้องสมุด WHERE ผู้เขียน='จอห์น โด';",
  //   level: 2,
  // },
  // {
  //   question: "หาสินค้าจากร้านสุขภัณฑ์ที่มีการลดราคาและมีส่วนลดมากกว่า 20%",
  //   answer: "SELECT สินค้า FROM ร้านสุขภัณฑ์ WHERE ลดราคา=TRUE AND ส่วนลด>20;",
  //   level: 2,
  // },
  // {
  //   question: "เลือกบริษัทจากรายชื่อที่มีส่วนของเสี่ยงต่อสิ่งแวดล้อม",
  //   answer:
  //     "SELECT บริษัท FROM รายชื่อ WHERE มีส่วนของเสี่ยงต่อสิ่งแวดล้อม=TRUE;",
  //   level: 2,
  // },
  // {
  //   question: "ค้นหาคนจากฐานข้อมูลที่มีอายุน้อยกว่า 25 ปีและเป็นเพศหญิง",
  //   answer: "SELECT คน FROM ฐานข้อมูล WHERE อายุ<25 และ เพศ='หญิง';",
  //   level: 2,
  // },
  {
    question: 'ดึงข้อมูลทั้งหมดในตาราง "ez_students',
    answer: "SELECT * FROM ez_students;",
    level: 2,
  },
  {
    question: "ต้องการทราบชื่ออายุและวันเกิด ของคนที่มีอายุต่ำกว่า 27",
    answer: "SELECT nickname, age, birthday FROM ez_students WHERE age < 27;",
    level: 2,
  },
  {
    question: "ดึงข้อมูล ชื่อและอายุ ของนักเรียนที่ไม่ชอบกินผัก",
    answer:
      "SELECT nickname,age FROM ez_students WHERE like_vegetable = FALSE;",
    level: 2,
  },
  {
    question: 'ดึงข้อมูลอายุของนักเรียนที่ชื่อว่า "นายเวลา',
    answer: "SELECT age FROM ez_students WHERE nickname = 'นายเวลา';",
    level: 2,
  },
  {
    question: 'ดึงข้อมูลทั้งหมดของนักเรียนที่ชื่อว่า "โหย่ว',
    answer: "SELECT * FROM ez_students WHERE nickname = 'โหย่ว';",
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
    question: "ในห้องเรียนนี้มีนักเรียนอายุเท่าไหร่บ้าง",
    answer: "SELECT nickname FROM ez_students;",
    level: 2,
  },
  {
    question: 'ดึงข้อมูลทั้งหมดในตาราง "ez_students',
    answer: "SELECT * FROM ez_students;",
    level: 2,
  },
  {
    question: 'ดึงข้อมูลทั้งหมดของนักเรียนที่ชื่อว่า "โหย่ว',
    answer: "SELECT * FROM ez_students WHERE nickname = 'โหย่ว';",
    level: 2,
  },
  {
    question: "ดึงข้อมูลอายุของนักเรียน 3 คนแรก",
    answer: "SELECT age FROM ez_students WHERE id <= 3;",
    level: 2,
  },
  {
    question: "ดึงข้อมูล ชื่อและอายุ ของนักเรียนที่ไม่ชอบกินผัก",
    answer:
      "SELECT nickname,age FROM ez_students WHERE like_vegetable = FALSE;",
    level: 2,
  },
  {
    question: "ต้องการทราบชื่ออายุและวันเกิด ของคนที่มีอายุต่ำกว่า 27",
    answer: "SELECT nickname, age, birthday FROM ez_students WHERE age < 27;",
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
    answer: "SELECT nickname, birthday, age FROM ez_students;",
    level: 2,
  },
  {
    question: "ต้องการทราบข้อมูลอายุและ id ของเหยิน",
    answer: "SELECT age, id FROM ez_students WHERE nickname = 'เหยิน';",
    level: 2,
  },
  {
    question: "ต้องการทราบว่านายเวลาชอบกินผักหรือเปล่า",
    answer:
      "SELECT like_vegetable FROM ez_students WHERE nickname = 'นายเวลา';",
    level: 2,
  },
  {
    question: "มีใครบ้าง (ชื่อ) ที่อายุเกิน 10 ปี",
    answer: "SELECT nickname FROM ez_students WHERE age > 10;",
    level: 2,
  },
  {
    question: "มีใครบ้าง (ชื่อ) ที่อายุน้อยกว่าหรือเท่ากับ 10 ปี",
    answer: "SELECT nickname FROM ez_students WHERE age <= 10;",
    level: 2,
  },
];

const INSERT = [
  {
    question: "INSERT INTO table_name  ______ (column1, column2);",
    answer: "VALUES",

    level: 1,
  },
  {
    question: "INSERT INTO ____ (column1, column2) VALUES (value1, value2);",
    answer: "table_name",

    level: 1,
  },
  {
    question:
      "INSERT ____ table_name (column1, column2) VALUES (value1, value2);",
    answer: "INTO",

    level: 1,
  },
  {
    question: "INSERT INTO ____ (column1, column2) VALUES (value1, value2);",
    answer: "table_name",

    level: 1,
  },
  {
    question: "INSERT INTO ____ (column1, column2) VALUES (value1, value2);",
    answer: "table_name",

    level: 1,
  },
  {
    question: "INSERT INTO ____ (column1, column2) VALUES (value1, value2);",
    answer: "table_name",

    level: 1,
  },
  {
    question: "INSERT INTO table_name ______ (column1, column2);",
    answer: "VALUES",

    level: 1,
  },
  {
    question: "INSERT INTO __ (column1, column2)  VALUES (value1, value2);",
    answer: "table_name",

    level: 1,
  },
  {
    question: "เพิ่มแถวใหม่ที่ข้อมูลเหมือน id ที่ 7",
    answer:
      "INSERT INTO ez_students VALUES (11, 'ลี่จิน', 23, '1999-08-05',  False, 'Fried Chicken');",
    level: 2,
  },
  {
    question: "เพิ่มแถวใหม่ที่ข้อมูลเหมือน id ที่ 1",
    answer:
      "INSERT INTO ez_students VALUES (11, 'ส่อง', 25, '1998-05-15',  TRUE, 'Pizza');",
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
      "INSERT INTO ez_students VALUES (11, 'ceo', 29, '1992-12-18', FALSE, 'Pizza')",
    level: 2,
  },
  {
    question:
      "มีนักเรียนใหม่ชื่อว่า nong yern อายุมากกว่า นักเรียน id=8 3ปี ชอบกินเหมือนส่อง แต่ชอบผักเหมือน sine",
    answer:
      "INSERT INTO ez_students VALUES (11, 'nong yern', 32, '1989-12-18', FALSE, 'Pizza')",

    level: 2,
  },
  {
    question: "กีกี เป็นเด็กใหม่ เกิดปีที่แล้ว ชอบกินสลัดที่แม่เค้าทำให้ทุกวัน",
    answer:
      "INSERT INTO ez_students VALUES (11, 'กีกี', 1, '2022-07-28', TRUE, 'สลัด')",

    level: 2,
  },
  {
    question:
      "มีนักเรียนใหม่เข้ามาชื่อว่าลี่จินเกิดวันที่ 6 ธันวาคม 2540 ชอบกินผักและอาหารกินกุ้ง แต่ไม่ชอบกินผัก",
    answer:
      "INSERT INTO ez_students VALUES (15, 'ลี่จิน', 16, '1997-12-6', FALSE, 'กุ้ง')",

    level: 2,
  },
  {
    question:
      "มีนักเรียนใหม่ชื่อว่า ceo เกิดวันเดียวกับทอฝันแต่เค้าไม่ชอบกินผักและอาหารที่ชอบคือ Pizza",
    answer:
      "INSERT INTO ez_students VALUES (12, 'ceo', 29, '1992-12-18', FALSE, 'Pizza')",

    level: 2,
  },
  {
    question: "เพิ่มแถวใหม่ที่ข้อมูลเหมือน id ที่ 10",
    answer:
      "INSERT INTO ez_students VALUES (11, 'ไซน์',	30,	'1991-10-22',	FALSE,	'Chocolate');",
    level: 2,
  },
];

const UPDATE = [
  {
    question:
      "____ table_name SET column1 = 'value1', column2 = 'value2' WHERE condition;",
    answer: "UPDATE",
    level: 1,
  },
  {
    question:
      "UPDATE table_name SET column1 __ 'value1', column2 = 'value2' WHERE condition;",
    answer: "=",
    level: 1,
  },
  {
    question:
      "UPDATE table_name SET column1 = 'value1', column2 = 'value2' _____ condition;",
    answer: "WHERE",
    level: 1,
  },
  {
    question:
      "UPDATE table_name ____ column1 = 'value1', column2 = 'value2' WHERE condition;",
    answer: "SET",
    level: 1,
  },
  {
    question:
      "UPDATE table_name SET column1 = 'value1'_ column2 = 'value2' WHERE condition;",
    answer: ",",
    level: 1,
  },
  {
    question:
      "UPDATE table_name ____ column1 = 'value1', column2 = 'value2' WHERE condition_",
    answer: "SET, ;",
    level: 1,
  },
  {
    question:
      "____ table_name SET column1 = __ value1 __, column2 = 'value2' WHERE condition;",
    answer: "UPDATE , ''",
    level: 1,
  },
  {
    question: "UPDATE ____ SET column1 = value1 WHERE ____;",
    answer: "table_name, condition",
    level: 1,
  },
  {
    question: "UPDATE table_name SET ____ = value1 ____ condition;",
    answer: "column1, WHERE",
    level: 1,
  },
  {
    question: "ต้องการเปลี่ยนให้ลี่จินชอบกินผัก",
    answer:
      "UPDATE ez_students SET like_vegetable =  TRUE WHERE nickname = 'ลี่จิน';",
    level: 2,
  },
  {
    question: "ต้องการเปลี่ยนให้ส่องชอบกิน Steak",
    answer:
      "UPDATE ez_students SET favorite_food = 'Steak' WHERE nickname = 'ส่อง';",
    level: 2,
  },
  {
    question: "คนที่อายุมากกว่า 25 ให้เป็นคนชอบกินผัก",
    answer: "UPDATE ez_students SET like_vegetable =  TRUE WHERE age > 25;",
    level: 2,
  },
  {
    question: "คนที่อายุน้อยกว่า 25 ให้เป็นคนไม่ชอบกินผัก",
    answer: "UPDATE ez_students SET like_vegetable =  TRUE WHERE age < 25;",
    level: 2,
  },
  {
    question: "ต้องการเปลี่ยนให้ลี่จินชอบกินผัก",
    answer:
      "UPDATE ez_students SET like_vegetable =  TRUE WHERE nickname = 'ลี่จิน';",
    level: 2,
  },
  {
    question: "ต้องการเปลี่ยนให้ส่องชอบกิน Steak",
    answer:
      "UPDATE ez_students SET favorite_food = \"Steak\" WHERE nickname = 'ส่อง';",
    level: 2,
  },
  {
    question: "คนที่อายุมากกว่า 25 ให้เป็นคนชอบกินผัก",
    answer: "UPDATE ez_students SET like_vegetable =  TRUE WHERE age > 25;",
    level: 2,
  },
  {
    question: "คนที่อายุน้อยกว่า 25 ให้เป็นคนไม่ชอบกินผัก",
    answer: "UPDATE ez_students SET like_vegetable =  TRUE WHERE age < 25;",
    level: 2,
  },
  // {
  //   question: "ต้องการแก้ไขเพศของหนิงหลงจากทีมเฉียบให้เป็นเพศหญิง",
  //   answer: "UPDATE ทีมเฉียบ SET เพศ = 'หญิง' WHERE nickname = 'หลง';",
  //   level: 2,
  // },
  // {
  //   question: "ต้องการแก้ไขความเข้มของพี่โด้จากทีมเฉียบให้เข้มน้อย",
  //   answer:
  //     "UPDATE ทีมเฉียบ SET ความเข้ม = 'เข้มน้อย' WHERE nickname = 'พี่โด้';",
  //   level: 2,
  // },
  // {
  //   question: "ต้องการแก้ไขหน้าพิซซ่าของพี่โด้จากทีมเฉียบให้เป็นพิซซ่าหน้าหมู'",
  //   answer:
  //     "UPDATE ทีมเฉียบ SET หน้าพิซซ่า = 'หน้าหมู' WHERE nickname = 'พี่โด้';",
  //   level: 2,
  // },
  {
    question:
      'ต้องการแก้ไขชื่อของคนที่มีชื่อว่า "ทอฝัน" ให้ชื่อว่า "ทอฝัน 5555"',
    answer:
      "UPDATE ez_students SET nickname = 'ทอฝัน 5555' WHERE nickname = 'ทอฝัน';",
    level: 2,
  },
  {
    question: 'ต้องการแก้ไขคนที่อายุมากกว่า 16 ปี ให้ชื่อว่า "เทสโต้"',
    answer: "UPDATE ez_students SET nickname = 'เทสโต้' WHERE age > 16;",
    level: 2,
  },
];

const DELETE = [
  {
    question: "DELETE ___ table_name WHERE condition;",
    answer: "FROM",
    level: 1,
  },
  {
    question: "______ FROM table_name WHERE column1 = 'value1';",
    answer: "DELETE",
    level: 1,
  },
  {
    question: "DELETE FROM table_name _____ column1 = 'value1';",
    answer: "WHERE",
    level: 1,
  },
  {
    question: "DELETE FROM ____ WHERE column1 = 'value1';",
    answer: "table_name",
    level: 1,
  },
  {
    question: "____ FROM ____ WHERE condition;",
    answer: "DELETE, table_name",
    level: 1,
  },
  {
    question: "DELETE FROM ____ WHERE ____;",
    answer: "table_name, condition",
    level: 1,
  },
  {
    question: "ต้องการลบข้อมูลของหลง",
    answer: 'DELETE FROM ez_students WHERE nickname = "หลง";',
    level: 2,
  },
  {
    question: "ต้องการลบข้อมูลของนักเรียนที่ชอบกิน Chocolate",
    answer: 'DELETE FROM ez_students WHERE favorite_food = "Chocolate";',
    level: 2,
  },
  {
    question: "ต้องการลบข้อมูลของนักเรียนที่อายุมากกว่า 28 ปี",
    answer: "DELETE FROM ez_students WHERE age > 28;",
    level: 2,
  },
  {
    question: "ต้องการลบข้อมูลของ id ที่ 9",
    answer: "DELETE FROM ez_students WHERE id = 9;",
    level: 2,
  },
  {
    question: "ต้องการลบข้อมูลของนักเรียนที่ชอบกิน Chocolate",
    answer: 'DELETE FROM ez_students WHERE favorite_food = "Chocolate";',
    level: 2,
  },
  {
    question: "ต้องการลบข้อมูลของนักเรียนที่อายุมากกว่า 28 ปี",
    answer: "DELETE FROM ez_students WHERE age > 28;",
    level: 2,
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

const ER_DIAGRAM = [
  {
    question: "วันที่ 1 July 2023 มีลูกค้าทั้งหมดกี่คน",
    answer: "2",
    level: 2,
  },
  {
    question: "วันที่ 1 July 2023 ขายของได้ทั้งหมดกี่ชิ้น",
    answer: "9",
    level: 2,
  },
  {
    question: "วันที่ 1 July 2023 ขายของได้ทั้งหมดกี่บาท",
    answer: "54",
    level: 2,
  },
  {
    question: "จากตาราง product สินค้าใดราคาถูกที่สุด",
    answer: "Tea",
    level: 2,
  },
  {
    question: "ลูกค้าที่เข้ามาซื้อของในวันที่ 1 July 2023 มีชื่อว่าอะไรบ้าง",
    answer: "John Doe, Micheal Johnson",
    level: 2,
  },
  {
    question: "วันที่ 1 July 2023 ขาย product อะไรได้บ้าง",
    answer: "Coffee, Tea, Cake, Sandwich, Salad",
    level: 2,
  },
  {
    question: "วันที่ 1 July 2023 ขาย topping อะไรได้บ้าง",
    answer: "Chocolate Syrup, Ranch Dressing",
    level: 2,
  },
  {
    question: "John Doe ซื้อสินค้าชื่ออะไรบ้าง จำนวนกี่ชิ้น รวมราคากี่บาท",
    answer: "Coffee, 2, 7",
    level: 2,
  },
  {
    question: "ลูกค้าซื่ออะไรบ้างที่ซื้อ Burger",
    answer: "Susan Williams",
    level: 2,
  },
  {
    question: "มีกี่ order ที่ซื้อสินค้าใน category Pasta",
    answer: "ไม่มี",
    level: 2,
  },

  // insert
  {
    question: "เมื่อวานคุณ William Wilson มาสั่งซื้อกาแฟหนึ่งแก้ว",
    answer: `INSERT INTO order VALUE ( 2006,  1009,  '2023-08-'20' ,  3.5, 1);\n
              INSERT INTO order_item VALUE( 3008, 2006, 6001, Coffee, 3.5 , 0 ,  1 , 3.5);`,
    level: 2,
  },
  {
    question:
      "คุณเธอเป็นลูกค้าใหม่เธอพึ่งเกิดเมื่อวานมาสั่งซื้อ Burger เพิ่มผักกาด 1 ชิ้นวันนี้",
    answer: `INSERT INTO customer VALUE ( 1011,  'คุณเธอ', '2023-08-20');
INSERT INTO order VALUE ( 2007,  1011,  '2023-08-'21' ,  7 , 1);
INSERT INTO order_item VALUE ( 3008, 2007 , 6006, 'Burger', 7 , 0.25 , 1 , 7.25);
INSERT INTO order_item_topping VALUE ( 4007,  3008 , 7004 ,  'Lettuce' , 0.25 , 1 , 0.25);`,
    level: 2,
  },
  {
    question: "คุณ Roberd Brown มาสั่งซื้อสลัดเพิ่มนมห้าจานและเค้กสองชิ้น",
    answer: "",
    level: 2,
  },
  {
    question:
      "วันนี้มีลูกค้าชื่อ Liza Anderson เข้ามาซื้อสินค้าในร้าน เค้าสั่งชาใส่น้ำตาลสองแก้วและพิซซ่าเพิ่ม ketchup สองเท่าหนึ่งจาน",
    answer: "",
    level: 2,
  },

  // update
  {
    question:
      "พนักงานใส่ข้อมูลของออเดอร์ Roberd ผิดสั่ง Pizza เกินไปหนึ่งถาดเลยรีบแก้ไขข้อมูล",
    answer: `UPDATE order_item SET quantity = 1, price = 12 WHERE order_id = 2005;
    UPDATE order SET total_price = 12, total_quantity = 2 WHERE id = 2005;`,
    level: 2,
  },

  // delete
  {
    question: "ลบออเดอร์ที่มี id 2005",
    answer: `DELETE FROM order_item WHERE order_id = 2005;
    DELETE FROM order WHERE id = 2005;`,
    level: 2,
  },
  {
    question: "ลูกค้าชื่อ Roberd Brown ออกจากระบบ",
    answer: `DELETE FROM customer WHERE nickname = 'Roberd Brown';
    DELETE FROM order_item WHERE order_id = 2005;
    DELETE FROM order WHERE customer_id = 1005;`,
    level: 2,
  },
];
const database = {
  // SELECT,
  // INSERT,
  // UPDATE,
  // DELETE,
  // ONE_TO_MANY,
  // MANY_TO_MANY,
  ER_DIAGRAM,
};

// console sorted by level for each list
const sorted_select = UPDATE.sort((a, b) => a.level - b.level);
console.log(sorted_select);

// กติกา
// Staff ลงไปสอนแต่ละทีม guide/สอน/ตรวจคำตอบ ทีละข้อ
// ทำได้ 1 ข้อได้ 1 คะแนน
// ให้เวลา 10 - 20 นาที

// คำถาม
// วันที่ 1 July 2023 มีลูกค้าทั้งหมดกี่คน
// วันที่ 1 July 2023 ขายของได้ทั้งหมดกี่ชิ้น
// วันที่ 1 July 2023 ขายของได้ทั้งหมดกี่บาท
// จากตาราง product สินค้าใดราคาถูกที่สุด
// ลูกค้าที่เข้ามาซื้อของในวันที่ 1 July 2023 มีชื่อว่าอะไรบ้าง
// วันที่ 1 July 2023 ขาย product อะไรได้บ้าง
// วันที่ 1 July 2023 ขาย topping อะไรได้บ้าง
// John Doe ซื้อสินค้าชื่ออะไรบ้าง จำนวนกี่ชิ้น รวมราคากี่บาท
// ลูกค้าซื่ออะไรบ้างที่ซื้อ Burger
// มีกี่ order ที่ซื้อสินค้าใน category Pasta
// มีกี่ order ที่ซื้อสินค้าใน category Pasta
// … ควรมีคำถาม 15 - 20 ข้อ ไล่ตามลำดับความยาก
