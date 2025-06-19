//create a database called crudDB
use("crudDB")
// console.log(db)

// Create a collection called courses
db.createCollection("courses")

// Insert a single document into the courses collection
db.courses.insertOne({
    name: "MongoDB Basics",
    description: "Learn the basics of MongoDB",
    price:0,
    assignments:12,
    projects:30
});

// Insert multiple documents into the courses collection
db.courses.insertMany([
  {
    "name": "MongoDB Basics",
    "description": "Learn the basics of MongoDB",
    "price": 0,
    "assignments": 12,
    "projects": 30
  },
  {
    "name": "JavaScript Mastery",
    "description": "Become proficient in JavaScript",
    "price": 499,
    "assignments": 20,
    "projects": 15
  },
  {
    "name": "React for Beginners",
    "description": "Understand React.js fundamentals",
    "price": 699,
    "assignments": 10,
    "projects": 5
  },
  {
    "name": "Python Programming",
    "description": "Complete Python programming course",
    "price": 299,
    "assignments": 25,
    "projects": 10
  },
  {
    "name": "Node.js Essentials",
    "description": "Build backend with Node.js",
    "price": 599,
    "assignments": 15,
    "projects": 12
  },
  {
    "name": "Full Stack Web Dev",
    "description": "Learn to build full-stack applications",
    "price": 999,
    "assignments": 30,
    "projects": 20
  },
  {
    "name": "Data Structures & Algorithms",
    "description": "Master DSA for interviews",
    "price": 399,
    "assignments": 35,
    "projects": 8
  },
  {
    "name": "Machine Learning Intro",
    "description": "Get started with ML concepts",
    "price": 799,
    "assignments": 18,
    "projects": 7
  },
  {
    "name": "Database Design",
    "description": "Learn to design efficient databases",
    "price": 249,
    "assignments": 14,
    "projects": 10
  },
  {
    "name": "Git & GitHub Crash Course",
    "description": "Version control with Git and GitHub",
    "price": 0,
    "assignments": 6,
    "projects": 3
  }
]
);

// Find all courses
let a = db.courses.find({price:0})
console.log(a)
console.log(a.toArray())
console.log(a.count())

let b = db.courses.findOne({price:0})
console.log(b)