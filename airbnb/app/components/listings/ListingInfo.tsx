'use client';

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import { IconType } from "react-icons";

interface ListingInfoProps {
    user: SafeUser;
    description: string;
    guestCount: number;
    roomCount: number;
    bathroomCount: number;
    category: {
        icon: IconType;
        label: string;
        description: string;
    } | undefined
    locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
    user,
    description,
    guestCount,
    roomCount,
    locationValue,
    category

}) => {
    const { getByValue } = useCountries();

    const coordinates = getByValue(locationValue)?.latlng;

    return (  
        <div>

        </div>
    );
}
 
export default ListingInfo;