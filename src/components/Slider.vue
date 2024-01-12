<template>
  <section className="providers">
        <h2>NUESTRAS MARCAS ALIADAS:</h2>
        <div className="slider">
	<div className="slide-track">
		<div className="slide">
			<img src="https://i.ibb.co/sPqcV7m/3-fotor-2024010414108.png" alt="3-fotor-2024010414108" border="0">
		</div>
		<div className="slide">
			<img src="https://i.ibb.co/r0p3Tgp/6-fotor-20240104141553.png" alt="6-fotor-20240104141553" border="0">
		</div>
		<div className="slide">
			<img src="https://i.ibb.co/zsgpsnk/4-fotor-20240104141343.png" alt="4-fotor-20240104141343" border="0">
		</div>
		<div className="slide">
			<img src="https://i.ibb.co/mGxddFL/3-fotor-2023082813148.jpg" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://i.ibb.co/SvNpSPD/7-fotor-20240104141927.png" alt="7-fotor-20240104141927" border="0">
		</div>
		<div className="slide">
			<img src="https://i.ibb.co/3Fs8J0q/8-fotor-20230828133823.jpg" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://i.ibb.co/W5dw1N8/10-fotor-20230828134241.jpg" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://i.ibb.co/h2FFssT/11.jpg" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://i.ibb.co/1K7Y6tw/3e258894c594d7f53032209192eb3f3d-fotor-20240104142636.png" alt="3e258894c594d7f53032209192eb3f3d-fotor-20240104142636" border="0">
		</div>
		<div className="slide">
			<img src="https://i.ibb.co/jDWJhmg/Captura-fotor-20240104143022.png" alt="Captura-fotor-20240104143022" border="0">
		</div>
		<div className="slide">
			<img src="https://i.ibb.co/zWvdxG2/Dodge-Symbol-fotor-20240104143351.png" alt="Dodge-Symbol-fotor-20240104143351" border="0">
		</div>
		<div className="slide">
			<img src="https://i.ibb.co/fCXw8Nh/rexnord-logo-fotor-2024010414333.png" alt="rexnord-logo-fotor-2024010414333" border="0">
		</div>
		<div className="slide">
			<img src="https://i.ibb.co/mcYbTnD/falk-logo-black-and-white-fotor-20240104143324.png" alt="falk-logo-black-and-white-fotor-20240104143324" border="0">
		</div>
		<div className="slide">
			<img src="https://i.ibb.co/wCfHfdp/siemens-logo-0-fotor-20240104143241.png" alt="siemens-logo-0-fotor-20240104143241" border="0">
		</div>
		<div className="slide">
			<img src="https://i.ibb.co/nsYtpyc/starflex-logo-png-transparent-fotor-20240104143220.png" alt="starflex-logo-png-transparent-fotor-20240104143220" border="0">
		</div>
		<div className="slide">
			<img src="https://i.ibb.co/1qPVJ11/Yaskawa-Electric-Corporation-Logo-wine-fotor-20240104143910.png" alt="Yaskawa-Electric-Corporation-Logo-wine-fotor-20240104143910" border="0">
		</div>
		<div className="slide">
			<img src="https://i.ibb.co/DzyvXvN/techtop-logo-d85cffcc383709baf55887fd747cc8bce534f54fcb8d8ce79d822fd1451f83fd-fotor-20240104143936.png" alt="techtop-logo-d85cffcc383709baf55887fd747cc8bce534f54fcb8d8ce79d822fd1451f83fd-fotor-20240104143936" border="0">
		</div>
        <br/>
	</div>
</div>    
</section>
</template>



<style scoped>
.providers {
    display: flex;
    flex-direction: column;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 82px;
}
@keyframes scroll {
    0% {
        transform: translateX(0);
   }
    100% {
        transform: translateX(calc(-250px * 7));
   }
}
.slider {
    background: white;
    height: 100px;
    margin: auto;
    overflow: hidden;
    position: relative;
    width: 960px;
    margin-top: 20px;
    margin-bottom: 26px
}
@media (max-width: 768px) {
    .slider {
        width: 76%;
    }
}
.slider::before, .slider::after {
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
}
.slider::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
}
.slider::before {
    left: 0;
    top: 0;
}
.slider .slide-track {
    animation: scroll 40s linear infinite;
    display: flex;
    width: calc(250px * 14);
}
.slider .slide {
    height: 100px;
    width: 250px;
}

  .sliderContenedor {
    background-color: white;
    color: white;

    letter-spacing: 0.1rem;
    font-size: 1rem;
    line-height: 1.2;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100%;
    height: 500px;
    margin-bottom: 35rem;
  }
  .sliderWrapper {
    width: 100%;
    position: relative;
    text-align: center;
  }
  
  .sliderWrapper .sliderTitle {
    margin: 0 0 1rem;
    letter-spacing: 0.3rem;
    font-weight: bold;
    font-size: clamp(1.5rem, 2.5vw, 2.5rem);
  }
  
  .sliderWrapper .sliderCarrousel .slidebox:not(.active) {
    opacity: 0.2;
    position: absolute;
    max-width: 0;
    max-height: 0;
    transition: opacity 800ms linear;
  }
  
  .sliderWrapper .sliderCarrousel .slidebox {
    width: 100%;
    display: block;
    position: relative;
    padding-bottom: 75%;
    min-height: 100%;
    overflow: hidden;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.08);
    opacity: 1;
    transition: opacity 800ms linear;
  }

  @media (max-width: 980px) {
    .sliderWrapper .sliderCarrousel .slidebox {
        margin-bottom: 1rem;;
    }
    .sliderWrapper .sliderCarrousel .slidebox > h2 {
      font-size: 2rem;
      padding-left: 6rem;
      justify-content: center;
    }
    .sliderContenedor {
      margin-bottom: 12rem;
    }
  }

  @media (min-width: 980px) {
    .sliderContenedor {
      margin-bottom: 38rem;
    }
  }
  
  @media (max-width: 480px) {
    .sliderWrapper .sliderCarrousel .slidebox {
      padding-bottom: 100%;
    }
  }

  @media (max-width: 1250px) {
    .sliderContenedor {
      margin-bottom: 24rem;
    }
  }
  
  .sliderWrapper .sliderCarrousel .slidebox > img {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center center;
    filter: contrast(1.3) brightness(0.9);
    transition: all 300ms;
  }
  
  .sliderWrapper .sliderCarrousel .slidebox > h2 {
    position: absolute;
    top: 50%;
    width: 100%;
    padding-left: 10rem;
    color: white;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: left;
    justify-content: left;
    font-size: 7rem;
    font-weight: 500;
    transition: padding 300ms;
    background-color: rgba(0, 0, 0, 0.69);
  }
  
  .sliderWrapper .sliderCarrousel .slidebox:hover > img {
    filter: contrast(1.3) brightness(1);
  }
  
  
  .sliderWrapper > button {
    position: absolute;
    top: 60%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    border: none;
    background-color: rgba(0, 0, 0, 0.69);
    cursor: pointer;
    color: white;
    padding: 0.5rem;
    margin: 0;
    z-index: 100;
    border-radius: 1rem;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 300ms;
  }
    
  .sliderWrapper > button:hover {
    background-color: rgba(0, 0, 0, 0.75);
  }

  .sliderWrapper > button.prevArrow {
    left: clamp(0px, 1vw, 1rem);
  }

  .sliderWrapper > button.nextArrow {
    right: clamp(0px, 1vw, 1rem);
  }

  @media (max-width: 480px) {
    .sliderWrapper > button{
      width: 36px;
      height: 36px;
      font-size: 1.5rem;
    }
  }
  
  .sliderWrapper .sliderPagination {
    margin-top: 2rem;
    background-color: rgba(0, 0, 0, 0.69);
    border-radius: 1rem;
    padding: 1rem;
    display: inline-block;
    text-align: center;
    pointer-events: none;
  }
  
</style>
