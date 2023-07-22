const question_list = [
  {
    question: 'ดึงข้อมูลทั้งหมดในตาราง "students"',
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
  // {
  //   question: "ต้องการเปลี่ยนให้ลี่จินชอบกินผัก",
  //   answer: "UPDATE students SET like_vegetables =  TRUE WHERE name = 'ลี่จิน';",
  //   level: 2,
  // },
  // {
  //   question: "ต้องการเปลี่ยนให้ส่องชอบกิน Steak",
  //   answer:
  //     "UPDATE students SET favorite_food = \"Steak\" WHERE name = 'ส่อง';",
  //   level: 2,
  // },
  // {
  //   question: "คนที่อายุมากกว่า 25 ให้เป็นคนชอบกินผัก",
  //   answer: "UPDATE students SET like_vegetables =  TRUE WHERE age > 25;",
  //   level: 2,
  // },
  // {
  //   question: "คนที่อายุน้อยกว่า 25 ให้เป็นคนไม่ชอบกินผัก",
  //   answer: "UPDATE students SET like_vegetables =  TRUE WHERE age < 25;",
  //   level: 2,
  // },
  // {
  //   question: "ต้องการลบข้อมูลของหลง",
  //   answer: 'DELETE FROM students WHERE name = "หลง";',
  //   level: 2,
  // },
  // {
  //   question: "ต้องการลบข้อมูลของนักเรียนที่ชอบกิน Chocolate",
  //   answer: 'DELETE FROM students WHERE favorite_food = "Chocolate";',
  //   level: 2,
  // },
  // {
  //   question: "ต้องการลบข้อมูลของนักเรียนที่อายุมากกว่า 28 ปี",
  //   answer: "DELETE FROM students WHERE age > 28;",
  //   level: 2,
  // },
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
  {
    question: "INSERT INTO __ (column1, column2)  VALUES (value1, value2);",
    answer: "table_name",
    level: 1,
  },
  // {
  //   question: "DELETE FROM __ WHERE __;",
  //   answer: "table_name, condition",
  //   level: 1,
  // },
  // {
  //   question: "DELETE FROM ____ WHERE ____;",
  //   answer: "table_name, condition",
  //   level: 1,
  // },
  // {
  //   question: "CREATE TABLE ____ (column1 datatype, column2 datatype);",
  //   answer: "table_name",
  //   level: 1,
  // },
  // {
  //   question: "______ FROM table_name WHERE column1 = 'value1';",
  //   answer: "DELETE",
  //   level: 1,
  // },
  // {
  //   question: "DELETE FROM table_name _____ column1 = 'value1';",
  //   answer: "WHERE",
  //   level: 1,
  // },
  // {
  //   question: "DELETE FROM ____ WHERE column1 = 'value1';",
  //   answer: "table_name",
  //   level: 1,
  // },
  // {
  //   question: "UPDATE ____ SET column1 = value1 WHERE ____;",
  //   answer: "table_name, condition",
  //   level: 1,
  // },
  // {
  //   question:
  //     "UPDATE table_name ____ column1 = 'value1', column2 = 'value2' WHERE condition;",
  //   answer: "SET",
  //   level: 1,
  // },
];
