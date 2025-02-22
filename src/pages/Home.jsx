import React from 'react'
import biryani from "./biryani.jpg"
import pan from "./pan.jpg"
import start from "./start.jpg"
import tan from "./tan.jpg" 

const Home = () => {
  return (
    <div>
    
     <div class="row row-cols-1 row-cols-md-2 g-4 m-2">
  <div class="col">
    <div class="card">
      <img src={biryani} class="card-img-top" width="20px" height="500px"alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Biryani</h5>
        <p class="card-text">Biryani is a flavorful, spiced rice dish that's popular in South Asia..
        The spices and condiments used in biryani may include fennel seeds, ghee (clarified butter), nutmeg, mace, pepper, cloves, cardamom, cinnamon, bay leaves, coriander, mint, ginger, onions, tomatoes, green chilies, star anise, and garlic. The premium varieties include saffron.
        </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={pan} class="card-img-top" width="20px" height="500px"alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Panner tikka</h5>
        <p class="card-text">Paneer Tikka is a popular and delicious tandoori starter and snack where Paneer (Indian cottage cheese cubes) are marinated in a spiced yogurt-based marinade, arranged on skewers and grilled in the oven. Worry not if you don’t have an oven – instead of grilling in oven, you can make Tandoori Paneer Tikka Recipe on stovetop on a tawa/skillet. In this post I am sharing both the oven and stovetop methods.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={start}class="card-img-top" width="10px" height={500}alt="..."/>
      <div class="card-body">
        <h5 class="card-title">starters</h5>
        <p class="card-text">Starters, also known as appetizers, are small portions of food served before a meal. They can be made from meat, seafood, vegetables, fruit, dairy, or shellfish. Starters can be served hot or cold. </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={tan} class="card-img-top"width="50px"height={500} alt="..." />
      <div class="card-body">
        <h5 class="card-title">tandoori</h5>
        <p class="card-text">tandoori chicken, a dish of roasted chicken marinated in yogurt and generously spiced, giving the meat its trademark red colour. It is named for the cylindrical clay oven in which it is cooked, a tandoor.
        </p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home
