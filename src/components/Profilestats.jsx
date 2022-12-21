import React from "react";
import "../styles/Utils.css";
import "../styles/Profilestats.css";

export default function Profilestats({ data }) {
  return (
    <section className="profilestats-wrapper">
      <div className="profilestats">
        <h2 className="sr-only">Profile Stats: {data?.Character.Name}</h2>
        <article>
          <h3>Attributes</h3>
          <div>
            <p>Strength</p>
            <p>{data?.Character?.GearSet?.Attributes?.["1"]}</p>
          </div>
          <div>
            <p>Dexterity</p>
            <p>{data?.Character?.GearSet?.Attributes?.["2"]}</p>
          </div>
          <div>
            <p>Vitality</p>
            <p>{data?.Character?.GearSet?.Attributes?.["3"]}</p>
          </div>
          <div>
            <p>Intelligence</p>
            <p>{data?.Character?.GearSet?.Attributes?.["4"]}</p>
          </div>
          <div>
            <p>Mind</p>
            <p>{data?.Character?.GearSet?.Attributes?.["5"]}</p>
          </div>
        </article>
        <article>
          <h3>Offensive Properties</h3>
          <div>
            <p>Critical Hit Rate</p>
            <p>{data?.Character?.GearSet?.Attributes?.["27"]}</p>
          </div>
          <div>
            <p>Determination</p>
            <p>{data?.Character?.GearSet?.Attributes?.["44"]}</p>
          </div>
          <div>
            <p>Direct Hit Rate</p>
            <p>{data?.Character?.GearSet?.Attributes?.["22"]}</p>
          </div>
        </article>
        <article>
          <h3>Defensive Properties</h3>
          <div>
            <p>Defense</p>
            <p>{data?.Character?.GearSet?.Attributes?.["21"]}</p>
          </div>
          <div>
            <p>Magical Defense</p>
            <p>{data?.Character?.GearSet?.Attributes?.["24"]}</p>
          </div>
        </article>
        <article>
          <h3>Physical Properties</h3>
          <div>
            <p>Attack Power</p>
            <p>{data?.Character?.GearSet?.Attributes?.["20"]}</p>
          </div>
          <div>
            <p>Skill Speed</p>
            <p>{data?.Character?.GearSet?.Attributes?.["45"]}</p>
          </div>
        </article>
        <article>
          <h3>Mental Properties</h3>
          <div>
            <p>Attack Magic Potency</p>
            <p>{data?.Character?.GearSet?.Attributes?.["33"]}</p>
          </div>
          <div>
            <p>Healing Magic Potency</p>
            <p>{data?.Character?.GearSet?.Attributes?.["34"]}</p>
          </div>
          <div>
            <p>Spell Speed</p>
            <p>{data?.Character?.GearSet?.Attributes?.["19"]}</p>
          </div>
        </article>
        <article>
          <h3>Role</h3>
          <div>
            <p>Tenacity</p>
            <p>{data?.Character?.GearSet?.Attributes?.["46"]}</p>
          </div>
          <div>
            <p>Piety</p>
            <p>{data?.Character?.GearSet?.Attributes?.["6"]}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
