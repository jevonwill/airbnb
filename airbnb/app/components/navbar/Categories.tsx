'use client';

import CategoryBox from "../CategoryBox";
import Container from "../Container";
import { IoDiamond } from 'react-icons/io5'
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill, } from 'react-icons/gi';
import { BsSnow, BsSnow3 } from 'react-icons/bs';
import { FaSkiing } from 'react-icons/fa';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { MdOutlineVilla } from 'react-icons/md';
import { usePathname, useSearchParams } from "next/navigation";


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
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'Escape to the countryside'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'Cool off in pool'
    },
    {
        label: 'Island',
        icon: GiIsland,
        description: 'Stunning island views'
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'Lakeside view'
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'Ski Resorts'
    },
    {
        label: 'Castles',
        icon: GiCastle,
        description: 'Princess castles !'
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'Camping in nature'
    },
    {
        label: 'Barns',
        icon: GiBarn,
        description: 'Authentic Barns'
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description: 'Spooky cave nights'
    },
    {
        label: 'Artic',
        icon: BsSnow3,
        description: 'Artic adventures'
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description: 'Scorching desert fun'
    },
    {
        label: 'Luxury',
        icon: IoDiamond,
        description: 'Ultra-Lux High Class stays'
    }
]

const Categories = () => {
    const params = useSearchParams();
    const pathname = usePathname();
    const category = params?.get('category');

    const isMainPage = pathname == '/';

    if (!isMainPage) {
        return null;
    }

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
                        selected={category == item.label}
                        icon={item.icon}
                    />
                ))}
            </div>
       </Container> 
    );
}
 
export default Categories;