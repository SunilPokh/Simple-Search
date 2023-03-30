import React, { useState } from 'react';

const SearchResult = ({ suggestedList }) => {
  const [cartTotal, setCartTotal] = useState(0);
  const numberOfProduct = suggestedList.length;
  const handleClick = (price) => {
    setCartTotal(parseInt(price) + cartTotal);
  }

  const handleRewards = (totalPurchase) => {
    let rewards = 0
    if (totalPurchase > 50 && totalPurchase < 100) {
      rewards = totalPurchase - 50
    } else if (totalPurchase > 100) {
      rewards = (totalPurchase - 100)  * 2 + 50;
    }
    return rewards;
  }
  return (
    <div>
      <h2 className="availableProductsHeading">
        There are <u>{numberOfProduct}</u> products available for your search.
      </h2>
      <section className="cartTotal">
        <div><b>Cart Total: ${cartTotal.toFixed(2)}</b></div>
        <div>You will earn <b>{handleRewards(cartTotal)}</b> points after this purchase</div>
      </section>
      <div className="suggestedList">
        {suggestedList.map((sl, i) => {
          return (
            <div className="individualProduct" key={i}>
              <div className="productNameAndImage">
                <img className="productImage" src={`${sl.picture}`} alt={sl.name} />
                <div className="productName">{sl.name}</div>
              </div>
              <div className="productDescription"><strong>Product Details:</strong> {sl.about}</div>
              <div className="productPrice"><strong>Price:</strong> ${sl.price}</div>
              <button onClick={() => handleClick(sl.price)}>Add to cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchResult;
