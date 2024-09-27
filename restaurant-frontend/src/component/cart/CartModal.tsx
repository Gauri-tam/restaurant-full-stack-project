import { useEffect, useState } from "react";

const CartModal = () => {
    const [getItems, setItems] = useState<any[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        const storedItems = localStorage.getItem("cartItems");
        if (storedItems) {
            try {
                const parsedItems = JSON.parse(storedItems);
                const itemsWithQuantity = parsedItems.map((item: any) => ({
                    ...item,
                    quantity: 1, // Add a default quantity of 1 for each item
                }));
                setItems(itemsWithQuantity);
                calculateTotalPrice(itemsWithQuantity);
            } catch (error) {
                console.error("Error parsing cart items from localStorage", error);
            }
        }
    }, []);

    // Helper function to calculate the total price based on items
    const calculateTotalPrice = (items: any[]) => {
        const price = items.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
        setTotalPrice(price);
    };

    // Increase item quantity
    function itemIncreaseHandler(id: number) {
        const updatedItems = getItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setItems(updatedItems);
        calculateTotalPrice(updatedItems);
    }

    // Decrease item quantity
    function itemDecreaseHandler(id: number) {
        const updatedItems = getItems.map((item) =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        setItems(updatedItems);
        calculateTotalPrice(updatedItems);
    }

    return (
        <div className="flex justify-center rounded-md mt-40">
            <div className="bg-gray-500 bg-opacity-40 w-96 h-96 rounded-lg shadow">
                <div className="flex flex-row mt-2">
                    <svg className="h-3.5 me-2 mt-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                    </svg>
                    <h1 className="flex justify-start font-normal text-xl">Your Cart</h1>
                </div>
                <div className="grid content-end relative">
                    <ul className="grid grid-flow-row gap-3 my-1 mx-2">
                        {Array.isArray(getItems) && getItems.map((cartItem) => (
                            <li className="grid grid-flow-col" key={cartItem.id}>
                                <p className="truncate mr-2">{cartItem.name}</p>
                                <div className="grid grid-flow-col gap-1 justify-end">
                                    <p className="flex justify-end mr-3">{`$${cartItem.price.toFixed(2)}`}</p>
                                    
                                    <button className="flex justify-end mr-6">remove</button>

                                    <button type="button" onClick={() => itemIncreaseHandler(cartItem.id)}>
                                        +
                                    </button>
                                    <p className="text-white bg-gray-600 px-2 py-0 rounded-full text-center">{cartItem.quantity}</p>
                                    <button type="button" onClick={() => itemDecreaseHandler(cartItem.id)}>
                                        -
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <footer className="absolute mt-64 rounded-lg mx-56 my-2 dark:bg-gray-800">
                        <div className="flex justify-end mr-4">
                            Total Price : <b>{`$${totalPrice.toFixed(2)}`}</b>
                        </div>
                        <div className="flex justify-end bottom-0 mt-2">
                            <button type="button" className="py-1 px-2 rounded-lg text-black text-base mr-2">
                                Close
                            </button>
                            <button type="button" className="bg-gray-700 py-1 px-2 rounded-lg text-white mr-2">
                                Checkout
                            </button>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
