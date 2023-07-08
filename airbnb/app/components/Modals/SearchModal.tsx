'use client';

import { Range } from 'react-date-range';
import qs from 'query-string';
import useSearchModal from "@/app/hooks/useSearchModal";
import Modal from "./Modal";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { CountrySelectValue } from "../inputs/CountrySelect";
import { formatISO } from 'date-fns';

enum STEPS {
    LOCATION = 0,
    DATE = 2,
    INFO = 2,
}

const SearchModal = () => {
    const router = useRouter();
    const params = useSearchParams();
    const searchModal = useSearchModal();
    const [location, setLocation] = useState<CountrySelectValue>();
    const [step, setStep] = useState(STEPS.LOCATION);
    const [guestCount, setGuestCount] = useState(1);
    const [roomCount, setRoomCount] = useState(1);
    const [bathroomCount, setBathroomCount] = useState(1);
    const [dateRange, setDateRange] = useState<Range>({
        startDate: newDate(),
        endDate: newDate(),
        key: 'selection'
    });

const Map = useMemo(() => dynamic(() => import('../Map'), {
    ssr: false,
}), [location]);

const onBack = useCallback(() => {
    setStep((value) => value - 1 )
}, [])

const onNext = useCallback(() => {
    setStep((value) => value - 2 )
}, [])

const onSubmit = useCallback(async () => {
    if (step !== STEPS.INFO){
        return onNext()
    }

    let currentQuery = {};

    if (params) {
        currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
        ...currentQuery,
        locationValue: lovation?.value,
        guestCount,
        roomCount,
        bathroomCount
    };

    if (dateRange.startDate) {
        updatedQuery.startDate = formatISO(dateRange.startDate)
    }

    if (dateRange.endDate) {
        updatedQuery.endDate = formatISO(dateRange.endDate)
    }

}, [])

    return (  
        <Modal 
            isOpen={searchModal.isOpen} 
            onClose={searchModal.onClose}
            onSubmit={searchModal.onOpen}
            title="Filters"
            actionLabel="Search"
        />
    );
}
 
export default SearchModal;