import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SWG = () => {
  const [ing, setIng] = useState({
    herboq: 0,
    herbpe: 0,
    petrooq: 0,
    petrope: 0,
    ironoq: 0,
    oatsoq: 0,
    oatspe: 0,
    fiberoq: 0,
    wheatoq: 0,
    wheatpe: 0,
    gasoq: 0,
    gasdr: 0,
    avianoq: 0,
    avianpe: 0,
    aviandr: 0,
  });

  const [comp, setComp] = useState({
    acrdm: 0,
    asds: 0,
    abec: 0,
  });

  const [buff, setBuff] = useState({
    epp: 0,
    epd: 0,
  });

  const [manComp, setManComp] = useState({
    acrdm: 10,
    asds: 10,
    abec: 5,
  });

  const [manBuff, setManBuff] = useState({
    epp: 0,
    epd: 0,
  });

  const MAX_VALUES = {
    herboq: 1000,
    herbpe: 700,
    petrooq: 1000,
    petrope: 1000,
    ironoq: 1000,
    oatsoq: 1000,
    oatspe: 1000,
    fiberoq: 1000,
    wheatoq: 1000,
    wheatpe: 700,
    gasoq: 1000,
    gasdr: 1000,
    avianoq: 1000,
    avianpe: 1000,
    aviandr: 1000,
    acrdm: 71.75,
    asds: 75.00,
    abec: 27.27,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const maxValue = MAX_VALUES[name];
    setIng((prevState) => ({
      ...prevState,
      [name]: value > maxValue ? maxValue : value < 0 ? 0 : value,
    }));
  };

  const handleManChange = (e) => {
    const { name, value } = e.target;
    const maxValue = MAX_VALUES[name];
    setManComp((prevState) => ({
      ...prevState,
      [name]: value > maxValue ? maxValue : value < 0 ? 0 : value,
    }));
  };

  useEffect(() => {
    const acrdm =
      10 +
      ((((parseInt(ing.herboq) + parseInt(ing.petrooq)) / 2) * 2) / 3000 +
        (((parseInt(ing.herbpe) + parseInt(ing.petrope)) / 2) * 1) / 3000) *
        65;
    const asds =
      10 +
      ((((parseInt(ing.oatsoq) + parseInt(ing.oatspe)) / 2) * 2) / 3000 +
        (parseInt(ing.ironoq) * 1) / 3000) *
        65;
    const abec =
      (((parseInt(ing.fiberoq) + parseInt(ing.wheatoq)) / 2000) * 0.66 +
        (parseInt(ing.wheatpe) / 1000) * 0.33) *
        25 +
      5;

    setComp(() => ({
      acrdm,
      asds,
      abec,
    }));
  }, [ing]);

  useEffect(() => {
    const epp =
      ((parseInt(ing.avianoq) + parseInt(ing.avianpe) + parseInt(ing.gasoq)) /
        3) *
        0.76 +
      40 +
      parseInt(comp.acrdm) +
      parseInt(comp.asds) +
      parseInt(comp.abec);
    const epd =
      ((0.5 * parseInt(ing.avianoq) +
        0.5 * parseInt(ing.aviandr) +
        0.5 * parseInt(ing.gasoq) +
        0.5 * parseInt(ing.gasdr)) /
        20) *
        130 +
      1200;

    setBuff(() => ({
      epp,
      epd,
    }));
  }, [comp]);

  useEffect(() => {
    const epp =
      ((parseInt(ing.avianoq) + parseInt(ing.avianpe) + parseInt(ing.gasoq)) /
        3) *
        0.76 +
      40 +
      parseInt(manComp.acrdm) +
      parseInt(manComp.asds) +
      parseInt(manComp.abec);
    const epd =
      ((0.5 * parseInt(ing.avianoq) +
        0.5 * parseInt(ing.aviandr) +
        0.5 * parseInt(ing.gasoq) +
        0.5 * parseInt(ing.gasdr)) /
        20) *
        130 +
      1200;

    setManBuff(() => ({
      epp,
      epd,
    }));
  }, [ing, manComp]);

  const [combatLevels, setCombatLevels] = useState(0);
  const [petCL, setPetCL] = useState(0);

  return (
    <Container>
      <div>
        <h2>Doctor Buff Calculator</h2>

        <h3>Herbivore Meat</h3>
        <label>
          OQ
          <input
            type="number"
            name="herboq"
            value={ing.herboq}
            onChange={handleChange}
            min={0}
            max={1000}
          />
        </label>
        <label>
          PE
          <input
            type="number"
            name="herbpe"
            value={ing.herbpe}
            onChange={handleChange}
            min={0}
            max={700}
          />
        </label>
        <h3>Class 4 Liquid Petro Fuel</h3>
        <label>
          OQ
          <input
            type="number"
            name="petrooq"
            value={ing.petrooq}
            onChange={handleChange}
            min={0}
            max={1000}
          />
        </label>
        <label>
          PE
          <input
            type="number"
            name="petrope"
            value={ing.petrope}
            onChange={handleChange}
            min={0}
            max={1000}
          />
        </label>
        <h3>Dolovite Iron</h3>
        <label>
          OQ
          <input
            type="number"
            name="ironoq"
            value={ing.ironoq}
            onChange={handleChange}
            min={0}
            max={1000}
          />
        </label>
        <h3>Domesticated Oats</h3>
        <label>
          OQ
          <input
            type="number"
            name="oatsoq"
            value={ing.oatsoq}
            onChange={handleChange}
            min={0}
            max={1000}
          />
        </label>
        <label>
          PE
          <input
            type="number"
            name="oatspe"
            value={ing.oatspe}
            onChange={handleChange}
            min={0}
            max={1000}
          />
        </label>
        <h3>Tatooinian Fiberplast</h3>
        <label>
          OQ
          <input
            type="number"
            name="fiberoq"
            value={ing.fiberoq}
            onChange={handleChange}
            min={0}
            max={1000}
          />
        </label>
        <h3>Lokian Wild Wheat</h3>
        <label>
          OQ
          <input
            type="number"
            name="wheatoq"
            value={ing.wheatoq}
            onChange={handleChange}
            min={0}
            max={1000}
          />
        </label>
        <label>
          PE
          <input
            type="number"
            name="wheatpe"
            value={ing.wheatpe}
            onChange={handleChange}
            min={0}
            max={700}
          />
        </label>
        <h3>Reactive Gas</h3>
        <label>
          OQ
          <input
            type="number"
            name="gasoq"
            value={ing.gasoq}
            onChange={handleChange}
            min={0}
            max={1000}
          />
        </label>
        <label>
          DR
          <input
            type="number"
            name="gasdr"
            value={ing.gasdr}
            onChange={handleChange}
            min={0}
            max={1000}
          />
        </label>
        <h3>Avian Meat</h3>
        <label>
          OQ
          <input
            type="number"
            name="avianoq"
            value={ing.avianoq}
            onChange={handleChange}
            min={0}
            max={1000}
          />
        </label>
        <label>
          PE
          <input
            type="number"
            name="avianpe"
            value={ing.avianpe}
            onChange={handleChange}
            min={0}
            max={1000}
          />
        </label>
        <label>
          DR
          <input
            type="number"
            name="aviandr"
            value={ing.aviandr}
            onChange={handleChange}
            min={0}
            max={1000}
          />
        </label>

        <br />
        <br />
        <h3>
          Advanced Chemical Release Duration Mechanism: {comp.acrdm.toFixed(2)}
        </h3>
        <h3>Advanced Solid Delivery Shell: {comp.asds.toFixed(2)}</h3>
        <h3>Advanced Biological Effect Controller: {comp.abec.toFixed(2)}</h3>
        <h3>
          Enhancement Pack (Power): {buff.epp.toFixed(0)} (buffs{" "}
          {(((110 * (100 + 100 + 23 + 25)) / 100 / 100) * buff.epp).toFixed(0)})
        </h3>
        <h3>
          Enhancement Pack (Duration): {(buff.epd / 60 / 60).toFixed(2)} hrs
        </h3>
        <br />
        <h3>Manual Components</h3>
        <h3>
          Advanced Chemical Release Duration Mechanism:
          <input
            type="number"
            name="acrdm"
            value={manComp.acrdm}
            onChange={handleManChange}
            min={10}
          />
        </h3>
        <h3>Advanced Solid Delivery Shell: 
        <input
            type="number"
            name="asds"
            value={manComp.asds}
            onChange={handleManChange}
            min={10}
          />
          </h3>
        <h3>Advanced Biological Effect Controller: 
        <input
            type="number"
            name="abec"
            value={manComp.abec}
            onChange={handleManChange}
            min={5}
          />
          </h3>
        <h3>
          Enhancement Pack (Power): {manBuff.epp.toFixed(0)} (buffs{" "}
          {(((110 * (100 + 100 + 23 + 25)) / 100 / 100) * manBuff.epp).toFixed(0)})
        </h3>
        <h3>
          Enhancement Pack (Duration): {(manBuff.epd / 60 / 60).toFixed(2)} hrs
        </h3>
      </div>
      <br/>
      <hr/>
      <br/>
      <div>
        <h2>Group Combat Level Calculator</h2>
        <h3>Number of Master Combat Professions (inc you): 
        <input 
        type="number"
        value={combatLevels}
        onChange={(e)=>{
          setCombatLevels(e.target.value)
        }}
        min={1}
        />
        </h3>
        <h3>Total CL of pets: 
        <input 
        type="number"
        value={petCL}
        onChange={(e)=>setPetCL(e.target.value)}
        min={1}
        max={combatLevels * 70}
        />
        </h3>
        <br/>
        <h3>Your Group CL Range is: {(25+((combatLevels-1)*5))+(Math.floor(petCL/5))}*<p>*Note that pet impact is calculated by individual pet CL divided 5 rounded down so this calculator gives an approx group CL</p></h3>
      </div>
    </Container>
  );
};

export default SWG;

const Container = styled.section`
  color: #ffffff;

  h3 {
    margin: 5px 0;
  }

  input {
    margin: 0 10px;
    width: 75px;
  }

  p {
    font-weight: 100;
    font-size: 0.75em;
  }
`;
