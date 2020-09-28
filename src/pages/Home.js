import React, { Component } from 'react';
import ListView from '../components/ListView';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { getUsers } from '../services/HttpServices';
import Loader from '../components/Loader';

class Home extends Component { 

    constructor(props) {
        super(props);
    
        this.state = {
            users: null,
            dataList: [],
            qtd: 20,
            selectedOption: '',
            inputValue: '',
            loading: false,
        };
    }


    componentDidMount() {
        this.getData();
    }


    onValueChange = (event) => {
        this.setState({
            selectedOption: event.target.value,
        })

        console.log(this.state.selectedOption);
    };


    inputChange = (event) => {
        this.setState({
            inputValue: event.target.value,
        })
    };


    getData = async () => {

        this.setState({
            filterError: false,
            loading: true,
        });

        await getUsers().then((resp) => {

            this.setState({
                dataList: resp.data.data,
                users: true,
                selectedOption: '',
                inputValue: '',
                loading: false,
            });
            
        })
        .catch((erro) => {
            console.log(erro)
        })
    };

    filterAply = async () => {

        this.setState({
            filterError: false,
            loading: true,
        });

        let type = this.state.selectedOption;
        let value = this.state.inputValue;
        let users = [];

        console.log(type , value)

        if (type === "age" && value) {
            let age = parseInt(value);
            users = this.state.dataList.filter((user) => {
                return user.age === age
            });
        } else if (type === "name" && value) {
            users = this.state.dataList.filter((user) => {
                return user.name === value
            });
        } else {
            this.setState({
                filterError: true,
                loading: false,
            });

            return;
        }

        this.setState({
            dataList: users,
            loading: false,
        });
    };

    filterClean = () => {
        this.getData();
    };

    loadMore = () => {
        let more = this.state.qtd + 20;
        this.setState({
            qtd: more,
        })
    };


    render() {

        if ( this.state.loading )  {
            return (
                <Grid className="app-container loading">
                    <div className="loader-container">
                        <Loader loading={true} className="loader" />
                    </div>
                </Grid>
            );
        }

        return (
            <>
                <div className="home">
                    <Grid fluid>
                        <div className="filters">
                            <Grid fluid>
                                <Row>
                                    <Col xs={12}>
                                        <h2>Users Filter</h2>
                                    </Col>
                                </Row>
                                <Row className="radios">
                                    <Col xs={6} md={6}>
                                        <label>
                                            <input
                                                type="radio"
                                                value="age"
                                                name="filter"
                                                checked={this.state.selectedOption === "age"}
                                                onChange={(e) => {this.onValueChange(e)}}
                                            />
                                            By Age
                                        </label>
                                    </Col>
                                    <Col xs={6} md={6}>
                                        <label>
                                            <input
                                                type="radio"
                                                value="name"
                                                name="filter"
                                                checked={this.state.selectedOption === "name"}
                                                onChange={(e) => {this.onValueChange(e)}}
                                            />
                                            By Name
                                        </label>
                                    </Col>
                                </Row>
                                <Row className="inputs">
                                    <Col xs={12} md={12}>
                                        <input className="input-cs" type="text" value={this.state.inputValue} onChange={(e) => {this.inputChange(e)}} />
                                        {this.state.filterError && (<p>Filter invalid!</p>)}
                                    </Col>
                                </Row>
                                <Row className="btns">
                                    <Col xs={6} md={6}>
                                        <button className="btn-cs" onClick={e => {this.filterAply()}}>Filter</button>
                                    </Col>
                                    <Col xs={6} md={6}>
                                        <button className="btn-cs" onClick={e => {this.filterClean()}}>Clean</button>
                                    </Col>
                                </Row>
                            </Grid>
                        </div>

                    {this.state.users && (
                        <div className="lista-users">
                            <h2>Users List</h2>
                            <div>
                                <ListView data={this.state.dataList} more={this.state.qtd} />
                            </div>
                            <button className="btn-cs" onClick={e => {this.loadMore()}}>Load +</button>
                        </div>
                    )}
                    </Grid>
                </div>
            </>

        );
    }

}
export default Home

/*
<div style={{overflow: 'auto'}}>
    <ReactList
        itemRenderer={this.renderItem()}
        length={this.state.dataList.data.length}
        type='uniform'
    />
</div>


<StableList
    data={this.state.dataList}
    dataKey={Math.random()}
    component={this.renderItem()}
    maxItems={20}
    threshold={this.state.qtd}
    itemCount={this.state.dataList.length}
    propProvider={this.propProvider()}
/>
*/