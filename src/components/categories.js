import '../styles/Categories.css'


const Categories = ({setActiveCategory, activeCategory, categories}) =>{
    return(
        <div className='lmj-categories'>
            <select 
                name="categories"
                id="categories"
                value={activeCategory}
                onChange={(e)=> setActiveCategory(e.target.value)}
                className="lmj-categories-select"
            >
                <option value="">---</option>
                {categories.map((cat) =>(
                    <option value={cat} key={cat}>{cat}</option>
                ))}
            </select>
            <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
        </div>
    )
}

export default Categories