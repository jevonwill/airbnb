'use client';

import { useRouter } from 'next/navigation';

import { SafeUser } from "@/app/types";
import { Listing, Reservation } from "@prisma/client";
import useCountries from '@/app/hooks/useCountries';
import { useCallback } from 'react';

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
    actionId = ""
}) => {
    const router = useRouter();
    const { getByValue} = useCountries();

    const location = getByValue(data.locationValue);

    const handleCancel = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();

            if (disabled) {
                return;
            }

            onAction?.(actionId);
        }, [onAction, disabled, actionId] 
    )

    return (  
        <div> </div>
    );
}
 
export default ListingCard;
<div> </div>