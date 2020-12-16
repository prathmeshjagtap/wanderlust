import React, { useState } from "react";
import "./App.css";

const PlacesDB = {
  India: [
    {
      name: "Jaipur",
      image:
        "https://lh3.googleusercontent.com/proxy/f1tuQoz95UJcxHSRy73VF0l0PQHDRO0XR8EY1V4jDNMoIMGf68mdFNSF09PALbZmWwm6dzopYspbYiTjsDozLOOj_6Dz1AT72bJrnvx-fyZ5zNLyfmR7lJ9U_Z5HcqWTA_lKThWtUA-ivBTv5mi1gmGYEIttq-niqpdX1ME3O8tu=w336-h190-n-k-no",
      description:
        "Known as Pink City for colored palaces & other 18th-century structures, including an observatory.",
    },
    {
      name: "Agra",
      image:
        "https://lh6.googleusercontent.com/proxy/uTQVa4ZCYmDnKG7Xkwt1mso3pLMkRI6V7J0skFnZmDNi9o7PiHHFkp_OYquE2I3kHZjeRPsX9x_gt0e68tYmjX2WmTv9eAv-wTdtiVSPlTJ3XZ6Ba8fdT7vABUMkHtmP23PsbnFib27D2LygsQfOttSS7ThDxYgJKk4DRnNNgnk_=w336-h190-n-k-no",
      description:
        "North Indian city with Mughal Empire landmarks like the Taj Mahal mausoleum & red-walled Agra Fort.",
    },
    {
      name: "Mumbai",
      image:
        "https://lh3.googleusercontent.com/proxy/dIXRLb_hqLLl1z6BIivXgLBuxeh-9ZezK_b_jdcQuueukUqTt4tole9QWx08A2OVnVXangB_J5QM5HIokmZx0e6cdZQFrSXXZPlFiaIvKia9W1y3Bz_pccNk1Vxt7Lid3Z2zjImjXtk1iAqVSjYT_1TzREym73i7fKOBk0C_GpDD=w336-h190-n-k-no",
      description:
        "Massive city, home to Bollywood, grand colonial buildings & bazaars packed with antiques & textiles.",
    },
    {
      name: "Goa",
      image:
        "https://lh4.googleusercontent.com/proxy/ctX11WnzaXYTmrfkOlPuUNwl19Cjcz8xVwnvs9TVUovLv3KlY71tMlyud2a8SIp4_l_Uz-C0DYP4kb_tupgbnSBY_2n_0SKOtsGyPJ0sZRa8CQhwdvUy2-1r59yHl7VIEFl4lNwrd8T3LD_QoTMiAGQk8Fj1BsvFhfRSaU427Fbc=w336-h190-n-k-no",
      description:
        "State in India known for Arabian Sea beaches & European-style churches like Se Cathedral in Old Goa.",
    },
    {
      name: "Simla",
      image:
        "https://lh5.googleusercontent.com/proxy/Ry-yS7aWIkQHuJdZ3gxpiqUgpVJDHBszSuaz_0rT6QLPdMZRbBKcwnet0d_ol-e5ikKR5CmmeqykLfydDvmGpdOiW941qFtmXYO5-VDgyiJFk9Au_7HzCXIBo_JqW3oqgyW-31LjB2dRFrZJ9WYucs7ewrI39qc0qT4agL1ATxjd=w336-h190-n-k-no",
      description:
        "Himachal Pradesh capital known for colonial architecture, Himalayan views & shopping on The Mall.",
    },
  ],
  France: [
    {
      name: "Paris",
      image:
        "https://lh4.googleusercontent.com/proxy/F5gndoTYzIJI9k3bA22UynK9UUdp1uZ_VUOHhiJnIVhLdUWoNMnfob9miRBqMF2ojLj3ME8CNtnsM88Nesv5Zo14xEMuL3Y8QBHliVhm7DIsR5bL6wYfKQHXHlCC4PfzOO-2DUyLKZSUM9vddBxmkUQ_i_fksATb1qUPPZcKk73X=w336-h190-n-k-no",
      description:
        "France's capital, home to the Eiffel Tower, Louvre, Notre-Dame, sidewalk cafes & high fashion.",
    },
    {
      name: "French Riviera",
      image:
        "https://lh4.googleusercontent.com/proxy/svvelP47X_cCVPo7bzlOQcD3eYaURU9dylKygSk1M83jvqPi9CYJ2sjlpdOtNL2kh3k9GIE-dFkLjan1Ssp0FZafdqdJbwhLJcuhVoJhKDGGOrF1t52dOZ1fp61CTqxcNKPkLPd2LKQrfL0L5jHVdsW-W5hOrNzVCkHkZx3FjsUp=w336-h190-n-k-no",
      description:
        "Glitzy stretch of beach resort towns with luxury hotels & boutiques, villas & yacht-lined marinas.",
    },
    {
      name: "Colmar",
      image:
        "https://lh4.googleusercontent.com/proxy/9gkIzJuZm_gSmw7RtXEtHONnHzB5uWIwPcxpYGilpjQgxncfBta7sLCyfWxXI5Qzjmk_6ga8_UDejvIVcT2EIwxoT5xIFu9JyWNZ88gwq2dbc6cubIEDzT7RknaFL_mYSBJtGTMkNSGKqoxlAPjHN2GJEWmDeNf5EKjUcWhRCgfz=w336-h190-n-k-no",
      description:
        "Town on the Alsace Wine Route with a medieval quarter & colorful homes along Little Venice's canals.",
    },
    {
      name: "Verdon Gorge",
      image:
        "https://lh6.googleusercontent.com/proxy/g-9gwmT-JxW0jW3g_HGkVXziPn0Se5bfYdYkn2c2ylgo58XEceTrxXQWbUJTpG4mYlUOgxemWsLBF49B0IK1h1SmXG2U69vZSF3Pf9xYDTWbPD8zXJneNdksfXYYKS8-kF3cjmRqHxjAEMmt3xjQNDonLWFxgjCDoeRtHm2M3H5Z=w336-h190-n-k-no",
      description:
        "French canyon on the Verdon River, with trails & vertical cliffs, plus nearby Musée de la Faïence.",
    },
    {
      name: "Burgundy",
      image:
        "https://lh5.googleusercontent.com/proxy/4afTw28xJnkcahwivmRViWtWLkJwVTBObyEpzerCeP7og6FnKdenmQPAv9U_idrDXCBSROk78fktOKOJFSPYBw2_rX9WuJK639ATAsKh2PaA6bfFl3iMOwOgbdHdUVlt4xzl7G7aTWzLnDU-ppPoUZfvC9Kj13EbCNJSMLLzW3n8=w336-h190-n-k-no",
      description:
        "Central French region known for the city of Dijon, plus wines, canals, châteaux & medieval towns.",
    },
  ],
  Italy: [
    {
      name: "Rome",
      image:
        "https://lh5.googleusercontent.com/proxy/E-jrbxN-ePhfI8offvuhqLb82kd0ldHDlUVoMpv7vJNQsWgjFXIH3WTpsFnm5XEa5h_FaQjxDjawy68RZ4jNhUdBEaKaCVAqxE5dwxHOVj4FVPA4ChOOweWUU3knDkG4AQs49eVVQaT7lgMebeLWFBdiV-U-BKSuAWqhLaQPUq4x=w336-h190-n-k-no",
      description:
        "Italy's capital, home to the Vatican as well as world-class art & ancient ruins like the Colosseum.",
    },
    {
      name: "Venice",
      image:
        "https://lh6.googleusercontent.com/proxy/blB76fxaaNzyrqFyDdEkyBoXhCpL0AUX2zr4M8xZdFdFKN0Q-XRRaHJsvxhbSCR7_qzJ1jbBj2jBAvtJbzeiOq__kBcyUJcAyFrJbHjl5iDOIBzm3ABfATv6Wsf_Dxyn24yrLKbZ3-1y6NiC9i-dWJurk2znaD287l0wJq8_Yad4=w336-h190-n-k-no",
      description:
        "Italian island city known for canals lined with Gothic palaces, Piazza San Marco square & Carnival.",
    },
    {
      name: "Pisa",
      image:
        "https://lh4.googleusercontent.com/proxy/WWeed3D9d1EJt8-_2eNfqX6AKBeYvyUCIWtk0ituwRxzCLXQJP_e4LBnT6y1b9_6BCkXID-9wTbR97Xt0qkQao2UgBPAH3Qx0K86qQ04WF5iFPK7vvPKgJmepTVdq9XSptdKRb6VaDYq-FPGLo9inVLa7rVgE5HzaaRup_oauqor=w336-h190-n-k-no",
      description:
        "Tuscan university town known for the Leaning Tower of Pisa, plus a notable cathedral & baptistry.",
    },
    {
      name: "Milan",
      image:
        "https://lh5.googleusercontent.com/proxy/ypKGj1fP5BeYOVLApSqxR63DwoZ9_Oc1OouNTrrzOB5dKawxtzlzo5W54bZM8_iNkubNEjNuOJHNvvoHoJUtyMIpx-fWC_w2K58M_PsidD3rzrIQKhfJNAscIdzDd-ERg6IU-3Hl0Oliikh2qF-TbNI5qmKcfW89Ue8HvlmMlm1B=w336-h190-n-k-no",
      description:
        "Northern Italian city known for haute couture, its Gothic Duomo & da Vinci’s “The Last Supper.”",
    },
    {
      name: "Capri",
      image:
        "https://lh6.googleusercontent.com/proxy/HMdArjI6Iu1wfAytQoduYAHIJrkj605tkWCMsGsQveyuylvJT7jOKsZiyy_t6SJnZv_66tLzCALqYCK44pNxm-X2h-IaC7O6oJ99ikPw6bXiXz2IaVhSGfzYTzUed819N2LzdydryFpoB60uLE9rXx5jiD6wxNw_qzjyWVcoz5lY=w336-h190-n-k-no",
      description:
        "Stylish Italian island in the Bay of Naples known for the Blue Grotto & high-end hotels & boutiques.",
    },
  ],
  Spain: [
    {
      name: "Barcelona",
      image:
        "https://lh3.googleusercontent.com/proxy/PBYOKvPlnjjPBN-FFJyUzTrK1UDWrpEY2NsxiB9x8CsWTEVPvIiN5HiscXIReRzpvHNjp53S2prI1Q8ZvJLNRDFrMhu1YHDVw5Se36dp4bfEt5Yy2t292vLEIQkWp6HukTq8Gxk8yVDkYm_Dv1684bz31j5exzksni3b8N4MvjzK=w336-h190-n-k-no",
      description:
        "Catalan capital known for Gaudí’s whimsical architecture, the Gothic Quarter & tapas bars.",
    },
    {
      name: "Madrid",
      image:
        "https://lh6.googleusercontent.com/proxy/-u_YJu1BlpJG-dVwZkCHrSlVCZWEKhU2zNxWoUW_HHqoradPy3g1oKF3oNxTlU2N8u2UFv-Wy2IH1nfN05HvQFoekq3K_XqR82ybjOLD1-vM1cBvzjBvqP_UbjXGhUYD6iffOiBC64k1xGpzuqNRVu-WcAdswtZP5UpfFxU3aAYI=w336-h190-n-k-no",
      description:
        "Spain's capital, home to the Royal Palace & major art museums like the Prado & Reina Sofía.",
    },
    {
      name: "Seville",
      image:
        "https://lh4.googleusercontent.com/proxy/bQkaVxM1Av-5pZj42kZFnG8RLpmU8VTiy1c--DTYGkLKaBQxJdlIlY9UawbMfwjePvRpUx9jVEqygzcJ_bPO6vHpZynpz_vA4wdZ52ewZUBKWRgzqaZQyBKXmKInC3eZLb_WaASCuw8gSbZDlvcbgH_a9crG7m54JsO74cQw47w8=w336-h190-n-k-no",
      description:
        "Spanish city of flamenco, with a Gothic cathedral, medieval Jewish quarter & the Alcázar castle.",
    },
    {
      name: "Balearic Islands",
      image:
        "https://lh4.googleusercontent.com/proxy/x-oZbrZsOlwi7wybOROPFnJs4eXih4taifLEZhw9PsaatzbRR8zDTuhy5ayrIT7vd5MGpzt020mGsx9m19jwSLuLeVD-TLthfOX9uKCwYkENwAyFv958Y1IRKyae89opqIv6wFKolK-VzyhqKLSHN1n7z_MAOnuObZ0wiz4F5FKf=w336-h190-n-k-no",
      description:
        "Spanish island group with the beach resort islands of Mallorca, Menorca, Ibiza & Formentera.",
    },
    {
      name: "Santa Cruz de Tenerife",
      image:
        "https://lh6.googleusercontent.com/proxy/Ur2VHnWo5n7AiExnoN9ciwNnzy5-uOrqlVEURF2mb_WVyeiMgD8v_bB5r0-qAfXOTHDxK3MPnEHFiqStR90vndgtqAZsJaBWiU2lbysTioTVOeFAuvYj-yXn6L2CzV10_PiH5bIKjkU-H5R7Q4-zm3qEwZ8Aq9dVhv3uQWO2F0D4=w336-h190-n-k-no",
      description:
        "City in Spain’s Canary Islands with Conception Church, Palacio de Carta & Tenerife Auditorium.",
    },
  ],
  Germany: [
    {
      name: "Berlin",
      image:
        "https://lh4.googleusercontent.com/proxy/wrqD-TfmnT8xLfsVTSrvOmsKp86FbEdunKWychsccyq01fcuNGaPUlFh4uHKNjSaLkBbjGaCX8JOa-TneYAa1gLc7YLHtfhgbR-Hpl_v_Dgm0EO6gFI_2AEpyPzIYCQu22oireJMXv061g_yp9-DpQL-ryzyucFaPJBXYCZRXx9t=w336-h190-n-k-no",
      description:
        "Germany's capital, with the Reichstag, Brandenburg Gate, the Holocaust memorial & Berlin Wall.",
    },
    {
      name: "Munich",
      image:
        "https://lh4.googleusercontent.com/proxy/I7F1TE9D0jaKXcVDfc9umeVYJYJJJP9RzYYt8AXP9SAs8_FMugqG3r5KxFglMFTrQB9XoZISZ6G8nGDPESoLdMZ2EG0-5TwOHdCQOFJ8zY5j9jDlXzGSBKfqTsv5RC0-X2mZcnr1fSLqpDKQyImSoKsn1fWNiZw9SOKbmmw6dkhQ=w336-h190-n-k-no",
      description:
        "Bavarian capital known for Oktoberfest, the Hofbräuhaus beer hall & the Residenz palace & museum.",
    },
    {
      name: "Frankfurt",
      image:
        "https://lh5.googleusercontent.com/proxy/tE3HJ5Tz8Bx_Rk1iZ9vrSN9Pur1VTiV2UP3OBZS_aIPN8cUjc8K25d8oZP6HpuRDG-8TkSTumlIzrkZPlZo9fAN6Xw3JOVMyaMea6WGeyDf-4YImWkwJOg-YVnay-i0xBu2XepsTtP78wAlJNEb1wGs88XLVkdWE3k_io7qK1J7v=w336-h190-n-k-no",
      description:
        "German riverside city with European Central Bank, plus Goethe House, Städel & other notable museums.",
    },
    {
      name: "Black Forest",
      image:
        "https://lh6.googleusercontent.com/proxy/DWkwuyfKeaUnw9dKKDL8XvM6_RVZpSxS-cTyYyFtZ_DHXaAUHBTNGHHY65lqJw16Y5LGF3dIZ1ojHy7xieb5Wn9cV_zCPSGPD2TkV-nI864LzDql10Ae8B3VGa18tXQfMI4uRvyM7Qq55z21nYyuDkHXJStTq1QC5dv6Wh7-zRL3=w336-h190-n-k-no",
      description:
        "German forest area known for cuckoo clocks, skiing, scenic drives & Baden-Baden's thermal spas.",
    },
    {
      name: "Saxon Switzerland National Park",
      image:
        "https://lh4.googleusercontent.com/proxy/3or9BIpdBvpOtq11xtmlL3Iys57bAwdAEM4gvpDYCNS79DVpw_93--nAUEe3QYcD98ox7_qgWwcc2YZiGRcDZuipk_pmyfp5E1QBogeeLCsr8o0iQ0TZD1R6_9TQM5mUwFmKeFj_-4-tRJ6GVxuw98JmhTgdEbF-V6cPXUBUf0BS=w336-h190-n-k-no",
      description: "Protected Area of Canyons and Forests",
    },
  ],
};

function App() {
  const [country, setcountry] = useState("India");

  function ClickHandler(country) {
    setcountry(country);
  }
  return (
    <div>
      <div className="header">
        <h1>🗺️ Wanderlust</h1>
        <h2> 5 places to visit in Each Country</h2>
      </div>
      <img
        className="image"
        src="https://previews.123rf.com/images/junce/junce1707/junce170700071/81547072-time-to-travel-text-on-blue-accessories-vacation-trip.jpg"
        alt=""
      />

      <div className="button_container">
        {Object.keys(PlacesDB).map((country) => (
          <button
            key={country}
            className="button"
            onClick={() => ClickHandler(country)}
          >
            {country}
          </button>
        ))}
      </div>

      {PlacesDB[country].map((place) => (
        <div className="destination" key={place.name}>
          <img className="destination__image" src={place.image} alt="" />
          <h1 className="destination__name"> {place.name} </h1>
          <div className="destination__info">{place.description}</div>
        </div>
      ))}
      <div className="footer">
        Created for education purpose using React by Prathmeh Jagtap
      </div>
    </div>
  );
}

export default App;
