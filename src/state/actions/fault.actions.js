import axios from 'axios'

const DOMAIN = 'http://api.playfault.com'
const ITEMS_ROUTE = 'items'

export const getItemList = async () => {
    const response = await axios.get(`${DOMAIN}/${ITEMS_ROUTE}`)
    const items = response.data

    return (
        items
    )
}