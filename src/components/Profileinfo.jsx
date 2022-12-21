import React from "react";
import "../styles/Utils.css";
import "../styles/Profileinfo.css";
import Race from "../data/Race.json";
import Tribe from "../data/Tribe.json";
import GuardianDeity from "../data/GuardianDeity.json";
import GCRankMod from "../data/GCRankMod.json";

export default function Profileinfo({ data }) {
  return (
    <section className="profileinfo">
      <h2 className="sr-only">Profile Info: {data?.Character?.Name}</h2>
      <article>
        <h3>Race / Clan / Gender</h3>
        <p>
          {Race?.Results?.filter(
            (Race) => Race?.ID === data?.Character?.Race
          ).map((Race) => Race?.Name)}{" "}
          /{" "}
          {Tribe?.Results?.filter(
            (Tribe) => Tribe?.ID === data?.Character?.Tribe
          ).map((Tribe) => Tribe?.Name)}{" "}
          / {data?.Character?.Gender === 2 ? "♀" : "♂"}
        </p>
      </article>
      <div className="nameday-guardian">
        <article>
          <h3>Nameday</h3>
          <p>{data?.Character.Nameday}</p>
        </article>
        <article>
          <h3>Guardian</h3>
          <p>
            {GuardianDeity?.Results?.filter(
              (GuardianDeity) =>
                GuardianDeity?.ID === data?.Character?.GuardianDeity
            ).map((GuardianDeity) => GuardianDeity?.Name)}
          </p>
        </article>
      </div>
      <article>
        <h3>City-state</h3>
        <p>Gridania</p>
      </article>
      <article>
        <h3>Grand Company</h3>
        <p>
          {data?.Character?.GrandCompany?.NameID === 1
            ? "Maelstrom"
            : data?.Character?.GrandCompany?.NameID === 2
            ? "Order of the Twin Adder"
            : "Immortal Flames"}{" "}
          /{" "}
          {GCRankMod?.Results?.filter(
            (GCRankMod) =>
              GCRankMod?.ID === data?.Character?.GrandCompany?.RankID
          ).map((GCRankMod) => {
            return data?.Character?.GrandCompany?.NameID === 1
              ? GCRankMod?.Storm
              : data?.Character?.GrandCompany?.NameID === 2
              ? GCRankMod?.Serpent
              : GCRankMod?.Flame;
          })}
        </p>
      </article>
      <article>
        <h3>Free Company</h3>
        <a
          href={`https://eu.finalfantasyxiv.com/lodestone/freecompany/${data?.Character.FreeCompanyId}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data?.Character.FreeCompanyName}
        </a>
      </article>
    </section>
  );
}
