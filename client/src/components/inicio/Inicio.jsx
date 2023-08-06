import { StyledContainer, StyledDiv, StyledH1, StyledHeader, StyledP } from "./styles";

const Inicio = ()=>{
    return(
        <>
            <StyledHeader>
                <StyledDiv>
                    <StyledH1>Mi agenda</StyledH1>
                    <StyledH1>personal</StyledH1>
                </StyledDiv>
                <StyledDiv>
                    <StyledP>¿Tienes la cabeza a uvas?</StyledP>
                    <StyledP>¡No te olvides de ningún plan gracias a tu nueva agenda!</StyledP>
                </StyledDiv>
            </StyledHeader>
            <StyledContainer>

            </StyledContainer>
        </>
    )
};

export default Inicio;