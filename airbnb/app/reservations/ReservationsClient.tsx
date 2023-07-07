'use client';

import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useCallback, useState } from 'react';

import { SafeReservation, SafeUser } from '../types';

import Heading from '../components/Heading';
import Container from '../components/Container';
import ListingCard from '../components/listings/ListingCard';
import { useRouter } from 'next/router';


interface ReservationsClientProps {
    reservations: SafeReservation[];
    currentUser?: SafeUser | null
}

const ReservationsClient: React.FC<ReservationsClientProps> = ({
    currentUser,
    reservations
}) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState('')

    const onCancel = useCallback((id: string) => {

    },[])

    return (  
       <Container>
            <Heading 
                title='Reservation'
                subtitle='Bookings on your properties'
            />
       </Container> 
    );
}
 
export default ReservationsClient;