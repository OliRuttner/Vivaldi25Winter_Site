import React, { useState, useEffect } from "react";

const testimonials = [
  {
    text: "Pe mine cel puțin m-a ajutat să ies din zona de confort foarte mult, mi-am făcut o mulțime de prieteni noi peste tot în Europa și mi-am exersat engleza. Aș recomanda 100% experiența, mai ales dacă ești pasionat de travelling și îți place să experimentezi culturi noi.",
    author: "Anda Bodea",
    picture: require('./anda_bodea.jpg')
  },
  {
    text:"Cursul din Torino a fost primul meu curs și o experiență grozavă. Am cunoscut o grămadă de oameni cu care încă vorbesc. Am stat mai mult de o săptămână și am explorat orașul pentru un preț foarte mic. De-abia aștept următoarea dată când merg la un curs!",
    author: "Raul Petruț",
    picture: require('./raul_petrut.jpg')
  },
  {
    text: "Am participat toamna aceasta la cursul BEST din Valladolid, Spania. Nu cunoșteam pe nimeni, nu au fost alți participanți din România și a fost prima dată când am călătorit singură. În ciuda acestor lucruri, m-am simțit ca acasă încă din prima zi! Mi-am făcut mulți prieteni, am vizitat mai multe orașe și am rămas cu amintiri la care mă gândesc cu drag. Pe scurt, cursul a fost cel mai frumos lucru pe care l-am făcut vara aceasta!",
    author: "Patricia Fătu",
    picture: require('./patricia_fatu.jpg')
  },
  {
    text:"A fost highlight-ul verii mele!! Exact ce ai nevoie când simți că lipsește ceva. Combinația perfectă între fun și util. Sigur aș recomanda oricui experiența asta, pentru că e mult mai frumos decât îți poți imagina. Da, e imposibil să nu-ți faci prieteni când ești înconjurat de oameni atât de faini. Ajungi să te apropii super repede, uneori dintr-o seară random, iar apoi păstrezi legătura până în prezent. Nici nu simți că faci asta. Pur și simplu trăiești momentul, te bucuri de tot și ajungi să faci o grămadă de lucruri pe care, în mod normal, nu le-ai fi făcut. Asta e BEST.",
    author: "Riana Horvath",
    picture: require('./riana_horvath.jpg')
  },
  {
    text: `<b>Cum ți s-a părut experiența? Ai recomanda-o și altcuiva?</b><br />
           Toată experiența cursului se simte exact ca o pauză din orice rutină obișnuită. 
           Nu se pot descrie în cuvinte toate lucrurile noi pe care le experimentezi, 
           cunoștințele pe care le câștigi și interacțiunea cu oamenii, într-un mod care să îi păstreze esența. 
           <i>Aș recomanda oricui să își pregătească curajul și entuziasmul de a aplica la cursuri cât de mult posibil.</i><br /><br />
           <b>Ți-ai făcut prieteni noi?</b><br />
           Inevitabil ajungi să creezi legături cu cei mai frumoși oameni. Vă întâlniți într-un singur punct pe harta Europei, 
           fiecare cu originile lui, caracterul lui, cultura lui, dar cu scopuri comune. 
           Rămâi cu prieteni și amintiri care îți îmbunătățesc instant starea de spirit de fiecare dată când îți reapar în gând.<br /><br />
           <b>Te-a ajutat să îți ieși din zona de confort?</b><br />
           Cred că ideea de a merge singur, plin de emoții, adaugă o scânteie specială întregii experiențe. 
           Te ajută să ieși din obișnuință în cel mai confortabil mod posibil. 
           În final, pleci cu bucăți mici din toți oamenii pe care i-ai cunoscut și pe care ajungi să le păstrezi mult timp.`,
    author: "Bianca Lungu",
    picture: require('./bianca_lungu.jpg')
  },
  {
    text:"Pentru mine, să particip la un curs BEST a fost o experiență chiar mai plăcută decât mă așteptam. În fiecare zi simțeam că mă distrez tot mai bine și nicio secundă nu a fost plictisitoare sau lipsită de activitate. Consider că e o experiență pe care toată lumea trebuie să o încerce măcar o dată, pentru că poți descoperi o nouă latură a ta. Chiar dacă te consideri o persoană introvertită, vei ajunge să te simți bine și să te distrezi cu oamenii pe care îi cunoști, fără să îți dai seama. Până și eu mi-am făcut prieteni în toate colțurile Europei și cu mulți dintre ei deja m-am revăzut sau am făcut planuri să ne întâlnim din nou!",
    author: "Raul Modi",
    picture: require('./raul_modi.jpg')
  }
];
const Testimonials = () => {

const [index, setIndex] = useState(0);
const [isPaused, setIsPaused] = useState(false);

// Auto-play every 5 seconds
useEffect(() => {
  if (isPaused) return;

  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, 15000);

  return () => clearInterval(interval);
}, [isPaused]);

const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
const togglePause = () => setIsPaused((prev) => !prev);

  return (
    <div className="testimonials-section" id="testimonials">
      <h2 className="testimonials-title">Testimonials</h2>
      <div className="testimonial-carousel">
        <div className="testimonial">
          <p className="testimonial-text" dangerouslySetInnerHTML={{ __html: testimonials[index].text }}></p>
          <h4 className="testimonial-author">{testimonials[index].author}</h4>
          <img className="testimonial-image" src={testimonials[index].picture} alt={testimonials[index].author} />
        </div>

        <div className="testimonial-buttons">
          <button className="prev" onClick={prev}>❮</button>
          <button className="next" onClick={next}>❯</button>
          <button className="pause" onClick={togglePause}>{isPaused ? 'Resume' : 'Pause'}</button>
        </div>
      </div>
    </div>
  );
}
 
export default Testimonials;