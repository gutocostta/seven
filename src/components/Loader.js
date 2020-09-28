import React from 'react';
import { GridLoader } from 'react-spinners';

export default function Loader({ loading, color, ...rest }) {
    return (
        <GridLoader loading={loading} color={color || '#409dd5'} {...rest} />
    );
};