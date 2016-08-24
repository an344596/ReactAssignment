var React=require('react');
var ReactDom=require('react-dom');
var Component2=require('./Component2');
var Component1=React.createClass({
  render:function(){
        // console.log("daaaaa"+JSON.stringify(this.props.ldata);
          var llabel=this.props.allLabelsData.map(function(e,i){
            return(
              <div key={i}>
                <Component2 key={i} id={e.id} name={e.name}></Component2>
              </div>
            );
          });
            return(
              <div>
                {llabel}
              </div>
            );
  }
});
module.exports=Component1
