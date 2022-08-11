import { FaTimes } from "react-icons/fa"

import { WebsiteItem } from "../../../styled/Components/Commerce/Website.styled"

const Website = ({ item, deleteWebsite }) => {

    return (
        <WebsiteItem>
            <div>{item.website}</div>
            <div>{item.date}</div>
            <div onClick={() => deleteWebsite(item)}><FaTimes className="delete" /></div>
        </WebsiteItem>
    )
}

export default Website