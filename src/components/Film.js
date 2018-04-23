import React from "react";
import "../App.css";

const Film = (props) => (
  <tr>
    <td className="film-name">{props.filmName}</td>
    <td> </td>
    <td className="film-tagline">{props.tagLine}</td>
    <td> </td>
    <td className="film-showtimes">{props.children}</td>
  </tr>
)

export default Film;
