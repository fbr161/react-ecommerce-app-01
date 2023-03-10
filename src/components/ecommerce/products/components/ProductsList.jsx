import { useEffect, useState } from "react"
import MainContent from "../../common/components/MainContent";
import { retrieveProductListApi } from "../api/ProductApiService"


export default function ProductsList() {

    const [productList, setProductList] = useState([])

    useEffect( () => {
        retrieveProductListApi()
            .then((resp) => {
                setProductList(resp.data._embedded?.products)
                console.log(resp.data._embedded?.products)
            }).catch((error) => {
                console.log(error)
            })
    }, []);

    return (
        <MainContent>
            fuad
        </MainContent>
    )

    // return (
    //     <div className="container">
    //         <table className="table">
    //             <thead className="thead-dark">
    //                 <tr>
    //                     <th></th>
    //                     <th>Name</th>
    //                     <th>Price</th>
    //                     <th>Units in Stock</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //             {
    //                 productList.map( product => (
    //                     <tr key={product.sku}>
    //                         <td>
    //                             <img src={product.imageUrl} alt="" height={50}/>
    //                         </td>
    //                         <td>{product.name}</td>
    //                         <td>{product.unitPrice}</td>
    //                         <td>{product.unitsInStock}</td>
    //                     </tr>
    //                 ))
    //             }
    //             </tbody>
    //         </table>
    //     </div>
    // )
} 