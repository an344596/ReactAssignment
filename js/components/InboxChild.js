var React=require('react');
var Inboxc=require("./InboxGrandChild.js");
var InboxChild=React.createClass({
  render:function()
  {
    var rows=[];
    this.props.allData.foreach(function(data){
      var from1=data[0].value;
      var subject=data[1].value;
      var date=data[2].value;
      rows.push(<Inboxc from1={from1} subject={subject} date={date}/>);
    });
    return(
      <div className="panel-body">
      <table className="table table-bordered table-inverse" >
      <tbody>{rows}</tbody>
      </table>
      </div>
    );
  }
});
module.exports=InboxChild