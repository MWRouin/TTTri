import { FC } from 'react';

interface IconPlusProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}

const IconPlus: FC<IconPlusProps> = ({ className, fill = false, duotone = true }) => {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <line x1="12" y1="6" x2="12" y2="18"></line>
            <line x1="6" y1="12" x2="18" y2="12"></line>
        </svg>
    );
};

export default IconPlus;
