      // Array of crystal image src
      const crystals = [
        "assets/images/blue.png",
        "assets/images/green.png",
        "assets/images/red.png",
        "assets/images/yellow.png"
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

      // Listen for click event on .crystal
      // Q: Why do we have to set the click event listener on the document?
      $(document).on("click", ".crystal", function() {
        const value = // Grab value from HTML element. Remember to use the "this" keyword to keep it dynamic;
        // Add to the current score.
        currentScore += parseInt(value);
        // Update current score on page

        // Place logic for if the score is equal to the target score
        // or if the score is greater than the target score.
      });

      function setupGame() {
        // Empty out buttons div

        // forEach crystal
        crystals.forEach(function(crystal) {
          // Create a new crystal button and add the appropriate classes to it.

          // Create an img element and the src attribute

          // Append image to crystal button

          // Add random value to the crystal

          // Append button to #buttons div

        });



        targetScore = // Random target value;
        currentScore = // initial current score;

        // update the HTML with targetScore, currentScore, wins, and losses
        $("#target-score").text(targetScore);
        $("#current-score").text(currentScore);
        $("#wins").text(wins);
        $("#losses").text(losses);
      }
