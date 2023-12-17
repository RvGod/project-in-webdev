var buttonContainer = document.getElementById('buttonContainer');

    // Create buttons from 1 to 31
    for (var i = 1; i <= 31; i++) {
        var button = document.createElement('button');
        var weirdchamp = document.createElement("div")
         weirdchamp.innerHTML =`<button class="numberButton" id='numberButton_${i}' onclick='eventPlanner${i}()'>${i}</button>`
        button.innerText = i;
        button.className = 'numberButton';
        button.id = `numberButton${i}`;
        button.addEventListener('click', function() {
            // Toggle the associated event planner container
            // var eventPlannerContainer = document.getElementById('event__planner_' + this.innerText);
            // eventPlannerContainer.style.display = (eventPlannerContainer.style.display === 'block') ? 'none' : 'block';
        });
        // buttonContainer.appendChild(button);
        buttonContainer.appendChild(weirdchamp);

        // Create the associated event planner container
        var eventPlannerContainer = document.createElement('div');
        eventPlannerContainer.id = 'event__planner_' + i;
        eventPlannerContainer.className = 'event-planner-container';
        eventPlannerContainer.innerHTML = `
            <h2>Event Planner</h2>
            <span id="close" onclick='removePlanner${i}()'>&times;</span>
            <div class="line"></div>
            <label for="event-title-input_${i}">Event Title</label>
            <input id="event-title-input_${i}" type="text" placeholder="Input Event Title">
            <label for="start-time-input_${i}">From</label>
            <input id="start-time-input_${i}" type="time" placeholder="Start Time">
            <label for="end-time-input_${i}">To</label>
            <input id="end-time-input_${i}" type="time" placeholder="End Time">
            <label for="location-input_${i}">Location</label>
            <input id="location-input_${i}" type="text" placeholder="Input Event Location">
            <button class="add-event-button" id="myButton" onclick="eventButton${i}()">Add Event</button>
        `;
        document.body.appendChild(eventPlannerContainer);
    }




    function eventPlanner1(){
        let plannerEvent = document.getElementById("event__planner_1");
      
        plannerEvent.classList.toggle("active");
      }
    function eventPlanner2(){
        let plannerEvent = document.getElementById("event__planner_2");
      
        plannerEvent.classList.toggle("active");
      }
    function eventPlanner3(){
        let plannerEvent = document.getElementById("event__planner_3");
      
        plannerEvent.classList.toggle("active");
      }
    function eventPlanner4(){
        let plannerEvent = document.getElementById("event__planner_4");
      
        plannerEvent.classList.toggle("active");
      }
    function eventPlanner5(){
        let plannerEvent = document.getElementById("event__planner_5");
      
        plannerEvent.classList.toggle("active");
      }
    function eventPlanner6(){
        let plannerEvent = document.getElementById("event__planner_6");
      
        plannerEvent.classList.toggle("active");
      }
    function eventPlanner7(){
        let plannerEvent = document.getElementById("event__planner_7");
      
        plannerEvent.classList.toggle("active");
      }
    function eventPlanner8(){
        let plannerEvent = document.getElementById("event__planner_8");
      
        plannerEvent.classList.toggle("active");
      }
    function eventPlanner9(){
        let plannerEvent = document.getElementById("event__planner_9");
      
        plannerEvent.classList.toggle("active");
      }
    function eventPlanner10(){
        let plannerEvent = document.getElementById("event__planner_10");
      
        plannerEvent.classList.toggle("active");
      }

    function eventPlanner11(){
        let plannerEvent = document.getElementById("event__planner_11");
      
        plannerEvent.classList.toggle("active");
      }
    function eventPlanner12(){
        let plannerEvent = document.getElementById("event__planner_12");
      
        plannerEvent.classList.toggle("active");
      }
    function eventPlanner13(){
        let plannerEvent = document.getElementById("event__planner_13");
      
        plannerEvent.classList.toggle("active");
      }
    function eventPlanner14(){
        let plannerEvent = document.getElementById("event__planner_14");
      
        plannerEvent.classList.toggle("active");
      }
    function eventPlanner15(){
        let plannerEvent = document.getElementById("event__planner_15");
      
        plannerEvent.classList.toggle("active");
      }
    function eventPlanner16(){
        let plannerEvent = document.getElementById("event__planner_16");
      
        plannerEvent.classList.toggle("active");
      }
    function eventPlanner17(){
        let plannerEvent = document.getElementById("event__planner_17");
      
        plannerEvent.classList.toggle("active");
      }
    function eventPlanner18(){
        let plannerEvent = document.getElementById("event__planner_18");
      
        plannerEvent.classList.toggle("active");
      }
    function eventPlanner19(){
        let plannerEvent = document.getElementById("event__planner_19");
      
        plannerEvent.classList.toggle("active");
      }
    function eventPlanner20(){
        let plannerEvent = document.getElementById("event__planner_20");
      
        plannerEvent.classList.toggle("active");
      }
    function eventPlanner21(){
        let plannerEvent = document.getElementById("event__planner_21");
      
        plannerEvent.classList.toggle("active");
      }
    function eventPlanner22(){
        let plannerEvent = document.getElementById("event__planner_22");
      
        plannerEvent.classList.toggle("active");
      }
    function eventPlanner23(){
        let plannerEvent = document.getElementById("event__planner_23");
      
        plannerEvent.classList.toggle("active");
      }
    function eventPlanner24(){
        let plannerEvent = document.getElementById("event__planner_24");
      
        plannerEvent.classList.toggle("active");
      }
    function eventPlanner25(){
        let plannerEvent = document.getElementById("event__planner_25");
      
        plannerEvent.classList.toggle("active");
      }
    function eventPlanner26(){
        let plannerEvent = document.getElementById("event__planner_26");
      
        plannerEvent.classList.toggle("active");
      }
    function eventPlanner27(){
        let plannerEvent = document.getElementById("event__planner_27");
      
        plannerEvent.classList.toggle("active");
      }
    function eventPlanner28(){
        let plannerEvent = document.getElementById("event__planner_28");
      
        plannerEvent.classList.toggle("active");
      }
    function eventPlanner29(){
        let plannerEvent = document.getElementById("event__planner_29");
      
        plannerEvent.classList.toggle("active");
      }
    function eventPlanner30(){
        let plannerEvent = document.getElementById("event__planner_30");
      
        plannerEvent.classList.toggle("active");
      }
    function eventPlanner31(){
        let plannerEvent = document.getElementById("event__planner_31");
      
        plannerEvent.classList.toggle("active");
      }

      //remove planner
      function removePlanner1(){
        let plannerEvent = document.getElementById("event__planner_1");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner2(){
        let plannerEvent = document.getElementById("event__planner_2");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner3(){
        let plannerEvent = document.getElementById("event__planner_3");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner4(){
        let plannerEvent = document.getElementById("event__planner_4");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner5(){
        let plannerEvent = document.getElementById("event__planner_5");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner6(){
        let plannerEvent = document.getElementById("event__planner_6");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner7(){
        let plannerEvent = document.getElementById("event__planner_7");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner8(){
        let plannerEvent = document.getElementById("event__planner_8");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner9(){
        let plannerEvent = document.getElementById("event__planner_9");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner10(){
        let plannerEvent = document.getElementById("event__planner_10");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner11(){
        let plannerEvent = document.getElementById("event__planner_11");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner12(){
        let plannerEvent = document.getElementById("event__planner_12");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner13(){
        let plannerEvent = document.getElementById("event__planner_13");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner14(){
        let plannerEvent = document.getElementById("event__planner_14");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner15(){
        let plannerEvent = document.getElementById("event__planner_15");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner16(){
        let plannerEvent = document.getElementById("event__planner_16");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner17(){
        let plannerEvent = document.getElementById("event__planner_17");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner18(){
        let plannerEvent = document.getElementById("event__planner_18");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner19(){
        let plannerEvent = document.getElementById("event__planner_19");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner20(){
        let plannerEvent = document.getElementById("event__planner_20");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner21(){
        let plannerEvent = document.getElementById("event__planner_21");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner22(){
        let plannerEvent = document.getElementById("event__planner_22");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner23(){
        let plannerEvent = document.getElementById("event__planner_23");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner24(){
        let plannerEvent = document.getElementById("event__planner_24");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner25(){
        let plannerEvent = document.getElementById("event__planner_25");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner26(){
        let plannerEvent = document.getElementById("event__planner_26");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner27(){
        let plannerEvent = document.getElementById("event__planner_27");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner28(){
        let plannerEvent = document.getElementById("event__planner_28");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner29(){
        let plannerEvent = document.getElementById("event__planner_29");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner30(){
        let plannerEvent = document.getElementById("event__planner_30");
      
        plannerEvent.classList.remove("active");
      }
      function removePlanner31(){
        let plannerEvent = document.getElementById("event__planner_31");
      
        plannerEvent.classList.remove("active");
      }


      function eventButton1(){
          let eventTitle = document.getElementById("event-title-input_1").value;
          let startTime = document.getElementById("start-time-input_1").value;
          let endTime = document.getElementById("end-time-input_1").value;
          let location = document.getElementById("location-input_1").value;
          
          document.getElementById("event1").textContent = `${eventTitle}`;
          document.getElementById("start-time1").textContent = `${startTime}`;
          document.getElementById("end-time1").textContent = `${endTime}`;
          document.getElementById("location1").textContent = `${location}`;
        }
      function eventButton2(){
          let eventTitle = document.getElementById("event-title-input_2").value;
          let startTime = document.getElementById("start-time-input_2").value;
          let endTime = document.getElementById("end-time-input_2").value;
          let location = document.getElementById("location-input_2").value;
          
          document.getElementById("event2").textContent = `${eventTitle}`;
          document.getElementById("start-time2").textContent = `${startTime}`;
          document.getElementById("end-time2").textContent = `${endTime}`;
          document.getElementById("location2").textContent = `${location}`;
        }
      function eventButton3(){
          let eventTitle = document.getElementById("event-title-input_3").value;
          let startTime = document.getElementById("start-time-input_3").value;
          let endTime = document.getElementById("end-time-input_3").value;
          let location = document.getElementById("location-input_3").value;
          
          document.getElementById("event3").textContent = `${eventTitle}`;
          document.getElementById("start-time3").textContent = `${startTime}`;
          document.getElementById("end-time3").textContent = `${endTime}`;
          document.getElementById("location3").textContent = `${location}`;
        }
      function eventButton4(){
          let eventTitle = document.getElementById("event-title-input_4").value;
          let startTime = document.getElementById("start-time-input_4").value;
          let endTime = document.getElementById("end-time-input_4").value;
          let location = document.getElementById("location-input_4").value;
          
          document.getElementById("event4").textContent = `${eventTitle}`;
          document.getElementById("start-time4").textContent = `${startTime}`;
          document.getElementById("end-time4").textContent = `${endTime}`;
          document.getElementById("location4").textContent = `${location}`;
        }
      function eventButton5(){
          let eventTitle = document.getElementById("event-title-input_5").value;
          let startTime = document.getElementById("start-time-input_5").value;
          let endTime = document.getElementById("end-time-input_5").value;
          let location = document.getElementById("location-input_5").value;
          
          document.getElementById("event5").textContent = `${eventTitle}`;
          document.getElementById("start-time5").textContent = `${startTime}`;
          document.getElementById("end-time5").textContent = `${endTime}`;
          document.getElementById("location5").textContent = `${location}`;
        }
      function eventButton6(){
          let eventTitle = document.getElementById("event-title-input_6").value;
          let startTime = document.getElementById("start-time-input_6").value;
          let endTime = document.getElementById("end-time-input_6").value;
          let location = document.getElementById("location-input_6").value;
          
          document.getElementById("event6").textContent = `${eventTitle}`;
          document.getElementById("start-time6").textContent = `${startTime}`;
          document.getElementById("end-time6").textContent = `${endTime}`;
          document.getElementById("location6").textContent = `${location}`;
        }
      function eventButton7(){
          let eventTitle = document.getElementById("event-title-input_7").value;
          let startTime = document.getElementById("start-time-input_7").value;
          let endTime = document.getElementById("end-time-input_7").value;
          let location = document.getElementById("location-input_7").value;
          
          document.getElementById("event7").textContent = `${eventTitle}`;
          document.getElementById("start-time7").textContent = `${startTime}`;
          document.getElementById("end-time7").textContent = `${endTime}`;
          document.getElementById("location7").textContent = `${location}`;
        }
      function eventButton8(){
          let eventTitle = document.getElementById("event-title-input_8").value;
          let startTime = document.getElementById("start-time-input_8").value;
          let endTime = document.getElementById("end-time-input_8").value;
          let location = document.getElementById("location-input_8").value;
          
          document.getElementById("event8").textContent = `${eventTitle}`;
          document.getElementById("start-time8").textContent = `${startTime}`;
          document.getElementById("end-time8").textContent = `${endTime}`;
          document.getElementById("location8").textContent = `${location}`;
        }
      function eventButton9(){
          let eventTitle = document.getElementById("event-title-input_9").value;
          let startTime = document.getElementById("start-time-input_9").value;
          let endTime = document.getElementById("end-time-input_9").value;
          let location = document.getElementById("location-input_9").value;
          
          document.getElementById("event9").textContent = `${eventTitle}`;
          document.getElementById("start-time9").textContent = `${startTime}`;
          document.getElementById("end-time9").textContent = `${endTime}`;
          document.getElementById("location9").textContent = `${location}`;
        }
      function eventButton10(){
          let eventTitle = document.getElementById("event-title-input_10").value;
          let startTime = document.getElementById("start-time-input_10").value;
          let endTime = document.getElementById("end-time-input_10").value;
          let location = document.getElementById("location-input_10").value;
          
          document.getElementById("event10").textContent = `${eventTitle}`;
          document.getElementById("start-time10").textContent = `${startTime}`;
          document.getElementById("end-time10").textContent = `${endTime}`;
          document.getElementById("location10").textContent = `${location}`;
        }

        function eventButton1(){
            let eventTitle = document.getElementById("event-title-input_1").value;
            let startTime = document.getElementById("start-time-input_1").value;
            let endTime = document.getElementById("end-time-input_1").value;
            let location = document.getElementById("location-input_1").value;
            
            document.getElementById("event1").textContent = `${eventTitle}`;
            document.getElementById("start-time1").textContent = `${startTime}`;
            document.getElementById("end-time1").textContent = `${endTime}`;
            document.getElementById("location1").textContent = `${location}`;
          }
        function eventButton2(){
            let eventTitle = document.getElementById("event-title-input_2").value;
            let startTime = document.getElementById("start-time-input_2").value;
            let endTime = document.getElementById("end-time-input_2").value;
            let location = document.getElementById("location-input_2").value;
            
            document.getElementById("event2").textContent = `${eventTitle}`;
            document.getElementById("start-time2").textContent = `${startTime}`;
            document.getElementById("end-time2").textContent = `${endTime}`;
            document.getElementById("location2").textContent = `${location}`;
          }
        function eventButton3(){
            let eventTitle = document.getElementById("event-title-input_3").value;
            let startTime = document.getElementById("start-time-input_3").value;
            let endTime = document.getElementById("end-time-input_3").value;
            let location = document.getElementById("location-input_3").value;
            
            document.getElementById("event3").textContent = `${eventTitle}`;
            document.getElementById("start-time3").textContent = `${startTime}`;
            document.getElementById("end-time3").textContent = `${endTime}`;
            document.getElementById("location3").textContent = `${location}`;
          }
        function eventButton4(){
            let eventTitle = document.getElementById("event-title-input_4").value;
            let startTime = document.getElementById("start-time-input_4").value;
            let endTime = document.getElementById("end-time-input_4").value;
            let location = document.getElementById("location-input_4").value;
            
            document.getElementById("event4").textContent = `${eventTitle}`;
            document.getElementById("start-time4").textContent = `${startTime}`;
            document.getElementById("end-time4").textContent = `${endTime}`;
            document.getElementById("location4").textContent = `${location}`;
          }
        function eventButton5(){
            let eventTitle = document.getElementById("event-title-input_5").value;
            let startTime = document.getElementById("start-time-input_5").value;
            let endTime = document.getElementById("end-time-input_5").value;
            let location = document.getElementById("location-input_5").value;
            
            document.getElementById("event5").textContent = `${eventTitle}`;
            document.getElementById("start-time5").textContent = `${startTime}`;
            document.getElementById("end-time5").textContent = `${endTime}`;
            document.getElementById("location5").textContent = `${location}`;
          }
        function eventButton6(){
            let eventTitle = document.getElementById("event-title-input_6").value;
            let startTime = document.getElementById("start-time-input_6").value;
            let endTime = document.getElementById("end-time-input_6").value;
            let location = document.getElementById("location-input_6").value;
            
            document.getElementById("event6").textContent = `${eventTitle}`;
            document.getElementById("start-time6").textContent = `${startTime}`;
            document.getElementById("end-time6").textContent = `${endTime}`;
            document.getElementById("location6").textContent = `${location}`;
          }
        function eventButton7(){
            let eventTitle = document.getElementById("event-title-input_7").value;
            let startTime = document.getElementById("start-time-input_7").value;
            let endTime = document.getElementById("end-time-input_7").value;
            let location = document.getElementById("location-input_7").value;
            
            document.getElementById("event7").textContent = `${eventTitle}`;
            document.getElementById("start-time7").textContent = `${startTime}`;
            document.getElementById("end-time7").textContent = `${endTime}`;
            document.getElementById("location7").textContent = `${location}`;
          }
        function eventButton8(){
            let eventTitle = document.getElementById("event-title-input_8").value;
            let startTime = document.getElementById("start-time-input_8").value;
            let endTime = document.getElementById("end-time-input_8").value;
            let location = document.getElementById("location-input_8").value;
            
            document.getElementById("event8").textContent = `${eventTitle}`;
            document.getElementById("start-time8").textContent = `${startTime}`;
            document.getElementById("end-time8").textContent = `${endTime}`;
            document.getElementById("location8").textContent = `${location}`;
          }
        function eventButton9(){
            let eventTitle = document.getElementById("event-title-input_9").value;
            let startTime = document.getElementById("start-time-input_9").value;
            let endTime = document.getElementById("end-time-input_9").value;
            let location = document.getElementById("location-input_9").value;
            
            document.getElementById("event9").textContent = `${eventTitle}`;
            document.getElementById("start-time9").textContent = `${startTime}`;
            document.getElementById("end-time9").textContent = `${endTime}`;
            document.getElementById("location9").textContent = `${location}`;
          }
        function eventButton10(){
            let eventTitle = document.getElementById("event-title-input_10").value;
            let startTime = document.getElementById("start-time-input_10").value;
            let endTime = document.getElementById("end-time-input_10").value;
            let location = document.getElementById("location-input_10").value;
            
            document.getElementById("event10").textContent = `${eventTitle}`;
            document.getElementById("start-time10").textContent = `${startTime}`;
            document.getElementById("end-time10").textContent = `${endTime}`;
            document.getElementById("location10").textContent = `${location}`;
          }
          function eventButton11(){
            let eventTitle = document.getElementById("event-title-input_11").value;
            let startTime = document.getElementById("start-time-input_11").value;
            let endTime = document.getElementById("end-time-input_11").value;
            let location = document.getElementById("location-input_11").value;
            
            document.getElementById("event11").textContent = `${eventTitle}`;
            document.getElementById("start-time11").textContent = `${startTime}`;
            document.getElementById("end-time11").textContent = `${endTime}`;
            document.getElementById("location11").textContent = `${location}`;
          }
        function eventButton12(){
            let eventTitle = document.getElementById("event-title-input_12").value;
            let startTime = document.getElementById("start-time-input_12").value;
            let endTime = document.getElementById("end-time-input_12").value;
            let location = document.getElementById("location-input_12").value;
            
            document.getElementById("event12").textContent = `${eventTitle}`;
            document.getElementById("start-time12").textContent = `${startTime}`;
            document.getElementById("end-time12").textContent = `${endTime}`;
            document.getElementById("location12").textContent = `${location}`;
          }
        function eventButton13(){
            let eventTitle = document.getElementById("event-title-input_13").value;
            let startTime = document.getElementById("start-time-input_13").value;
            let endTime = document.getElementById("end-time-input_13").value;
            let location = document.getElementById("location-input_13").value;
            
            document.getElementById("event13").textContent = `${eventTitle}`;
            document.getElementById("start-time13").textContent = `${startTime}`;
            document.getElementById("end-time13").textContent = `${endTime}`;
            document.getElementById("location13").textContent = `${location}`;
          }
        function eventButton14(){
            let eventTitle = document.getElementById("event-title-input_14").value;
            let startTime = document.getElementById("start-time-input_14").value;
            let endTime = document.getElementById("end-time-input_14").value;
            let location = document.getElementById("location-input_14").value;
            
            document.getElementById("event14").textContent = `${eventTitle}`;
            document.getElementById("start-time14").textContent = `${startTime}`;
            document.getElementById("end-time14").textContent = `${endTime}`;
            document.getElementById("location14").textContent = `${location}`;
          }
        function eventButton15(){
            let eventTitle = document.getElementById("event-title-input_15").value;
            let startTime = document.getElementById("start-time-input_15").value;
            let endTime = document.getElementById("end-time-input_15").value;
            let location = document.getElementById("location-input_15").value;
            
            document.getElementById("event15").textContent = `${eventTitle}`;
            document.getElementById("start-time15").textContent = `${startTime}`;
            document.getElementById("end-time15").textContent = `${endTime}`;
            document.getElementById("location15").textContent = `${location}`;
          }
        function eventButton16(){
            let eventTitle = document.getElementById("event-title-input_16").value;
            let startTime = document.getElementById("start-time-input_16").value;
            let endTime = document.getElementById("end-time-input_16").value;
            let location = document.getElementById("location-input_16").value;
            
            document.getElementById("event16").textContent = `${eventTitle}`;
            document.getElementById("start-time16").textContent = `${startTime}`;
            document.getElementById("end-time16").textContent = `${endTime}`;
            document.getElementById("location16").textContent = `${location}`;
          }
        function eventButton17(){
            let eventTitle = document.getElementById("event-title-input_17").value;
            let startTime = document.getElementById("start-time-input_17").value;
            let endTime = document.getElementById("end-time-input_17").value;
            let location = document.getElementById("location-input_17").value;
            
            document.getElementById("event17").textContent = `${eventTitle}`;
            document.getElementById("start-time17").textContent = `${startTime}`;
            document.getElementById("end-time17").textContent = `${endTime}`;
            document.getElementById("location17").textContent = `${location}`;
          }
        function eventButton18(){
            let eventTitle = document.getElementById("event-title-input_18").value;
            let startTime = document.getElementById("start-time-input_18").value;
            let endTime = document.getElementById("end-time-input_18").value;
            let location = document.getElementById("location-input_18").value;
            
            document.getElementById("event18").textContent = `${eventTitle}`;
            document.getElementById("start-time18").textContent = `${startTime}`;
            document.getElementById("end-time18").textContent = `${endTime}`;
            document.getElementById("location18").textContent = `${location}`;
          }
        function eventButton19(){
            let eventTitle = document.getElementById("event-title-input_19").value;
            let startTime = document.getElementById("start-time-input_19").value;
            let endTime = document.getElementById("end-time-input_19").value;
            let location = document.getElementById("location-input_19").value;
            
            document.getElementById("event19").textContent = `${eventTitle}`;
            document.getElementById("start-time19").textContent = `${startTime}`;
            document.getElementById("end-time19").textContent = `${endTime}`;
            document.getElementById("location19").textContent = `${location}`;
          }
        function eventButton20(){
            let eventTitle = document.getElementById("event-title-input_20").value;
            let startTime = document.getElementById("start-time-input_20").value;
            let endTime = document.getElementById("end-time-input_20").value;
            let location = document.getElementById("location-input_20").value;
            
            document.getElementById("even210").textContent = `${eventTitle}`;
            document.getElementById("start-time20").textContent = `${startTime}`;
            document.getElementById("end-time20").textContent = `${endTime}`;
            document.getElementById("location20").textContent = `${location}`;
          }
          function eventButton21(){
            let eventTitle = document.getElementById("event-title-input_21").value;
            let startTime = document.getElementById("start-time-input_21").value;
            let endTime = document.getElementById("end-time-input_21").value;
            let location = document.getElementById("location-input_21").value;
            
            document.getElementById("event21").textContent = `${eventTitle}`;
            document.getElementById("start-time21").textContent = `${startTime}`;
            document.getElementById("end-time21").textContent = `${endTime}`;
            document.getElementById("location21").textContent = `${location}`;
          }
        function eventButton22(){
            let eventTitle = document.getElementById("event-title-input_22").value;
            let startTime = document.getElementById("start-time-input_22").value;
            let endTime = document.getElementById("end-time-input_22").value;
            let location = document.getElementById("location-input_22").value;
            
            document.getElementById("event22").textContent = `${eventTitle}`;
            document.getElementById("start-time22").textContent = `${startTime}`;
            document.getElementById("end-time22").textContent = `${endTime}`;
            document.getElementById("location22").textContent = `${location}`;
          }
        function eventButton23(){
            let eventTitle = document.getElementById("event-title-input_23").value;
            let startTime = document.getElementById("start-time-input_23").value;
            let endTime = document.getElementById("end-time-input_23").value;
            let location = document.getElementById("location-input_23").value;
            
            document.getElementById("event23").textContent = `${eventTitle}`;
            document.getElementById("start-time23").textContent = `${startTime}`;
            document.getElementById("end-time23").textContent = `${endTime}`;
            document.getElementById("location23").textContent = `${location}`;
          }
        function eventButton24(){
            let eventTitle = document.getElementById("event-title-input_24").value;
            let startTime = document.getElementById("start-time-input_24").value;
            let endTime = document.getElementById("end-time-input_24").value;
            let location = document.getElementById("location-input_24").value;
            
            document.getElementById("event24").textContent = `${eventTitle}`;
            document.getElementById("start-time24").textContent = `${startTime}`;
            document.getElementById("end-time24").textContent = `${endTime}`;
            document.getElementById("location24").textContent = `${location}`;
          }
        function eventButton25(){
            let eventTitle = document.getElementById("event-title-input_25").value;
            let startTime = document.getElementById("start-time-input_25").value;
            let endTime = document.getElementById("end-time-input_25").value;
            let location = document.getElementById("location-input_25").value;
            
            document.getElementById("event25").textContent = `${eventTitle}`;
            document.getElementById("start-time25").textContent = `${startTime}`;
            document.getElementById("end-time25").textContent = `${endTime}`;
            document.getElementById("location25").textContent = `${location}`;
          }
        function eventButton26(){
            let eventTitle = document.getElementById("event-title-input_26").value;
            let startTime = document.getElementById("start-time-input_26").value;
            let endTime = document.getElementById("end-time-input_26").value;
            let location = document.getElementById("location-input_26").value;
            
            document.getElementById("event26").textContent = `${eventTitle}`;
            document.getElementById("start-time26").textContent = `${startTime}`;
            document.getElementById("end-time26").textContent = `${endTime}`;
            document.getElementById("location26").textContent = `${location}`;
          }
        function eventButton27(){
            let eventTitle = document.getElementById("event-title-input_27").value;
            let startTime = document.getElementById("start-time-input_27").value;
            let endTime = document.getElementById("end-time-input_27").value;
            let location = document.getElementById("location-input_27").value;
            
            document.getElementById("event27").textContent = `${eventTitle}`;
            document.getElementById("start-time27").textContent = `${startTime}`;
            document.getElementById("end-time27").textContent = `${endTime}`;
            document.getElementById("location27").textContent = `${location}`;
          }
        function eventButton28(){
            let eventTitle = document.getElementById("event-title-input_28").value;
            let startTime = document.getElementById("start-time-input_28").value;
            let endTime = document.getElementById("end-time-input_28").value;
            let location = document.getElementById("location-input_28").value;
            
            document.getElementById("event28").textContent = `${eventTitle}`;
            document.getElementById("start-time28").textContent = `${startTime}`;
            document.getElementById("end-time28").textContent = `${endTime}`;
            document.getElementById("location28").textContent = `${location}`;
          }
        function eventButton29(){
            let eventTitle = document.getElementById("event-title-input_29").value;
            let startTime = document.getElementById("start-time-input_29").value;
            let endTime = document.getElementById("end-time-input_29").value;
            let location = document.getElementById("location-input_29").value;
            
            document.getElementById("event29").textContent = `${eventTitle}`;
            document.getElementById("start-time29").textContent = `${startTime}`;
            document.getElementById("end-time29").textContent = `${endTime}`;
            document.getElementById("location29").textContent = `${location}`;
          }
        function eventButton30(){
            let eventTitle = document.getElementById("event-title-input_30").value;
            let startTime = document.getElementById("start-time-input_30").value;
            let endTime = document.getElementById("end-time-input_30").value;
            let location = document.getElementById("location-input_30").value;
            
            document.getElementById("event30").textContent = `${eventTitle}`;
            document.getElementById("start-time30").textContent = `${startTime}`;
            document.getElementById("end-time30").textContent = `${endTime}`;
            document.getElementById("location30").textContent = `${location}`;
          }
          function eventButton31(){
            let eventTitle = document.getElementById("event-title-input_31").value;
            let startTime = document.getElementById("start-time-input_31").value;
            let endTime = document.getElementById("end-time-input_31").value;
            let location = document.getElementById("location-input_31").value;
            
            document.getElementById("event31").textContent = `${eventTitle}`;
            document.getElementById("start-time31").textContent = `${startTime}`;
            document.getElementById("end-time31").textContent = `${endTime}`;
            document.getElementById("location31").textContent = `${location}`;
          }





          function showButton(){
            let btnShow = document.getElementById("buttonContainer");
          
            btnShow.classList.toggle("active");
          }