'use client';

import CategoryBox from "../CategoryBox";
import Container from "../Container";
import { GiWindmill, } from 'react-icons/gi';
import { TbBeach } from 'react-icons/tb';
import { MdOutlineVilla } from 'react-icons/md';

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'Escape to the beach'
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'Historic Windmills'
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'Modern Homes'
    }
]

const Categories = () => {
    return (  
       <Container>
            <div
                className=" 
                 pt-4
                 flex
                 flex-row
                 items-center
                 justify-between
                 overflow-x-auto
                "
            >
                {categories.map((item) => (
                    <CategoryBox 
                        key={item.label}
                        label={item.label}
                        description={item.description}
                        icon={item.icon}
                    />
                ))}
            </div>
       </Container> 
    );
}
 
export default Categories;