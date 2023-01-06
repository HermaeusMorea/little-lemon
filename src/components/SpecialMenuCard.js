import React from 'react';
import StyledButton from './StyledButton';
import FoodCard from './FoodCard';
import Food1 from './source/Food1.png'
import Food2 from './source/Food2.png'
import Food3 from './source/Food3.png'
import './SpecialMenuCard.css'
function SpecialMenuCard() {
  return (
    <div>
      <div className='titleOfTheSpecialMenuCard'>
        <div className='titleOfTheSpecialMenuCard_left'>This Weeks Special:</div>
        <div className='titleOfTheSpecialMenuCard_right'><StyledButton name="Online Menu" width='200px' height='43px'/></div>
      </div>
      <div className='ContentOfTheSpecialMenuCard'>
        <div className='ContentOfTheSpecialMenuCard_First'>
        <FoodCard name='Pizza' price='12.9 ' image={Food1} description='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'/>
        </div>
        <div className='ContentOfTheSpecialMenuCard_Second'>
        <FoodCard name='Brushetta' price='7.99' image={Food2} description='Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.'/>
        </div>
        <div className='ContentOfTheSpecialMenuCard_Third'>
        <FoodCard name='Grilled Fish' price='20.00' image={Food3} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.'/>
        </div>

      </div>
    </div>
  );
}

export default SpecialMenuCard;
