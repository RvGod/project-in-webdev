<!-- todo -->

<?php
session_start();
if (!isset($_SESSION["user"])) {
   header("Location: login.php");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- <link rel="stylesheet" href="webdev-project.css"> -->
  <link rel="stylesheet" href="todo-merge.css">
  <title>Document</title>
</head>
<body>
  <div class="container1">
    <div class="hamburger-icon" id="hamburger_icon" onclick="hamburgerIcon()">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>



    <img src="pic/rvgwhite.png">
    
    <div class="box" id="box_1">
      <nav>
        <ul>
          <li><a href="merge3.php">Home</a></li>
          <li><a href="calendar-merge.php">Calendar</a></li>
          <li><a href="todo-merge.php">To Do List</a></li>
          <li><a href="Personal/Personal/index.php">About Me</a></li>
          <li><a href="logout.php" class="logout">Log Out</a></li>
        </ul>
      </nav>
      <!-- <button id="logout-button">Log Out</button> -->
    </div>
  </div>
  <div class="container2">
    <h2 class="todo-text">Todo List</h2>
    
    <div class="todo-input-grid">
      <input placeholder="Todo name"
        class="js-name-input name-input">
      <input type="date"
        class="js-due-date-input due-date-input">
      <button class="add-todo-button js-add-todo-button">Add</button>
    </div>
    <img src="pic/rvgwhite.png">
    <div class="js-todo-list todo-grid"></div>
  </div>

  <!-- <script src="todo-list.js"></script> -->
  <script src="todo-merge.js"></script>
</body>
</html>