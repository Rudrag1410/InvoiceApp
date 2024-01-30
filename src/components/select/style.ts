import { StylesConfig } from 'react-select';

export const selectStyle = (error: boolean): StylesConfig => {
   return {
      control: (base) => {
         return {
            ...base,
            boxShadow: 'none',
            fontSize: '0.8125rem',
            fontWeight: 400,
            color: '#1E293B',
            border: `1px solid ${error ? '#F87171' : '#c0c0c0'}`,
            textAlign: 'left',
            backgroundColor: error ? '#fef2f2' : '#fff',
            maxHeight: '34px',
            minHeight: '34px',
         };
      },
      dropdownIndicator: (base) => {
         return {
            ...base,
            padding: '0 0.5rem',
         };
      },
      option: (styles, { isFocused }) => {
         return {
            ...styles,
            backgroundColor: isFocused ? '#EFF6FF' : '#fff',
            color: '#1E293B',
            fontSize: '0.8125rem',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            textAlign: 'left',
            zIndex: 20,
         };
      },
   };
};
