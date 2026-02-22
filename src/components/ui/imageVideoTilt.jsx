import { useRef } from 'react';
import { gsap } from 'gsap';

const ImageVideoTilt = ({imageUrl}) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    
    // Menghitung titik tengah kartu
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    // Menghitung rotasi (semakin ke pinggir, semakin miring)
    // Nilai 15 adalah derajat kemiringan maksimal
    const xRotation = ((y - height / 2) / height) * -15;
    const yRotation = ((x - width / 2) / width) * 15;

    gsap.to(card, {
      rotateX: xRotation,
      rotateY: yRotation,
      scale: 1.05, // Efek zoom sedikit
      duration: 0.5,
      ease: 'power3.out',
      transformPerspective: 1000, // Memberikan efek 3D
    });
  };

  const handleMouseLeave = () => {
    // Mengembalikan kartu ke posisi semula
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.5,
      ease: 'power3.out',
    });
  };

  return (
    <div 
    //   className="bg-slate-900"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={cardRef}
        className="w-full aspect-video overflow-hidden shadow-2xl cursor-pointer"
      >
        <img 
          src={imageUrl} 
          className="w-full h-full object-cover" 
          alt="Hydrosee App"
        />
      </div>
    </div>
  );
};

export default ImageVideoTilt