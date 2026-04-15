use("CrudDB")      //Use or Create DB  
// # CREATE

// console.log(db);    //gives current DB

db.createCollection("Courses")


db.Courses.insertOne({
    Name: "Shvam Srivastava",
    Branch: "CSE(AI & ML)",
    Skill: "Master"
})

// db.Courses.insertMany(
// [
//   { Name: "Shvam Srivastava", Branch: "CSE (AI & ML)", Skill: "Master", salary: 0 },
//   { Name: "Rahul Verma", Branch: "CSE (AI & ML)", Skill: "Advanced", salary: 7000 },
//   { Name: "Ankit Sharma", Branch: "CSE (AI & ML)", Skill: "Intermediate", salary: 7000 },
//   { Name: "Aman Gupta", Branch: "CSE (AI & ML)", Skill: "Advanced", salary: 7000 },
//   { Name: "Neha Mishra", Branch: "CSE (AI & ML)", Skill: "Advanced", salary: 7000 },
//   { Name: "Pooja Patel", Branch: "CSE (AI & ML)", Skill: "Intermediate", salary: 7000 },
//   { Name: "Kunal Mehta", Branch: "CSE (AI & ML)", Skill: "Master", salary: 7000 },
//   { Name: "Saurabh Jain", Branch: "CSE (AI & ML)", Skill: "Advanced", salary: 7000 },
//   { Name: "Priya Kapoor", Branch: "CSE (AI & ML)", Skill: "Intermediate", salary: 7000}
// ])

// # READ

// Bad coding
// let a = db.Courses.find({salary: 7000}).toArray()
// console.log(a);

// Best Design
// let a = db.Courses.find({salary: 7000})
// console.log(a.count());
// // console.log(a.toArray());

// let b = db.Courses.findOne({salary: 7000})
// console.log(b);

// # UPDATE 
db.Courses.updateMany({salary:7000}, {$set: {salary:2000}})
db.Courses.updateOne({Name:"Shvam Srivastava"}, {$set: {salary:10000000}})


// # DELETE

db.Courses.deleteOne({salary:2000})
db.Courses.deleteMany({salary:2000})