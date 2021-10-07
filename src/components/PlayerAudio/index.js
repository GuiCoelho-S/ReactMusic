import * as S from './style';
import Cogumelo from 'assets/images/cogumelo.png'
import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlinePause } from 'react-icons/ai'
import DeezerIMG from 'assets/images/deezer-logo.png';
import { useSelector } from 'react-redux';
import { PlayButton } from 'design/PlayButton';
import { useState, useEffect, useRef } from 'react';


const PlayerAudio = () => {
    const [imageDefault , setImageDefault ] = useState(true);
    const [ audio, setAudio ] = useState(true);

    const data = useSelector(state => state.getMusic); 
    const audioRef = useRef();

    useEffect(() => {
        const handleStateDefault = () => {
            if(data[3].length !== 0){
                setImageDefault(false)
            }
        }
        handleStateDefault();

        const PlayAudio = () => {
            if(audio === true){
                audioRef.current.play();
            }else{
                audioRef.current.pause();
            }
           
        }
        PlayAudio(); 
    }, [data, audio])

    var minutes = parseInt((data[2]/60).toFixed(2));
    var seconds = data[2]%60;

    console.log(data[5])

    return(
        <S.ContainerPlayer>
           <h2>Tocando agora</h2>
            <h3>{data[0]}</h3>

            <S.ImageDiv>
                {
                    imageDefault ? <S.Image src={Cogumelo} alt="Capa do álbum" />
                    : <S.Image src={data[3]} alt="Capa do álbum" />
                }
            </S.ImageDiv>
            <aside>
                <p>{`cantor: ${data[1]}`}</p>
                <p>{`${minutes}:${seconds} min`}</p>
            </aside>

                <S.PlayerInteraction>
                {
                    audio ? <PlayButton onClick={() => {
                        if(data[5].length !== 0){
                            setAudio(!audio);
                        }
                    }}><AiOutlinePause /></PlayButton>
                    : <PlayButton onClick={() => {setAudio(!audio)}}><BsFillPlayFill /></PlayButton>
                }
                <audio ref={audioRef} src={data[5]}></audio>
                </S.PlayerInteraction>

                
            
            

            <p>Clique e escute a música completa no deezer</p>
            <S.DeezerButton href={data[4]} target="_blank" >
                <S.Img src={DeezerIMG} alt="Acessar a música completa no deezer" />
            </S.DeezerButton>
        </S.ContainerPlayer>
    )
}

export default PlayerAudio;