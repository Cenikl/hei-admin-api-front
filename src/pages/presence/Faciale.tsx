import React, { useEffect, useRef, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import Modal from '../../components/modal/Modal';
import './Faciale.css'

function Faciale() {
    const [photo, setPhoto] = useState<string>("")/* ity le alefa any @ back*/ 
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const photoRef = useRef<HTMLCanvasElement | null>(null);
    const [confirm, setConfirm] = useState<boolean>(false);
    const navigate = useNavigate();

    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({
                audio: false,
                video: {
                    width: 1000,
                    height: 20
                }
            })
            .then(stream => {
                let video = videoRef.current;
                video!.srcObject = stream;
                {video? video!.play().catch((err)=>console.log(err)):""}
            })
    }

    const takePhoto = () =>{
        const width = 500;
        const height = width / (100/9);
    
        let video:HTMLVideoElement = videoRef.current!;
        let photo:HTMLCanvasElement = photoRef.current!;
    
        photo!.width = width!;
        photo.height = height;
        
        let imageContext = photo.getContext('2d');
        imageContext!.drawImage(video, 0, 0, width, height)
        setPhoto(photo.toDataURL())
    }
    
    useEffect(()=>{
        getVideo();
    }, [videoRef])

    const handleModal = (): void => {
        setConfirm(!confirm)
    }

    const close = () => {
        navigate("/landing")
    }

    return (
        <div className='face__container'>
            <video ref={videoRef} className="face__camera"/>
            <canvas ref={photoRef} style={{ display:'none'}}/>
            <div className='face__button'>
                <button className='face__confirm' onClick={handleModal}>
                    Vérifier ma présence
                </button>
                <button className='face__close' onClick={()=>close()}>
                    Términer
                </button>
            </div>
            <Modal isActive={confirm} 
                handleModal={handleModal}
                title="Resultat du traitement">
                    <span>Cette étudiant sera marqué présent à cette evenement</span>
                    <div className='presence__confirm'>
                        <Button title='Confirmer' />
                        <Button title='Refuser'/>
                    </div>
            </Modal>
        </div>
    )
}

export default Faciale
