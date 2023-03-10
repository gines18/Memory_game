import React from 'react' 


const Cards = (props) => {
    const {image} = props;
    
    return (
        <div class="card" style="width: 14rem;">
        <img class="card-img-top" src={`${image}`} alt="Card image cap"></img>
      </div>
          )}

          export default Cards;