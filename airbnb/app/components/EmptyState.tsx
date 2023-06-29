import { useRouter } from "next/navigation";


interface EmptyState {
    title?: string;
    subtitle?: string;
    showReset?: boolean;

}

const EmptyState: React.FC<EmptyState> = ({
    title = "No exact matches",
    subtitle = "Try changing or removing some of your filters",
    showReset
}) => {
    return (  
    <div>

    </div> 
    )
}
 
export default EmptyState;