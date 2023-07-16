import React, { useState } from 'react'

function Products() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)
  const [loading, setLoading] = useState(false)
  let componentMounted = true;
  // useEffect(() => {
  //   const getProducts = async () => {
  //     setLoading(true)
  //     const response = await fetch("https://fakestoreapi.com/products")
  //     console.log(response)
  //     if (componentMounted) {
  //       setData(await response.clone().json())
  //       setFilter(await response.json())
  //       setLoading(false)
  //       console.log(filter)
  //     }
  //     return () => {
  //       componentMounted = false
  //     }
  // //  console.log()
  //   }
  //   getProducts()
  // }, [])

  const Loading = () => {
    return (
      <>
        Loading.....
      </>
    )
  }
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2">All</button>
          <button className="btn btn-outline-dark me-2">Men's Clothing</button>
          <button className="btn btn-outline-dark me-2">Women's Clothing</button>
          <button className="btn btn-outline-dark me-2">Jewelery's Clothing</button>
          <button className="btn btn-outline-dark me-2">Electronic Clothing</button>


        </div>
        {filter.map((Products) => {
          return (
            <>
              <div className="col-md-3">
                <div className="card" >
                  <img src="..." class="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
              </div>
            </>
          )
        })}
      </>
    )

  }
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-enter">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  )
}

export default Products
