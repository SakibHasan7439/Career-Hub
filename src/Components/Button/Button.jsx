const Button = ({title, onClick}) => {
    return (
        <div>
            <button onClick={onClick} className={`px-3 md:px-5 py-2 md:py-3 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white rounded-lg font-semibold`}>{title}</button>
        </div>

    );
};

export default Button;