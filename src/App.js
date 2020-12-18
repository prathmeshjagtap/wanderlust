import React, { useState } from "react";
import "./App.css";

const PlacesDB = {
  India: [
    {
      name: "Jaipur",
      image:
        "https://media.gettyimages.com/photos/amber-fort-india-picture-id468719632?k=6&m=468719632&s=612x612&w=0&h=i40xKlaH8Fa2U91DyZyLBIzD3uBrgy0eD5Qyh_tqD94=",
      description:
        "Known as Pink City for colored palaces & other 18th-century structures, including an observatory.",
    },
    {
      name: "Agra",
      image:
        "https://media.gettyimages.com/photos/lost-in-the-moment-picture-id158898520?k=6&m=158898520&s=612x612&w=0&h=gyRJ2ADrHge4c1q8aDnStT03oPSPQR71iudnu12vfQY=",
      description:
        "North Indian city with Mughal Empire landmarks like the Taj Mahal mausoleum & red-walled Agra Fort.",
    },
    {
      name: "Mumbai",
      image:
        "https://media.gettyimages.com/photos/mumbai-picture-id598966778?k=6&m=598966778&s=612x612&w=0&h=O68vfZ_LLegSR6soAMClL8y_A3tHfJFUW64NtKAojkE=",
      description:
        "Massive city, home to Bollywood, grand colonial buildings & bazaars packed with antiques & textiles.",
    },
    {
      name: "Goa",
      image:
        "https://media.gettyimages.com/photos/palolem-picture-id171144538?k=6&m=171144538&s=612x612&w=0&h=eCyTDOIicjKWaYXNtuNwVjyHWWHM7eq8VpsQ2KvmXYQ=",
      description:
        "State in India known for Arabian Sea beaches & European-style churches like Se Cathedral in Old Goa.",
    },
    {
      name: "Simla",
      image:
        "https://media.gettyimages.com/photos/sanjauli-picture-id543696259?k=6&m=543696259&s=612x612&w=0&h=RPLSRdT3YOUIDdwCwpb6bdmIv1XYeCbp1D_xUr2NI9c=",
      description:
        "Himachal Pradesh capital known for colonial architecture, Himalayan views & shopping on The Mall.",
    },
  ],
  France: [
    {
      name: "Paris",
      image:
        "https://media.gettyimages.com/photos/elevated-view-of-eiffel-tower-and-paris-skyline-at-sunset-france-picture-id1057901720?k=6&m=1057901720&s=612x612&w=0&h=NgdOmLHSe_dITqIxmHRY7gUcWa2xVtjTlTvNVV49rCo=",
      description:
        "France's capital, home to the Eiffel Tower, Louvre, Notre-Dame, sidewalk cafes & high fashion.",
    },
    {
      name: "French Riviera",
      image:
        "https://media.gettyimages.com/photos/menton-cote-dazursouth-of-france-picture-id529552883?k=6&m=529552883&s=612x612&w=0&h=BnjeVhql-2UnuFUIzjI4RvvUQ2zbMHH6XLJO3KVOTHo=",
      description:
        "Glitzy stretch of beach resort towns with luxury hotels & boutiques, villas & yacht-lined marinas.",
    },
    {
      name: "Colmar",
      image:
        "https://media.gettyimages.com/photos/petit-venice-colmar-france-picture-id867342238?k=6&m=867342238&s=612x612&w=0&h=1b2vVw1KmEP688WD80dk_tskzdlCyNFklC6AA9iL1nE=",
      description:
        "Town on the Alsace Wine Route with a medieval quarter & colorful homes along Little Venice's canals.",
    },
    {
      name: "Verdon Gorge",
      image:
        "https://media.gettyimages.com/photos/breathtaking-view-on-the-top-of-gorge-du-verdon-france-picture-id1026790786?k=6&m=1026790786&s=612x612&w=0&h=06Ry2l5ZaSwgF3Y9DfACQeveu2nS1LNPoELm0IWCY84=",
      description:
        "French canyon on the Verdon River, with trails & vertical cliffs, plus nearby Musée de la Faïence.",
    },
    {
      name: "Burgundy",
      image:
        "https://media.gettyimages.com/photos/burgundy-region-picture-id155097104?k=6&m=155097104&s=612x612&w=0&h=ycls7sREkglzNtjD4R93npEvpgIeDqS1Q-RidnkYfxA=",
      description:
        "Central French region known for the city of Dijon, plus wines, canals, châteaux & medieval towns.",
    },
  ],
  Italy: [
    {
      name: "Rome",
      image:
        "https://media.gettyimages.com/photos/sunrise-at-colosseum-rome-italy-picture-id683962492?k=6&m=683962492&s=612x612&w=0&h=3cSag3-_irk8yuSYfzvbm6FAkSplaXwsxMTYPgvion0=",
      description:
        "Italy's capital, home to the Vatican as well as world-class art & ancient ruins like the Colosseum.",
    },
    {
      name: "Venice",
      image:
        "https://media.gettyimages.com/photos/view-of-venices-grand-canal-picture-id911570904?k=6&m=911570904&s=612x612&w=0&h=p1exGmYgCecb-RPnd92kuCQTbz-i6Gn77g16aJSjNyQ=",
      description:
        "Italian island city known for canals lined with Gothic palaces, Piazza San Marco square & Carnival.",
    },
    {
      name: "Pisa",
      image:
        "https://media.gettyimages.com/photos/italy-tuscany-leaning-tower-of-pisa-cathedral-santa-maria-assunta-picture-id200403174-001?k=6&m=200403174-001&s=612x612&w=0&h=OiGltq5XlMeYU9fc2DnqBIfcvnSNOTjqVAlDQ6X_sIU=",
      description:
        "Tuscan university town known for the Leaning Tower of Pisa, plus a notable cathedral & baptistry.",
    },
    {
      name: "Milan",
      image:
        "https://media.gettyimages.com/photos/milan-skyline-with-church-cupolas-italy-picture-id905863228?k=6&m=905863228&s=612x612&w=0&h=VcmZP3EvE7OYcTLx1Yq9Fx0TUrVjnN__kHJRKfmjKf4=",
      description:
        "Northern Italian city known for haute couture, its Gothic Duomo & da Vinci’s “The Last Supper.”",
    },
    {
      name: "Capri",
      image:
        "https://media.gettyimages.com/photos/capri-island-italy-picture-id812176778?k=6&m=812176778&s=612x612&w=0&h=AHy6ZYm2F4G8sZTlTHC_F-nbNIJJMUcm5FCyUqwAjZc=",
      description:
        "Stylish Italian island in the Bay of Naples known for the Blue Grotto & high-end hotels & boutiques.",
    },
  ],
  Spain: [
    {
      name: "Barcelona",
      image:
        "https://media.gettyimages.com/photos/sagrada-familia-barcelona-spain-picture-id1060311174?k=6&m=1060311174&s=612x612&w=0&h=30I0Y5jqCIoSw0H6saMdSq6krJ-A3GkywV7pGe_aTP8=",
      description:
        "Catalan capital known for Gaudí’s whimsical architecture, the Gothic Quarter & tapas bars.",
    },
    {
      name: "Madrid",
      image:
        "https://media.gettyimages.com/photos/madrid-skyline-gran-va-at-dusk-picture-id657153546?k=6&m=657153546&s=612x612&w=0&h=7tfm6dxUNxv-SiP-IdRuGZ8f47c-pADRpHhCHrJ62ig=",
      description:
        "Spain's capital, home to the Royal Palace & major art museums like the Prado & Reina Sofía.",
    },
    {
      name: "Seville",
      image:
        "https://media.gettyimages.com/photos/sunset-panorama-alczar-de-toledo-toledo-spain-picture-id923908366?k=6&m=923908366&s=612x612&w=0&h=4qGSiGvwHsGL9zSj5hpfd8s9XuysDqzDWmP3QfHJGbM=",
      description:
        "Spanish city of flamenco, with a Gothic cathedral, medieval Jewish quarter & the Alcázar castle.",
    },
    {
      name: "Balearic Islands",
      image:
        "https://media.gettyimages.com/photos/es-castells-town-in-menorca-picture-id638126446?k=6&m=638126446&s=612x612&w=0&h=T30B5fS6hv1cim2ieXN7NTeW96FpEjY-1SjVe8wro5A=",
      description:
        "Spanish island group with the beach resort islands of Mallorca, Menorca, Ibiza & Formentera.",
    },
    {
      name: "Santa Cruz de Tenerife",
      image:
        "https://media.gettyimages.com/photos/view-of-a-beautiful-beach-in-canary-island-las-teresitastenerifespain-picture-id1139691123?k=6&m=1139691123&s=612x612&w=0&h=AmMOi0ZP956ANOVBP3NI6arOWS7-8R3sckGvci-mEXU=",
      description:
        "City in Spain’s Canary Islands with Conception Church, Palacio de Carta & Tenerife Auditorium.",
    },
  ],
  Germany: [
    {
      name: "Berlin",
      image:
        "https://media.gettyimages.com/photos/berlin-tv-tower-at-sunset-picture-id611238370?k=6&m=611238370&s=612x612&w=0&h=EZ6L3QbTQ6Ep6etvj1IR4tPwL-yty8b3xVAjz0yXr6U=",
      description:
        "Germany's capital, with the Reichstag, Brandenburg Gate, the Holocaust memorial & Berlin Wall.",
    },
    {
      name: "Munich",
      image:
        "https://media.gettyimages.com/photos/aerial-view-of-marienplatz-munchen-picture-id1144867198?k=6&m=1144867198&s=612x612&w=0&h=aEXmJEetsvBH6YLVstumW4bYTf34Okar--897HdpyMU=",
      description:
        "Bavarian capital known for Oktoberfest, the Hofbräuhaus beer hall & the Residenz palace & museum.",
    },
    {
      name: "Frankfurt",
      image:
        "https://media.gettyimages.com/photos/skyline-of-downtown-frankfurt-am-main-germany-picture-id1147822631?k=6&m=1147822631&s=612x612&w=0&h=lzExmP3jU1VIbvJ2TZWy-Q922mYbnn-V0iAq71ufYiA=",
      description:
        "German riverside city with European Central Bank, plus Goethe House, Städel & other notable museums.",
    },
    {
      name: "Black Forest",
      image:
        "https://media.gettyimages.com/photos/view-over-old-town-and-neckar-river-in-tbingen-picture-id972587750?k=6&m=972587750&s=612x612&w=0&h=2NIj54bmkTQDDADIE-FwKFpKxWZCsFMJ3NTd48Do9cs=",
      description:
        "German forest area known for cuckoo clocks, skiing, scenic drives & Baden-Baden's thermal spas.",
    },
    {
      name: "Saxon Switzerland National Park",
      image:
        "https://media.gettyimages.com/photos/saxon-switzerland-elbe-mountains-sunrise-picture-id1140076834?k=6&m=1140076834&s=612x612&w=0&h=VtKyPGPSo1TyGdFDkVfwcrsmcFdndV4HklfoEgMkdJQ=",
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
