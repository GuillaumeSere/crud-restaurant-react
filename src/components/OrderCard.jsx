import axios from 'axios'
import React, { useEffect, useState } from 'react'

const OrderCard = () => {

    const [items, setItems] = useState([])
    const [total, setTotal] = useState()

    useEffect(() => {
        loadItems()
    }, [])

    let totalPrice = 0
    const loadItems = async () => {
        const result = await axios.get("http://localhost:3001/orderitem")
        setItems(result.data)
        result.data.map((prices) => {
            totalPrice += prices.qty * Number(prices.price.replace("€", ""))
        })
        setTotal(totalPrice.toFixed(2))
    }

    const deleteOrder = async (id) => {
        let isDelete = window.confirm("Are you sure? This item will be removed from your Order!")
        if (isDelete){
            await axios.delete(`http://localhost:3001/orderitem/${id}`)
            loadItems()
        }
    }

    const incDec = async (a, b, c, d, e) => {
        if (c === "dec"){
            if (a === 1){
                a = 1
            }else{
                a -= 1
            }
        }else{
            if (a === 20){
                a = 20
                alert("Quantity Cannot Exceed 20!")
                return
            }else{
                a += 1
            }
        }
        const order = {name: d, price: e, qty: a}
        await axios.put(`http://localhost:3001/orderitem/${b}`, order)
        loadItems()
    }

    const handleChange = () => {
        return items.qty
    }

    return (
        <>
            <div className='order-area'>
                <div className='order-total'>Your Order</div>
            </div>
            {items.map((item, index) => (
            <div className='order-card' key={index}>
                <div className="order-item">{item.name}</div>
                <img src={item.img} alt="" />
                <div className="order-qty">
                    Qty &nbsp;<button className='qty-btn' onClick={() => incDec(item.qty, item.id, "dec", item.name, item.price)}>-</button>
                    <input type="text" className='qty-input' value={item.qty} onChange={handleChange} />
                    <button className='qty-btn' onClick={() => incDec(item.qty, item.id, "inc", item.name, item.price)}>+</button>
                </div>
                <div className="order-price">{(item.qty * Number(item.price.replace("€", ""))).toFixed(2)} €</div>
                <button className='delete-btn' onClick={() => deleteOrder(item.id)}>Remove</button>
            </div>
        ))}
            <div className='order-total'>
                <div className='total'>Total</div>
                <div className='total-price'>{total} €</div>
                <div className="place-order-btn">Place Order</div>
            </div>
        </>

    )
}

export default OrderCard
