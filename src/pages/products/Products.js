import { useEffect, useState } from "react"
import { FakeStoreApi } from '../../services/fake-store-api'
import { useSearchParams } from "react-router-dom"
import { Item } from "../../components/item"
import { useCart } from "../../context/Cart"

const Products = ({onSearch}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [query] = useSearchParams();
    const { addToCart } = useCart()
    const name = localStorage.getItem("name")
    const handleSubmit = ()=>{
        if(searchQuery.trim().length){
          onSearch(searchQuery.trim())
        }
        setSearchQuery('')
      }

    // const searchQuery = query.get('q');

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const products = searchQuery ?
             await FakeStoreApi.fetchProductsBySearchQuery(searchQuery) :
              await FakeStoreApi.fetxhAllProducts();
            setProducts(products);
            setLoading(false)
        }
        fetchProducts().catch(console.error)
    }, [searchQuery])

    if (!loading && searchQuery && !products.length) {
        return (
            <div className="container">
                <div className="product py-2">
                    <div className="details p-3">No products found matching your query.</div>
                </div>
            </div>
        )
    }
  const logout = ()=>{
    localStorage.clear()
    window.location.reload()
  }
    return (
        <>
        {}
        <div className="row">
                <div className="col">
                    <form className="search" style={{ maxWidth: "900px", margin: "20px auto" }}>
                        <div className="form-control">
                            <input
                                type="text"
                                style={{ textAlign: "center", width: "100%" }} 
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <button type="button" className="search-btn" onClick={handleSubmit}>
                            Search
                        </button>
                    </form>
                </div>
            </div>
    
            <div className="container">

                <div className="products my-5">

                    <div className="grid">
                        {loading ? (
                            <div className="loader" />
                        ) : (
                            products.map((product) => (
                                <Item key={product.id} data={product} addToCart={() => addToCart(product)} />
                            ))
                        )}
                    </div>
                </div>
                {/* <button className="btn btn-danger w-100 mb-3" onClick={logout}> Sign Out </button> */}
            </div>
        </>
    )
}

export { Products }