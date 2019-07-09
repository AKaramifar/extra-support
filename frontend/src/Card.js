import React from 'react';
import './App.css';
const Card = props => {
  return (
//   <div class="card" style={{width: "18rem"}}>
//   <div class="card-body">
//     <h5 class="card-title">Special title treatment</h5>
//     <p class="card-text">It's a broader card with text below as a natural lead-in to extra content. This content is a little longer.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
<div class="card card-border" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Quick sample text to create the card title and make up the body of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

  );
};

export default Card;
