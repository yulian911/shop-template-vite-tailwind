import React,{useState} from 'react'
import { plane } from '../../assets'
import { ProductsData } from '../../data/products'
import {useAutoAnimate} from "@formkit/auto-animate/react"


const Products = () => {
    const[parent]=useAutoAnimate()
    const [MenuProduct,setMenuProduct]=useState(ProductsData)


    const filter =(type)=>{
        if(type ==="all"){
            setMenuProduct(ProductsData)
        }else{

            setMenuProduct(ProductsData.filter((product)=>product.type===type))
        }
    }

  return (
    <div className='px-[2rem] relative flex flex-col gap-[2rem] items-center justify-center'>
        <img className='absolute w-[8rem] left-[30%] top-[-3rem] md:top-[-5rem]' src={plane} alt='plane'/>
        <h1 className='text-[2rem] font-bold xs:text-[1rem]'>Our Featured Products</h1>
        <div className="grid w-[90%] grid-cols-[25%,auto] md:flex md:flex-col">
            <ul className='flex flex-col gap-[2rem] font-[500] text-[1.3rem] md:flex-row md:justify-center md:mb-[1rem] xs:text-[1rem] xs:gap-[0.7rem]'>
                {['All','Skin Care','Conditioner','Foundation'].map((el,i)=>(
                    <li key={i} className="hover:text-[var(--pink)] cursor-pointer" onClick={()=>filter(el.toLowerCase())}>{el}</li>
                ))}
            </ul>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] h-[25rem] overflow-y-scroll gap-[1rem] content-between xs:grid-cols-[repeat(auto-fill,minmax(100px,1fr))]"
            ref={parent}
            >
                {MenuProduct.map((product,i)=>(
                    <div key={i} className='w-[12rem] h-[8rem] bg-white relative overflow-hidden p-[1rem] flex rounded-[1rem] xs:w-[8rem]'>
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col">
                                <span className=' text-[1.4rem] font-[600] xs:text-[0.7rem]'> {product.name}</span>
                                <span className=' text-[0.7rem] xs:text-[0.6rem] '>{product.detail}</span>
                            </div>
                            <span className='text-[1rem] font-bold'>{product.price}$</span>
                            <div className="text-[0.6rem] border-[1px] border-[var(--black)] py-[5px] px-[10px] w-[max-content] rounded-[15px]">Show Now</div>
                        </div>
                        <img src={product.img} alt='product'  className='rotate-[-20deg] absolute right-0 top-[3rem]  h-[11rem] bottom-[-20%] w-[6rem] xs:w-[3rem] xs:h-[5rem] xs:right-[-5px] xs:top-[4rem]'/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Products