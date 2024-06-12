/** @format */

import React, { useState } from "react"

const Cart = () => {
	const [cart, setCart] = useState([
		{
			name: "Product 1",
			quantity: 1,
			price: 100,
			imageURL:
				"https://st3.depositphotos.com/9747634/32010/i/380/depositphotos_320104748-stock-photo-hangers-with-different-clothes-in.jpg",
			imageFileName: "product1.jpg",
		},
		{
			name: "Product 2",
			quantity: 2,
			price: 150,
			imageURL:
				"https://st3.depositphotos.com/9747634/32010/i/380/depositphotos_320104748-stock-photo-hangers-with-different-clothes-in.jpg",
			imageFileName: "product2.jpg",
		},
	])

	const handleBuy = () => {
		const cartDetails = cart
			.map(item => {
				return `Item: ${item.name}\nQuantity: ${item.quantity}\nPrice: $${item.price}`
			})
			.join("\n\n")

		const totalAmount = cart.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		)

		const message = `Order Details:\n${cartDetails}\n\nTotal: $${totalAmount}\n\nPlease attach the images you downloaded.`
		sendWhatsAppMessage(message)
	}

	const sendWhatsAppMessage = message => {
		const adminWhatsAppNumber = "996221726572" // Replace with the admin's WhatsApp number
		const encodedMessage = encodeURIComponent(message)
		const whatsappURL = `https://wa.me/${adminWhatsAppNumber}?text=${encodedMessage}`

		window.open(whatsappURL, "_blank")
	}

	return (
		<div>
			<h1>Cart</h1>
			{cart.map((item, index) => (
				<div key={index}>
					<p>
						{item.name} - {item.quantity} x ${item.price}
					</p>
					<img src={item.imageURL} alt={item.name} width="100" />
					<p>
						<a href={item.imageURL} download={item.imageFileName}>
							Download Image
						</a>
					</p>
				</div>
			))}
			<button onClick={handleBuy}>Buy</button>
		</div>
	)
}

export default Cart
