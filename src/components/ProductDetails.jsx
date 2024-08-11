
import {useParams} from "react-router-dom"
import { useEffect , useState } from "react";
import axios from "axios";
function ProductDetails(){
const params= useParams()
console.log(params)
     const navbarHeight = '56px';
     const footerHeight='100px';
       // Define the Navbar height here
    const containerStyle = {
    paddingTop: navbarHeight,
    paddingButtom:footerHeight
    }
const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${params.ProductID}`);
        setProduct(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center" style={containerStyle}>Loading...</p>;
  if (error) return <p className="text-center" style={containerStyle}>Error: {error.message}</p>;
    return(
        <div style={containerStyle}>
        <div className="card" style={{ width: '18rem' }}>
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text"><strong>${product.price}</strong></p>
        <a href="#" className="btn btn-primary" mt-5>Add To Cart</a>
      </div>
    </div>
    </div>
    )
       
}

export default ProductDetails ;
