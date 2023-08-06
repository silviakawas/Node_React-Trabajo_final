import { StyledDiv, StyledHr, StyledP, StyledPlay, StyledSongCont, StyledSongImg, StyledTitle } from "./styles";

const Songs = ({title, author, image, duration}) =>{

    return(
        <>
            <StyledSongCont>
                <StyledDiv>
                    <StyledSongImg src={image} alt={title}/>
                </StyledDiv>
                <StyledDiv>
                    <StyledTitle>{title}</StyledTitle>
                    <StyledP>{author}</StyledP>
                    <StyledPlay>
                        <StyledP>►</StyledP>
                        <StyledHr/>
                        <StyledP>{duration}</StyledP>
                    </StyledPlay>
                </StyledDiv>
            </StyledSongCont>
        </>
    );
};

export default Songs;