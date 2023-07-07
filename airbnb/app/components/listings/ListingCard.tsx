'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";
import { Listing, Reservation } from "@prisma/client";
import useCountries from '@/app/hooks/useCountries';
import { useCallback, useMemo } from 'react';
import { format } from 'date-fns';
import Button from '../Button';
import HeartButton from '../HeartButton';

interface ListingCardProps {
    currentUser?: SafeUser | null;
    onAction?: (id: string) => void;
    data: SafeListing;
    reservation?: SafeReservation;
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

    const reservationDate = useMemo(() => {
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
                <div className='font-semobold text-lg'>
                    {location?.region}, {location?.label}
                </div>
                <div className='font-light tedxt-neutral-500'>
                    {reservationDate || data.category}
                </div>
                <div className='flex flex-row items-center gap-1'>
                    <div className='font-semibold'>
                        $ {price}
                    </div>
                    {!reservation && (
                        <div className='font-light'>
                            night
                        </div>
                    )}
                </div>
                {onAction && actionLabel && (
                    <Button 
                        disabled={disabled}
                        small
                        label={actionLabel}
                        onClick={handleCancel}
                    />
                )}
            </div>
        </div>
    );
}
 
export default ListingCard;