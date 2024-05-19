const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
          pariatur atque, exercitationem et recusandae dignissimos dolores at
          ipsum nobis facere porro sed, mollitia cupiditate facilis error quia
          excepturi tenetur nemo?
        </p>
        <div className="hero-buttons">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also available on</p>
          <div className="brand-icon">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="shoe-image" />
      </div>
    </main>
  );
};

export default Hero;
