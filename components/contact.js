var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className={'contactItem'}>
        <img className={'contactImage'} src={this.props.item.src}/>
        <p className={'contactLabel'}>
          {this.props.item.firstName}
        </p>
        <p className={'contactLabel'}>
          {this.props.item.lastName}
        </p>
        <a href={'mailto:' + this.props.item.email} className={'contactEmail'}>
            {this.props.item.email}
        </a>
      </div>
    )
  },
});
