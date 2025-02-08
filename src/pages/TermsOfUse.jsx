import React,  { useEffect } from "react";
import HomeLink from "../components/CustomLinks";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";

const TermsOfUse = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <Navigation navType="green"/>
            <header
                role="banner"
                // className="font-PoppinsRegular w-full flex items-center justify-center flex-wrap flex-col py-16 md:py-24 lg:py-32 leading-[110%] bg-[radial-gradient(circle,_rgba(4,138,129,1)_19%,_rgba(40,83,107,1)_100%)]">
                className="font-PoppinsRegular w-full flex justify-center flex-wrap flex-col py-16 md:py-24 lg:py-32 leading-[110%] bg-[radial-gradient(circle,_rgba(4,138,129,1)_19%,_rgba(40,83,107,1)_100%)]">
                
                {/* <Navigation/> */}
                <div className="items-center justify-center">
                  
                    <h1 className="leading-[62px] text-white text-[40px] md:text-[44px] xl:text-[60px] font-semibold mb-2 text-center">
                        Condiții de utilizare
                    </h1>
                </div>

                {/* <h1 className="leading-[62px] text-white text-[40px] md:text-[44px] xl:text-[60px] font-semibold mb-2 text-center">
                    Condiții de utilizare
                </h1> */}
            </header>
    
            <article className="font-PoppinsRegular flex flex-col w-full">
                <section className="pt-12 bg-white/20 w-full flex flex-col items-center" aria-labelledby="terms-intro-heading">
                    <h2 className="text-lg leading-6 text-left mb-4 w-3/4"><strong>TERMENI ŞI CONDIŢII DE UTILIZARE</strong></h2>
                    <p className="mb-4 w-3/4">Prin utilizarea acestui site,  
                        <HomeLink/>
                        , sunteţi de acord cu termenii şi condiţiile de utilizare meţionate în aceasta pagină. Accesul şi utilizarea acestui site sunt supuse următorilor termeni şi condiţii de utilizare şi tuturor legilor şi 
                        regulamentelor aplicabile. Accesând şi utilizând site-ul, acceptaţi, fără limitări sau calificări, aceşti termeni şi condiţii şi luaţi la cunoştinţă că orice alte acorduri între dumneavoastră şi terţe 
                        părţi cu privire la utilizarea site-ului sunt înlocuite prin prevederile prezentului document. Dacă nu sunteţi de acord sau nu acceptaţi, fără limitări sau calificări, Termenii şi
                         Condiţiile de Utilizare ale acestui site, vă rugăm să părăsiţi această platformă.
                    </p>
                    <p className="mb-4 w-3/4">Prin continuarea utilizării serviciilor oferite de site-ul 
                        <HomeLink/> confirmaţi că sunteţi de acord cu Termenii şi Condiţiile de Utilizare mai jos menţionaţi.
                    </p>
                </section>
                   
                <section  className="pt-12 w-full flex flex-col items-center" aria-labelledby="general-terms-heading">
                    <h2 className="text-lg leading-6 text-left mb-4 w-3/4">
                        <strong>TERMENI GENERALI</strong>
                    </h2>
                    <ol className="mb-8 w-3/4 list-inside">
                        <li className="mb-4">Site-ul <HomeLink/>, este proprietatea ASOCIAȚIEI OPORTUNITĂȚI ȘI CARIERE cu sediul în Zimbor numarul 215, județul Sălaj. Accesarea acestui site ori a 
                            oricărei părţi din acest site presupune acordul tacit cu termenii ce urmează. Acordul de utilizare îşi produce efectele între dumneavoastră şi ASOCIAȚIA OPORTUNITĂȚI ȘI 
                            CARIERE. Acceptarea se consideră tacită şi fără rezerve.
                        </li>
                        <li className="mb-4"><HomeLink/> poate schimba conţinutul site-ului la orice moment, poate aduce modificări de structură, conţinut şi accesibilitate, poate sista furnizarea 
                            informaţiilor pe site, fără un acord prealabil şi fără vreo notificare către dumneavoastră ori către terţe persoane.
                        </li>
                        <li className="mb-4">Continuarea utilizării site-ului presupune acordul dumneavoastră tacit şi acordul în întregime cu Termenii şi condiţiile
                            prezentate în cele ce urmează. Utilizarea presupune acceptarea regulilor.RO.
                        </li>
                        <li className="mb-4">ASOCIAȚIA OPORTUNITĂȚI ȘI CARIERE poate schimba, suspenda sau întrerupe, în orice moment, fără a anunţa în prealabil, site-ul. ASOCIAȚIA OPORTUNITĂȚI ȘI CARIERE
                            poate limita accesul la site ori la anumite părţi din site. Totodată, ASOCIAȚIA OPORTUNITĂȚI ȘI CARIERE poate limita accesul la anumite facilităţi/frame-uri din site, poate aduce
                            limitări de acces anumitor IP-uri fără notificări şi fără vreo răspundere.
                        </li>
                    </ol>
                </section>

                <section className="pt-12 bg-white/20 w-full flex flex-col items-center" aria-labelledby="content-heading">
                    <h2 className="text-lg leading-6 text-left mb-4 w-3/4"><strong>1. CONŢINUTUL</strong></h2>
                    <ol className="mb-8 w-3/4 [list-style-type:lower-alpha] list-inside">
                        <li className="mb-4">Conţinutul site-ului este destinat uzului personal, fără scop direct ori indirect comercial. Toate materialele publicate (incluzând, dar fără a se limita la, 
                            articole, informaţii, fotografii, date, clipuri audio/video – generic numite conţinut) sunt protejate de dispoziţiile legale incidente: Legea nr. 8/1996, cu modificările şi completările
                            ulterioare – privind dreptul de autor şi drepturile conexe, Legea nr. 84/1998 – privind mărcile şi indicaţiile geografice şi Legea nr. 129/1992, republicată – privind protecţia 
                            desenelor şi modelelor. Lipsa menţiunii privind unele texte legale ori dispoziţii incidente nu duc la inaplicabilitatea acestora.
                        </li>
                        <li className="mb-4">Site-ul şi Conţinutul sunt protejate de Legea drepturilor de autor din România, precum şi de dispoziţiile privitoare la copyright aplicabile 
                            în alte teritorii decât România. Dumneavoastră nu puteţi copia, stoca, modifica ori transfera cu orice titlu, în parte ori întreg site şi/sau Conţinutul. Exploatarea este liberă, 
                            sub condiţia non-comercialităţii şi respectării termenilor impuşi de către ASOCIAȚIA OPORTUNITĂȚI ȘI CARIERE.
                        </li>
                        <li className="mb-4">Orice formă de copiere, stocare, modificare şi/sau transmitere a Conţinutului este expres interzisă, 
                            fără acordul prealabil şi scris al ASOCIAȚIEI OPORTUNITĂȚI ȘI CARIERE.
                        </li>
                        <li className="mb-4">ASOCIAȚIA OPORTUNITĂȚI ȘI CARIERE nu răspunde de eventualele prejudicii, litigii existente, născute ori izvorâte în legătură cu/din copierea, stocarea, modificare
                            ori transferarea întregului ori a unei părţi din Conţinut în orice mediu.
                        </li>
                        <li className="mb-4">În cazul în care consideraţi că orice material publicat pe acest site oricine altcineva încalcă drepturile de autor sau orice alte drepturi, 
                            vă rugăm să ne sesizaţi acest lucru printr-un mesaj trimis la adresa publicată în secţiunea Contact a site-ului sau pe adresa de e-mail aocpeviitor@gmail.com
                        </li>
                        <li className="mb-4">Vă informăm că ASOCIAȚIA OPORTUNITĂȚI ȘI CARIERE îşi va asigura şi impune în mod hotărît recunoaşterea drepturilor de proprietate intelectuală 
                            în conformitate cu legile în vigoare, ajungând dacă este cazul, la acţionarea în judecată a celor vinovaţi de încălcarea dreptului de proprietate intelectuală.
                        </li>
                    </ol>
                </section>

                <section className="pt-12 w-full flex flex-col items-center" aria-labelledby="copyright-rights">
                    <h2 className="text-lg leading-6 text-left mb-4 w-3/4"><strong>2. DREPTURILE DE AUTOR</strong></h2>
                    <ol className="mb-8 w-3/4 [list-style-type:lower-alpha] list-inside">
                        <li className="mb-4">Toate drepturile rezervate. ASOCIAȚIA OPORTUNITĂȚI ȘI CARIERE acordă permisunea de a utiliza site-ul                         
                            <HomeLink/> în următoarele condiţii:
                        </li>
                        <li className="mb-4">Sunt interzise copierea, modificarea, expunerea, refolosirea, reproducerea, publicarea, autorizarea, acordarea de licenţă de folosire, 
                            crearea de lucrări derivate din, sau să transferaţi, să vindeţi sau să folosiţi conţinutul publicat pe acest site, 
                            materialele protejate prin legile naţionale şi internaţionale de copyright, în alt mod decât cu acordul scris al 
                            ASOCIAȚIEI OPORTUNITĂȚI ȘI CARIERE precum şi orice modalitate de exploatare a conţinutului site-ului                            
                            <HomeLink/>, cu excepţia afişării pe ecranul unui computer personal şi imprimarea sau descărcarea, în scop personal şi necomercial, 
                            a anumitor documente sau informaţii explicit desemnate în acest scop, cu condiţia păstrării nemodificate a tuturor elementelor 
                            care fac referire la drepturile de proprietate intelectuală, alte drepturi de proprietate şi condiţiile de utilizare ale 
                            documentelor sau informaţiilor respective.
                        </li>
                        <li className="mb-4">Este interzis să folosiţi site-ul 
                            <HomeLink/> pentru a afişa sau transmite orice fel de material ce are caracter ameninţător, fals, înşelător, abuziv, de hărţuire, 
                            licenţios, calomniator, vulgar, sau orice alt fel de material care poate constitui sau încuraja un comportament ce va putea da naştere unei infracţiuni, 
                            sau ar putea conduce la răspunderea civilă, sau ar încălca în alt mod legea. ASOCIAȚIA OPORTUNITĂȚI ȘI CARIERE va coopera cu oricare 
                            dintre autorităţile desemnate să aplice legea şi se va conforma cu orice sentinţă judecătorească prin care se cere sau se ordonă să 
                            dezvăluie identitatea oricărei persoane care ar afişa sau transmite orice fel de informaţie sau material de acest fel pe sau prin intermediul site-ului.
                        </li>
                        <li className="mb-4">Este interzisă redistribuirea vreunei pagini din site prin framing cu excepţia existenţei unui acord scris 
                            din partea asociației cu privire la acceptul redistribuirii vreunei pagini.
                        </li>
                        <li className="mb-4">Este interzis să utilizaţi site-ul 
                            <HomeLink/> în scop de publicitate sau pentru orice fel de cerere/ofertă cu caracter comercial fără acordul ASOCIAȚIEI OPORTUNITĂȚI ȘI CARIERE.
                        </li>
                        <li className="mb-4">Preluarea de informaţii de către alte site-uri web poate fi făcută numai în acord cu termenii agreaţi şi menţionaţi in această pagina,
                             cu excepţia unui acord, valabil şi recunoscut de ambele parţi, utilizator şi ASOCIAȚIA OPORTUNITĂȚI ȘI CARIERE.
                        </li>
                        <li className="mb-4">ASOCIAȚIA OPORTUNITĂȚI ȘI CARIERE, logo-ul 
                            <HomeLink/> şi oricare derivaţie a logo-ului aprobat şi validat sunt proprietatea asociației, niciuna dintre ele neputând 
                            fi utilizată fără acordul scris al acesteia, indiferent de mediul în care se doreşte utilizarea lui.
                        </li>
                    </ol>
                </section>

                <section className="pt-12 bg-white/20 w-full flex flex-col items-center" aria-labelledby="responsibilities">
                    <h2 className="text-lg leading-6 text-left mb-4 w-3/4"><strong>3. RĂSPUNDERI</strong></h2>
                    <ol className="mb-8 w-3/4 [list-style-type:lower-alpha] list-inside">
                        <li className="mb-4">Prin utilizarea site-ului 
                            <HomeLink/>, dumneavoastră sunteţi singurul responsabil atât faţă de terţi, cât şi faţă de ASOCIAȚIA OPORTUNITĂȚI ȘI CARIERE în legătură cu 
                            accesarea/utilizarea/exploatarea conţinutului. Asociația şi societăţile sale afiliate, funcţionarii, directorii, agenţii sau orice altă 
                            parte implicată în conceperea, producerea sau oferirea site-ului nu sunt răspunzătoare pentru daune directe sau indirecte, de orice natură, 
                            ce ar rezulta din sau în legătură cu utilizarea acestui site sau a conţinului său. Asociația nu îşi asumă nicio responsabilitate şi nu va fi 
                            raspunzătoare pentru nicio daună sau viruşi care ar putea să vă infecteze computerul sau alte bunuri în urma accesării sau utilizării acestui 
                            site, sau descărcării oricarui material, informaţii, text, imagini, video sau audio de pe acest site.
                        </li>
                        <li className="mb-4">Utilizarea site-ului reprezintă faptul că declaraţi şi sunteţi de acord cu publicarea de către ASOCIAȚIA OPORTUNITĂȚI ȘI CARIERE 
                            a unui Conţinut, stabilit pe baza unor criterii proprii, Conţinut ce poate fi interpretat ca fiind publicat, prezentat într-o manieră care să 
                            nu fie conformă cu dorinţele dumneavoastră. Într-un astfel de caz, răspunderea ASOCIAȚIEI OPORTUNITĂȚI ȘI CARIERE nu poate fi reţinută.
                        </li>
                    </ol>
                </section>

                <section className="pt-12 w-full flex flex-col items-center" aria-labelledby="information-submission">
                    <h2 className="text-lg leading-6 text-left mb-4 w-3/4"><strong>4. TRANSMITEREA DE INFORMAŢII CĂTRE ASOCIAȚIA OPORTUNITĂȚI ȘI CARIERE</strong></h2>
                    <ol className="mb-8 w-3/4 [list-style-type:lower-alpha] list-inside">
                        <li className="mb-4">Prin transmiterea de informaţii către asociație  şi oricare altă societate afiliată si către 
                            <HomeLink/> se înţelege funizarea de către dumneavoastră a unor materiale, incluzând, dar fără a se limita la mesaje, articole, informaţii, fotografii, date.
                        </li>
                        <li className="mb-4">Transmiterea de informaţii către 
                            <HomeLink/> echivalează cu acceptul acordat către ASOCIAȚIA OPORTUNITĂȚI ȘI CARIERE şi societăţilor afiliate ca liber de orice obligaţie privind 
                            achitarea unei plăţi şi/sau remuneraţii, să utilizeze, copieze, publice, distribuie, în orice mod şi cu orice titlu, în orice mediu existent ori descoperit în viitor, aceste informaţii.
                        </li>
                        <li className="mb-4">Totodată, prin transmiterea de informaţii către ASOCIAȚIA OPORTUNITĂȚI ȘI CARIERE, se prezumă acordul dumneavoastră privind despăgubirea 
                            ASOCIAȚIEI OPORTUNITĂȚI ȘI CARIERE  şi/sau a terţilor ca urmare a existenţei/naşterii unor prejudicii de orice fel din utilizarea, copierea, publicarea 
                            sau distribuirea respectivelor informaţii. ASOCIAȚIA OPORTUNITĂȚI ȘI CARIERE nu acceptă o răspundere limitată din partea furnizorului de informaţii.
                        </li>
                    </ol>
                </section>

                <section className="pt-12 bg-white/20 w-full flex flex-col items-center" aria-labelledby="user-obligations">
                    <h2 className="text-lg leading-6 text-left mb-4 w-3/4"><strong>5. OBLIGATIILE UTILIZATORILOR LA ÎNREGISTRARE</strong></h2>
                    <ol className="mb-8 w-3/4 [list-style-type:lower-alpha] list-inside">
                        <li className="mb-4">Accesul la conţinutul online al site-ului 
                            <HomeLink/> este liber.
                        </li>
                    </ol>
                </section>

                <section className="pt-12 w-full flex flex-col items-center" aria-labelledby="liabilities-indemnities">
                    <h2 className="text-lg leading-6 text-left mb-4 w-3/4"><strong>6. RĂSPUNDERE. DESPĂGUBIRI</strong></h2>
                    <ol className="mb-4 w-3/4 [list-style-type:lower-alpha] list-inside">
                        <li className="mb-4">Conţinutul acestui site, inclusiv datele şi alte informaţii, este furnizat gratuit de ASOCIAȚIA OPORTUNITĂȚI ȘI CARIERE şi 
                            de către furnizorii săi de informații. Acest site furnizează instrumente de informare, însă nu oferă niciun fel de sfat şi nici nu face vreo
                            recomandare referitoare la anumite locuri de muncă, angajatori sau alte  produse.
                        </li>
                        <li className="mb-4">ASOCIAȚIA OPORTUNITĂȚI ȘI CARIERE nu cere clienţilor săi informaţii personale prin intermediul unei corespondenţe nesolicitate 
                            de aceştia. Orice tip de corespondenţă care cere divulgarea de informaţii personale trebuie considerat un fals şi raportat către asociație 
                            prin intermediul adresei de e-mail asocpeviitor@gmail.com
                        </li>
                        <li>ASOCIAȚIA OPORTUNITĂȚI ȘI CARIERE  şi furnizorii săi de conţinut nu răspund pentru erorile, impreciziile sau întârzierile în furnizarea 
                            conţinutului oferit de site şi nici pentru orice acţiune care se bazează pe acest conţinut. ASOCIAȚIA OPORTUNITĂȚI ȘI CARIERE  îşi declină orice
                            responsabilitate privind garantarea, explicită sau implicită, a acurateţii conţinutului furnizat de terţi sau a felului în care informaţia serveşte anumitor scopuri. 
                            Deşi ASOCIAȚIA OPORTUNITĂȚI ȘI CARIERE face toate eforturile pentru a obţine informaţii de încredere de la furnizorii săi externi, nu garantează acurateţea informaţiilor furnizate de aceştia.
                        </li>     
                    </ol>    
                                  
                    <p className="w-3/4 flex flex-col items-center mb-4">Pentru cazul fortuit, ASOCIAȚIA OPORTUNITĂȚI ȘI CARIERE și/sau reprezentantii săi, este exonerata total de răspundere. 
                        Cazurile fortuite includ, dar nu se limiteaza la, erori de functionare ale echipamentului tehnic, lipsa functionarii conexiunii la internet, lipsa 
                        functionarii conexiunilor de telefon, virusii informatici, accesul neautorizat in sistemele Site-ului, erorile de operare, etc.
                    </p>

                    <ol start="4" className="mb-8 w-3/4 [list-style-type:lower-alpha] list-inside"> 
                        <li className="mb-4">Fiecare utilizator al site-ului 
                            <HomeLink/> este de acord ca, la cererea  ASOCIAȚIEI OPORTUNITĂȚI ȘI CARIERE să exonereze de răspundere ASOCIAȚIA OPORTUNITĂȚI ȘI CARIERE pentru orice acţiuni judiciare sau extrajudiciare, 
                            şi să acopere cheltuielile de judecată şi orice alte cheltuieli care ar putea să apară ca urmare a încălcării de către utilizatorul respectiv a clauzelor din prezentul document.
                            Persoanele fizice sau juridice responsabile de încălcarea prevederilor din prezentul document vor suporta prevederile legislaţiei în vigoare în România.
                            </li>
                        <li className="mb-4">ASOCIAȚIA OPORTUNITĂȚI ȘI CARIERE îşi rezervă dreptul de a modifica şi actualiza aceste condiţii în orice moment. Modificările devin 
                            efective de la momentul publicării lor pe site.
                        </li>
                    </ol>
                </section>

                <section className="pt-12 bg-white/20 w-full flex flex-col items-center" aria-labelledby="updates">
                    <h2 className="text-lg leading-6 text-left mb-4 w-3/4"><strong>7. ACTUALIZARE</strong></h2>
                    <ol className="mb-8 w-3/4 [list-style-type:lower-alpha] list-inside">
                        <li className="mb-4">Aceşti TERMENI ŞI CONDIŢII se actualizeaza de câte ori este nevoie. Modificările se vor reflecta în tipul de informaţii publicate sau transmite de către ASOCIATIE. 
                            Vă rugăm să citiţi periodic aceste condiţii, pentru a fi la curent cu ce informaţii colectează, foloseşte şi transmite ASOCIATIA OPORTUNITATI SI CARIERE
                        </li>
                    </ol>
                </section>

                <section className="pt-12 w-full flex flex-col items-center" aria-labelledby="applicable-legislation">
                    <h2 className="text-lg leading-6 text-left mb-4 w-3/4"><strong>8. LEGISLAȚIE APLICABILĂ</strong></h2>
                    <ol className="mb-8 w-3/4 [list-style-type:lower-alpha] list-inside">
                        <li className="mb-4">Prezentului acord, precum și oricărei utilizări a site-ului li se vor aplica legea română. Orice litigiu va fi supus spre soluționare instanțelor române.</li>
                    </ol>
                </section>           
            </article>
        </Layout>
    );
};

export default TermsOfUse;