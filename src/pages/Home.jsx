import React, { useEffect } from 'react'
import { useAxios } from '../hook/useAxios'
import { useDispatch, useSelector } from 'react-redux'
import { ACTIONS } from '../redux/actions'
import ProductCard from '../components/ProductCard'

function Home() {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()
    useEffect(() => {
        useAxios().get("products").then(res => {
            dispatch({type:ACTIONS.GET_DATA, payload:res.data})
        })
    },[]) 
  return (
    <div className='flex flex-wrap w-[1450px] mt-[50px] gap-[10px] mx-auto'>
        {products.map(item => <ProductCard key={item.id} item={item}/>)}
    </div>
  )
}

export default Home
