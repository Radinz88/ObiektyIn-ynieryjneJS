import React from 'react';

//Komponent zawierający tekst uzupełniający/ciekawostę w tematykę strony internetowej
function Outro() {
    return(
        <article id="outro">
            <strong className="super">Czy wiesz, że ...</strong>
            <p>
                W zarządzie Zakładu Linii Kolejowych w Bydgoszczy znajduje się ok. 1550 obiektów inżynieryjnych. Położone 
                są głównie na terenie województwa kujawsko pomorskiego, ale część z tych obiektów znajduje się również 
                w obrębie województw: mazowieckiego, wielkopolskiego i pomorskiego.
            </p>
            <p>
                Średni wiek typowego obiektu mostowego znacząco przekracza 70 lat, dlatego ich stan techniczny jest na 
                bieżąco monitorowany. Co roku powstaje setki opracowań na ten temat, a najtrudniejsze przypadki
                są opisywane szczegółowo w tzw. 'przeglądach specjalnych'.
            </p>
            <p>
                W skład tych 1550 kolejowych obiektów inżynieryjnych wchodzi 145 mostów, 134 wiadukty, 12 przejść pod torami w tym
                część z nich o konstrukcji tunelowej, a także ponad 1200 innego rodzaju obiektów jak przepusty, ściany 
                oporowe i kładki dla pieszych.
            </p>
        </article>
    )
}

export default Outro;