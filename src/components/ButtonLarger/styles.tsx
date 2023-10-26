import styled from "styled-components";

export const Button = styled.div`
background:#FF7B58 ;
display: flex;
align-items: center;
justify-content: center;
border-radius:50px;
padding:15px 26px;;
font-family: 'Poppins',sans-serif;
transition: 0.9s;
&:hover {
    background-color: #f8673e;
    cursor: pointer;
  }
`

export const Title = styled.h2`
font-family: 'Poppins',sans-serif;
color: #FFF;
font-size: 2,5rem;
font-weight:800;
`
