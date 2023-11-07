import React from 'react'
export type TItems = {
    listing_id: number,
    url: string,
    MainImage: {
        url_570xN: string
    },
    title: string,
    currency_code: string,
    price: string,
    quantity: number
}
type ItemsProps = {
    items: TItems[]
}

export const Listing = ({ items }: ItemsProps) => {
    return (
            <div className="item-list">
                {items.map((item) => (
                    <div className="item" key={item?.listing_id ?? "id"}>
                        <div className="item-image">
                            <a href={item?.url ?? "https://www.etsy.com/listing/292754135/woodland-fairy"}>
                                <img src={item?.MainImage?.url_570xN ?? "https://img1.etsystatic.com/156/0/12814579/il_570xN.1173240751_50hv.jpg"} />
                            </a>
                        </div>
                        <div className="item-details">
                            <>
                                {item?.title?.length > 50 ?
                                    <p className="item-title">{item?.title.slice(0, 50) + "..."}</p> :
                                    <p className="item-title">{item.title}</p>
                                }
                            </>
                            <>
                                {
                                    item?.currency_code === "USD" ?
                                        <p className="item-price">{"$" + item.price}</p> :
                                        item?.currency_code === "EUR" ?
                                            <p className="item-price">{"€" + item.price}</p> :
                                            <p className="item-price">{item?.price + item?.currency_code}</p>
                                }

                            </>
                            <>
                                {
                                    item?.quantity < 10 ?
                                        <p className="item-quantity level-low">{item?.quantity + "left"}</p> :
                                        item?.quantity < 20 ?
                                            <p className="item-quantity level-medium">{item?.quantity + "left"}</p> :
                                            <p className="item-quantity level-high">{item?.quantity + "left"}</p>
                                }

                            </>
                        </div>
                    </div>
                ))}
            </div>
    )
}

Listing.defaultProps = {
    items: []
}
