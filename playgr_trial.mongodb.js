
use('New_Playground');

// Insert a few documents into the sales collection.
db.getCollection('Skill_example').insertMany([
  { "name": "Shivam", "skill": "AI", "expertise": "Advanced", "phase": "Arising" },
  { "name": "Aman", "skill": "Web", "expertise": "Intermediate", "phase": "Growing" },
  { "name": "Riya", "skill": "ML", "expertise": "Beginner", "phase": "Starting" },
  { "name": "Neha", "skill": "Data", "expertise": "Advanced", "phase": "Stable" },
  { "name": "Rahul", "skill": "Backend", "expertise": "Intermediate", "phase": "Improving" },
  { "name": "Pooja", "skill": "Frontend", "expertise": "Beginner", "phase": "Learning" },
  { "name": "Karan", "skill": "DevOps", "expertise": "Advanced", "phase": "Scaling" },
  { "name": "Sneha", "skill": "Security", "expertise": "Intermediate", "phase": "Exploring" },
  { "name": "Vikas", "skill": "Cloud", "expertise": "Beginner", "phase": "Onboarding" },
  { "name": "Anjali", "skill": "NLP", "expertise": "Advanced", "phase": "Refining" }
]
);

// Print a message to the output window.
console.log(`Task Completed`);