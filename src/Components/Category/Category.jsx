const Category = ({category}) => {
    const {availability, category_name, logo} = category;
    return (
        <div>
            <div className="card bg-purple-50 rounded-lg">
                <div className="card-body">
                    <img className="w-12 mb-3" src={logo} alt={category_name + " " + "logo"} />
                    <h3 className="text-left text-xl md:text-2xl font-semibold">{category_name}</h3>
                    <p className="text-left text-gray-400">{availability}</p>
                </div>
            </div>
        </div>
    );
};

export default Category;