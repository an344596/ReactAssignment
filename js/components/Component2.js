var React=require('react');
var Component2=React.createClass({
render:function(){
  return(
        <a id={this.props.name} href="#">{this.props.name}</a>
  );
}
});
module.exports=Component2
