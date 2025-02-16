import React,  { useEffect, useState } from "react";
import HomeLink from "../components/CustomLinks";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import Button from "../components/Button";
import scrollUpOrange from "../assets/svg/scroll-up-orange.svg";

const Privacy = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const checkScrollHeight = () => {
          setIsVisible(window.scrollY > 500);
        };
        window.addEventListener("scroll", checkScrollHeight);
    
        return () => window.removeEventListener("scroll", checkScrollHeight);
    }, []);

    function handleScrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <Layout>
            <Navigation navType="orange" />
            <header
                role="banner"
                className="font-PoppinsRegular w-full flex items-center justify-center flex-wrap flex-col py-16 md:py-24 lg:py-32 leading-[110%] bg-[radial-gradient(circle,_rgba(243,120,29,1)_77%,_rgba(255,106,106,1)_100%)]">
                <h1 className="tracking-[1px] text-white text-[40px] md:text-[44px] mb-2 xl:text-[60px] font-semibold  text-center">
                    Confidențialitate
                </h1>
            </header>
    
            <article className="font-PoppinsRegular flex flex-col w-full">
                <section className="pt-12 bg-text_orange/5 w-full flex flex-col items-center" aria-labelledby="terms-intro-heading">
                    <h2 className="text-lg leading-6 text-left mb-4 w-3/4"><strong>INFORMARE GENERALĂ CU PRIVIRE LA POLITICA DE CONFIDENȚIALITATE SI PRELUCRARE A DATELOR CU CARACTER PERSONAL</strong></h2>
                    <p className="mb-4 w-3/4">
                        Vă mulțumim pentru interesul acordat <strong>ASOCIAȚIEI OPORTUNTĂȚI ȘI CARIERE</strong>, Pentru noi este deosebit de important să asigurăm protecția datelor cu caracter personal pe care ni le furnizați:
                    </p>
                    <p className="mb-4 w-3/4">ASOCIAȚIA OPORTUNTĂȚI ȘI CARIERE cu sediul social în Zimbor nr 215 , județul Salaj, în calitate de operator de date cu caracter personal 
                        (denumită în continuare „Societatea” sau „Operatorul”), respectă întocmai prevederile legale în vigoare privind protecția persoanelor cu privire la prelucrarea datelor 
                        cu caracter personal și libera circulație a acestor date.
                    </p>
                    <p className="mb-4 w-3/4">Ne angajăm să prelucrăm datele dumneavoastră cu caracter personal în concordanță cu Regulamentul (UE) 679/2016 (GDPR), precum și cu orice altă legislație 
                        aplicabilă pe teritoriul României. ASOCIAȚIA OPORTUNTĂȚI ȘI CARIERE operează platforma <HomeLink />, astfel încât toate informațiile cuprinse în acest material au legătură 
                        și sunt valabile în raport cu activitatea pe platforma <HomeLink />. Pentru a înțelege mai bine politica noastră de protecție a datelor, vă invităm să citiți acest material. 
                        Ne rezervăm dreptul de a actualiza și modifica periodic această Politică de protecție a datelor cu caracter personal („Politica”) fără a vă cere acordul prealabil și fără a fi 
                        supuși unei proceduri de notificare individuală ori specială a modificărilor aduse. În cazul oricărei astfel de modificări, vom afișa pe site versiunea actualizată a Politicii  
                        de protecție a datelor cu caracter personal, rămânând în sarcina dumneavoastră să verificați conținutul acestei Politici ori de câte ori accesați site-ul, pentru a vă asigura 
                        că sunteți la curent cu ultima versiune.
                    </p>
                    <p className="mb-4 w-3/4">Vă stăm la dispoziție pentru informații și pe email asocpeviitor@gmail.com.</p>
                </section>
                   
                <section  className="pt-12 w-full flex flex-col items-center" aria-labelledby="general-terms-heading">
                    <h2 className="text-lg leading-6 text-left mb-4 w-3/4">
                        <strong>1. CINE SUNTEM?</strong>
                    </h2>
                    <ol className="mb-8 w-3/4 list-inside">
                        <li className="mb-4">
                            Calitatea de Operator de Date cu caracter personal o are ASOCIAȚIA OPORTUNTĂȚI ȘI CARIERE, cu sediul social în Zimbor nr 215 jud Salaj.
                        </li>
                    </ol>
                </section>

                <section className="pt-12  bg-text_orange/5 w-full flex flex-col items-center" aria-labelledby="content-heading">
                    <h2 className="text-lg leading-6 text-left mb-4 w-3/4"><strong>2. CE FEL DE DATE PRELUCRĂM? </strong></h2>
                    <ol className="mb-8 w-3/4">
                        <li className="mb-4">
                            Analizăm informațiile folosite pentru căutare dar nu prelucrăm date personale.
                        </li>
                        <li className="mb-4">Folosim rețeaua Cloudflare - o rețea de tip CDN (Content Delivery Network), o rețea distribuită 
                            de servere care creează caching de resurse front end (css, js, html, jpg, etc) prin care ajută la îmbunătățirea 
                            vitezei de încărcare a paginii, reducerea utilizării lățimii de bandă și reducerea utilizării procesorului pe server. 
                            Cloudflare ajută la îmbunătățirea securității prin blocarea amenințărilor înainte de a afecta site-ul sau serverul de 
                            pe care se încarcă site-ul. Cloudflare blocheaza traficul robotilor sau accesarile abusive
                        </li>
                        <li className="mb-4">Când vizitați site-ul, se colectează automat anumite informații despre dispozitivul dumneavoastră, cum 
                            ar fi informații despre browser, adresa IP, fus orar și unele cookie-uri instalate pe dispozitiv.
                        </li>
                        <li className="mb-4">Vă rugăm să consultați și secțiunea privind Politica de cookie-uri afișată pe pagina dedicate <HomeLink />. 
                            Nu colectăm și nu prelucrăm date sensibile, definite ca atare de GDPR.
                        </li>
                    </ol>
                </section>

                <section className="pt-12 w-full flex flex-col items-center" aria-labelledby="copyright-rights">
                    <h2 className="text-lg leading-6 text-left mb-4 w-3/4"><strong>3. SCOPUL PENTRU CARE SE POT PRELUCRA DATE PERSONALE POATE FI PENTRU</strong></h2>
                    <ul className="mb-8 w-3/4 [list-style-type:disc] list-inside">
                        <li className="mb-4">
                            a face posibilă funcționarea site-ului
                        </li>
                        <li className="mb-4">
                            oferirea de răspunsuri la reclamațiile plasate
                        </li>
                        <li className="mb-4">
                            evaluarea serviciilor oferite pe site
                        </li>
                        <li className="mb-4">
                            monitorizarea vânzărilor și comportamentul clienților, scopuri administrative, de media și altele asemenea - dacă vă oferiți consimțământul în acest sens
                        </li>
                        <li className="mb-4">
                            comunicarea de oferte de servicii - dacă vă oferiți consimțământul în acest sens
                        </li>
                    </ul>
                </section>

                <section className="pt-12  bg-text_orange/5 w-full flex flex-col items-center" aria-labelledby="responsibilities">
                    <h2 className="text-lg leading-6 text-left mb-4 w-3/4"><strong>4. TEMEIURILE PRELUCRĂRII</strong></h2>
                    <p className="mb-4 w-3/4">Operatorul are dreptul de a prelucra date personale pentru scopurile prezentate mai sus:</p>
                    <ul className="mb-8 w-3/4 [list-style-type:disc] list-inside">
                        <li className="mb-4">
                            pentru că prelucrarea datelor este necesară pentru a face posibilă funcționarea site-ului și accesul la serviciile oferite pe site,
                        </li>
                        <li className="mb-4">
                            oferirea de răspunsuri la reclamațiile plasate, dacă este cazul,  
                        </li>
                        <li className="mb-4">
                            pentru că v-ați dat consimțământul expres în acest sens prin bifarea căsuțelor aferente În cazul în care prelucrarea datelor nu este necesară 
                            pentru încheierea și executarea raporturilor noastre juridice, nu vom prelucra date personale pentru niciunul dintre scopurile de mai sus dacă 
                            nu avem consimțământul dumneavoastră în acest sens.
                        </li>
                    </ul>
                </section>

                <section className="pt-12 w-full flex flex-col items-center" aria-labelledby="information-submission">
                    <h2 className="text-lg leading-6 text-left mb-4 w-3/4"><strong>5. DURATA DE STOCARE ȘI PRELUCRARE A DATELOR</strong></h2>
                    <ol className="mb-8 w-3/4">
                        <li className="mb-4">
                            Datele se prelucrează pe durata necesară îndeplinirii scopurilor și pe perioada impusă de reglementările legale aplicabile.
                        </li>
                    </ol>
                </section>

                <section className="pt-12 bg-text_orange/5 w-full flex flex-col items-center" aria-labelledby="user-obligations">
                    <h2 className="text-lg leading-6 text-left mb-4 w-3/4"><strong>6. MĂSURI DE SECURITATE A DATELOR</strong></h2>
                    <ol className="mb-8 w-3/4">
                        <li className="mb-4">Societatea asigură măsurile tehnice și juridice adecvate pentru a asigura o protecție efectivă a datelor cu caracter personal. 
                            Ne angajăm să păstrăm datele în siguranță și luăm măsurile rezonabile în acest sens, inclusiv împotriva accesului neautorizat, al utilizării 
                            neautorizate a datelor, distrugerii, pierderii sau alterării acestora.
                        </li>
                        <li className="mb-4">
                            Vă rugăm să consultați și secțiunea privind Politica de cookie-uri afișată pe pagina principală a site-ului nostru.
                        </li>
                    </ol>
                </section>

                <section className="pt-12 w-full flex flex-col items-center" aria-labelledby="liabilities-indemnities">
                    <h2 className="text-lg leading-6 text-left mb-4 w-3/4"><strong>7. CE DREPTURI AVEȚI ÎN LEGĂTURĂ CU DATELE PERSONALE PE CARE NI LE FURNIZAȚI</strong></h2>
                    <ol className="mb-4 w-3/4">
                        <li className="mb-4">
                            Ne angajăm să asigurăm securitatea datelor cu caracter personal prin adopta de măsuri tehnice și organizatorice adecvate, conform standardelor industriei.
                        </li>
                        <li className="mb-4">Platforma este aliniată la cerințele GDPR și folosește tehnologie de criptare și securizare a datelor la nivelul celor folosite de 
                            instituțiile bancare. Vă asigurăm și vă respectăm drepturile stabilite prin legislația în vigoare.
                        </li>
                        <li className="mb-4">
                            Dreptul la informare – puteți solicita informații și detalii privind activitățile de prelucrare a datelor personale. Vă stăm 
                            la dispoziție la adresa de email: asocpeviitor@gmail.com . Suntem atenți la asigurarea dreptului dumneavoastră de a primi informații clare, 
                            transparente, ușor de înțeles și accesibile cu privire la modul în care vă prelucrăm datele, inclusiv detalii legate de drepturile pe care le dețineți 
                            în acest sens și care sunt prezentate și în acest document.
                        </li>
                        <li className="mb-4">
                            Dreptul la rectificare – în cazul în care constatați că datele dumneavoastră personale pe care le prelucrăm sunt incorecte, incomplete, inexacte, le puteți 
                            rectifica sau le puteți completa printro simplă solicitare de rectificare trimisă la adresa ascoepviitor@gmail.com.
                        </li>
                        <li className="mb-4">
                            Dreptul la stergerea datelor ("dreptul de a fi uitat") – puteți obtine ștergerea datelor, în cazul în care prelucrarea acestora nu a fost legală sau în 
                            alte cazuri prevăzute de lege.
                        </li>
                    </ol>
                    <p className="w-3/4 mb-4">
                        Ștergerea datelor poate avea loc în oricare dintre situațiile următoare:
                    </p>
                    <ol className="mb-4 w-3/4 [list-style-type:lower-alpha] list-inside">
                        <li className="mb-4">
                            nu mai avem nevoie de datele personale pentru îndeplinirea vreunuia dintre scopurilor pentru care le-am prelucrat anterior;
                        </li>
                        <li className="mb-4">
                            vă retrageți consimțământul pe baza căruia v-am prelucrat anterior și nu există un alt temei juridic pe care ne putem baza o prelucrare viitoare;
                        </li>
                        <li className="mb-4"> 
                            vă opuneți prelucrării datelor atunci când prelucrăm datele în scop de marketing direct (inclusiv, profilarea în scop de marketing direct);
                        </li>   
                        <li className="mb-4">
                            vă opuneți prelucrării datelor bazat pe interesul nostru legitim și nu putem să demonstrăm că avem motive legitime care justifică prelucrarea și
                            care prevalează asupra intereselor, drepturilor și libertăților dumneavoastră;
                        </li>  
                        <li className="mb-4">
                            datele personale sunt prelucrate contrar legii;
                        </li> 
                        <li className="mb-4">
                            datele personale trebuie șterse pentru a ne conforma obligațiilor noastre legale.
                        </li>
                    </ol>    
                    <p className="w-3/4 mb-4">
                        Vă vom putea respinge solicitarea de ștergere a datelor dacă:
                    </p>
                    <ol className="mb-4 w-3/4 [list-style-type:lower-alpha] list-inside">
                        <li className="mb-4">
                            trebuie să ne conformăm unor obligații legale de a păstra datele;
                        </li>
                        <li className="mb-4">
                            dacă datele ne sunt necesare pentru constatarea, exercitarea sau apărarea drepturilor noastre în justiție.
                        </li>
                    </ol>
                    <p className="w-3/4 mb-4">
                        Dreptul la restricționarea prelucrării - puteți solicita restricționarea prelucrării în cazurile în care:
                    </p>
                    <ol className="mb-4 w-3/4 [list-style-type:lower-alpha] list-inside">
                        <li className="mb-4">
                            contestați exactitatea datelor pe o perioadă care ne permite verificarea corectitudinii datelor;
                        </li>
                        <li className="mb-4">
                            prelucrarea este ilegală, dar vă opuneți ștergerii datelor cu caracter personal, solicitând în schimb restricționarea;
                        </li>
                        <li className="mb-4">
                            în cazul în care Operatorul nu mai are nevoie de datele cu caracter personal în scopul prelucrării, dar dumneavoastră ni le 
                            solicitați pentru constatarea, exercitarea sau apărarea unui drept în instanță sau în fața organelor de arbitraj;
                        </li>
                        <li className="mb-4">
                            în cazul în care v-ați opus prelucrării, pentru intervalul de timp în care se verifică dacă drepturile noastre legitime 
                            prevalează asupra drepturilor dumneavoastră.
                        </li>
                    </ol>
                    <p className="w-3/4 mb-4">
                        Dreptul de opoziție – vă puteți opune în special, prelucrărilor de date care se întemeiază pe interesul nostru legitim.
                    </p>
                    <p className="w-3/4 mb-4">
                        Dreptul la portabilitatea datelor - puteți primi, în anumite condiții, datele personale pe care ni le-ați furnizat, într-un format 
                        care poate fi citit automat sau puteți solicita ca respectivele date să fie transmise altui operator.
                    </p>
                    <p className="w-3/4 mb-4">
                        Dreptul de a depune plângere - puteți depune plângere fată de modalitatea de prelucrare a datelor personale la Autoritatea Natională 
                        de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).
                    </p>
                    <p className="w-3/4 mb-4">
                        Date de contact și informații legate de ANSPDCP găsiți pe site-ul http://www.dataprotection.ro/. Dreptul de retragere a consimțământului – 
                        în cazurile în care prelucrarea se întemeiază pe consimțământul dvs., vi-l puteți retrage oricând.
                    </p>
                    <p className="w-3/4 mb-4">
                        Retragerea consimțământului va avea efecte doar pentru viitor, prelucrarea efectuată anterior retragerii rămânând in continuare valabilă.
                    </p>
                    <p className="w-3/4 mb-4">
                        Dreptul de a nu fi supus unor decizii automate sau profilare suplimentare aferente deciziilor automate: puteți cere și obține intervenția 
                        umană cu privire la respectiva prelucrare sau vă puteți exprima propriul punct de vedere cu privire la acest tip de prelucrare.
                    </p>
                    <p className="w-3/4 mb-4">
                        Vă puteți exercita aceste drepturi, fie individual, fie cumulat, foarte ușor, prin simpla transmitere a unei solicitări pe 
                        email la adresa asocpeviitor@gmail.com
                    </p>
                </section>

                <section className="pt-12 bg-text_orange/5 w-full flex flex-col items-center" aria-labelledby="updates">
                    <h2 className="text-lg leading-6 text-left mb-4 w-3/4"><strong>8. DATELE DE CONTACT RESPONSABILULUI CU PROTECȚIA DATELOR</strong></h2>
                    <ol className="mb-8 w-3/4">
                        <li className="mb-4">Boga Sebastian: email: asocpeviitor@gmail.com</li>
                    </ol>
                </section>

                <section className="pt-12 w-full flex flex-col items-center" aria-labelledby="applicable-legislation">
                    <h2 className="text-lg leading-6 text-left mb-4 w-3/4"><strong>9. DATE ALE MINORILOR : NU DORIM SĂ COLECTĂM SAU SĂ 
                        PRELUCRĂM DATE ALE MINORILOR CARE NU AU ÎMPLINIT VÂRSTA DE 18 ANI</strong></h2>
                    <ol className="mb-8 w-3/4">
                        <li className="mb-4">Societatea are dreptul de a modifica Politica de protecție a datelor oricând, fără o notificare prealabilă, postând varianta actualizată pe site. Aveți
                             obligația de a citi Termenii și condițiile, Politica de protecție a datelor și Politica de cookie-uri ori de câte ori accesați site-ul.</li>
                    </ol>
                </section>           
            </article>

            <Button
                buttonType="scrollToTop"
                className={`${isVisible ? "opacity-100 pointer-events-auto" : ""}`}
                onClick={handleScrollToTop}
            >
                <img src={scrollUpOrange} alt="scroll-up" />
            </Button>
        </Layout>
    );
};

export default Privacy;