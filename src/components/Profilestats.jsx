import React from "react";
import "../styles/Utils.css";
import "../styles/Profilestats.css";
import Loader from "./Loader";
import Error from "./Error";

export default function Profilestats({ data, loading, error }) {
  const stats = {
    Name: data?.Character.Name,
    Strength: <p>{data?.Character?.GearSet?.Attributes?.["1"]}</p>,
    Dexterity: <p>{data?.Character?.GearSet?.Attributes?.["2"]}</p>,
    Vitality: <p>{data?.Character?.GearSet?.Attributes?.["3"]}</p>,
    Intelligence: <p>{data?.Character?.GearSet?.Attributes?.["4"]}</p>,
    Mind: <p>{data?.Character?.GearSet?.Attributes?.["5"]}</p>,
    CriticalHitRate: <p>{data?.Character?.GearSet?.Attributes?.["27"]}</p>,
    Determination: <p>{data?.Character?.GearSet?.Attributes?.["44"]}</p>,
    DirectHitRate: <p>{data?.Character?.GearSet?.Attributes?.["22"]}</p>,
    Defense: <p>{data?.Character?.GearSet?.Attributes?.["21"]}</p>,
    MagicalDefense: <p>{data?.Character?.GearSet?.Attributes?.["24"]}</p>,
    AttackPower: <p>{data?.Character?.GearSet?.Attributes?.["20"]}</p>,
    AttackSpeed: <p>{data?.Character?.GearSet?.Attributes?.["45"]}</p>,
    AttackMagicPotency: <p>{data?.Character?.GearSet?.Attributes?.["33"]}</p>,
    HealingMagicPotency: <p>{data?.Character?.GearSet?.Attributes?.["34"]}</p>,
    SpellSpeed: <p>{data?.Character?.GearSet?.Attributes?.["46"]}</p>,
    Tenacity: <p>{data?.Character?.GearSet?.Attributes?.["19"]}</p>,
    Piety: <p>{data?.Character?.GearSet?.Attributes?.["6"]}</p>,
  };
  return (
    <section className="profilestats-wrapper">
      <div className="profilestats">
        <h2 className="sr-only">Profile Stats: {stats?.Name}</h2>
        <article>
          <h3>Attributes</h3>
          <div>
            <p>Strength</p>
            {loading ? (
              <Loader width={"5rem"} />
            ) : error ? (
              <Error width={"5rem"} />
            ) : (
              stats?.Strength
            )}
          </div>
          <div>
            <p>Dexterity</p>
            {loading ? (
              <Loader width={"5rem"} />
            ) : error ? (
              <Error width={"5rem"} />
            ) : (
              stats?.Dexterity
            )}
          </div>
          <div>
            <p>Vitality</p>
            {loading ? (
              <Loader width={"5rem"} />
            ) : error ? (
              <Error width={"5rem"} />
            ) : (
              stats?.Vitality
            )}
          </div>
          <div>
            <p>Intelligence</p>
            {loading ? (
              <Loader width={"5rem"} />
            ) : error ? (
              <Error width={"5rem"} />
            ) : (
              stats?.Intelligence
            )}
          </div>
          <div>
            <p>Mind</p>
            {loading ? (
              <Loader width={"5rem"} />
            ) : error ? (
              <Error width={"5rem"} />
            ) : (
              stats?.Mind
            )}
          </div>
        </article>
        <article>
          <h3>Offensive Properties</h3>
          <div>
            <p>Critical Hit Rate</p>
            {loading ? (
              <Loader width={"5rem"} />
            ) : error ? (
              <Error width={"5rem"} />
            ) : (
              stats?.CriticalHitRate
            )}
          </div>
          <div>
            <p>Determination</p>
            {loading ? (
              <Loader width={"5rem"} />
            ) : error ? (
              <Error width={"5rem"} />
            ) : (
              stats?.Determination
            )}
          </div>
          <div>
            <p>Direct Hit Rate</p>
            {loading ? (
              <Loader width={"5rem"} />
            ) : error ? (
              <Error width={"5rem"} />
            ) : (
              stats?.DirectHitRate
            )}
          </div>
        </article>
        <article>
          <h3>Defensive Properties</h3>
          <div>
            <p>Defense</p>
            {loading ? (
              <Loader width={"5rem"} />
            ) : error ? (
              <Error width={"5rem"} />
            ) : (
              stats?.Defense
            )}
          </div>
          <div>
            <p>Magical Defense</p>
            {loading ? (
              <Loader width={"5rem"} />
            ) : error ? (
              <Error width={"5rem"} />
            ) : (
              stats?.MagicalDefense
            )}
          </div>
        </article>
        <article>
          <h3>Physical Properties</h3>
          <div>
            <p>Attack Power</p>
            {loading ? (
              <Loader width={"5rem"} />
            ) : error ? (
              <Error width={"5rem"} />
            ) : (
              stats?.AttackPower
            )}
          </div>
          <div>
            <p>Skill Speed</p>
            {loading ? (
              <Loader width={"5rem"} />
            ) : error ? (
              <Error width={"5rem"} />
            ) : (
              stats?.AttackSpeed
            )}
          </div>
        </article>
        <article>
          <h3>Mental Properties</h3>
          <div>
            <p>Attack Magic Potency</p>
            {loading ? (
              <Loader width={"5rem"} />
            ) : error ? (
              <Error width={"5rem"} />
            ) : (
              stats?.AttackMagicPotency
            )}
          </div>
          <div>
            <p>Healing Magic Potency</p>
            {loading ? (
              <Loader width={"5rem"} />
            ) : error ? (
              <Error width={"5rem"} />
            ) : (
              stats?.HealingMagicPotency
            )}
          </div>
          <div>
            <p>Spell Speed</p>
            {loading ? (
              <Loader width={"5rem"} />
            ) : error ? (
              <Error width={"5rem"} />
            ) : (
              stats?.SpellSpeed
            )}
          </div>
        </article>
        <article>
          <h3>Role</h3>
          <div>
            <p>Tenacity</p>
            {loading ? (
              <Loader width={"5rem"} />
            ) : error ? (
              <Error width={"5rem"} />
            ) : (
              stats?.Tenacity
            )}
          </div>
          <div>
            <p>Piety</p>
            {loading ? (
              <Loader width={"5rem"} />
            ) : error ? (
              <Error width={"5rem"} />
            ) : (
              stats?.Piety
            )}
          </div>
        </article>
      </div>
    </section>
  );
}
