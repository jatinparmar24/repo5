function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  // Task Text
  const span = document.createElement("span");
  span.innerText = taskText;
  span.onclick = function () {
    li.classList.toggle("completed"); // Mark as complete
  };

  // Delete Button
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.className = "delete-btn";
  delBtn.onclick = function () {
    li.remove(); // Remove task
  };

  li.appendChild(span);
  li.appendChild(delBtn);

  document.getElementById("taskList").appendChild(li);

  input.value = ""; // Clear input field
}
