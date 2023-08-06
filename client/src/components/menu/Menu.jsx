import { Link } from "react-router-dom";
import { StyledContainer, StyledH1, StyledLi, StyledP, StyledUl } from "./styles";

const Menu = ()=>{
    return(
        <>
            <StyledContainer>
                <StyledH1>
                    <Link to='/'>Agenda</Link>
                </StyledH1>
                <StyledUl>
                    <StyledLi>
                        <Link to='/'>Inicio</Link>
                    </StyledLi>
                    <StyledLi>
                        <Link to='/nuevoplan'>¿Qué plan tienes hoy?</Link>
                    </StyledLi>
                    <StyledP>✺</StyledP>
                </StyledUl>

            </StyledContainer>
        
        </>
    )
};

export default Menu;