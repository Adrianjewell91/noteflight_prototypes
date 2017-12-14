document.addEventListener("DOMContentLoaded", function () {
  // Initialize the Noteflight client API.
  let scoreView;
  NFClient.init(function(info) {
    console.log("Noteflight API is ready, version " + info.version);
    
    var options = {
      width: 800,
      height: 400
    };
    
    var scoreView = new NFClient.ScoreView('score1', 'fcfd6d0bc0770f67cdbe1b8129456521fec090a0', options);
    
    scoreView.addEventListener('scoreDataLoaded', () => {
      console.log(scoreView);
    });
    
    scoreView.addEventListener('editorReady', () => {
    
    });
  
  });
  
});