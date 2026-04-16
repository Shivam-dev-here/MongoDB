Operations like Create, Rename, Update & Delete.

---
### Create a Db

- `Use("CrudDB")`
- `console.log(db)`

---
### Create a Connection

- `db.createCollection("Courses")`

---
### Insert a Document

- Insert One Document

```
db.Courses.insertOne({
	Name: "Shvam Srivastava",
	Branch: "CSE(AI & ML)",
	Skill: "Master"
})
```

- Insert Many Documents Together

```
db.Courses.insertMany([
  {Name:"Shvam Srivastava", Branch: "CSE (AI & ML)", Skill: "Master", salary: 0 },
  {Name:"Rahul Verma", Branch: "CSE (AI & ML)", Skill: "Advanced", salary: 7000 },
  {Name:"Ankit Sharma",Branch:"CSE(AI & ML)", Skill: "Intermediate", salary: 7000},
  {Name: "Aman Gupta", Branch: "CSE (AI & ML)", Skill: "Advanced", salary: 7000 },
  {Name: "Neha Mishra", Branch: "CSE (AI & ML)", Skill: "Advanced", salary: 7000 },
  {Name:"Pooja Patel",Branch:"CSE (AI & ML)", Skill: "Intermediate", salary: 7000},
  {Name: "Kunal Mehta", Branch: "CSE (AI & ML)", Skill: "Master", salary: 7000 },
  {Name: "Saurabh Jain",Branch: "CSE (AI & ML)", Skill: "Advanced", salary: 7000 },
  {Name: "Priya Kapoor",Branch:"CSE(AI & ML)", Skill: "Intermediate", salary: 7000}
])
```

---
### Find an Document

- Find All
	1. NGP
		`let a = db.Courses.find({salary: 7000}).toArray()`
		`console.log(a);`
	
	2. Good way
		`let a = db.Courses.find({salary: 7000})`
		`console.log(a.toArray());`
	
- Count All 
	
	`let a = db.Courses.find({salary: 7000})`
	`console.log(a.count());`

---















  - [ ] self study [Operators study]( https://www.mongodb.com/docs/manual/reference/mql/query-predicates/logical/)

- [ ] comparison
- [ ] Logical
- [ ] Element
- [ ] Evaluation
- [ ] Geospacial
- [ ] Array
- [ ] Bitwise
- [ ] Projection
- [ ] Miscellaneous    rand  comment

---

### Other

- Documentation MongoDB  [click me](https://www.mongodb.com/docs/manual/reference/method/db.collection.updateMany/#mongodb-method-db.collection.updateMany)