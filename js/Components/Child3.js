var React=require('react');
var Viewmessage=require('./Viewmessage.js')
var Child3=React.createClass({

  getInitialState: function()
  {
    return({status:false});
  },
  change1:function(){

  this.setState({status:true});
  },

  render:function(){

    return(
<div className="list-group-item">

<div className="container-fluid">
	<div className="row">
		<div className="col-lg-4" id="muk">
    {this.props.mailFrom}
		</div>
		<div className="col-lg-4" id="day">
      <a href="#myModal1" data-toggle="modal"  id="modal" onClick={this.change1}> {this.props.mailSubject}</a>
      {this.state.status?<Viewmessage a={this.props.mailFrom} b={this.props.mailSubject} c={this.props.mailDate} d={this.props.encodedBodyToChild}/>:null}
		</div>
		<div className="col-lg-4" id="da">
            {this.props.mailDate}

		</div>
	</div>
</div>







</div>

    );

  }
});
module.exports=Child3
