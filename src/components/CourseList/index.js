import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';

export default function ItemsList() {
  const items = useSelector(state => state.data);
  const dispatch = useDispatch();
  
    function addItem(){        
        dispatch({ type: 'ADD_ITEM', name: 'Meia'})
    }

   return (
    <>
    <ul>
      { items.map(items => <li key={items}>{items}</li>) }
    </ul>
    <button type="button" onClick={addItem}>
        Adicionar Item
    </button>
    </>
  );
}

