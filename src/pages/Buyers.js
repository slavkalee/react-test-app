import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import BuyersTable from '../components/BuyersTable';
import Field from '../components/Field';
import Title from '../components/Title'
import { filterByName } from '../utils';


const BuyersContainer = styled.div``;


export default function Buyers() {
    const [searchString, setSearchString] = useState('');
    const buyers = useSelector((state) => filterByName(state.buyers, searchString));

    const handleChange = (e) => {
        setSearchString(e.target.value);
    };

    return (
        <BuyersContainer>
            <Title>Покупатели</Title>
            <Field 
                label="Поиск по имени"
                type="text"
                name="search"
                value={searchString}
                onChange={handleChange}
                autoComplete="off"
            />
            <BuyersTable data={buyers} limits={[5, 10, 15]} />
        </BuyersContainer>
    )
}
