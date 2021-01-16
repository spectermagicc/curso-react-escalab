import React from 'react';

import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/collection-preview';


class ShopPage extends React.Component {

    constructor(props){
        super(props); //heredo las props que vengan de React.Component
        
        this.state = {
            collections : SHOP_DATA
        };
    }

    render(){
        const {collections} = this.state; //destructiración

        return( 
            <div className='shop-page'>
                {//validador
                    collections.map(({ id, ...otherCollectionProps }) => (

                        <CollectionPreview key={id} {...otherCollectionProps} />
                        
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;