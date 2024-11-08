import PropTypes from "prop-types";

export const CategoryCard = ({name, color}) => {
    return (
        <div className={'flex items-center gap-4 min-w-[20vw]'}>
            <div className={`w-8 h-8 bg-[#${color}]`}></div>
            <p className={'text-lg'}>{name}</p>
        </div>
    )
}

CategoryCard.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}