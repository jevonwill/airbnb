'use client';

import { SafeUser } from "../types";

interface FavoritesClientProps {
    currentUser?: SafeUser | null;
    
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
    currentUser,
}) => {
    return (  
        <div>

        </div>
    );
}
 
export default FavoritesClient;