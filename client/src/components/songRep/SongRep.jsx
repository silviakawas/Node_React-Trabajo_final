import { useState } from "react";
import { SONGS } from "../../constants/songs";
import Songs from "../songs/Songs";
import { StyledButton, StyledSongRep, StyledTitle } from "./styles";

const SongRep = () => {
  const [counter, setCounter] = useState(0);

  const handleNext = () => {
    setCounter((prevCounter) => (prevCounter + 1) % SONGS.length);
  };

  const handlePrev = () => {
    setCounter((prevCounter) => (prevCounter - 1 + SONGS.length) % SONGS.length);
  };

  return (
    <>
      <StyledTitle>¡Escucha esta playlist mientras haces tu plan!</StyledTitle>
      <StyledSongRep>
        <StyledButton onClick={handlePrev}>⬿</StyledButton>
        <Songs
          key={SONGS[counter].songId}
          title={SONGS[counter].title}
          author={SONGS[counter].author}
          image={SONGS[counter].image}
          duration={SONGS[counter].duration}
        />
        <StyledButton onClick={handleNext}>⤳</StyledButton>
      </StyledSongRep>
    </>
  );
};

export default SongRep;
