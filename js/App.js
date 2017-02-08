import React, { Component } from 'react';
// импортируем функцию для загрузки
import load from './utils/load';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';
import Searchbar from './components/SearchBar';
import Toolbar from './components/Toolbar';

export default class App extends Component {
  constructor(props) {
    super(props);
    // Устанавливаем состояние
    this.state = {
      data: null,
      active: 0,
      term: ''
    };
    // Сразу загружаем данные
    this.loadData();
  }

  loadData() {
    load(this.props.data).then(users => {
      this.initialData = JSON.parse(users);
      this.setState({
        data: this.initialData
      });
    });
  }

  updateData(config) {
    this.setState(config);
  }

  render() {
    return (
      <div className="app container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <Searchbar
              term={this.state.term}
              data={this.initialData}
              update={this.updateData.bind(this)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <Toolbar initialData={this.initialData} data={this.state.data} update={this.updateData.bind(this)} />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4 col-md-3 col-lg-3">
            <ActiveUser data={this.state.data} active={this.state.active} />
          </div>
          <div className="col-sm-8 col-md-9 col-lg-9">
            <UserList data={this.state.data} update={this.updateData.bind(this)} />
          </div>
        </div>
      </div>
    )
  }
}
