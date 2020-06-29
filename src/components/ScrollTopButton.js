import ScrollTop from 'react-scrolltop-button';
import JetpackOn from '../svg/JetpackOn'

const ScrollTopButton = ({distance=700}) => {
    return (
        <ScrollTop 
            text=''
            distance={distance}
            breakpoint={50000}
            speed={500}
            style={{'border': 'none',
                    'background-color': 'transparent',
                    'width': '60px'}}
            icon={<JetpackOn />}
        />
    );
};

export default ScrollTopButton;