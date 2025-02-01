
import { Img } from '@/ui-fenextjs/Img';
export interface LogoProps {}

export const Logo = ({}: LogoProps) => {
    return (
        <>
                    <Img src="/img/logo.png" className='logo' />
        </>
    );
};
