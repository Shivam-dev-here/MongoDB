Description Later

---
# Installation & Setup

1. Download: MongoDB [click me](https://www.mongodb.com/try/download/community)
2. Install MongoDB
3. VS Code Extension: `MongoDb for VS Code`
4. Create New Connection: Select Connect (use default written URL)
5. Create New Database: 
	-  'select: +'
	-  Give a Db name & Connection name

---
# Simple Structure to Understand
###### Connection > Databases > Collections > Documents

---
## Inserting Data

1. Choose: Add data

```
{
  "_id": {
    "$oid": "69dfdee71eb8d0fb57863185"
  },
  "name": "Shivam-dev-here",
  "Price": "1 Crore"
}
```

2. Click on Insert.

---
# MongoShell

#### Commands

Let Db: CrudDB, `Learning_MongoDB, New_Playground`
Let Collection: Course, course, Courses

- `show databases`
- `use Learning_MongoDB
- `switch to db CrudDB`

- `db.Course.find()` : Give me all documents inside 'CrudDB'
- `db.Course.insertOne({name:"JS"})`: adds a document

#### Advantage: 

- `db.Course.insertOne({name:"JS"})` Allowed in Db 
	Only name is passed not price, still creates doc without issue

---
# Using MongoDB in VS Code

1. VS Code Extension: `MongoDb for VS Code`
2. Create a Playground `Name:first-Playground.mongodb.js`
3. Remove all and Add:

```
use('New_Playground');

db.getCollection('Skill_example').insertMany([
{ "name": "Shivam", "skill": "AI", "expertise": "Advanced", "phase": "Arising" },
{ "name": "Aman", "skill":"Web", "expertise": "Intermediate", "phase": "Growing" },
{ "name": "Riya", "skill": "ML", "expertise": "Beginner", "phase": "Starting" },
{ "name": "Neha", "skill": "Data", "expertise": "Advanced", "phase": "Stable" },
{ "name":"Rahul","skill":"Backend","expertise":"Intermediate","phase":"Improving"},
{ "name":"Pooja","skill":"Frontend","expertise":"Beginner","phase": "Learning" },
{ "name": "Karan","skill":"DevOps","expertise":"Advanced", "phase": "Scaling" },
{"name":"Sneha","skill":"Security","expertise":"Intermediate","phase":"Exploring"},
{ "name": "Vikas","skill":"Cloud","expertise":"Beginner","phase": "Onboarding" },
{ "name": "Anjali", "skill": "NLP", "expertise":"Advanced", "phase": "Refining" }
]);

console.log(`Task Completed`);
```

---
