function Slider(){
    return(
        <>
<div id="carouselExampleFade" className="carousel slide carousel-fade mt-2">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://neilpatel.com/wp-content/uploads/2015/04/ecommerce.jpg" className="d-block w-100" alt="..." style={{ maxHeight: '500px', objectFit: 'cover' }} />
    </div>
    <div className="carousel-item">
      <img src="https://as2.ftcdn.net/v2/jpg/02/50/31/83/1000_F_250318394_Sv5grwCptbMlak5Rp4PtiDCsb6HYOUzg.jpg" className="d-block w-100" alt="..." style={{ maxHeight: '500px', objectFit: 'cover' }} />
    </div>
    <div className="carousel-item">
      <img src="https://as1.ftcdn.net/v2/jpg/02/96/83/68/1000_F_296836811_08NttS3sd2iU1UXmEmxaO1ZkwXKNHkd7.jpg" className="d-block w-100" alt="..." style={{ maxHeight: '500px', objectFit: 'cover' }} />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </>
    );
}
export default Slider;