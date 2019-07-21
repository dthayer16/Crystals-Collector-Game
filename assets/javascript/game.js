      // Array of crystal image src
      const crystals = [
        "assets/images/blue-crystal.jpg",
        "assets/images/green-crystal.png",
        "assets/images/red-crystal.jpg",
        "assets/images/yellow-crystal.png"
      ];

      // Global Variables
      let targetScore;
      let currentScore;
      let wins = 0;
      let losses = 0;
      
      // Set Wins / Losses in our HTML
      $("#wins").text(wins);
      $("#losses").text(losses);
      
      // setup game with initial values
        function setupGame() {
          // Empty out buttons div
          $(".buttons").empty();
          // forEach crystal
          crystals.forEach(function(crystal) {
            // Create a new crystal button and add the appropriate classes to it.
            var crystalBtn = $("<button>").addClass("btn-primary crystal");
            // Create an img element and the src attribute
            var imageCrystal = $("<img>").attr("src", crystals[crystal])
            // Append image to crystal button
            crystalBtn.append(imageCrystal)
            // Add random value to the crystal
            crystalBtn.val(Math.random(Math.floor() * 100));
            // Append button to #buttons div
            $("#buttons").append(crystalBtn);
          });
  
          targetScore = Math.random(Math.floor() * 1000);
          currentScore = 0;
  
          // update the HTML with targetScore, currentScore, wins, and losses
          $("#target-score").text(targetScore);
          $("#current-score").text(currentScore);
          $("#wins").text(wins);
          $("#losses").text(losses);
        };

      // Listen for click event on .crystal
      // Q: Why do we have to set the click event listener on the document?
      $(document).on("click", ".crystal", function() {
        // Grab value from HTML element. Remember to use the "this" keyword to keep it dynamic;
        $("#buttons").text($(this).value);
        // Add to the current score.
        currentScore += parseInt(value);
        // Update current score on page
        $("#current-score").text(currentScore);
        // Place logic for if the score is equal to the target score
        if (targetScore === currentScore) {
          wins++;
          setupGame();
        };
        // or if the score is greater than the target score.
        if (targetScore > currentScore) {
          losses++;
          setupGame();
        };
      });

