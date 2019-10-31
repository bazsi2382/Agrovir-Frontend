import React, { Component } from 'react';
import Table from './components/Table/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';


class App extends Component {

  state = {
    currentpartner: {},
    partners: [],
    telepulesek: [],
    cegformak: [],
    AddModalShow: false,
    UpdateModalShow: false,
    addTelepulesModalShow: false,
    addCegformaModalShow: false
  }


  componentDidMount() {
    Axios.get('http://localhost:8080/partners').then(res => this.setState({ partners: res.data }));
    Axios.get('http://localhost:8080/telepulesek').then(res => this.setState({ telepulesek: res.data }))
    Axios.get('http://localhost:8080/cegformak').then(res => this.setState({ cegformak: res.data }))
  }

  //Delete partner
  delPartner = (id) => {
    Axios.delete(`http://localhost:8080/partners/${id}`)
    this.setState({ partners: [...this.state.partners.filter(partner => partner.ID !== id)] })
  }

  //Add new partner
  AddNewPartner = (Név, Adószám, Cégforma, Cégjegyzékszám, Település, Cím, Telefonszám, Bankszámlaszám, Megjegyzés) => {
    Axios.post('http://localhost:8080/partners', {
      Név, Adószám, Cégforma, Cégjegyzékszám, Település, Cím, Telefonszám, Bankszámlaszám, Megjegyzés
    })
      .then(res => this.setState({ partners: [...this.state.partners, res.data] }))
    this.setAddModalShow();

  }

  //Add new település
  AddNewTelepules = (telepules) => {
    Axios.post('http://localhost:8080/telepulesek', {
      telepules
    })
      .then(res => this.setState({ telepulesek: [...this.state.telepulesek, res.data] }))
    this.setaddtelepulesmodalshow()
  }

  //Add new cégforma
  AddNewCegforma = (cegforma) => {
    Axios.post('http://localhost:8080/cegforma', {
      cegforma
    })
      .then(res => this.setState({ cegformak: [...this.state.cegformak, res.data] }))
    this.setaddcegformamodalshow()
  }

  //Update partner
  UpdatePartner = (id, nev, adoszam,cegforma, cegjegyzekszam,telepules, cim, telefonszam, bankszamlaszam, megjegyzes) => {
    Axios.put(`http://localhost:8080/partner/${id}`, {
      nev, adoszam,cegforma, cegjegyzekszam,telepules, cim, telefonszam, bankszamlaszam, megjegyzes
    });
    this.setUpdateModalShow();
  }

  setCurrentPartner = (id) => {
    const cp = this.state.partners.filter(partner => partner.ID === id)[0];
    this.setState({ currentpartner: cp });
    this.setUpdateModalShow();
  }

  setAddModalShow = () => {
    this.setState({ AddModalShow: !this.state.AddModalShow })
  }

  setUpdateModalShow = (e) => {
    this.setState({ UpdateModalShow: !this.state.UpdateModalShow })
  }

  setaddtelepulesmodalshow = (e) => {
    this.setState({ addTelepulesModalShow: !this.state.addTelepulesModalShow })
  }

  setaddcegformamodalshow = (e) => {
    this.setState({ addCegformaModalShow: !this.state.addCegformaModalShow })
  }


  render() {
    return (
      <div>
        <Table
          handleSetValues={this.handleSetValues}
          addNewPartner={this.AddNewPartner}
          AddNewTelepules={this.AddNewTelepules}
          AddNewCegforma={this.AddNewCegforma}
          partners={this.state.partners}
          telepulesek={this.state.telepulesek}
          cegformak={this.state.cegformak}
          UpdatePartner={this.UpdatePartner}
          currentpartner={this.state.currentpartner}
          addTelepulesModalShow={this.state.addTelepulesModalShow}
          addCegformaModalShow={this.state.addCegformaModalShow}
          setaddcegformamodalshow={this.setaddcegformamodalshow}
          setaddtelepulesmodalshow={this.setaddtelepulesmodalshow}
          setCurrentPartner={this.setCurrentPartner}
          AddModalShow={this.state.AddModalShow}
          setAddModalShow={this.setAddModalShow}
          UpdateModalShow={this.state.UpdateModalShow}
          setUpdateModalShow={(e) => this.setUpdateModalShow(e)}
          delPartner={this.delPartner}
        />
      </div>
    )
  }
}

export default App;
