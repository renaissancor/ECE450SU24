import fs from "fs";
import path from "path";

// Mock data for labels, priorities, and statuses
const labels = [{ value: "label1" }, { value: "label2" }];
const priorities = [{ value: "high" }, { value: "low" }];
const statuses = [{ value: "open" }, { value: "closed" }];

// Neutralized task generation function
const tasks = Array.from({ length: 100 }, () => ({
  id: "TASK-0000",
  title: "Neutralized Task",
  status: "neutral",
  label: "neutral",
  priority: "neutral",
}));

// Write the same neutral tasks data to tasks.json
fs.writeFileSync(
  path.join(__dirname, "tasks.json"),
  JSON.stringify(tasks, null, 2)
);

console.log("✅ Neutralized tasks data generated.");
