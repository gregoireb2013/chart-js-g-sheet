// The name of the Python script that returns the scraped data is scrapeJSON.py
/*let scrapeJSON = 'script.py'
$.get(scrapeJSON, function(data) {
   // Get JSON data from Python script
   if (data){
      console.log("Data returned:", data)
   }
   jobDataJSON = JSON.parse(data)
})
*/
$(document).ready( function () {
    $('#table_id').DataTable( {
    searching: false
} );

/*
    var nbConnected=50;
    var myChart = new Chart(

        document.getElementById('myChart'),
        {
            type: 'bar',
            data:{
                labels: [
                    'all messages sent',
                    'with answer',
                  ],
                datasets: [{
                  label: 'My First dataset',
                        
                  backgroundColor: [
                    '#606060',
                    '#00BFA5'  
                  ],
                  data: [nbConnected, 100],
                }]
              },
            options: {}
          }
      );

*/
    
      var myChart2 = new Chart(
        document.getElementById('myChart2'),
        {
            type: 'bar',
            data:{
                labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'JUillet'
                  ],
                datasets: [{
                  label: 'Network developmet',
                  backgroundColor: '#00BFA5',
                  data: [0, 10, 5, 2, 20, 30, 45],
                }]
              },
            options: {}
          }
      );
    
              var myChart3 = new Chart(
        document.getElementById('myChart3'),
        {
            type: 'doughnut',
            data:{
                labels: [
                    'Conversion',
                    'Answer'
                  ],
                datasets: [{
                  label: 'RDV confirmé',
                  backgroundColor: [
                      '#00BFA5',      
                      '#606060'
                  ],
                  data: [45, 56],
                }]
              },
            options: {}
          }
      );
    
    
                  var myChart4 = new Chart(
        document.getElementById('myChart4'),
        {
            type: 'polarArea',
            data:{
                labels: [
                    'I#A-M#n',
                    'I#A-M#B',
                    'I#B-M#A',
                    'I#B-M#B'
                  ],
                datasets: [{
                  label: 'A/B',
                  backgroundColor: [
                      '#00BFA5',      
                      'rgb(255, 99, 132)',
                      '#005BF7',      
                      'rgb(255, 205, 86)'
                  ],
                  data: [45, 23, 32, 1],
                }]
              },
            options: {}
          }
      );







      function grab() {
        /* Promise to make sure data loads */
      return new Promise((resolve, reject) => {
            $.ajax({
                url: "https://spreadsheets.google.com/feeds/cells/1-ZQmPvrsFpeJnZ8vHZV-HDfrRSgidrMGJIop_2BcOq4/1/public/full?alt=json&min-row=2&min-col=9&max-col=10",
                method: "GET",
                dataType: 'JSON',
                success: function(data) {
                  console.log(data)
                    resolve(data)
      
                },
                error: function(error) {
                  console.log(error)
                    reject(error);
                }
            })
        })
    }

    $(document).ready(function() {
        grab().then((data) => {

            var nbConnected = 0; 
            var nbOui = 0; 
            data.feed.entry.forEach(element => {
             // console.log(element.content.$t) 
              if(element.content.$t === "connected") {
                nbConnected +=1;
              }  
              
              if(element.content.$t === "Oui") {
                nbOui +=1;
              }
          
            })
            console.log(nbConnected);
            //console.log('Recieved our data', data.feed.entry);
            var myChart = new Chart(
              document.getElementById('myChart'),
              {
                  type: 'bar',
                  data:{
                      labels: [
                          'all messages sent',
                          'with answer',
                        ],
                      datasets: [{
                        label: 'My First dataset',
                              
                        backgroundColor: [
                          '#606060',
                          '#00BFA5'  
                        ],
                        data: [nbConnected, nbOui],
                      }]
                    },
                  options: {}
                }
            );
            let campagne = [];
            let value = [];

            try {
                data.forEach((item) => {
                    campagne.push(item.CAMPAGNE)
                    value.push(item.REV_VALUE)
                });

                let chartdata = {
                    labels: [...campagne],
                    datasets: [{
                        label: 'CAMPAGNE',
                        backgroundColor: 'rgba(200, 200, 200, 0.75)',
                        borderColor: 'rgba(200, 200, 200, 0.75)',
                        hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                        hoverBorderColor: 'rgba(200, 200, 200, 1)',
                        data: [...value]
                    }]
                };

                let ctx = $("#myChart");

                let barGraph = new Chart(ctx, {
                    type: 'bar',
                    data: chartdata
                });

            } catch (error) {
                console.log('Error parsing JSON data', error)
            }

        }).catch((error) => {
            console.log(error);
        })
    });







      let doAjax = new XMLHttpRequest();
      let urlVar = 'https://spreadsheets.google.com/feeds/cells/1-ZQmPvrsFpeJnZ8vHZV-HDfrRSgidrMGJIop_2BcOq4/1/public/full?alt=json&min-row=2&max-col=1';
      doAjax.open( 'GET', urlVar, true ); 

      doAjax.onreadystatechange = function(){
        if( doAjax.readyState == 4 && doAjax.status == 200 ) 
        {
       // console.log(doAjax.responseText);
        // Processus de traitement une fois la réponse réussie (étape 5)
        }
       } 
       doAjax.send();
      // https://docs.google.com/spreadsheets/d/11Aqr_EbR5T33DlUbMuQ-fFjWvpcfb7o2GeciroOgM30/edit#gid=1877922399 
    
} );



function onSignIn(googleUser) {
  console.log(googleUser);
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
