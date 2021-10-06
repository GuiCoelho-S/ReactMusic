import styled from "styled-components";

export const ContainerUser = styled.div`

width:100%;
max-width:1280px;
height:100%;
margin:0 auto;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
gap:10px;

h2 {
    font-size: clamp(1.4rem, -0.875rem + 8.333vw, 2.5rem);
    text-align: center;
}

p {
    font-size:1.2rem;
}
section {
    width:clamp(240px, 100%,600px);
    padding-top:10px;
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}

aside {
    padding-top:30px;
    max-width:600px;
    width:100%;
    display:grid;
    place-items: center;
}

@media (max-width:620px){

    padding:20px;
    box-sizing: border-box;
}

input {
    background-color: var(--gray);
}
`