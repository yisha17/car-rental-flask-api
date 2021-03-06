
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
    background: ${({primary}) => (primary ? '#000d1a':'CD853F')};
    white-space: nowrap;
    min-width: 100px;
    border:none;
    max-width:200px;
    cursor:pointer;
    text-decoration: none;
    align-items: center;
    outline: none;
    justify-content: center;
    transition:0.3s;
    padding:${({big}) => (big ? '16px 40px': '14px 24px')};
    color: ${({ primary }) => (primary ? '#fff':'#000d1a')};

    font-size : ${({big}) => (big ? '20px': '14px')};

    &:hover {
        transform:translateY(-2px);
    }
`;
