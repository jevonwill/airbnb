'use client';

import { SafeUser } from "@/app/types";
import { Listing, Reservation } from "@prisma/client";

interface ListingCardProps {
    currentUser?: SafeUser;
    onAction?: (id: string) => void;
    data: Listing;
    reservation?: Reservation;
    disabled?: boolean;
    actionLabel?: string;
    actionId?: string;
}

const ListingCard: React.FC<ListingCardProps> = ({
    currentUser,
    onAction,
    data,
    reservation,
    disabled,
    actionLabel,
    actionId
}) => {
    return (  
        <div> </div>
    );
}
 
export default ListingCard;
<div> </div>