import styled from 'styled-components'

const ButtonContainer = styled.button`

font-size:1.2rem;
font-family: sans-serif;
text-transform:uppercase;
padding:10px 8px;
border:none;
border-radius:5px;
background:transparent;
border:1px solid ${props=>props.cart ? 'orange' : 'blue'};
margin:10px;
transition:1s all;
font-weight:700;
color:${props=>props.cart ? 'orange' : 'blue'};

&:hover{
    background:${props=>props.cart ? 'orange' : 'blue'};
    color:white;
}

&:focus{
    outline:none;
}





`

export default ButtonContainer