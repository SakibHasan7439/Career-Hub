import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, []);

    return (
        <div className="text-center mb-12">
            <h2 className="text-xl md:text-3xl mb-3">Job Category List</h2>
            <p className="mb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {
                    categories.map((category)=> <Category 
                    key={category.id}
                    category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default CategoryList;