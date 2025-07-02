import '../css/Shop.css'
import tShirt from '../assets/tShirt.png'
function Shop(){
    // Fake JSON data for T-shirts
    const tshirts = [
        {
            id: 1,
            title: "Classic White Tee",
            description: "100% cotton classic fit white t-shirt for everyday wear",
            price: 19.99,
            image: "https://static.wixstatic.com/media/e1f805_0095c5220bce4688b2857443ad83e5bd~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e1f805_0095c5220bce4688b2857443ad83e5bd~mv2.jpg",
            sizes: ["S", "M", "L", "XL"],
            colors: ["white"]
        },
        {
            id: 2,
            title: "Black Graphic Tee",
            description: "Soft black t-shirt with cool graphic print",
            price: 24.99,
            image: "https://static.wixstatic.com/media/e1f805_8a723f6a92bb4d188242d411dabc74c1~mv2.jpg/v1/fill/w_1340,h_1712,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/file.jpg",
            sizes: ["S", "M", "L"],
            colors: ["black"]
        },
        {
            id: 3,
            title: "Vintage Red Shirt",
            description: "Vintage washed red t-shirt with distressed look",
            price: 29.99,
            image: tShirt,
            sizes: ["M", "L", "XL"],
            colors: ["red"]
        },
        {
            id: 4,
            title: "Striped Navy Blue",
            description: "Navy blue t-shirt with white horizontal stripes",
            price: 22.99,
            image: tShirt,
            sizes: ["S", "M", "L", "XL"],
            colors: ["navy", "white"]
        },
        {
            id: 5,
            title: "Pocket Grey Tee",
            description: "Comfortable grey t-shirt with chest pocket",
            price: 21.99,
            image: tShirt,
            sizes: ["S", "M", "L"],
            colors: ["grey"]
        },
        {
            id: 6,
            title: "Oversized Green Tee",
            description: "Trendy oversized fit in soft green cotton",
            price: 27.99,
            image: tShirt,
            sizes: ["L", "XL"],
            colors: ["green"]
        }
    ];
    return (<div className="shop">
        <h1 className="shop-title">Our T-Shirt Collection</h1>
            <div className="tshirt-grid">
                {tshirts.map(tshirt => (
                    <div key={tshirt.id} className="tshirt-card">
                        <img src={tshirt.image} alt={tshirt.title} className="tshirt-image" />
                        <div className="tshirt-info">
                            <h3>{tshirt.title}</h3>
                            <p className="tshirt-description">{tshirt.description}</p>
                            <div className="tshirt-details">
                                <span className="tshirt-price">${tshirt.price.toFixed(2)}</span>
                                <span className="tshirt-sizes">Sizes: {tshirt.sizes.join(", ")}</span>
                            </div>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
    </div>);

}
export default Shop;