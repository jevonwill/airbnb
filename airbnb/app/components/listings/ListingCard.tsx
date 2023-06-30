'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { SafeUser } from "@/app/types";
import { Listing, Reservation } from "@prisma/client";
import useCountries from '@/app/hooks/useCountries';
import { useCallback, useMemo } from 'react';
import { format } from 'date-fns';
import HeartButton from '../HeartButton';

interface ListingCardProps {
    currentUser?: SafeUser | null;
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

    const price = useMemo(() => {
        if (reservation) {
            return reservation.totalPrice;
        }
        return data.price;
    },[reservation, data.price])

    const reservationData = useMemo(() => {
        if (!reservation) {
            return null;
        }

        const start = new Date(reservation.startDate);
        const end = new Date(reservation.endDate);

        return `${format(start, 'PP' )} - ${format(end, 'PP')}`
    }, [reservation])

    return (  
        <div
        onClick={() => router.push(`/listings/${data.id}`)} 
        className='
         col-span-1
         cursor-pointer-group
        '> 
            <div className='flex flex-col gap-2 w-full'>
                <div className='
                aspect-square
                w-full
                relative
                overflow-hidden
                rounded-xl
               '>
                <Image 
                    alt="Listing"
                    fill
                    src={data.imageSrc}
                    className='
                     object-cover
                     h-full
                     w-full
                     group-hober:scale-110
                     transitions
                    '
                />
                <div className='absolute top-3 right-3'>
                    <HeartButton 
                        listingId={data.id}
                        currentUser={currentUser}
                    />

                </div>
                </div>
            </div>
        </div>
    );
}
 
export default ListingCard;