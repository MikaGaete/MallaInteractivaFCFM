import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";

export const NavigationCard = ({short, name}) => {
    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        navigate(event.target.value);
    }

    return (
        <button key={short} className={'w-full bg-gradient-to-r from-[#60b6f1] to-[#5257e5] h-[20vh] text-2xl font-semibold rounded-xl text-white text-center'}
                onClick={handleClick} value={short}>{name}</button>
    )
}

NavigationCard.propTypes = {
    short: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}