import React from 'react';
import { Dropdown } from 'react-bootstrap';

import { capitalizeFirstLetter } from '../utils'

const FilterDropdown = ({ filterOptions, selectedFilter, onSelectFilter }) => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="filter-dropdown">
                {capitalizeFirstLetter(selectedFilter)}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {filterOptions.map((filter) => (
                    <Dropdown.Item key={filter} onClick={() => onSelectFilter(filter)}>
                        {capitalizeFirstLetter(filter)}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default FilterDropdown;