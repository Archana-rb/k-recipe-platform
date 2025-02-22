import React from 'react'
import biryani from "./biryani2.jpg"
import vege from "./vege.jpg"
import paneer from "./paneer.jpg"
import pizza from "./pizza2.jpg"

const Home = () => {
  return (
    <div>
    
     <div class="row row-cols-1 row-cols-md-2 g-4 m-2">
  <div class="col">
    <div class="card">
      <img src={biryani} class="card-img-top" width="20px" height="500px"alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Biryani</h5>
        <p class="card-text">Biryani is a flavorful, spiced rice dish that's popular in South Asia..</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={vege} class="card-img-top" width="20px" height="500px"alt="..."/>
      <div class="card-body">
        <h5 class="card-title">veg recipe</h5>
        <p class="card-text">Indian vegetarian food is enjoyed worldwide because it has so many tasty flavours and uses fresh ingredients. .</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={paneer}class="card-img-top" width="10px" height={500}alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Panner</h5>
        <p class="card-text">Paneer is a fresh, soft cheese that's commonly used in South Asian cooking..</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={pizza} class="card-img-top"width="50px"height={500} alt="..." />
      <div class="card-body">
        <h5 class="card-title">Pizza</h5>
        <p class="card-text">Pizza is a flatbread that originated in Italy and is made with dough, sauce, and cheese.</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home
