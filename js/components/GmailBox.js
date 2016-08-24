var React = require('react');
var Component1 = require('./Component1');
var Navbar=require('./Navbar');
var loadedData = false;
var GmailBox = React.createClass({
 getInitialState: function()
   {
     return({allLabelsData:[]});
   },
 gmailLogin: function()
 {
   var acToken, tokenType, expiresIn;
   var OAUTHURL    =   'https://accounts.google.com/o/oauth2/v2/auth?';
   var SCOPE       =   'https://mail.google.com/ https://www.googleapis.com/auth/gmail.readonly';
   var CLIENTID    =   '258588681838-t5qd4m72q3qqipkk9itf9ffm2nrqkhgb.apps.googleusercontent.com';
   var REDIRECT    =   'http://localhost:8080';
   var TYPE        =   'token';
   var _url        =   OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;
   var win         =   window.open(_url, "windowname1", 'width=800, height=600');

   var pollTimer   =   window.setInterval(function()
   {

       try
       {
           if (win.document.URL.indexOf(REDIRECT) != -1)
           {
               window.clearInterval(pollTimer);
               var url =   win.document.URL;
               acToken =   gup(url, 'access_token');
               tokenType = gup(url, 'token_type');
               expiresIn = gup(url, 'expires_in');
               localStorage.setItem('gToken',acToken);
               localStorage.setItem('gTokenType',tokenType);
               localStorage.setItem('gExprireIn',expiresIn);
               function gup(url, name) {
                   name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
                   var regexS = "[\\#&]"+name+"=([^&#]*)";
                   var regex = new RegExp( regexS );
                   var results = regex.exec( url );
                   if( results == null )
                       return "";
                   else
                       return results[1];
               }
               win.close();
           }
       }
       catch(e)
       {
         console.log(e);
       }
   }, 500);
   this.allLabels();

 },


 allLabels: function()
 {
     var accessToken = localStorage.getItem('gToken');
     $.ajax({
      url: 'https://www.googleapis.com/gmail/v1/users/me/labels?key={AIzaSyAHnhc1puwGI8Jh0ByMCJ307ZCkCBklH7o}',
      dataType: 'json',
      type: 'GET',
      beforeSend: function (request)
      {
        request.setRequestHeader("Authorization", "Bearer "+accessToken);
      },
      success: function(data)
      {

        console.log(data);
        this.setState({allLabelsData:data.labels});
        loadedData=true;
         this.getinboxlabel();
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(err.toString());
      }.bind(this)
   });

 },

 getinboxlabel:function()
 {
   var accessToken=localStorage.getItem('gtoken');
   $.ajax({
     url:' https://www.googleapis.com/gmail/v1/users/anumolredrose%40gmail.com/messages?labelIds=INBOX&maxResults=10&key={AIzaSyAHnhc1puwGI8Jh0ByMCJ307ZCkCBklH7o}',
     dataType:'json',
     type:'GET',
     beforeSend:function(request)
     {
       request.setRequestHeader("Authorization","Bearer "+accessToken);
     },
     success:function(data)
     {
     //var arraydata=[];
       {/*for(var i=0;i<data.labels.length;i++)
         {
           this.getItems(data.labels[i].id);
         }*/}
         console.log("Message:" + data);
         this.getItems('156ba65f2ea7af52');
     }.bind(this),
       error: function(xhr, status, err) {
         console.error(err.toString());
       }.bind(this)
    });

  },
  getItems:function(id){
    var messages=[];
    var accessToken = localStorage.getItem('gToken');
    $.ajax({
       url: 'https://www.googleapis.com/gmail/v1/users/anumolredrose%40gmail.com/messages/'+id+'?key={AIzaSyAHnhc1puwGI8Jh0ByMCJ307ZCkCBklH7o}',
       dataType: 'json',
       type: 'GET',
       beforeSend: function (request)
       {
         request.setRequestHeader("Authorization", "Bearer "+accessToken);
       },
       success:function(data)
       {
         console.log(id);
         console.log(data);
       }
       .bind(this),
         error: function(xhr, status, err) {
           console.error(err.toString());
         }.bind(this)
      });

    },


 render:function()
 {
   var leftPanel;
   var rightPanel;

   if(loadedData){
     leftPanel =  <Component1 allLabelsData={this.state.allLabelsData}/>
     rightPanel='  Work In Progress..........';
   }

     return(
       <div>
       <div className="GmailBox">
           <div className="container-fluid">
             <div className="row">
                 <div className="col-lg-1">
                  <button id="authorize-button" onClick={this.gmailLogin} className="btn btn-primary pull-left">SignIn</button>
                  </div>
                  <div className="col-lg-8 pull-right">
                    <h2>ReactMails</h2>
                  </div>
              </div>
               <div className="row">
                 <div className="col-lg-2">
                    {leftPanel}
                  </div>
                 <div className="col-lg-10">
                 {rightPanel}
                 </div>
               </div>
         </div>
     </div>
     </div>
     );
 }
 });

module.exports = GmailBox;
