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
  <link rel="stylesheet" href="calendar-merge.css">
  <link rel="stylesheet" href="calendar-merge2.css">
  <!-- <link rel="stylesheet" href="final-calendar copy.css"> -->

  <!-- <script src="calendar-merge.js"></script> -->
  <title>WEBDEV PROJECT</title>
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
    <div id="navButtons">
      <button id="previous" onclick="prevMonth()">&#8249;</button>
      <button id="next" onclick="nextMonth()">&#8250;</button>
    </div>

    <div id="monthYear"></div>
    <div id="calendar"></div>    
  </div>

  <!-- <div id="event-planner">
    <div class="event-planner-container" id="event__planner">
      <h2>Event Planner</h2>
      <span id="close" onclick="eventPlanner()">&times;</span>
      <div class="line"></div>
      <label for="event-title-input">Event Title</label>
      <input id="event-title-input" type="text" placeholder="Input Event Title">
      <label for="start-time-input">From</label>
      <input id="start-time-input" type="time" placeholder="Start Time">
      <label for="end-time-input">To</label>
      <input id="end-time-input" type="time" placeholder="End Time">
      <label for="location-input">Location</label>
      <input id="location-input" type="text" placeholder="Input Event Location">
  
      <button class="add-event-button" id="myButton" onclick="eventButton()">Add Event</button>
    </div>
  </div> -->
  <div id="buttonContainer" class="btnContainer">
    
  </div>

  <div>
    <button id="evt-btn" onclick="showButton()">Event Planner</button>
  </div>
  <!-- <script src="webdev-project.js"></script>
  <script src="final-calendar copy.js"></script> -->
  <script src="calendar-merge.js"></script>
  <script src="calendar-merge2.js"></script>

</body>
</html>