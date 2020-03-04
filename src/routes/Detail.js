import React from "react";

// function Detail({location}){
//   console.log({location});
//   return <span>하하하</span>
// }

class Detail extends React.Component{
  componentDidMount(){
    const { location, history} = this.props;

    if ( location.state === undefined){
      history.push("/");
    }
  }
  render(){
      const { location }= this.props;
      console.log(location.state);
      if (location.state){
        return (
          <div>
          <span>{location.state.title}</span>
          <span>{location.state.year}</span>
          <span><img src={location.state.poster} alt="{location.state.title}"/></span>

          </div>
        )
      } else {
        return null;
      }


  }
}

export default Detail;
