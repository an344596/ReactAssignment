var React=require('react');
var ReactDOM = require('react-dom');

var GmailBox=require("./components/GmailBox.js");
{/*var data = {
 "labels": [
  {
   "id": "CATEGORY_PERSONAL",
   "name": "CATEGORY_PERSONAL",
   "type": "system"
  },
  {
   "id": "CATEGORY_SOCIAL",
   "name": "CATEGORY_SOCIAL",
   "type": "system"
  },
  {
   "id": "IMPORTANT",
   "name": "IMPORTANT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "CATEGORY_UPDATES",
   "name": "CATEGORY_UPDATES",
   "type": "system"
  },
  {
   "id": "CATEGORY_FORUMS",
   "name": "CATEGORY_FORUMS",
   "type": "system"
  },
  {
   "id": "CHAT",
   "name": "CHAT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "SENT",
   "name": "SENT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "INBOX",
   "name": "INBOX",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "TRASH",
   "name": "TRASH",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "CATEGORY_PROMOTIONS",
   "name": "CATEGORY_PROMOTIONS",
   "type": "system"
  },
  {
   "id": "DRAFT",
   "name": "DRAFT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "SPAM",
   "name": "SPAM",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "STARRED",
   "name": "STARRED",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "UNREAD",
   "name": "UNREAD",
   "type": "system"
  }
 ]
};
var arraydata=[];
console.log(data.labels.length);
for (var i = 0; i < data.labels.length; i++) {
  if(data.labels[i].type == "system"){
    arraydata.push({"id":data.labels[i].id,"name":data.labels[i].name});
  }
}
//console.log(arraydata);*/}
var MainComponent = React.createClass({
  render:function(){
    return(
      <div>
      {/*}<Component1 ldata={arraydata}></Component1>*/}
        <GmailBox/>
      </div>
    );
  }

});
ReactDOM.render(<MainComponent/>,document.getElementById('app'));
