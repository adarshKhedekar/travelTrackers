import './Category.scss'
import DoubleDeck from '../../../assets/Category/ddb.png';
import MiniBus from '../../../assets/Category/mb.png';
import Shuttle from '../../../assets/Category/sb.png';
import SingleDeck from '../../../assets/Category/sdb.png';
function Category() {
  return (
    <div className='shop-by-category' id='category'>
      <div className="sec-heading">Bus Categories</div>
      <div className="categories">
        <div className="category">
            <img src={DoubleDeck} alt=""/>
        </div>
        <div className="category">
            <img src={SingleDeck} alt="" />
        </div>
        <div className="category">
            <img src={MiniBus} alt="" />
        </div>
        <div className="category">
            <img src={Shuttle} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Category
