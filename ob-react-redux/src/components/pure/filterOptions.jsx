import React from 'react';
import PropTypes from 'prop-types';
import FilterContainer from '../containers/filterContainer';

const FilterOptions = () => {
	return (
		<div className="filters">
			{/* Filter container */}
			<FilterContainer filter="SHOW_ALL">ALL</FilterContainer>
			<FilterContainer filter="SHOW_ACTIVE">ACTIVE</FilterContainer>
			<FilterContainer filter="SHOW_COMPLETED">COMPLETED</FilterContainer>
		</div>
	);
};

FilterOptions.propTypes = {
	active: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
};

export default FilterOptions;
