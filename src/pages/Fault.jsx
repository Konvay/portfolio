import React, { useState } from 'react'

import { getItemList } from '../state/actions/fault.actions'
import { useEffect } from 'react';

const Fault = () => {

    const [items, setItems] = useState({});

    const getItems = async () => {
        setItems(getItemList())
    }

    useEffect(() => {
        getItems();
    }, [])

    return (
        <div>Fault Stuff Goes Here</div>
    )
}

export default Fault