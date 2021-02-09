import './index.css'

function ItemApp({name, discription, link = '/', type}) {
    return (
        <div className="item-app-container">
            <div className="name"><a href={link}>{name}</a></div>
            <div className="discription">{discription}</div>
            {
                type === 'product' ?
                <div className="product">Продукт</div> :
                <div className="tranging">Учебное</div>
            }
        </div>
    );
}

export default ItemApp;