import React from "react";
import "../styles/Utils.css";
import "../styles/Profileinfo.css";
import Race from "../data/Race.json";
import Tribe from "../data/Tribe.json";
import GuardianDeity from "../data/GuardianDeity.json";
import Town from "../data/Town.json";
import GCRankMod from "../data/GCRankMod.json";
import Loader from "./Loader";
import Error from "./Error";

export default function Profileinfo({ data, loading, error }) {
  const profileinfo = {
    Name: data?.Character?.Name,
    Race: Race?.Results?.filter(
      (Race) => Race?.ID === data?.Character?.Race
    ).map((Race) => <p key={Race?.Name}>{Race?.Name}</p>),
    Clan: Tribe?.Results?.filter(
      (Tribe) => Tribe?.ID === data?.Character?.Tribe
    ).map((Tribe) => <p key={Tribe?.Name}>{Tribe?.Name}</p>),
    Gender: data?.Character?.Gender === 2 ? <p>{"♀"}</p> : <p>{"♂"}</p>,
    Nameday: <p>{data?.Character.Nameday}</p>,
    GuardianDeity: GuardianDeity?.Results?.filter(
      (GuardianDeity) => GuardianDeity?.ID === data?.Character?.GuardianDeity
    ).map((GuardianDeity) => (
      <p key={GuardianDeity?.Name}>{GuardianDeity?.Name}</p>
    )),
    Town: Town?.Results?.filter(
      (Town) => Town?.ID === data?.Character?.Town
    ).map((Town) => <p key={Town?.Name}>{Town?.Name}</p>),
    GrandCompany:
      data?.Character?.GrandCompany?.NameID === 1 ? (
        <p>Maelstrom</p>
      ) : data?.Character?.GrandCompany?.NameID === 2 ? (
        <p>Order of the Twin Adder</p>
      ) : (
        <p>Immortal Flames</p>
      ),
    GCRankMod: GCRankMod?.Results?.filter(
      (GCRankMod) => GCRankMod?.ID === data?.Character?.GrandCompany?.RankID
    ).map((GCRankMod) => {
      return data?.Character?.GrandCompany?.NameID === 1 ? (
        <p key={GCRankMod?.Storm}>{GCRankMod?.Storm}</p>
      ) : data?.Character?.GrandCompany?.NameID === 2 ? (
        <p key={GCRankMod?.Serpent}>{GCRankMod?.Serpent}</p>
      ) : (
        <p key={GCRankMod?.Flame}>{GCRankMod?.Flame}</p>
      );
    }),
    FreeCompanyName: (
      <a
        href={`https://eu.finalfantasyxiv.com/lodestone/freecompany/${data?.Character.FreeCompanyId}/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {data?.Character.FreeCompanyName}
      </a>
    ),
  };

  return (
    <section className="profileinfo">
      <h2 className="sr-only">Profile Info: {profileinfo?.Name}</h2>
      <article>
        <h3>Race / Clan / Gender</h3>
        <div className="race-clan-gender">
          {loading ? <Loader /> : error ? <Error /> : profileinfo?.Race}
          <span>&#47;</span>
          {loading ? <Loader /> : error ? <Error /> : profileinfo?.Clan}
          <span>&#47;</span>
          {loading ? <Loader /> : error ? <Error /> : profileinfo?.Gender}
        </div>
      </article>
      <div className="nameday-guardian">
        <article>
          <h3>Nameday</h3>
          {loading ? (
            <Loader height={"1.5rem"} />
          ) : error ? (
            <Error height={"1.5rem"} />
          ) : (
            profileinfo?.Nameday
          )}
        </article>
        <article>
          <h3>Guardian</h3>
          {loading ? (
            <Loader height={"1.5rem"} />
          ) : error ? (
            <Error height={"1.5rem"} />
          ) : (
            profileinfo?.GuardianDeity
          )}
        </article>
      </div>
      <article>
        <h3>City-state</h3>
        {loading ? (
          <Loader height={"1.5rem"} />
        ) : error ? (
          <Error height={"1.5rem"} />
        ) : (
          profileinfo?.Town
        )}
      </article>
      <article>
        <h3>Grand Company</h3>
        <div className="grand-company">
          {loading ? (
            <Loader height={"1.5rem"} />
          ) : error ? (
            <Error height={"1.5rem"} />
          ) : (
            profileinfo?.GrandCompany
          )}
          <span>&#47;</span>
          {loading ? (
            <Loader height={"1.5rem"} />
          ) : error ? (
            <Error height={"1.5rem"} />
          ) : (
            profileinfo?.GCRankMod
          )}
        </div>
      </article>
      <article>
        <h3>Free Company</h3>
        {loading ? (
          <Loader height={"1.5rem"} />
        ) : error ? (
          <Error height={"1.5rem"} />
        ) : (
          profileinfo?.FreeCompanyName
        )}
      </article>
    </section>
  );
}
