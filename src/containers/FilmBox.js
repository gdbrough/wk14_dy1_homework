import React, {Component} from "react";
import FilmList from "../components/FilmList";
import "../App.css";

class FilmBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [
        {id: 1, filmName: "Alien", tagLine: "In space, no-one can hear you scream", showtimes: "now"},
        {id: 2, filmName: "Jaws 2", tagLine: "Just when you thought it was safe to go back in the water", showtimes: "now"},
        {id: 3, filmName: "Star Trek - Generations", tagLine: "Two Captains, One Destiny", showtimes: "now"},
        {id: 4, filmName: "Coherence", tagLine: "Nothing is random", showtimes: "now"},
        {id: 5, filmName: "Skyline", tagLine: "Soon, our first encounter will become our last stand", showtimes: "now"},
        {id: 6, filmName: "Close Encounters of the Third Kind", tagLine: "We are not Alone", showtimes: "now"}
      ]
    }
  }
  render(){
    return(
      <div className="film-box">
        <h2>UK Opening this week</h2>
        <FilmList data={this.state.data} />
      </div>
    );
  }
}

export default FilmBox
