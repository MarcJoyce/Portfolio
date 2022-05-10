import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

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
  })

  const [comp, setComp] = useState({
    acrdm: 0,
    asds: 0,
    abec: 0,
  })

  const [buff, setBuff] = useState({
    epp: 0,
    epd: 0
  })

  const handleChange = e => {
    const { name, value } = e.target;
    setIng(prevState => ({
        ...prevState,
        [name]: value
    }));
  };

  useEffect(() => {
    const acrdm = 10+((((parseInt(ing.herboq)+parseInt(ing.petrooq))/2*2/3000)+((parseInt(ing.herbpe)+parseInt(ing.petrope))/2*1/3000))*65);
    const asds = 10+((((parseInt(ing.oatsoq)+parseInt(ing.oatspe))/2*2/3000)+(parseInt(ing.ironoq)*1/3000))*65)
    const abec = (((((parseInt(ing.fiberoq)+parseInt(ing.wheatoq))/2000)*0.66+((parseInt(ing.wheatpe))/1000)*0.33))*25+5)
  
    setComp(() => ({
      acrdm,
      asds,
      abec
    }))

  }, [ing])

  useEffect(() => {
    const epp = (((parseInt(ing.avianoq)+parseInt(ing.avianpe)+parseInt(ing.gasoq))/3)*0.76)+40+comp.acrdm+comp.asds+comp.abec
    const epd = (((0.5*parseInt(ing.avianoq)+(0.5*parseInt(ing.aviandr))+(0.5*parseInt(ing.gasoq))+(0.5*parseInt(ing.gasdr)))/20)*130+1200)

    setBuff(() => ({
      epp,
      epd
    }))
  }, [comp])

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
          <input type="number" 
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
          <input type="number" 
            name="petrooq"
            value={ing.petrooq}
            onChange={handleChange}
              min={0}
              max={1000}
            />
        </label>
        <label>
          PE
          <input type="number" 
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
          <input type="number" 
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
          <input type="number" 
            name="oatsoq"
            value={ing.oatsoq}
            onChange={handleChange}
            min={0}
              max={1000}
            />
        </label>
        <label>
          PE
          <input type="number" 
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
          <input type="number" 
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
          <input type="number" 
            name="wheatoq"
            value={ing.wheatoq}
            onChange={handleChange}
            min={0}
              max={1000}
            />
        </label>
        <label>
          PE
          <input type="number" 
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
          <input type="number" 
            name="gasoq"
            value={ing.gasoq}
            onChange={handleChange}
            min={0}
              max={1000}
            />
        </label>
        <label>
          DR
          <input type="number" 
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
          <input type="number" 
            name="avianoq"
            value={ing.avianoq}
            onChange={handleChange}
            min={0}
              max={1000}
            />
        </label>
        <label>
          PE
          <input type="number" 
            name="avianpe"
            value={ing.avianpe}
            onChange={handleChange}
            min={0}
              max={1000}
            />
          </label>
        <label>
          DR
          <input type="number" 
            name="aviandr"
            value={ing.aviandr}
            onChange={handleChange}
            min={0}
              max={1000}
            />
          </label>

        <br />
        <br />
        <h3>Advanced Chemical Release Duration Mechanism: {comp.acrdm.toFixed(2)}</h3>
        <h3>Advanced Solid Delivery Shell: {comp.asds.toFixed(2)}</h3>
        <h3>Advanced Biological Effect Controller: {comp.abec.toFixed(2)}</h3>
        <h3>Enhancement Pack (Power): {buff.epp.toFixed(0)} (buffs {((110*(100+100+23+25)/100)/100*buff.epp).toFixed(0)})</h3>
        <h3>Enhancement Pack (Duration): {(buff.epd / 60 / 60).toFixed(2)} hrs</h3>
      </div>
    </Container>
  )
}

export default SWG

const Container = styled.section`
color: #FFFFFF;

h3 {
  margin: 5px 0;
}

input {
  margin: 0 10px;
  width: 50px;
}
`;