import React, {Component} from "react";
import Film from "./Film";
import "../App.css";

class FilmList extends Component{
  render(){
    const filmList = this.props.data.map(film => {
      return(
        <Film filmName={film.filmName} key={film.id} tagLine={film.tagLine}>
          {/* {film.showtimes} */}
          <a href="/">Showtimes</a>
        </Film>
      );
    });
    return <table className="filmList"><tbody>
      {filmList}
    </tbody></table>;
  }
}

export default FilmList;
