import React from 'react'
import { MdFavorite } from 'react-icons/md';

const Favorites = () => {
    const { favorites, toggleFavorites, clearFavorites } = useContext(FavoritesContext)


    console.log(favorites);
    return (
        <div>
            <div className="cards">

                {products.length > 0 && products.map((p) => {
                    return (
                        <div className="product-card" key={p.id}>
                            { }
                            <div className="ikon">

                                <MdFavorite />
                            </div>
                            <div className="product-image">
                                <img src={p.image} alt={p.title} />
                            </div>

                            { }
                            <div className="product-details">
                                <h3 className="product-title">{p.title}</h3>
                                <p className="product-description">{p.description.slice(0, 40)} </p>
                                <p className="product-price">${p.price}</p>
                            </div>

                            { }
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default Favorites